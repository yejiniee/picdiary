"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DiaryBox from "@/components/DiaryBox/DiaryBox";

export default function Diary() {
  const path = usePathname();
  function extractYearMonthDayFromUrl(
    url: string
  ): { year: string; month: string; day: string } | null {
    // URL 형식에 맞게 정규식을 사용하여 년, 월, 일을 추출합니다.
    const regex = /\/diary\/(\d{4})\/(\d{2})\/(\d{2})/;
    const match = url.match(regex);

    // 정규식에 맞게 매칭되는 경우에만 추출된 값을 반환합니다.
    if (match && match.length === 4) {
      const [, year, month, day] = match;
      return { year, month, day };
    } else {
      return null;
    }
  }

  const extractedDate = extractYearMonthDayFromUrl(path);
  let year = "";
  let month = "";
  let day = "";

  // 추출된 값이 있을 경우에만 변수에 할당합니다.
  if (extractedDate) {
    year = extractedDate.year;
    month = extractedDate.month;
    day = extractedDate.day;
  }

  console.log("path", path);
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <span className="flex relative w-32 h-6 shrink-0">
        <Image fill src="/svgs/PICDIARY.svg" alt="logo" />
      </span>
      <DiaryBox year={year} month={month} day={day} />
    </div>
  );
}
