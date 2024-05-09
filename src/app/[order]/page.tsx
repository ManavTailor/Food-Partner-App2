import React from "react";
import { Button, Card, Image, Table } from "antd";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RxCheckCircled, RxCrossCircled, RxPinRight } from "react-icons/rx";

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
    <div className="p-5 bg-gray-100">
      <Card className="cursor-pointer ">
        <div className="flex space-x-2 items-center">
          <MdOutlineProductionQuantityLimits size={24} />
          <div className="h-12  border-r-2 border-gray-300"></div>
          <div className="flex w-full justify-between items-center">
            <div className="text-lg font-semibold ">Order Number : #jfnwe</div>
            <div className="text-lg font-semibold flex flex-col">
              <span>Total Preparation Time : </span>
              <span className="text-base">Waiting Time : </span>
            </div>
          </div>
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
      <div className="flex space-x-5">
        <button
          type="button"
          className="flex items-center gap-1 text-sm bg-white text-black hover:bg-green-500 px-2 hover:text-white transition-all duration-300 ease-in-out py-1 rounded-md "
        >
          <RxCheckCircled />
          Accept
        </button>
        <button
          type="button"
          className="flex items-center gap-1 text-sm bg-white text-black hover:bg-red-600 px-2 hover:text-white transition-all duration-300 ease-in-out py-1 rounded-md "
        >
          <RxCrossCircled />
          Reject
        </button>
      </div>
    </div>
  );
};

export default page;
