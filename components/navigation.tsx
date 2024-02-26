"use client";

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
