import { FormEventHandler, ReactNode } from "react";

interface ILayout {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  children: ReactNode;
}
export default function Inputform({ onSubmit, children }: ILayout) {
  return (
    <>
      <div className="flex w-100 bg-[#EADBB4] p-8 rounded-xl ">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">{children}</div>
        </form>
      </div>
    </>
  );
}
