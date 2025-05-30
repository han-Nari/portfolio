import { useRef } from "react";
export default function useNav() {
  const linkRef = useRef();

  const navLinks = ({ isActive }) => ({
    color: isActive ? "green" : "white",
  });

  function openNav() {
    if (linkRef.current) {
      linkRef.current.style.right = "0";
    }
  }

  function closeNav() {
    if (linkRef.current) {
      linkRef.current.style.right = "-100%";
    }
  }

  return { linkRef, openNav, closeNav, navLinks };
}
