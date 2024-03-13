import React from "react";
interface Props {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}
export default function Button({ type, children }: Props) {
  return (
    <>
      <button
        type={type}
        className="flex py-4 px-5 justify-center items-center rounded-lg bg-button text-white"
      >
        {children}
      </button>
    </>
  );
}
