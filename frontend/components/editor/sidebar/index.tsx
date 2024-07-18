import { File, FilePlus, Folder, FolderPlus, Search } from "lucide-react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import SidebarFolder from "./folder";
import { TFile, TFolder } from "./types";
import SidebarFile from "./file";

const data: (TFile | TFolder)[] = [
  { id: "1", name: "index.tsx", type: "file" },
  {
    id: "2",
    name: "components",
    type: "folder",
    children: [
      {
        id: "navbar.tsx",
        name: "navbar.tsx",
        type: "file",
      },
      {
        id: "2.1",
        name: "ui",
        type: "folder",
        children: [
          {
            id: "button.tsx",
            name: "button.tsx",
            type: "file",
          },
          {
            id: "input.tsx",
            name: "input.tsx",
            type: "file",
          },
          {
            id: "card.tsx",
            name: "card.tsx",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "styles",
    type: "folder",
    children: [
      {
        id: "global.css",
        name: "global.css",
        type: "file",
      },
      {
        id: "variables.css",
        name: "variables.css",
        type: "file",
      },
    ],
  },
  {
    id: "4",
    name: "utils",
    type: "folder",
    children: [
      {
        id: "helpers.ts",
        name: "helpers.ts",
        type: "file",
      },
      {
        id: "constants.ts",
        name: "constants.ts",
        type: "file",
      },
    ],
  },
  { id: "5", name: "README.md", type: "file" },
  { id: "6", name: "package.json", type: "file" },
];

export default function Sidebar() {
  return (
    <div className="h-full w-56 flex flex-col items-start p-2">
      <div className="flex w-full items-center justify-between h-8 mb-1">
        <div className="text-muted-foreground">EXPLORER</div>
        <div className="flex space-x-1">
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <FilePlus className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <FolderPlus className="h-4 w-4" />
          </div>
          <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded-sm">
            <Search className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="w-full mt-2 flex flex-col">
        {data.map((child) =>
          child.type === "file" ? (
            <SidebarFile key={child.id} file={child} />
          ) : (
            <SidebarFolder key={child.id} data={child} />
          )
        )}
      </div>
    </div>
  );
}
