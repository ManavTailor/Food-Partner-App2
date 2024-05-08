'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const router = useRouter()
  const signInWithGoogle = () => {
    return {}
  }

  const Email = () => {
    return {}
  }

  return (
    <div className=" flex items-center justify-center w-full py-20 text-center bg-[url('/Images/homeBG5.jpg')] bg-center bg-cover ">
      <div className=" bg-slate-100 items-center justify-center rounded-2xl shodow-2xl flex flex-col p-10 text-black">
        <h1 className="login text-black text-xl flex items-start  w-full  font-semibold ">
          Login
        </h1>
        <Image
          className="rounded"
          src="/Images/eshop.jpg"
          width={50}
          height={50}
          alt="eShop Logo"
        />
        <hr />
        <div className="mt-2">
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={phone => setPhone('+' + phone)}
          />
        </div>
        <button className="bg-rose-500  text-white  hover:bg-rose-600 py-1 w-full  border rounded mt-5 ">
          Send One Time Password
        </button>
        <h1 className="text-center mt-2">Or</h1>
        <button
          className="Email gap-2 flex text-center justify-center items-center bg-white  text-black py-1 w-full border-2 text-sm  border-gray-300 rounded mt-2"
          type="submit"
          onClick={() => Email()}
        >
          {' '}
          <Image
            alt="Email Logo"
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            width={15}
            height={15}
          />{' '}
          Continue with Email{'  '}
        </button>{' '}
        <button
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
        </button>{' '}
        <hr />
        <span className="signup text-black flex items-start gap-2 w-full mt-5   ">
          New to foodies ?{' '}
          <Link href="/signup" className="text-rose-500">
            Create Account
          </Link>
        </span>
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
