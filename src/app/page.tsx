"use client";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = fetch("/api/GET");
    console.log(data, "helllo");
  });
  return (
    <main>
      <div className="flex flex-col items-center justify-between relative ">
        <Image
          src="/Images/homeBG4.jpg"
          width={1600}
          height={20}
          alt="eShop Logo"
          className="h-[80vh] "
        />
      </div>
      <div className="flex flex-col absolute top-44 left-10">
        <span className="text-3xl font-semibold space-y-1">
          Partner with Us
        </span>
        <span className="text-3xl font-semibold">
          at 0% commission for the 1st month!
        </span>
        <span>
          And get ads worth INR1500. Valid for new restaruant partners in
          selected cities.
        </span>
      </div>
      <div className=" absolute top-[75%] left-[35%] space-x-5 flex ">
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            className=" bg-blue-500  font-serif hover:bg-blue-700 p-2 rounded-md "
          >
            Register your Restaurant
          </button>
          <span className="text-xs">Need help ? Contact : 9876543210</span>
        </div>
        <div>
          <button
            type="button"
            className="p-2 rounded-md  bg-white hover:bg-gray-100 text-black font-serif"
          >
            Verify your existing Restaurant
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-72 bg-gray-300">
        <div className="w-[40%] h-64 bg-white rounded-lg">
          <div className="flex flex-col justify-center items-center p-2">
            <span className="text-black font-semibold text-2xl">
              Get Started with Online Ordering
            </span>
            <span className="text-gray-500 text-sm">
              Please keep the documents ready for a smooth signup
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
