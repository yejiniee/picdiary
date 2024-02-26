"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputForm from "@/components/InputForm";
import { BASE_URL } from "@/constants/constant";
import { EMAIL, PASSWORD } from "@/constants/sign";
import {
  emailValidator,
  signInPasswordValidator,
} from "@/utils/registerOptions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
export interface LoginData {
  email?: string;
  password?: string;
}
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: "onBlur" });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data: LoginData) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();

      // localStorage.setItem("accessToken", responseData.data.accessToken);
      router.push("/signup");
    } else {
      setError(EMAIL, {
        type: "wrong-email",
        message: "이메일을 확인해 주세요.",
      });
      setError(PASSWORD, {
        type: "wrong-password",
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Image src="/svgs/PICDIARY.svg" alt="" width={200} height={200} />
        <InputForm onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type={EMAIL}
            registerName={EMAIL}
            register={register}
            placeholder={"이메일을 입력하세요."}
            labelName={"이메일"}
            validator={emailValidator}
            errorMessage={errors.email?.message?.toString() || ""}
          ></InputField>
          <InputField
            type={PASSWORD}
            registerName={PASSWORD}
            register={register}
            placeholder={"비밀번호를 입력하세요."}
            labelName={"비밀번호"}
            validator={signInPasswordValidator}
            errorMessage={errors.password?.message?.toString() || ""}
          ></InputField>
          <Button>로그인</Button>
        </InputForm>
        <Link href="signup">회원가입하러 가기</Link>
      </div>
    </>
  );
}
