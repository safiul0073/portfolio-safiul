import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  children,
  url,
  onClick,
  type = "button",
}: {
  children: React.ReactNode | string;
  url?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return url ? (
    <Link
      href={url}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
