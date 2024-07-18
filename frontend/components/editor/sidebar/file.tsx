"use client";

import Image from "next/image";
import { TFile } from "./types";
import { getIconForFile } from "vscode-icons-js";

export default function SidebarFile({ file }: { file: TFile }) {
  return (
    <div className="w-full flex items-center h-6 transition-colors hover:text-muted-foreground cursor-pointer">
      <Image
        src={`/icons/${getIconForFile(file.name)}`}
        alt="icon"
        width={16}
        height={16}
        className="mr-2"
      />
      {file.name}
    </div>
  );
}
