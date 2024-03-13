import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "@/app/styles/Calendar.css";

import useHoliday from "@/hooks/useHoliday";
import { extractYearAndMonth } from "@/utils/extractYearAndMonth";

const SERVICE_KEY = String(process.env.NEXT_PUBLIC_API_KEY);

export default function DiaryCalendar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 에러 때문에 임시로 넣어줌ㅠㅠ
  }, []);

  const [today, setToday] = useState(new Date());
  // moment 사용해 Date 형태의 날짜를 YYYY-MM-DD의 String으로 변환
  const [activeDate, setActiveDate] = useState<string>();
  // const activeDate = moment(today).format("YYYY-MM-DD"); // 클릭한 날짜 (년-월-일))

  const monthOfActiveDate = moment(today).format("YYYY-MM"); //현재 보여지는 달을 나타내는 State 생성(activeMonth)
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
  console.log("activeMonth, ", activeMonth);

  const getActiveMonth = (activeStartDate: moment.MomentInput) => {
    const newActiveMonth = moment(activeStartDate).format("YYYY-MM");
    setActiveMonth(newActiveMonth);
  };

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
  };
  // const onChangeToday = (value: Date) => {
  //   setToday(value); // 오늘 날짜를 업데이트합니다.
  // };
  // 일기 작성 날짜 리스트-임시
  const dayList = [
    "2024-03-10",
    "2024-03-21",
    "2023-04-02",
    "2023-04-14",
    "2023-04-27",
  ];

  const { year, month } = extractYearAndMonth(activeMonth);
  const { holidays } = useHoliday(year, month, SERVICE_KEY);

  const tileClassName = ({ date }: { date: Date }): string | null => {
    // 일요일인지 확인
    if (date.getDay() === 0) {
      return "holiday"; // 일요일일 경우 'sunday' 클래스 추가
    }

    // holidays 배열에 포함된 날짜인 경우 'holiday' 클래스를 반환
    // date 객체에서 연도, 월, 일 정보를 추출
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JavaScript의 월은 0부터 시작하므로 1을 더함
    const day = date.getDate();

    // holidays 배열에 포함된 날짜 중에서 현재 날짜와 일치하는 것이 있는지 확인
    const isHoliday = holidays.some((holiday) => {
      const [holidayYear, holidayMonth, holidayDay] = holiday
        .split("-")
        .map(Number);
      return (
        year === holidayYear && month === holidayMonth && day === holidayDay
      );
    });

    // 현재 날짜가 휴일이라면 'holiday' 클래스를 반환하고, 아니면 null을 반환합니다.
    return isHoliday ? "holiday" : null;
  };

  const router = useRouter();
  // 특정 날짜를 클릭할 때 실행되는 함수
  const onDateClick = (value: Date) => {
    console.log("이동한다!!!!!!!!!!!!!!!");
    const clickedDate: string = moment(value).format("YYYY-MM-DD");
    setActiveDate(clickedDate); // 클릭한 날짜를 activeDate 변수에 저장합니다.
    const year = moment(value).format("YYYY");
    const month = moment(value).format("MM");
    const day = moment(value).format("DD");

    // router.push(`/diary22`);
    router.push(`/diary/${year}/${month}/${day}`); // 해당 날짜의 년도, 월, 일을 가지고 /diary 경로로 이동합니다.
  };

  return (
    <>
      {isClient && (
        <Calendar
          onChange={onChangeToday}
          value={today}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => moment(date).format("D")}
          tileContent={({ date, view }) => {
            if (dayList.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return (
                <>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/svgs/emj-happy.svg"
                      className="diaryImg"
                      width={26}
                      height={26}
                      alt="emoji"
                    />
                  </div>
                </>
              );
            }
          }}
          tileClassName={tileClassName}
          showNeighboringMonth={false}
          onActiveStartDateChange={({ activeStartDate }) =>
            getActiveMonth(activeStartDate)
          }
          onClickDay={onDateClick}
        ></Calendar>
      )}
    </>
  );
}
