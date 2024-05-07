'use client'

// signup page
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignupPage() {
  const [phone, setPhone] = useState('')
  const router = useRouter()
  const signInWithGoogle = () => {
    return {}
  }

  return (
    <div className=" flex items-center justify-center w-full py-20 text-center bg-[url('/Images/homeBG5.jpg')] bg-center bg-cover ">
      <div className=" bg-slate-100 items-center justify-center rounded-2xl shodow-2xl flex flex-col p-10 text-black">
        <h1 className="signup text-black text-xl flex items-start  w-full  font-semibold ">
          Sign Up
        </h1>
        <Image
          className="rounded"
          src="/Images/eshop.jpg"
          width={50}
          height={50}
          alt="eShop Logo"
        />
        <label htmlFor="Name"></label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600 mt-5"
          id="Name"
          type="text"
          placeholder="Enter Your Name"
        />
        <label htmlFor="email"></label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none w-full focus:border-gray-600"
          id="email"
          type="email"
          placeholder="Email"
        />
        <button className="p-2 border border-gray-300 rounded-lg mb-4 hover:bg-gray-500 focus:outline-none w-full focus:border-gray-600">
          Create Account
        </button>
        <button
          className="google-button gap-2 flex text-center justify-center items-center bg-white  text-black py-1 w-full border-2 text-sm  border-gray-300 rounded mt-5"
          type="submit"
          onClick={() => signInWithGoogle()}
        >
          {' '}
          <img
            src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png "
            width={15}
            height={15}
          />{' '}
          Sign in with Google{'  '}
        </button>{' '}
        <hr />
        <span className="signup text-black flex items-start gap-2 w-full mt-5 ">
          Already have an account?
          <Link href="/login" className="text-rose-500">
            Login
          </Link>
        </span>
      </div>
    </div>
  )
}
