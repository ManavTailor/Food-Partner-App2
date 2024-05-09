'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { CiUser } from 'react-icons/ci'
import LogoutPage from './logout'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex justify-between bg-white  items-center p-4 sticky top-0 z-10">
      <Link href="/">
        <Image
          src="/Images/eshop.jpg"
          width={50}
          height={50}
          alt="eShop Logo"
          className="rounded-full"
        />
      </Link>
      {/* <h1 className="text-2xl text-black font-bold">eShop</h1> */}

      <nav>
        <ul className="flex space-x-4 text-black md:ml-auto flex-wrap items-center">
          {/* <li className="hover:text-red-700 hover:text-xl transition-all duration-500 ease-in-out   "> */}
          <Link href="/">Home</Link>
          {/* </li> */}
          {/* <li className="hover:text-red-700 hover:text-xl"> */}
          <Link href="/menu">Menu</Link>
          {/* </li> */}
          {/* <li className="hover:text-red-700 hover:text-xl"> */}
          <Link href="/orders">Orders</Link>
          {/* </li> */}
          {/* <li className="hover:text-red-700 hover:text-xl"> */}
          <Link href="/inventory">Inventory</Link>
          {/* </li> */}

          {session ? (
            <LogoutPage />
          ) : (
            <Link
              className="flex justify-center items-center space-x-1"
              href="/login"
            >
              <CiUser className="font-bold" />
              LOGIN
            </Link>
          )}
        </ul>
      </nav>
    </header>
  )
}
