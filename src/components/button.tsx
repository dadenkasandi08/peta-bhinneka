
import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href ? props.href : ""}
      className={`inline-flex text-white items-center justify-center gap-2 rounded-md cursor-pointer bg-primary-600 border-2 border-primary-600 ease-in-out transition-all p-xlarge lg:w-[14rem] py-4 lg:py-2`}
    >
      <p className={"text-4xl lg:text-xl"}>{props.text}</p>
    </Link>
  );
}

export default Button;
