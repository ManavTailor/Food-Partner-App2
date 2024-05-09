import React from "react";
import { Carousel } from "antd";
// import "antd/dist/antd.css";
import Image from "next/image";
import burger from "../../../public/Images/burger.jpg";
import pizza from "../../../public/Images/pizza.jpg";

const menuItems = [
  {
    id: 1,
    name: "Burger",
    image: burger,
    price: "$10",
    description: "Delicious beef burger with lettuce, tomato, and cheese",
    ingredients: "Beef patty, lettuce, tomato, cheese, bun",
    preparationTime: "15 minutes",
    isVeg: false,
  },
  {
    id: 2,
    name: "Pizza",
    image: pizza,
    price: "$12",
    description: "Classic pizza with pepperoni, cheese, and tomato sauce",
    ingredients: "Dough, tomato sauce, mozzarella cheese, pepperoni",
    preparationTime: "20 minutes",
    isVeg: false,
  },
  {
    id: 3,
    name: "Veggie Burger",
    image: burger,
    price: "$8",
    description: "Vegetarian burger with lettuce, tomato, and cheese",
    ingredients: "Veggie patty, lettuce, tomato, cheese, bun",
    preparationTime: "15 minutes",
    isVeg: true,
  },
  {
    id: 4,
    name: "Margherita Pizza",
    image: pizza,
    price: "$10",
    description: "Classic pizza with tomato, cheese, and basil",
    ingredients: "Dough, tomato sauce, mozzarella cheese, basil",
    preparationTime: "20 minutes",
    isVeg: true,
  },
];

const MenuItem: React.FC<{
  name: string;
  image: string;
  price: string;
  description: string;
  ingredients: string;
  preparationTime: string;
  isVeg: boolean;
}> = ({
  name,
  image,
  price,
  description,
  ingredients,
  preparationTime,
  isVeg,
}) => (
  <div className="flex items-center justify-around px-5">
    <div>
      <div className="flex items-center space-x-2">
        <div className="mt-2 text-2xl font-bold">{name} </div>
        <div className="mt-2 text-2xl font-bold">{price}</div>
      </div>
      <div className="text-gray-800 text-start">{description}</div>
      <div className="mt-2 text-start">{isVeg ? "Veg" : "Non-veg"}</div>
      <div className="mt-2 text-start">Ingredients: {ingredients}</div>
      <div className="mt-2 text-start">Preparation Time: {preparationTime}</div>
    </div>
    <div className="flex justify-end">
      <Image
        src={image}
        alt={name}
        width={500}
        height={400}
        className="rounded-lg hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
  </div>
);

const RestaurantMenu: React.FC = () => (
  <div className="bg-gray-100">
    <div className=" mx-auto p-8 bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-8 text-black">Our Menu</h1>
      <Carousel autoplay className="text-black">
        {menuItems.map((item) => (
          <div key={item.id}>
            <MenuItem
              name={item.name}
              image={item.image || ""}
              price={item.price}
              description={item.description}
              ingredients={item.ingredients}
              preparationTime={item.preparationTime}
              isVeg={item.isVeg}
            />
          </div>
        ))}
      </Carousel>
    </div>
    <div className="bg-gray-100 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {menuItems.map((item) => (
          <div
            className="text-black items-center shadow-md bg-white rounded-md"
            key={item.id}
          >
            <div className="flex flex-col items-center justify-around py-2">
              <div className="flex justify-end w-80">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <div className="flex items-center justify-around px-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="mt-2 text-lg font-bold">{item.name} </div>
                    <div className="mt-2 text-lg font-bold">{item.price}</div>
                  </div>
                  <div className="text-gray-800 text-start">
                    {item.description}
                  </div>
                  <div className="mt-2 text-start">
                    {item.isVeg ? "Veg" : "Non-veg"}
                  </div>
                  <div className="mt-2 text-start">
                    Ingredients: {item.ingredients}
                  </div>
                  <div className="mt-2 text-start">
                    Preparation Time: {item.preparationTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RestaurantMenu;
