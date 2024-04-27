import React from "react";
import { Card, Image } from "antd";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const page = () => {
  return (
    <div className="p-10">
      <Card className="cursor-pointer ">
        <div className="flex space-x-2">
          <MdOutlineProductionQuantityLimits size={30} />
          <div className="h-10  border-r-2 border-gray-300"></div>
          <div className="text-2xl font-semibold ">Product</div>
        </div>
      </Card>
      <div className="flex flex-wrap gap-14 justify-center">
        <Card className="cursor-pointer  mt-5 w-[20%] shadow-sm hover:shadow-gray-600">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
        <Card className="cursor-pointer  mt-5 w-[20%]">
          <div className="flex justify-center items-center">
            <Image
              src="/Images/eshop.jpg"
              width={200}
              height={200}
              alt="eShop Logo"
              preview={false}
              className="hover:scale-110"
            />
          </div>
          <div className="mt-2">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className="text-lg font-thin">$30</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
