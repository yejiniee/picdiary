import React from "react";

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <>
      <button className="rounded-lg bg-[#AAA7D9]">{children}</button>
    </>
  );
}
