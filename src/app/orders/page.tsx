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
      orderId: "ORD-001",
      orderBy: "John Doe",
      status: (
        <div className="flex items-center">
          <RxCheckCircled size={20} className="text-green-500" />
          <span className="text-green-500">Delivered</span>
        </div>
      ),
    },
    {
      key: "2",
      orderId: "ORD-002",
      orderBy: "Jane Doe",
      status: (
        <div className="flex items-center">
          <RxCrossCircled size={20} className="text-red-500" />
          <span className="text-red-500">Cancelled</span>
        </div>
      ),
    },
    {
      key: "3",
      orderId: "ORD-003",
      orderBy: "John Doe",
      status: (
        <div className="flex items-center">
          <RxPinRight size={20} className="text-yellow-500" />
          <span className="text-yellow-500">Pending</span>
        </div>
      ),
    },
    {
      key: "4",
      orderId: "ORD-004",
      orderBy: "Jane Doe",
      status: (
        <div className="flex items-center">
          <RxCheckCircled size={20} className="text-green-500" />
          <span className="text-green-500">Delivered</span>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5 bg-gray-100">
      <Card className="cursor-pointer ">
        <div className="flex space-x-2 items-center">
          <MdOutlineProductionQuantityLimits size={24} />
          <div className="h-6 border-r-2 border-gray-300"></div>
          <div className="flex w-full justify-between items-center">
            <div className="text-lg font-semibold ">Orders</div>
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
            title: "Order Id",
            dataIndex: "orderId",
            key: "orderId",
          },
          {
            title: "Order By",
            dataIndex: "orderBy",
            key: "orderBy",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
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
                  View
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
