import next from "next";
import Image from "next/image";
import Search from "antd/es/input/Search";

export default function Header() {
  return (
    <header className="flex justify-between bg-white  items-center p-4 sticky top-0 z-10">
      <Image src="/Images/eshop.jpg" width={70} height={70} alt="eShop Logo" />
      {/* <h1 className="text-2xl text-black font-bold">eShop</h1> */}
      <div className="text-black">
        <Search
          type="text"
          placeholder="Search Product Here"
          className="w-[200%]"
        />
      </div>
      <nav>
        <ul className="flex space-x-4 text-black">
          <li className="hover:text-red-700 hover:text-xl transition-all duration-500 ease-in-out">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <a href="/products">Products</a>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="hover:text-red-700 hover:text-xl">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
