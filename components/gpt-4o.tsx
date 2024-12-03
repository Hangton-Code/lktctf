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
import { ChevronsRight, SendIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { check } from "@/actions/check";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const GPT4o = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await check("gpt-4o", input);
    setIsSuccess(result.success);
    setOutput(result.message);
  };

  const handleDownload = () => {
    const imagePath = "/m2.png"; // Path to the image
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = "m2.png"; // The name for the downloaded file
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically trigger a click
    document.body.removeChild(link); // Remove the link after downloading
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:underline">
              Adaption to the new world
            </CardTitle>
            <CardDescription>
              A bright man once said that, "In the future, it is not about how
              much you know. AI knows everything. It's about how you can manage
              with your tools to make the most out of what you can......"
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <p>Spiciness: 🌶️</p>
              <p>Score: 100</p>
              <p>Topic: Artificial Intelligence</p>
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
          <DialogTitle>Cheat GPT</DialogTitle>
          <DialogDescription>
            You know what. It's time to adapt to the new world.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4 tracking-wide">
          <p>
            Jeremy, a band one elite student, is struggling with a M2 question
            given by Ms Lam. Can you do him a favor? I will give you the reward
            if you can do this......
          </p>
          <div className="w-full relative aspect-[1607/362]">
            <Image src="/m2.png" fill alt="" />
          </div>
          <Button
            className="self-end"
            size="sm"
            variant={"secondary"}
            onClick={handleDownload}
          >
            Download The Image
          </Button>
          <p className="bg-blue-100">
            Hints: GPT-4o is a powerful artifical intelligence model released by
            OpenAI. Not only does it support image recognition, but it can also
            solve complicated math questions....... <br />
            How to access GPT 4o? you should have heard of{" "}
            <Link
              href="https://poe.com"
              className="text-blue-500"
              target="_blank"
            >
              Poe
            </Link>
            .
          </p>
          <p className="font-semibold">
            ❓: Give me the answer of the question
          </p>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              placeholder="You can answer in either fraction form (e.g., 1/2) or decimal form (e.g., 0.5)."
            />
            <Button variant={"outline"} size={"icon"} type="submit">
              <SendIcon />
            </Button>
          </form>
          {output ? (
            <p
              className={cn(
                isSuccess ? "bg-green-200" : "bg-red-200",
                "whitespace-pre"
              )}
            >
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
