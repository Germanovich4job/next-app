import prisma from "@/lib/db";
import { ArrowRight } from "@mui/icons-material";
import { Icon } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/blog">
          {" "}
          Блог
          <ArrowRight />
        </Link>
      </main>
    </div>
  );
}
