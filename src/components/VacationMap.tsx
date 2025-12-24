'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { resorts, Resort } from '@/data/resorts';

type BrandFilter = 'all' | 'Marriott' | 'Hyatt';

interface MarkerWithId extends L.Marker {
  resortId: number;
}

export default function VacationMap() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<MarkerWithId[]>([]);
  const [searchText, setSearchText] = useState('');
  const [brandFilter, setBrandFilter] = useState<BrandFilter>('all');
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [filteredResorts, setFilteredResorts] = useState<{ resort: Resort; index: number }[]>([]);

  // Create custom icons
  const createIcon = useCallback((color: string) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style='background-color:${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);'></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });
  }, []);

  const marriottIcon = createIcon('#dc2626');
  const hyattIcon = createIcon('#2563eb');

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([39.8283, -98.5795], 4);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers when filters change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      mapRef.current?.removeLayer(marker);
    });
    markersRef.current = [];

    const bounds = L.latLngBounds([]);
    const filtered: { resort: Resort; index: number }[] = [];

    resorts.forEach((resort, index) => {
      const matchesSearch =
        resort.name.toLowerCase().includes(searchText.toLowerCase()) ||
        resort.address.toLowerCase().includes(searchText.toLowerCase());
      const matchesBrand = brandFilter === 'all' || resort.brand === brandFilter;

      if (matchesSearch && matchesBrand) {
        filtered.push({ resort, index });

        const icon = resort.brand === 'Marriott' ? marriottIcon : hyattIcon;
        const marker = L.marker([resort.lat, resort.lng], { icon }) as MarkerWithId;

        marker.bindPopup(`
          <div style="font-family: system-ui, -apple-system, sans-serif;">
            <strong style="font-size: 14px; display: block; margin-bottom: 4px; color: #1e293b;">${resort.name}</strong>
            <span style="font-size: 12px; color: #64748b; display: block; margin-bottom: 8px;">${resort.address}</span>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resort.name + ' ' + resort.address)}"
               target="_blank"
               rel="noopener noreferrer"
               style="font-size: 12px; color: #2563eb; text-decoration: none;">Get Directions &rarr;</a>
          </div>
        `);

        marker.resortId = index;
        marker.addTo(mapRef.current!);
        markersRef.current.push(marker);
        bounds.extend([resort.lat, resort.lng]);
      }
    });

    setFilteredResorts(filtered);

    // Adjust map view if there are markers and search text is long enough
    if (markersRef.current.length > 0 && searchText.length > 2) {
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [searchText, brandFilter, marriottIcon, hyattIcon]);

  const focusResort = useCallback((index: number) => {
    const resort = resorts[index];
    const marker = markersRef.current.find((m) => m.resortId === index);

    setActiveMarkerId(index);

    if (mapRef.current) {
      mapRef.current.flyTo([resort.lat, resort.lng], 12);
    }

    if (marker) {
      marker.openPopup();
    }
  }, []);

  const handleFilterClick = (brand: BrandFilter) => {
    setBrandFilter(brand);

    // Re-center map on filter change
    setTimeout(() => {
      if (mapRef.current && markersRef.current.length > 0) {
        const group = L.featureGroup(markersRef.current);
        mapRef.current.fitBounds(group.getBounds(), { padding: [50, 50] });
      }
    }, 100);
  };

  const resetMap = () => {
    if (mapRef.current) {
      mapRef.current.setView([39.8283, -98.5795], 4);
    }
    setSearchText('');
    setBrandFilter('all');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm z-10 p-4 border-b border-gray-200 flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Vacation Ownership Portfolio</h1>
          <p className="text-sm text-gray-500">Marriott & Hyatt Vacation Clubs - USA & International</p>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">
            <span className="w-2 h-2 rounded-full bg-red-600"></span> Marriott
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span> Hyatt
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Sidebar List */}
        <div className="w-full md:w-96 bg-white border-r border-gray-200 flex flex-col z-10 h-1/3 md:h-full shrink-0 order-2 md:order-1 shadow-lg md:shadow-none">
          {/* Filters */}
          <div className="p-3 border-b border-gray-100 bg-gray-50">
            <input
              type="text"
              placeholder="Search resorts, cities..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleFilterClick('all')}
                className={`flex-1 py-1 text-xs font-medium border rounded hover:bg-gray-50 ${
                  brandFilter === 'all' ? 'bg-gray-100 border-gray-400' : 'bg-white border-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleFilterClick('Marriott')}
                className={`flex-1 py-1 text-xs font-medium border rounded hover:bg-gray-50 text-red-600 ${
                  brandFilter === 'Marriott' ? 'bg-red-50 border-red-400' : 'bg-white border-gray-300'
                }`}
              >
                Marriott
              </button>
              <button
                onClick={() => handleFilterClick('Hyatt')}
                className={`flex-1 py-1 text-xs font-medium border rounded hover:bg-gray-50 text-blue-600 ${
                  brandFilter === 'Hyatt' ? 'bg-blue-50 border-blue-400' : 'bg-white border-gray-300'
                }`}
              >
                Hyatt
              </button>
            </div>
          </div>

          {/* List Container */}
          <div className="flex-1 overflow-y-auto sidebar-scroll p-2 space-y-2">
            {filteredResorts.map(({ resort, index }) => (
              <div
                key={index}
                id={`resort-item-${index}`}
                onClick={() => focusResort(index)}
                className={`resort-card p-3 rounded-lg border border-gray-100 transition-colors ${
                  activeMarkerId === index ? 'active' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 leading-tight">{resort.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 truncate w-60">{resort.address}</p>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      resort.brand === 'Marriott' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {resort.brand.charAt(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative order-1 md:order-2 h-2/3 md:h-full">
          <div ref={mapContainerRef} className="h-full w-full"></div>

          {/* Floating Map Controls */}
          <div className="absolute top-4 right-4 z-[400] bg-white rounded-lg shadow-md p-2 flex flex-col gap-2">
            <button onClick={resetMap} className="p-2 hover:bg-gray-100 rounded-md" title="Reset View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
