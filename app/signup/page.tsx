"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputForm from "@/components/InputForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src="/svgs/PICDIARY.svg" alt="" width={200} height={200} />
        <InputForm>
          <InputField
            id={"signin-email"}
            htmlFor={"signin-email"}
            name={"email"}
            type={"email"}
            placeholder={"email"}
            value={emailInput}
            labelName={"이메일"}
          ></InputField>
          <InputField
            id={"signin-password"}
            htmlFor={"signin-password"}
            name={"password"}
            type={"password"}
            placeholder={"password"}
            value={passwordInput}
            labelName={"비밀번호"}
          ></InputField>
          <Button>가입하기</Button>
        </InputForm>
        <Link href="signin">이미 회원이신가요? 로그인하러 가기</Link>
      </div>
    </>
  );
}
