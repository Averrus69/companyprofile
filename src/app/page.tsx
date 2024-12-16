import React, { useState } from "react";

export default function Home() {
  return (
    <div className="   flex gap-4">
      <img
        src="https://www.total-erp.com/wp-content/uploads/2024/05/alat-berat-tambang.jpg.webp"
        alt="Heavy Equipment"
        className="items-center justify-center"
        width="400"
        height="300"
      />
      <div>
        <h1 className="font-bold text-[30px]">About Tracos</h1>
        <p className="text-justify">
          Tracos operates in the construction, mining, agriculture, and
          infrastructure industries. The company focuses on providing
          top-quality heavy machinery like excavators, bulldozers, cranes, and
          loaders, which are essential for large-scale construction and
          industrial projects. It could operate both in the local and
          international markets, depending on its scale.
        </p>
        <button className="border bg-yellow-500 border-black px-4 py-1 mt-4">
          LEARN MORE ABOUT TRACOS
        </button>
      </div>
    </div>
  );
}
