import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  // const [load, setdata] = true;
  // let loader = document.getElementById("pre-loader");

  // if (loader) {
  //   window.addEventListener("load", () => {
  //     loader.style.display = "none";
  //   });
  // }

  return (
    <>
      {/* <span id="pre-loader"></span> */}
      <Header />
      <Outlet />
    </>
  );
};
