import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  // usa o tailwind-merge
  //npm install tailwind-merge
  return (
    <div
      className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)}
      style={{ animationDuration: '1.8s' }}
      {...props}
    />
  );
}
