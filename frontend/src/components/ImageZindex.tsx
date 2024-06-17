import React from "react";
import bubble1 from "../assets/images/bubble_01.jpg";
import bubble2 from "../assets/images/bubble_02.jpg";
const ImageZindex = () => {
  return (
    <div
      className="relative bg-cover bg-center w-[395px] h-[440px]"
      style={{ backgroundImage: `url(${bubble2})` }}
    >
      <img src={bubble1} alt="bubble1" width={330} />
    </div>
  );
};

export default ImageZindex;
