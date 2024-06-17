import React from "react";
import "./App.css"; // Import any additional global styles

const dishes = [
  {
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with creamy egg sauce and pancetta.",
    image: "./images/carbonara.jpg",
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic rice dish with tender chicken and flavorful spices.",
    image: "./images/biryani.jpg",
  },
  {
    name: "Sushi Platter",
    description: "Assorted sushi rolls with fresh fish and vegetables.",
    image: "./images/sushi.jpg",
  },
  // Add more dishes as needed
];

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#F6DBC0] to-[#F5D3B2] bg-cover bg-no-repeat bg-fixed min-h-screen flex flex-col items-center">
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto p-6 flex justify-between items-center">
          <div className="text-3xl font-dancing-script text-[#441f05]">
            DishDelight
          </div>
          <nav className="space-x-4">
            <a href="#recommendations" className="text-[#441f05] no-underline">
              Home
            </a>
            <a href="#recommendations" className="text-[#441f05] no-underline">
              Recommendations
            </a>
            <a href="#contact" className="text-[#441f05] no-underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto my-12">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-dancing-script text-[#441f05] mb-4">
            Welcome to DishDelight
          </h1>
          <p className="text-xl text-[#441f05]">
            Discover our top dish recommendations tailored just for you!
          </p>
        </section>

        <section
          id="recommendations"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#441f05] mb-2">
                  {dish.name}
                </h2>
                <p className="text-gray-700">{dish.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer id="contact" className="bg-[#441f05] text-white w-full py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">Contact Us</p>
          <p>Email: info@dishdelight.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
