import React from "react";

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <>
      <button className="flex py-4 px-5 justify-center items-center rounded-lg bg-[#AAA7D9] text-white">
        {children}
      </button>
    </>
  );
}
