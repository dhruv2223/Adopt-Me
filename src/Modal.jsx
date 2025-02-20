import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  //usecase of useRef is to store the reference to the element and it will not create the element agin and again
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    //component will unmount
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
