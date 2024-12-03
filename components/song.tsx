"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { ChevronsRight, Paperclip, SendIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { check } from "@/actions/check";
import Image from "next/image";
import Link from "next/link";

export const SchoolSong = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await check("song", input);
    setIsSuccess(result.success);
    setOutput(result.message);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:underline">
              Joint-school Graduation Ceremony
            </CardTitle>
            <CardDescription>
              海天一片，宏播仁風，屬校遍港九。 有教無類，作育英才，歷史最悠久。
              晦明風雨，努力前程，良機莫辜負。
              愛東華，愛母校，他日成材，服務社會報恩厚。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <p>Spiciness: 🌶️🌶️</p>
              <p>Score: 200</p>
              <p>Topic: File Format</p>
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
          <DialogTitle>Love Tung Wah. Love LKT</DialogTitle>
          <DialogDescription>
            Future good good. Help society. Pay it forward.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4 tracking-wide">
          <p>
            Wang, a student IT helper, is working on the preparation of
            Joint-school Graduation Ceremony. <br /> He has downloaded the
            school song in <code>.mp4</code> file which is going to be played
            during the ceremony.
          </p>
          <p>
            Oops! After he came back from toilet, he found that someone has used
            his computer and altered the file. It is now a <code>.png</code>{" "}
            file instead of a <code>.mp4</code> video.
          </p>
          <div className="w-[60%] relative aspect-[575/444]">
            <Image src="/song.png" fill alt="" />
          </div>
          <p className="bg-blue-100">
            Hints: Do you know file extension? Surely, you can change the file
            extension of a file in the file explorer at your fingertips. <br />a
            refercing video if you need:{" "}
            <Link
              href="https://www.youtube.com/watch?v=njxwI5Go8MQ"
              className="text-blue-500"
              target="_blank"
            >
              https://www.youtube.com/watch?v=njxwI5Go8MQ
            </Link>
          </p>
          <p className="font-semibold">
            ❓: Can you help Wang recover his school song video?
          </p>
          <div className="flex items-center gap-2">
            <Paperclip className="w-5 h-5" />
            <a
              href="/school_song_video.png"
              className="text-blue-500"
              download="school_song_video.png"
            >
              /school_song_video.png
            </a>
          </div>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              placeholder="The passkey appears in the video."
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
