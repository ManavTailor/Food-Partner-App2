"use client";
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

export default function AddOrder() {
  const [form] = Form.useForm();

  return (
    <div className="bg-gray-100 p-10">
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item label="Order By" name="orderBy">
          <Input placeholder="Enter Name" />
        </Form.Item>
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
      </Form>
    </div>
  );
}
