import DiaryTextArea from "./DiaryTextArea";
import PictureBox from "./PictureBox";

interface Props {
  year: string;
  month: string;
  day: string;
}

export default function DiaryBox({ year, month, day }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-[10px] bg-white px-6 py-7 gap-[50px]">
      <div className="flex flex-col items-center justify-center">
        <span>
          {year}.{month}.{day}
        </span>
        <span>오늘의 일기</span>
      </div>
      <PictureBox></PictureBox>
      <DiaryTextArea></DiaryTextArea>
    </div>
  );
}
