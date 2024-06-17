import React from "react";
import Mobile from "./images/mobile.png";
import SecondScreen from "./images/secondScreen.png";
import Signup from "./images/signup.png";
import MainScreen from "./images/mainscreen.png";
const Home11 = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <img src={Mobile} alt="mobile" />
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="font-bold text-xl">Hi!</h1>

          <p>
            "Better is growing among specialists and
            <br /> interesting challenges than growing alone and
            <br /> do not fully improve your skills."
          </p>

          <p>
            My name is Saravanan. I was born and grew up in Chennai, India and
            currently based in the same city. I was always very much interested
            in 'DRAWING AND PAINTING' and wanted to be an artist from my
            childhood days. I started studying visual communication and have
            chosen Graphic design as my major in the university. I was Graphic
            skill born in 2019 when I started doing a 100 project, and I
            completely fell in love with Graphic design and found my true
            passion for it.
          </p>
          {/* <br /> */}
          <div>
            <p>
              My skills that will be useful certainly is empathy to make
              solution designed for users and an open mind. I think there are no
              bad ideas but maybe do not fit the project and it is okay. I
              learned the basics of visual design, user flows, protyping and
              also visual identification all of this is because iam an
              autodidact and highly self-motivated. I realize that many UX/UI
              things are undiscovered by me but it will be a great developing
              adventure to meet them
            </p>
          </div>
        </div>
      </div>

      {/* second screen */}
      <div className="grid grid-cols-2">
        <div className="flex justify-center flex-col ml-5">
          <h1 className="font-bold text-5xl text-red-400 ">01</h1>

          <h1 className="font -bold text-xl ">About a Project</h1>

          <p className="mt-2">
            The idea was to create an app for fast and convenlent food delivery.
            The Master Shopping app helps customers to taste their fvouite
            dishes from favourite restaurants, drink aromatic coffee from the
            best coffee shop and eat fresh bread from the nearest bakery staying
            at home.
          </p>
          {/* <br /> */}
          <div>
            <p className="mt-2">
              My skills that will be useful certainly is empathy to make
              solution designed for users and an open mind. I think there are no
              bad ideas but maybe do not fit the project and it is okay. I
              learned the basics of visual design, user flows, protyping and
              also visual identification all of this is because iam an
              autodidact and highly self-motivated. I realize that many UX/UI
              things are undiscovered by me but it will be a great developing
              adventure to meet them
            </p>
          </div>
        </div>
        <div className="ml-5">
          <img src={SecondScreen} alt="mobile" />
        </div>
      </div>
      {/* third screen */}
      <div className="grid grid-cols-1 mt-10">
        <div className="flex justify-center flex-col ml-5">
          <h1 className="font-bold text-5xl text-red-400  text-center">02</h1>

          <h1 className="font -bold text-xl text-center">Features</h1>

          <p className="mt-2">
            The idea was to create an app for fast and convenlent food delivery.
            The Master Shopping app helps customers to taste their fvouite
            dishes from favourite restaurants, drink aromatic coffee from the
            best coffee shop and eat fresh bread from the nearest bakery staying
            at home.
          </p>
          {/* <br /> */}
          <div>
            <p className="mt-2">
              My skills that will be useful certainly is empathy to make
              solution designed for users and an open mind. I think there are no
              bad ideas but maybe do not fit the project and it is okay. I
              learned the basics of visual design, user flows, protyping and
              also visual identification all of this is because iam an
              autodidact and highly self-motivated. I realize that many UX/UI
              things are undiscovered by me but it will be a great developing
              adventure to meet them
            </p>
          </div>
        </div>
        <div className="ml-5">
          <img src={Signup} alt="mobile" className="h-90 w-screen" />
        </div>
      </div>
      {/* last screen */}
      <div className="">
        <div className="">
          <div className="flex justify-center flex-col ml-5">
            <h1 className="font -bold text-xl text-center">Offering</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div className="flex justify-center flex-col ml-5">
            <p className="mt-2">
              The idea was to create an app for fast and convenlent food
              delivery. The Master Shopping app helps customers to taste their
              fvouite dishes from favourite restaurants, drink aromatic coffee
              from the best coffee shop and eat fresh bread from the nearest
              bakery staying at home.
            </p>
            {/* <br /> */}
          </div>
          <div className="ml-5">
            <img
              src={MainScreen}
              alt="mobile"
              className=" w-screen  h-96"
              width={400}
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <footer id="contact" className="bg-[#441f05] text-white w-full py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">Contact Us</p>
          <p>Email: info@dishdelight.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </footer>

      <footer className="bg-[#441f05] text-white w-full py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            &copy; 2023 DishDelight. All rights reserved.
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="text-sm text-white no-underline hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white no-underline hover:underline"
            >
              About Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home11;
