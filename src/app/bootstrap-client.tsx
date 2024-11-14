'use client';

import dynamic from 'next/dynamic';

const BootstrapClient = dynamic(() => import('./bootstrap'), {
  ssr: false,
});

export default function BootstrapWrapper() {
  return <BootstrapClient />;
} 