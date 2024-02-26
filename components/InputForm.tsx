import { FormEventHandler, ReactNode } from "react";

interface ILayout {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  children: ReactNode;
}
export default function Inputform({ onSubmit, children }: ILayout) {
  return (
    <>
      <div className="flex bg-[#EADBB4] p-8 rounded-xl">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">{children}</div>
        </form>
      </div>
    </>
  );
}
