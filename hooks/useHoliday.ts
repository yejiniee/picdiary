import { formatDate } from "@/utils/formDate";
import { useEffect, useState } from "react";
import { parseString } from "xml2js";

export default function useHoliday(
  solYear: string,
  solMonth: string,
  serviceKey: string
) {
  const [holidays, setHolidays] = useState<string[]>([]);
  console.log("holidays", holidays);
  const url =
    "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";

  useEffect(() => {
    const getHolidays = async () => {
      try {
        const response = await fetch(
          `${url}?solYear=${solYear}&solMonth=${solMonth}&serviceKey=${serviceKey}`
        );

        if (response.ok) {
          let data = await response.text();
          parseString(data, (err, result) => {
            if (err) {
              console.error("XML 파싱 오류:", err);
              return;
            }
            const items = result.response.body[0].items[0].item;
            // locdate 값만을 추출하여 배열로 저장
            const locdates = items.map((item: any) => item.locdate[0]);
            console.log("locdate 배열:", locdates);

            // 배열에 있는 각 날짜를 'YYYY-MM-DD' 형식으로 변환
            const formattedDates = locdates.map(formatDate);
            setHolidays(formattedDates);
            // console.log("파싱된 JSON 데이터:", items);
          });
        }
      } catch (e) {
        console.error(e);
      }
    };

    getHolidays();
  }, [solYear, solMonth, serviceKey]);

  return { holidays };
}
