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
import { ScrollArea } from "./ui/scroll-area";

export const SourceCodeLeakage = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await check("source", input);
    setIsSuccess(result.success);
    setOutput(result.message);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:underline">
              Source Code Leakage
            </CardTitle>
            <CardDescription>The "opensource" source code.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <p>Spiciness: 🌶️</p>
              <p>Score: 200</p>
              <p>Topic: Web Programming</p>
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
          <DialogTitle>Source Code Leakage</DialogTitle>
          <DialogDescription>
            You can't get the key from the page. But can you get it from the
            code?
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4 tracking-wide">
          <p>This is the chat history between Clement and Tommy:</p>
          <ScrollArea className="h-[400px] w-full relative rounded-md border p-4">
            <div className=" w-[50%] relative aspect-[1170/3284]">
              <Image src="/chat-3.png" fill alt="" />
            </div>
          </ScrollArea>
          <p>
            Tommy still publish the website anyway:{" "}
            <Link
              href="https://tommy-green.vercel.app"
              className="text-blue-500"
              target="_blank"
            >
              https://tommy-green.vercel.app
            </Link>
          </p>
          <p className="font-semibold">❓: Can you retrieve the key?</p>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              placeholder="The key is indeed very long"
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
