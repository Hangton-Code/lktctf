"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronsRight, SendIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { check } from "@/actions/check";
import Link from "next/link";

export const Desktop = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await check("desktop", input);
    setIsSuccess(result.success);
    setOutput(result.message);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:underline">Windows 12</CardTitle>
            <CardDescription>
              曾付出 幾多心跳 來換取一堆堆的發票 人值得 命中減少幾秒 多買一隻錶
              秒速 捉得緊了 而皮膚竟偷偷鬆了 為何用到盡了 至知哪樣緊要
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <p>Spiciness: 🌶️🌶️</p>
              <p>Score: 100</p>
              <p>Topic: Miscellaneous</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full opacity-0 group-hover:opacity-100 transition-all flex justify-end items-center gap-2">
              Click to open <ChevronsRight />
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Desktop</DialogTitle>
          <DialogDescription>
            Local Time equals to World Time???? I will personally set my time 5
            mins faster.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4 tracking-wide">
          <p>
            Jacky has installed Windows 12 Beta 1 on his computer. You can set
            up a remote connection to the system via{" "}
            <Link
              href="https://lktctf-windows-12.vercel.app"
              className="text-blue-500"
              target="_blank"
            >
              https://lktctf-windows-12.vercel.app
            </Link>
            . To avoid forgetting his new password, Jacky has set a cron
            reminder which send him the password every day at{" "}
            <code>18:00:00</code>.
          </p>
          <iframe
            width="600"
            height="337.5"
            src="https://www.youtube.com/embed/URUIcYDq3_I"
            title="Eason Chan 陳奕迅 《陀飛輪》MV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="font-semibold">
            ❓: Yet, the competition ends soon, can you get the password in
            advance?
          </p>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              placeholder="-------"
            />
            <Button variant={"outline"} size={"icon"} type="submit">
              <SendIcon />
            </Button>
          </form>
          {output ? (
            <p className={isSuccess ? "bg-green-200" : "bg-red-200"}>
              {output}
            </p>
          ) : (
            <></>
          )}{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
};
