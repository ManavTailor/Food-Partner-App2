"use client";
import React from "react";
import { Button, Card, Image, Table } from "antd";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RxCheckCircled, RxCrossCircled, RxPinRight } from "react-icons/rx";
import { TiPlusOutline } from "react-icons/ti";
import { BiPlus } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import navigation from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const page = () => {
  const dataSource = [
    {
      key: "1",
      ingredients:
        "Pizza Sauce , Pizza Dow, Pizza Toppings, Cheese, Pizza Base",
      inStock: "Yes",
      usedIn: "Pizza Base , Pizza Toppings, Pizza Sauce",
    },
    {
      key: "2",
      ingredients: "Bread, Butter, Cheese, Veggies, Sauce",
      inStock: "No",
      usedIn: "Sandwich",
    },
    {
      key: "3",
      ingredients: "Sauce, Pasta, Veggies, Cheese",
      inStock: "Yes",
      usedIn: "Pasta",
    },
    {
      key: "4",
      ingredients: "Bread, Butter, Cheese, Veggies, Sauce",
      inStock: "Yes",
      usedIn: "Sandwich",
    },
  ];

  return (
    <div className="p-5 bg-gray-100">
      <Card className="cursor-pointer ">
        <div className="flex space-x-2 items-center">
          <MdOutlineProductionQuantityLimits size={24} />
          <div className="h-6 border-r-2 border-gray-300"></div>
          <div className="flex w-full justify-between items-center">
            <div className="text-lg font-semibold ">Inventory</div>
            <div className="text-lg font-semibold flex flex-col">
              <Link href="/addinventory">
                <Button
                  // type="text"
                  className="p-2 flex items-center text-white bg-blue-500"
                  icon={<BiPlus />}
                >
                  Add Inventory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      <Table
        dataSource={dataSource}
        pagination={false}
        columns={[
          {
            title: "Sr no",
            dataIndex: "key",
            key: "key",
            width: "10%",
          },
          {
            title: "Ingredients",
            dataIndex: "ingredients",
            key: "ingredients",
          },
          {
            title: "In Stock ",
            dataIndex: "inStock",
            key: "inStock",
          },
          {
            title: "Used In ",
            dataIndex: "usedIn",
            key: "usedIn",
            width: "20%",
          },
          {
            title: "Action",
            key: "action",
            width: "20%",
            render: (_, record) => (
              <Link href={`/order`}>
                <Button
                  type="text"
                  className="p-2 flex items-center text-blue-500"
                >
                  Update
                </Button>
              </Link>
            ),
          },
        ]}
        style={{
          scrollbarWidth: "none",
        }}
        className="max-h-[400px] overflow-y-scroll mt-5"
      />
    </div>
  );
};

export default page;
