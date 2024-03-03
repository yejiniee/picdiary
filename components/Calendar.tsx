import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/app/styles/Calendar.css";
import Image from "next/image";

export default function DiaryCalendar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 에러 때문에 임시로 넣어줌ㅠㅠ
  }, []);

  const [today, setToday] = useState(new Date());
  // moment 사용해 Date 형태의 날짜를 YYYY-MM-DD의 String으로 변환
  const activeDate = moment(today).format("YYYY-MM-DD"); // 클릭한 날짜 (년-월-일))

  const monthOfActiveDate = moment(today).format("YYYY-MM"); //현재 보여지는 달을 나타내는 State 생성(activeMonth)
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);

  const getActiveMonth = (activeStartDate: moment.MomentInput) => {
    const newActiveMonth = moment(activeStartDate).format("YYYY-MM");
    setActiveMonth(newActiveMonth);
  };

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
  };

  // 일기 작성 날짜 리스트
  const dayList = [
    "2024-03-10",
    "2024-03-21",
    "2023-04-02",
    "2023-04-14",
    "2023-04-27",
  ];

  return (
    <>
      {isClient && (
        <Calendar
          onChange={onChangeToday}
          value={today}
          // next2Label={null}
          // prev2Label={null}
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
          showNeighboringMonth={false}
          onActiveStartDateChange={({ activeStartDate }) =>
            getActiveMonth(activeStartDate)
          }
        ></Calendar>
      )}
    </>
  );
}
