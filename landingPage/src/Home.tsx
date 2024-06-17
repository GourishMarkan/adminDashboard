

import "./App.css"; 
import overlay from "./images/overlay.svg";
import logo from "./images/logo.svg";
import truck from "./images/truck.png";
import order from "./images/order.svg";
import delivery from "./images/delivery.svg";
import enjoy from "./images/enjoy.svg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#F6DBC0] to-[#F5D3B2] bg-cover bg-no-repeat bg-fixed flex justify-center p-8 min-h-screen overflow-x-hidden">
      <img
        id="overlay"
        src={overlay}
        className="fixed top-0 left-24 h-screen z-10"
        alt="Overlay"
      />
      <div id="wrapper" className="flex flex-col w-full z-20 gap-24">
        <nav id="navbar" className="flex justify-between">
          <div id="logo" className="flex items-center gap-4">
            <img src={logo} className="h-10" alt="Logo" />
            <span className="font-dancing-script text-3xl text-[#441f05]">
              MealMover
            </span>
          </div>
          <div id="links" className="flex items-center gap-8">
            <a href="#" className="text-white no-underline">
              Menu
            </a>
            <a href="#" className="text-white no-underline">
              Order
            </a>
            <a href="#" className="text-white no-underline">
              Track
            </a>
            <a href="#" className="text-white no-underline">
              Promotions
            </a>
            <div className="btn bg-[#F9B45F] text-white rounded-full w-36 py-2 px-4 text-center text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#f9c17c]">
              Account
            </div>
          </div>
        </nav>

        <section id="main-section" className="flex justify-between">
          <div id="info" className="flex flex-col gap-10 w-1/3 relative">
            <h2 className="font-dancing-script text-5xl">
              Delivering deliciousness
            </h2>
            <span className="text-[#C5A98A]">
              Get your favorite dishes delivered straight to your doorstep! Our
              efficient delivery system and user-friendly app make it easy to
              satisfy your cravings. Download now and enjoy hassle-free food
              delivery.
            </span>
            <div className="btn bg-[#F9B45F] text-white rounded-full w-48 py-3 px-6 text-center text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#f9c17c]">
              Order Now
            </div>
          </div>
          <img src={truck} id="truck" className="h-72 relative" alt="Truck" />
        </section>

        <section
          id="secondary-section"
          className="mt-80 flex justify-center text-white gap-12"
        >
          <div id="steps" className="flex flex-col gap-8 text-xl">
            <h1 className="font-dancing-script text-5xl text-center">
              How It Works?
            </h1>
            <div className="flex gap-16 items-center">
              <img src={order} className="h-32" alt="Order" />
              <span>Choose your meals from our menu and make your order</span>
            </div>
            <div className="flex gap-16 items-center">
              <span>Your meals will be delivered to your doorstep</span>
              <img src={delivery} className="h-32" alt="Delivery" />
            </div>
            <div className="flex gap-16 items-center">
              <img src={enjoy} className="h-32" alt="Enjoy" />
              <span>Enjoy fresh and tasty food with your loved ones!</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
