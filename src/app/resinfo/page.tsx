import React from 'react';

const Resinfo: React.FC = () => {
    return (
        <div className="bg-gray-100 p-8">
            <h1 className="text-2xl font-bold text-black mb-6">Restaurant Information</h1>

            <div className="mb-4">
                <h2 className="text-lg font-semibold text-black mb-2">Restaurant details</h2>
                <div className="border p-4 rounded-lg bg-[#232F74]">
                    <div className="mb-4">
                        <label htmlFor="restaurantName" className="block text-sm font-medium  text-zinc-700 dark:text-zinc-300">Restaurant name</label>
                        <input type="text" id="restaurantName" className="mt-1 block w-full px-3 py-2 border text-black border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="restaurantAddress" className="block text-sm font-medium  text-zinc-700 dark:text-zinc-300">Restaurant complete address</label>
                        <input type="text" id="restaurantAddress" className="mt-1 block w-full px-3 py-2 border  text-black border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="restaurantLocality" className="block text-sm font-medium   text-zinc-700 dark:text-zinc-300">Enter your restaurant's locality</label>
                        <input type="text" id="restaurantLocality" placeholder="e.g. Sector 43, Gur..." className="mt-1 block w-full  text-black px-3 py-2 border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                        <button className="mt-2 px-4 py-2 bg-blue-500  text-white rounded-md">Detect</button>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-semibold text-black mb-2">Contact number at restaurant</h2>
                <div className="border p-4 rounded-lg bg-[#232F74]">
                    <div className="mb-4">
                        <label htmlFor="restaurantPhone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Mobile number at restaurant</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300  bg-zinc-50  text-blue-500 text-sm">+91</span>
                            <input type="text" id="restaurantPhone" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none  text-black rounded-r-md border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-500  text-white rounded-md">Verify</button>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-semibold  text-black mb-2">Restaurant owner details</h2>
                <div className="border p-4 rounded-lg bg-[#232F74]">
                    <div className="mb-4">
                        <label htmlFor="ownerPhone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Mobile number of owner</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300  bg-zinc-50  text-blue-500  text-sm">+91</span>
                            <input type="text" id="ownerPhone" className="flex-1 min-w-0 block  text-black w-full px-3 py-2 rounded-none rounded-r-md border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-500  text-white rounded-md">Verify</button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ownerName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Restaurant owner full name</label>
                        <input type="text" id="ownerName" className="mt-1 block w-full   text-black px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm" />
                        
                    </div>
                </div>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-500  text-white rounded-md justify-end flex items-end">Submit</button>
        </div>
    );
};

export default Resinfo;
