import { Children } from "react";
import { NavBar } from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
