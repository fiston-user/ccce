import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex w-screen overflow-hidden overscroll-none flex-col h-screen bg-background">
      <div className="w-full max-w-screen-md px-8 flex flex-col items-center">
        <h1 className="text-2xl font-medium text-center mt-32">
          A Collaborative Cloud Code Editor, AI Powered, Auto-Scaling Models
        </h1>
        <div className="text-muted-foreground mt-4 text-center">
          Experience the future of coding with our collaborative cloud-based
          editor. Harness the power of AI-driven assistance and auto-scaling
          models to enhance your development workflow. Work seamlessly with your
          team in real-time, access your projects from anywhere, and leverage
          intelligent code suggestions to boost your productivity.
        </div>
        <div className="mt-8 flex space-x-4">
          <Link href="/sign-up">
            <Button>Signup</Button>
          </Link>
        </div>
        <div className="w-full rounded-lg bg-neutral-800 mt-12 aspect-video" />
      </div>
    </div>
  );
}
