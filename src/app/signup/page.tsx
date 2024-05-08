'use client'

import { Button, Form, Input } from 'antd'
// signup page
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiLock } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'

export default function SignupPage() {
  const [form] = Form.useForm()
  const [phone, setPhone] = useState('')
  const router = useRouter()
  const signInWithGoogle = () => {
    return {}
  }

  const handleSubmit = async (values: any) => {
    // e.preventDefault();
    console.log({ values })
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    if (res.ok) {
      router.push('/login')
    }
  }

  return (
    <div className=" flex items-center justify-center w-full py-20 text-center bg-[url('/Images/homeBG5.jpg')] bg-center bg-cover ">
      <div className=" bg-slate-100 items-center justify-center rounded-2xl shodow-2xl flex flex-col p-10 text-black">
        <Form
          form={form}
          className="w-80"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          // onSubmitCapture={handleSubmit}
          // autoComplete="off"
        >
          <div className="flex justify-between items-center">
            <Image
              className="rounded-full"
              src="/Images/eshop.jpg"
              width={50}
              height={50}
              alt="eShop Logo"
            />
            <span className="text-lg font-semibold">Sign Up</span>
          </div>
          {/* <label htmlFor="Name"></label> */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600 mt-5"
              id="Name"
              value="name"
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Item>
          {/* <label htmlFor="email"></label> */}
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              prefix={<MailOutlined />}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600"
              id="email"
              value="email"
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          {/* <label htmlFor="phone"></label> */}
          <Form.Item
            name="phone"
            // rules={[{ required: true, message: "Please input your Phone!" }]}
          >
            <Input
              prefix={<PiPhone />}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600"
              id="phone"
              type="tel"
              // value="phone"
              placeholder="Phone"
            />
          </Form.Item>
          {/* <label htmlFor="password"></label> */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<BiLock />}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600"
              id="password"
              type="password"
              value="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <label htmlFor="confirmPassword"></label> */}
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<BiLock />}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full">
              Create Account
            </Button>
          </Form.Item>
          {/* <button
          className="google-button gap-2 flex text-center justify-center items-center bg-white  text-black py-1 w-full border-2 text-sm  border-gray-300 rounded mt-5"
          type="submit"
          onClick={() => signInWithGoogle()}
        >
          {' '}
          <Image
            alt="Google Logo"
            src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png "
            width={15}
            height={15}
          />{' '}
          Sign in with Google{'  '}
        </button>{' '} */}
          <hr />
          <span className="signup text-black flex items-start gap-2 w-full mt-5 ">
            Already have an account?
            <Link href="/login" className="text-rose-500">
              Login
            </Link>
          </span>
        </Form>
      </div>
    </div>
  )
}
