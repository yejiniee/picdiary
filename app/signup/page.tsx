"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputForm from "@/components/InputForm";
import { BASE_URL } from "@/constants/constant";
import { EMAIL, PASSWORD, REPASSWORD } from "@/constants/sign";
import {
  emailValidator,
  signUpPasswordValidator,
} from "@/utils/registerOptions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export interface SignUpData {
  email?: string;
  password?: string;
  repassword?: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: "onBlur" });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data: SignUpData) => {
    console.log(JSON.stringify({ email: data.email, password: data.password }));

    const { password, repassword } = data;

    if (password !== repassword) {
      setError(REPASSWORD, {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않아요.",
      });
      return;
    }

    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    if (response.ok) {
      const responseData = await response.json();

      // localStorage.setItem("accessToken", responseData.data.accessToken);
      router.push("/");
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
      <div className="flex flex-col items-center gap-3">
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
            validator={signUpPasswordValidator}
            errorMessage={errors.password?.message?.toString() || ""}
          ></InputField>
          <InputField
            type={PASSWORD}
            registerName={REPASSWORD}
            register={register}
            placeholder={"비밀번호를 입력하세요."}
            labelName={"비밀번호 확인"}
            validator={signUpPasswordValidator}
            errorMessage={errors.repassword?.message?.toString() || ""}
          ></InputField>
          <Button>가입하기</Button>
        </InputForm>
        <Link className="underline" href="signin">
          이미 회원이신가요? 로그인하러 가기
        </Link>
      </div>
    </>
  );
}
