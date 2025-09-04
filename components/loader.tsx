"use client";


export default function Loader({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="relative">
        {/* Base text */}
        <h1
          className="text-8xl font-extrabold text-gray-500 overflow-hidden font-brush"
        >
          LOADING
        </h1>

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }} // Mask rising
        >
          <h1
            className="text-8xl font-extrabold text-white font-brush"
          >
            LOADING
          </h1>
        </div>
      </div>

    
      <p className="mt-6 text-xl font-medium text-white font-geo">{progress}%</p>
    </div>
  );
}
