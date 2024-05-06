import React from "react";
import { Card, Image, Table } from "antd";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const page = () => {
  const dataSource = [
    {
      key: "1",
      item: "Pizza",
      ingridients: "Tomato, Onion, Cheese",
      qty: 3,
      time: "10 min",
    },
    {
      key: "2",
      item: "Burger",
      ingridients: "Bun , Cheese, Patty",
      qty: 32,
      time: "15 min",
    },
    {
      key: "3",
      item: "Jumbo Dabeli",
      ingridients: "Bread, Aloo Tikki , Cheese",
      qty: 23,
      time: "12 min",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <Card className="cursor-pointer ">
        <div className="flex space-x-2">
          <MdOutlineProductionQuantityLimits size={30} />
          <div className="h-10  border-r-2 border-gray-300"></div>
          <div className="text-2xl font-semibold ">Orders</div>
        </div>
      </Card>
      <Table
        dataSource={dataSource}
        columns={[
          {
            title: "Item",
            dataIndex: "item",
            key: "item",
            width: "30%",
          },
          {
            title: "Quantity",
            dataIndex: "qty",
            key: "qty",
          },
          {
            title: "Ingridients",
            dataIndex: "ingridients",
            key: "ingridients",
          },
          {
            title: "Time of preparation",
            dataIndex: "time",
            key: "time",
            width: "20%",
          },
        ]}
        className="mt-5"
      />

      {/* <div className="flex flex-wrap gap-14 justify-center">
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
      </div> */}
    </div>
  );
};

export default page;
