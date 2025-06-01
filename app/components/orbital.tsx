'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from 'react';


type Props = {
  ChildComponent: React.ReactNode;
};

// export default function OrbitLinks({CustomComponent}) {
const OrbitLinks: React.FC<Props> = ({ ChildComponent }) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth * 0.6);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const orbitSize = size;
  const innerOrbitSize = orbitSize * 0.6;
// opacity-70 ---
  return (
    <div className="flex items-center  pb-8 justify-center min-h-screen opacity-90">
      <div
        className="relative"
        style={{ width: orbitSize, height: orbitSize }}
      >
        {/* Внешняя орбита */}
        <div
          className="absolute border border-gray-500 rounded-full shadow-xl"
          style={{ width: orbitSize, height: orbitSize }}
        >

          
        </div>
        {/* Внутренняя орбита */}

        <div
          className="absolute border border-gray-700 rounded-full shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: innerOrbitSize, height: innerOrbitSize }}
        >        
                  {/* # z param -z-20 */}
                    <div className='-z-20'>
                       {ChildComponent} 
                    </div>   
       
        </div>
        
      
        

        {/* Внешняя планета — Projects */}
        <div
          className="absolute top-1/2 left-1/2 animate-spin-slow"
          style={{
            width: orbitSize,
            height: orbitSize,
            marginLeft: -orbitSize / 2,
            marginTop: -orbitSize / 2,
          }}
        >
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <Link
              href="/projects"
              className="text-gray-400 px-3 py-1 rounded-full shadow hover:scale-110 transition-transform"
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Внутренняя планета — Contacts */}
        <div
          className="absolute top-1/2 left-1/2 animate-spin-md"
          style={{
            width: innerOrbitSize,
            height: innerOrbitSize,
            marginLeft: -innerOrbitSize / 2,
            marginTop: -innerOrbitSize / 2,
          }}
        >
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <Link
              href="/contacts"
              className=" text-gray-400 px-3 py-1 rounded-full shadow hover:scale-110 transition-transform"
            >
              Contact
            </Link>
          </div>



          
        </div>
      </div>

    </div>
  );
};

export default OrbitLinks;