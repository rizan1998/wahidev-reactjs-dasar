//rfce
import React from "react";

const makanans = [
  {
    nama: "soto",
    harga: 12000,
  },
  {
    nama: "bakso",
    harga: 10000,
  },
  {
    nama: "mie ayam",
    harga: 8000,
  },
  {
    nama: "seblak",
    harga: 5000,
  },
];

// Reduce
const totalBayar = makanans.reduce((totalHarga, makanan) => totalHarga + makanan.harga, 0);

function Map() {
  return (
    <div>
      {/* Map */}
      <h2>Map Sederhana</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>
      <hr></hr>

      {/* filter */}
      <h2>Map Filter Harga yang lebih dari 11.000</h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>Total Harga : {totalBayar}</h3>
    </div>
  );
}

export default Map;
