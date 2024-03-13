import React, { useState } from "react";
import Button from "../Button";

export default function DiaryTextArea() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("다이어리 내용", value);
    setValue("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-end ">
      <textarea
        className="border-2 border-indigo-400 rounded-lg px-4 py-3 "
        value={value}
        onChange={handleChange}
        rows={5}
        cols={50}
        placeholder="일기를 작성하세요..."
      />
      <Button type="submit">저장</Button>
    </form>
  );
}
