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

export const GameZero = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await check("game-0", input);
    setIsSuccess(result.success);
    setOutput(result.message);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:underline">Game Zero</CardTitle>
            <CardDescription>Let's get the ball rolling!</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <p>Spiciness: 🌶️🌶️🌶️🌶️</p>
              <p>Score: 100</p>
              <p>Topic: Algorithm</p>
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
          <DialogTitle>Game 0</DialogTitle>
          <DialogDescription>This is a game for starter</DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4 tracking-wide">
          <p>
            Mr Chan, the engineer of Vita Milk, has designed a vending machine
            for his company, which is going to be installed in LKT. Study the
            algorithm of the vending machine.
          </p>
          <code className="bg-neutral-100">
            Step 1: Let deposit be zero.
            <br />
            Step 2: Wait to receive a coin (only $1, $2, $5, and $10 coins are
            accepted).
            <br />
            Step 3: Increase deposit by the equivalent amount of the coin
            inserted.
            <br />
            Step 4: If deposit is equal to or more than $6, do step 5 and 6.
            Else, skip and execute step 7
            <br />
            Step 5: Release a can of lemon tea.
            <br />
            Step 6: Eject the remaining and do step 1.
            <br />
            Step 7: Do step 3
          </code>
          <p>
            Ha Ha. Mr Chan is a brillant engineer. I bet you can't find any
            vulnerabilities out of his algorithm......
          </p>
          <p className="font-semibold">
            ❓: What is the smallest amount of money required to get a can of
            lemon tea?
          </p>
          <form className="flex gap-2" onSubmit={onSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
              placeholder="$99999"
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
