"use client";
import React, { useState } from "react";
import { Button, Form, Input, Radio, Select } from "antd";

export default function AddOrder() {
  const [form] = Form.useForm();

  return (
    <div className="bg-gray-100 p-10 flex flex-col justify-center items-center ">
      <Form className="w-1/2 "
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
      >
        <Form.Item label="Ingredient" name="ingredient">
          <Input placeholder="Ingredient Name" />
        </Form.Item>
        <Form.Item label="Used In">
          <Select mode='multiple' allowClear>
            <Select.Option value='a'>a</Select.Option>
            <Select.Option value='b'>b</Select.Option>
            <Select.Option value='c'>c</Select.Option>
          </Select>
        </Form.Item>
        <div className="flex justify-between items-center">
        <Form.Item label="Status" name="status">
          <Radio.Group>
            <Radio value="pending">Yes</Radio>
            <Radio value="completed">No</Radio>
            
          </Radio.Group>
        </Form.Item>
        
        <Form.Item >
          <Button className="text-white  bg-blue-500" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
        </div>
      
      </Form>
    </div>
  );
}
