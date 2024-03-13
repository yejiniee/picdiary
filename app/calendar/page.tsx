"use client";

import DiaryCalendar from "@/components/Calendar";
import Image from "next/image";

export default function Calendar() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <span className="flex relative w-32 h-6 shrink-0">
        <Image fill src="/svgs/PICDIARY.svg" alt="logo" />
      </span>
      <DiaryCalendar></DiaryCalendar>
    </div>
  );
}
