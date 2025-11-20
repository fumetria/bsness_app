"use client";

import HeaderClient from "@/components/HeaderClient";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <HeaderClient />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}
