"use client"; // hydrate하기 위해, interative한 화면을 구성하기 위해 필요함 백엔드에서 렌더되고 프론트엔드에서 하이드레이트 됨!
//14 이전 버전에서는 모든 컴포넌트가 하이드레이트 되어 이런 문구가 없었는데 14버전부터는 하이드레이트 될 컴포넌트를 선택 가능해짐

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname(); // 현재 url을 리턴

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signin">LogIn</Link>
        </li>
      </ul>
    </nav>
  );
}
