"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname(); // 현재 url을 리턴

  return (
    <nav>
      <ul>
        <li className="underline ">
          <Link href="/">Home</Link>
        </li>
        <li className="underline ">
          <Link href="/signin">LogIn</Link>
        </li>
        <li className="underline ">
          <Link href="/diary">Diary</Link>
        </li>
      </ul>
    </nav>
  );
}
