'use client';

import dynamic from 'next/dynamic';

const VacationMap = dynamic(() => import('@/components/VacationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

export default function Home() {
  return <VacationMap />;
}
