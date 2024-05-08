import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
          <li className="hover:text-red-700 hover:text-xl transition-all duration-500 ease-in-out   ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <Link href="/about">Menu</Link>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <Link href="/orders">Orders</Link>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <Link href="/inventory">Inventory</Link>
          </li>
          <li className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded shadow">
            <Link href="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
