import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';  // Adjust this path

const Overlay: React.FC = () => {
  const isVisible = useSelector((state: RootState) => state.overlay.isVisible);

  return (
    <div
      className={`fixed inset-0 z-99 bg-black transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    />
  );
};

export default Overlay;
