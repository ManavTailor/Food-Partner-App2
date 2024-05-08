"use client";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

export default function AddOrder() {
  const [form] = Form.useForm();

  return (
    <div className="bg-gray-100 p-10 flex justify-center items-center flex-col ">
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        className="w-1/2 "
      >
        <Form.Item label="Order By" name="orderBy">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item label="Items" name="items">
          <Input placeholder="Enter Items" />
        </Form.Item>
        <Form.Item label="Quantity" name="quantity">
          <Input placeholder="Enter Quantity" />
        </Form.Item>
        <div className="flex justify-between items-center">
          <Form.Item label="Status" name="status">
            <Radio.Group>
              <Radio value="pending">Pending</Radio>
              <Radio value="completed">Completed</Radio>
              <Radio value="delivered">Delivered</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button className="text-white bg-blue-500" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
