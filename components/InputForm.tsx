import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}
export default function Inputform({ children }: ILayout) {
  return (
    <>
      <div className="flex bg-[#EADBB4] p-8 rounded-xl">
        <form>
          <div className="flex flex-col">{children}</div>
        </form>
      </div>
    </>
  );
}
