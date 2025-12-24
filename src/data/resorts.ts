export interface Resort {
  brand: 'Marriott' | 'Hyatt';
  name: string;
  address: string;
  lat: number;
  lng: number;
  region: string;
}

export const resorts: Resort[] = [
  // Marriott - Orlando Cluster
  { brand: "Marriott", name: "Marriott's Grande Vista", address: "5925 Avenida Vista, Orlando, FL 32821", lat: 28.4016, lng: -81.4612, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Cypress Harbour Villas", address: "11251 Harbour Villa Road, Orlando, FL 32821", lat: 28.4068, lng: -81.4765, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Harbour Lake", address: "7102 Grand Horizons Boulevard, Orlando, FL 32821", lat: 28.3973, lng: -81.4756, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Imperial Palms Villas", address: "8404 Vacation Way, Orlando, FL 32821", lat: 28.3585, lng: -81.5273, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Royal Palms", address: "8404 Vacation Way, Orlando, FL 32821", lat: 28.3590, lng: -81.5280, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Sabal Palms", address: "8805 World Center Drive, Orlando, FL 32821", lat: 28.3610, lng: -81.5290, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Lakeshore Reserve", address: "11248 Lakeshore Reserve Drive, Orlando, FL 32837", lat: 28.3930, lng: -81.4280, region: "USA - East" },
  { brand: "Marriott", name: "Sheraton Vistana Resort Villas", address: "8800 Vistana Centre Drive, Orlando, FL 32821", lat: 28.3685, lng: -81.5030, region: "USA - East" },
  { brand: "Marriott", name: "Sheraton Vistana Villages", address: "12401 International Drive, Orlando, FL 32821", lat: 28.3857, lng: -81.4722, region: "USA - East" },

  // Marriott - Florida Coastal & Miami
  { brand: "Marriott", name: "Marriott's Villas at Doral", address: "4101 NW 87th Avenue, Miami, FL 33178", lat: 25.8115, lng: -80.3395, region: "USA - East" },
  { brand: "Marriott", name: "Marriott Vacation Club, South Beach", address: "1410 Ocean Dr, Miami Beach, FL 33139", lat: 25.7870, lng: -80.1295, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's BeachPlace Towers", address: "21 South Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33316", lat: 26.1215, lng: -80.1035, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Crystal Shores", address: "600 S Collier Blvd, Marco Island, FL 34145", lat: 25.9180, lng: -81.7285, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Ocean Pointe", address: "71 South Ocean Avenue, Palm Beach Shores, FL 33404", lat: 26.7788, lng: -80.0336, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Oceana Palms", address: "3200 North Ocean Drive, Riviera Beach, FL 33404", lat: 26.7975, lng: -80.0390, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Legends Edge at Bay Point", address: "4000 Marriott Drive, Panama City Beach, FL 32408", lat: 30.1435, lng: -85.7320, region: "USA - East" },

  // Marriott - South Carolina
  { brand: "Marriott", name: "Marriott's Grande Ocean", address: "51 South Forest Beach Drive, Hilton Head Island, SC 29928", lat: 32.1445, lng: -80.7510, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Barony Beach Club", address: "5 Grasslawn Avenue, Hilton Head Island, SC 29928", lat: 32.2090, lng: -80.6935, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's SurfWatch", address: "10 SurfWatch Way, Hilton Head Island, SC 29928", lat: 32.2010, lng: -80.7020, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Heritage Club", address: "12 Lighthouse Lane, Hilton Head Island, SC 29928", lat: 32.1375, lng: -80.8120, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Harbour Club", address: "144 Lighthouse Road, Hilton Head Island, SC 29928", lat: 32.1380, lng: -80.8105, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Monarch at Sea Pines", address: "91 N. Sea Pines Drive, Hilton Head Island, SC 29928", lat: 32.1315, lng: -80.7935, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Harbour Point/Sunset Pointe", address: "4 Shelter Cove Lane, Hilton Head Island, SC 29928", lat: 32.1795, lng: -80.7280, region: "USA - East" },
  { brand: "Marriott", name: "Sheraton Broadway Resort Villas", address: "3301 Robert M Grissom Parkway, Myrtle Beach, SC 29577", lat: 33.7125, lng: -78.8950, region: "USA - East" },

  // Marriott - Northeast
  { brand: "Marriott", name: "Marriott Vacation Club, New York City", address: "33 West 37th Street, New York, NY 10018", lat: 40.7515, lng: -73.9855, region: "USA - East" },
  { brand: "Marriott", name: "Marriott Vacation Club, Boston", address: "3 McKinley Square, Boston, MA 02109", lat: 42.3590, lng: -71.0535, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Manor Club at Ford's Colony", address: "101 St. Andrews Drive, Williamsburg, VA 23188", lat: 37.3050, lng: -76.7720, region: "USA - East" },
  { brand: "Marriott", name: "Marriott's Fairway Villas", address: "500 East Fairway Lane, Galloway, NJ 08205", lat: 39.4675, lng: -74.4715, region: "USA - East" },

  // Marriott - West & Mountain
  { brand: "Marriott", name: "Marriott's Grand Chateau", address: "75 East Harmon Avenue, Las Vegas, NV 89109", lat: 36.1080, lng: -115.1705, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Canyon Villas", address: "5220 East Marriott Drive, Phoenix, AZ 85054", lat: 33.6820, lng: -111.9700, region: "USA - West" },
  { brand: "Marriott", name: "Sheraton Desert Oasis", address: "17700 North Hayden Road, Scottsdale, AZ 85255", lat: 33.6475, lng: -111.9250, region: "USA - West" },
  { brand: "Marriott", name: "The Westin Kierland Villas", address: "15620 North Clubgate Drive, Scottsdale, AZ 85254", lat: 33.6300, lng: -111.9330, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Desert Springs Villas I", address: "1091 Pinehurst Lane, Palm Desert, CA 92260", lat: 33.7485, lng: -116.3685, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Shadow Ridge I", address: "9003 Shadow Ridge Road, Palm Desert, CA 92211", lat: 33.7660, lng: -116.3765, region: "USA - West" },
  { brand: "Marriott", name: "The Westin Mission Hills Resort Villas", address: "71777 Dinah Shore Drive, Rancho Mirage, CA 92270", lat: 33.7975, lng: -116.4250, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Newport Coast Villas", address: "23000 Newport Coast Drive, Newport Coast, CA 92657", lat: 33.5932, lng: -117.8378, region: "USA - West" },
  { brand: "Marriott", name: "Marriott Vacation Club, San Diego", address: "701 A Street, San Diego, CA 92101", lat: 32.7190, lng: -117.1585, region: "USA - West" },
  { brand: "Marriott", name: "Marriott Vacation Club, San Francisco", address: "2620 Jones Street, San Francisco, CA 94133", lat: 37.8060, lng: -122.4170, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Timber Lodge", address: "4100 Lake Tahoe Boulevard, South Lake Tahoe, CA 96150", lat: 38.9560, lng: -119.9415, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's MountainSide", address: "1305 Lowell Avenue, Park City, UT 84060", lat: 40.6495, lng: -111.5065, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Summit Watch", address: "780 Main Street, Park City, UT 84060", lat: 40.6435, lng: -111.4960, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's StreamSide", address: "2284 South Frontage Road West, Vail, CO 81657", lat: 39.6410, lng: -106.3980, region: "USA - West" },
  { brand: "Marriott", name: "Sheraton Mountain Vista", address: "160 West Beaver Creek Boulevard, Avon, CO 81620", lat: 39.6335, lng: -106.5215, region: "USA - West" },
  { brand: "Marriott", name: "Westin Riverfront Mountain Villas", address: "218 Riverfront Lane, Avon, CO 81620", lat: 39.6315, lng: -106.5255, region: "USA - West" },
  { brand: "Marriott", name: "Ritz-Carlton Club, Aspen Highlands", address: "0075 Prospector Road, Aspen, CO 81611", lat: 39.1830, lng: -106.8530, region: "USA - West" },

  // Marriott - Hawaii
  { brand: "Marriott", name: "Marriott's Ko Olina Beach Club", address: "92-161 Waipahe Place, Kapolei (Oahu), HI 96707", lat: 21.3341, lng: -158.1214, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Maui Ocean Club", address: "100 Nohea Kai Drive, Lahaina (Maui), HI 96761", lat: 20.9165, lng: -156.6935, region: "USA - West" },
  { brand: "Marriott", name: "Westin Ka'anapali Ocean Resort Villas", address: "6 Kai Ala Drive, Lahaina (Maui), HI 96761", lat: 20.9405, lng: -156.6900, region: "USA - West" },
  { brand: "Marriott", name: "Westin Nanea Ocean Villas", address: "45 Kai Malina Parkway, Lahaina (Maui), HI 96761", lat: 20.9450, lng: -156.6890, region: "USA - West" },
  { brand: "Marriott", name: "Marriott's Waiohai Beach Club", address: "2249 Poipu Road, Koloa (Kauai), HI 96756", lat: 21.8740, lng: -159.4600, region: "USA - West" },
  { brand: "Marriott", name: "Westin Princeville Ocean Resort Villas", address: "3838 Wyllie Road, Princeville (Kauai), HI 96722", lat: 22.2265, lng: -159.4750, region: "USA - West" },

  // Hyatt Vacation Club
  { brand: "Hyatt", name: "HVC at Piñon Pointe", address: "1 North AZ-89A, Sedona, AZ 86336", lat: 34.8672, lng: -111.7632, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Highlands Inn", address: "120 Highlands Drive, Carmel, CA 93923", lat: 36.5020, lng: -121.9370, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Desert Oasis", address: "34567 Cathedral Canyon Drive, Cathedral City, CA 92234", lat: 33.7885, lng: -116.4635, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at The Welk", address: "8860 Lawrence Welk Drive, Escondido, CA 92026", lat: 33.2331, lng: -117.1432, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Northstar Lodge", address: "970 Northstar Drive, Truckee, CA 96161", lat: 39.2755, lng: -120.1215, region: "Hyatt VC" },
  { brand: "Hyatt", name: "One Village Place Residences", address: "9001 Northstar Drive, Truckee, CA 96161", lat: 39.2760, lng: -120.1210, region: "Hyatt VC" },
  { brand: "Hyatt", name: "Residences at Park Hyatt", address: "136 East Thomas Place, Beaver Creek, CO 81620", lat: 39.6050, lng: -106.5160, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at The Ranahan", address: "557 Stan Miller Drive, Breckenridge, CO 80424", lat: 39.5225, lng: -106.0520, region: "Hyatt VC" },
  { brand: "Hyatt", name: "Residences at Main Street Station", address: "505 South Main St., Breckenridge, CO 80424", lat: 39.4765, lng: -106.0460, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Beach House", address: "5051 Overseas Highway, Key West, FL 33040", lat: 24.5713, lng: -81.7506, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Windward Pointe", address: "3675 South Roosevelt Boulevard, Key West, FL 33040", lat: 24.5544, lng: -81.7516, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Sunset Harbor", address: "200 Sunset Lane, Key West, FL 33040", lat: 24.5560, lng: -81.8080, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Coconut Cove", address: "11800 Coconut Cove Drive, Bonita Springs, FL 34134", lat: 26.3930, lng: -81.8360, region: "Hyatt VC" },
  { brand: "Hyatt", name: "Residences on Siesta Key Beach", address: "915 Seaside Drive, Siesta Key, FL 34242", lat: 27.2475, lng: -82.5290, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Lodges at Timber Ridge", address: "147 Welk Resort Circle, Branson, MO 65616", lat: 36.6020, lng: -93.3075, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at High Sierra Lodge", address: "989 Incline Way, Incline Village, NV 89451", lat: 39.2415, lng: -119.9439, region: "Hyatt VC" },
  { brand: "Hyatt", name: "Residences at El Corazón de Santa Fe", address: "103 Catron Street, Santa Fe, NM 87501", lat: 35.6890, lng: -105.9410, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Wild Oak Ranch", address: "9700 West Military Drive, San Antonio, TX 78251", lat: 29.4755, lng: -98.6920, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Hacienda del Mar", address: "301 Highway 693, Dorado, PR 00646", lat: 18.4680, lng: -66.2890, region: "Hyatt VC" },
  { brand: "Hyatt", name: "HVC at Sirena del Mar", address: "Km 4.5 Corredor Turistico, Cabo San Lucas, MX 23410", lat: 22.9060, lng: -109.8550, region: "Hyatt VC" }
];
