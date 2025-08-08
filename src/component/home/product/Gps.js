"use client";
import React, { useState } from "react";

const Gps = () => {
  const items = [
    {
      id: 1,
      title: " India track",
      catagory: "gps",
    },
    {
      id: 2,
      title: "vahan track",
      catagory: "gps",
    },
    {
      id: 3,
      title: "India track ",
      catagory: "  gps ",
    },
    {
      id: 4,
      title: "vahan track",
      catagory: " gps",
    },
    {
      id: 5,
      title: "India track",
      catagory: " gps ",
    },
    {
      id: 6,
      title: "vahan track",
      catagory: " gps ",
    },
  ];
  const [selectedcatagory, setselectedcatagories] = useState("All");

  const catagores = ["All", ...new Set(items.map((it) => it.catagory))];

  const filterdata=selectedcatagory==="All"?items:items.filter((it)=>it.catagory===selectedcatagory)

  return (
    <div>
      {catagores.map((cat) => (
        <button
          key={cat}
          onClick={()=>setselectedcatagories(cat)}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600 transition"
        >
          {cat}
        </button>
      ))}

      {filterdata.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
};

export default Gps;
