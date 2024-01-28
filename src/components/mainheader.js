import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

export default function Mainheader() {
  return (
    <header className="text-white flex items-center bg-black justify-between p-5">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image
          src={logoImg}
          width={70}
          height={70}
          alt="Picture of the author"
          priority
        />
        Yum Foods
      </Link>

      <nav>
        <ul className="flex gap-4 p-3 font-semibold">
          <li>
            <Link className=" text-white hover:text-green-600" href={"/meals"}>
              Meals
            </Link>
          </li>

          <li>
            <Link
              className=" text-white hover:text-green-600"
              href={"/community"}
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
