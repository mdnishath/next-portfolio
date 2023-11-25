import { Children } from "@/types/common.next";
import React from "react";
import Navbar from "../ui/Navbar";

const PlainLayout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PlainLayout;
