import Image from "next/image";
export default function PictureBox() {
  return (
    <div className="flex flex-col justify-center items-center px-[60px] py-4 border border-[#D4D4D4] rounded-lg">
      <Image
        src="/svgs/picture-icon.svg"
        alt="add-picture"
        width={90}
        height={90}
      />
      <span className=" underline text-[#8A8A8A]">사진 기록하기</span>
    </div>
  );
}
