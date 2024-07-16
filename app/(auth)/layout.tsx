import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="w-screen flex items-center justify-center h-screen">{children}</div>;
}
