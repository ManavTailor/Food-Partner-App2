"use client";
import { Button, Card } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiArrowFromTop } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiEBike2Line } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { TbNotes } from "react-icons/tb";

export default function Home() {
  const [faqs, setFaqs] = useState(false);
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
      <div className="flex justify-center items-center h-72 bg-gray-100">
        <div className="w-[40%] h-64 bg-white rounded-lg">
          <div className="flex flex-col justify-center items-center p-2">
            <span className="text-black font-semibold text-2xl">
              Get Started with Online Ordering
            </span>
            <span className="text-gray-500 text-sm">
              Please keep the documents ready for a smooth signup
            </span>
          </div>
          <div className="space-y-5">
            <div className="ml-10 flex space-x-[13%]">
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                FSSAI License Copy{" "}
                <span className="text-blue-400 hover:underline">
                  ( apply now )
                </span>
              </span>
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                PAN Card Copy
              </span>
            </div>
            <div className="ml-10 flex space-x-[19%]">
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                Regular GSTIN{" "}
                <span className="text-blue-400 hover:underline">
                  ( apply now )
                </span>
              </span>
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                Bank Account Details
              </span>
            </div>
            <div className="ml-10 flex space-x-36">
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                Your Restaurant Menu
              </span>
              <span className="text-black  text-sm p-2 flex items-center ">
                <SiTicktick className="text-green-500 mr-1" />
                Dish Images for Top 5 Items
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-72 flex justify-center ">
        <div>
          <span className="text-black font-semibold text-2xl text-center flex justify-center mt-5">
            Why Should You Partner with Us?
          </span>
          <div>
            <span className="text-gray-600 text-sm">
              We enables you to get 60% more revenue, 10x new customers and
              boost your brand visibility by providing insights to improve your
              business.
            </span>
            <div className="flex gap-x-52 justify-center mt-20">
              <Card className="w-[20%] shadow-md ">
                <div className="flex items-center space-x-2">
                  <FaEarthAfrica className="text-lg text-blue-400 " />
                  <div>
                    <div className="text-lg text-blue-500">100+ cities</div>
                    <div className="text-sm">in India</div>
                  </div>
                </div>
              </Card>
              <Card className="w-[20%] shadow-md ">
                <div className="flex items-center space-x-2">
                  <CiShop className="text-lg text-blue-400" />
                  <div>
                    <div className="text-lg text-blue-500">3 Lakh+</div>
                    <div className="text-sm">restaruant listing</div>
                  </div>
                </div>
              </Card>
              <Card className="w-[20%] shadow-md ">
                <div className="flex items-center space-x-2">
                  <BsCalendarCheck className="text-lg text-blue-400 " />
                  <div>
                    <div className="text-lg text-blue-500">5.0 Crore+</div>
                    <div className="text-sm">monthly Orders</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-80 flex flex-col justify-center items-center">
        <div className="py-2">
          <span className="text-2xl text-black font-semibold">
            How it works ?
          </span>
        </div>
        <div className="flex gap-x-52 ">
          <div className="w-44 shadow-md bg-white rounded-lg p-2 ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <TbNotes
                size={50}
                className="flex p-2 h-16 w-16 bg-yellow-100 rounded-full  text-black "
              />
              <span className="text-black text-lg text-center">Step 1</span>
              <span className="text-gray-900 text-sm text-center">
                Create your page in our website
              </span>
              <span className="text-gray-600 text-xs text-center ">
                Help users discover your place by creating a listing on Zomato
              </span>
            </div>
          </div>

          <div className="w-44 shadow-md bg-white rounded-lg p-2 ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <RiEBike2Line
                size={50}
                className="flex p-2 h-16 w-16 bg-yellow-100 rounded-full  text-black "
              />
              <span className="text-black text-lg text-center">Step 2</span>
              <span className="text-gray-900 text-sm text-center">
                Register for online ordering
              </span>
              <span className="text-gray-600 text-xs text-center ">
                And deliver orders to millions of customers with ease
              </span>
            </div>
          </div>
          <div className="w-44 shadow-md bg-white rounded-lg p-2 ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <HiOutlineShoppingBag
                size={50}
                className="flex p-2 h-16 w-16 bg-yellow-100 rounded-full text-black"
              />
              <span className="text-black text-lg text-center">Step 3</span>
              <span className="text-gray-900 text-sm text-center">
                Start receiving orders online
              </span>
              <span className="text-gray-600 text-xs text-center ">
                Manage orders on our partner app, web dashboard or API partners
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-72 flex justify-center ">
        <div>
          <span className="text-black font-semibold text-2xl text-center flex justify-center mt-5">
            Already have your restaurant listed?
          </span>
          <div>
            <span className="text-gray-600 text-sm flex justify-center">
              Search here and claim the ownership of your restaurant
            </span>
          </div>
          <Search
            placeholder="Seach your restaurant here..."
            className="mt-20 w-[70vw] "
          />
        </div>
      </div>
      <div className="bg-gray-100 h-80 flex flex-col justify-center items-center">
        <div className="py-2">
          <span className="text-2xl text-black font-semibold">
            Our Products
          </span>
        </div>
        <div className="flex gap-x-52 ">
          <div className="w-44 shadow-md bg-white rounded-xl ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Image
                className="rounded-t-xl"
                src="/images/veggies.jpg"
                width={200}
                height={50}
                alt="vegg"
              />
              <span className="text-black text-lg text-center px-2">
                Listing
              </span>
              <span className="text-gray-700 text-sm text-center  px-2">
                A free app that allows you to manage your Zomato listing
                directly from your smartphone
              </span>
              <span className="text-blue-500 hover:underline text-xs text-center  p-2">
                Learn More
              </span>
            </div>
          </div>

          <div className="w-44 shadow-md bg-white rounded-lg ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Image
                className="rounded-t-xl"
                src="/images/veggies.jpg"
                width={200}
                height={50}
                alt="vegg"
              />
              <span className="text-black text-lg text-center px-2">
                Online Ordering
              </span>
              <span className="px-2 text-gray-700 text-sm text-center">
                Start taking orders online from millions of users near you and
                deliver with Zomato...
              </span>
              <span className="p-2 text-blue-500 hover:underline text-xs text-center ">
                Learn More
              </span>
            </div>
          </div>
          <div className="w-44 shadow-md bg-white rounded-lg ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Image
                className="rounded-t-xl"
                src="/images/veggies.jpg"
                width={200}
                height={50}
                alt="vegg"
              />
              <span className="text-black text-lg text-center px-2">
                Advertise
              </span>
              <span className="text-gray-700 text-sm text-center px-2">
                For every marketing dollar spent, Zomato returns over 8x the
                investment...{" "}
              </span>
              <span className="text-blue-500 hover:underline text-xs text-center p-2 ">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div>
          <span className="text-2xl text-black font-semibold text-center flex justify-center py-5">
            Frequently Asked Questions
          </span>
        </div>
        <div className="flex  flex-col justify-center items-center">
          <span className="text-black p-2 border-y-2 border-gray-100 flex items-center w-[50%] justify-between">
            <span>
              What will we charge me for creating a page on its platform?
            </span>
            <span onClick={() => setFaqs(true)}>
              <BiArrowFromTop />
            </span>
          </span>
          {faqs && (
            <span className="text-black text-sm p-2 w-1/2">
              this is an faq answer test bjwe wegjwegwe gjkewgnwegknewg wekn we
              wenwegbwewebg weg wejgbwegwejgwe gejg eg ejgew gejg egbewejgbwe
              answer test bjwe wegjwegwe gjkewgnwegknewg wekn we wenwegbwewebg
              weg wejgbwegwejgwe gejg eg ejgew gejg egbewejgbweanswer test bjwe
              wegjwegwe gjkewgnwegknewg wekn we wenwegbwewebg weg wejgbwegwejgwe
              gejg eg ejgew gejg egbewejgbwe
            </span>
          )}
          <span className="text-black p-2 border-y-2 border-gray-100 flex items-center w-[50%] justify-between">
            <span>
              What all documents are required for registering on online
              ordering?
            </span>
            <span onClick={() => setFaqs(true)}>
              <BiArrowFromTop />
            </span>
          </span>
          <span className="text-black p-2 border-y-2 border-gray-100 flex items-center w-[50%] justify-between">
            <span>
              I have a large fleet of delivery boys, why should I use Zomato’s
              delivery service?
            </span>
            <span onClick={() => setFaqs(true)}>
              <BiArrowFromTop />
            </span>
          </span>
        </div>
      </div>
    </main>
  );
}
