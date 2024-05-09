'use client'
import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiLock } from 'react-icons/bi'
import 'react-phone-input-2/lib/style.css'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [form] = Form.useForm()
  const [phone, setPhone] = useState('')
  const router = useRouter()
  const signInWithGoogle = () => {
    return {}
  }

  const handleSubmit = async (values: any) => {
    // e.preventDefault();
    try {
      const { email, password } = values
      if (!password || !email) {
        return
      }
      // const res = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password
      //   })
      // })

      const response = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      toast.success('Login Successfully!')
      if (!response?.error) {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.error('Api Error:', error)
      toast.error('Something went wrong please try again!')
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
            <span className="text-lg font-semibold">Login</span>
          </div>
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
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
          <button
            className="google-button gap-2 flex text-center justify-center items-center bg-white  text-black py-1 w-full border-2 text-sm  border-gray-300 rounded mt-5"
            // type="submit"
            onClick={() => {
              return
              // signInWithGoogle()
            }}
          >
            {' '}
            <Image
              alt="Google Logo"
              src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png "
              width={15}
              height={15}
            />{' '}
            Sign in with Google{'  '}
          </button>{' '}
          <hr />
          <span className="login text-black flex items-start gap-2 w-full mt-5 ">
            Don&lsquo;t have an account?
            <Link href="/signup" className="text-rose-500">
              Creat Account
            </Link>
          </span>
        </Form>
      </div>
    </div>
  )
}

{
  /* <div>
          <label htmlFor="email" ></label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          
        </div> 


        <button
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>*/
}
