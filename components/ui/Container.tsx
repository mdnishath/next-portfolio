import { Children } from "@/types/common.next";
import React from "react";

const Container = ({ children }: Children) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
