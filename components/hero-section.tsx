import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-lg font-medium text-primary">
            Fullstack Developer
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm Muthumanikandan
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            A passionate web and software developer dedicated to crafting clean,
            accessible, and user-centric digital experiences. With a strong
            foundation in modern web technologies and a love for solving
            problems, I aim to build solutions that are both functional and
            delightful.
          </p>
          <div className="flex gap-4 pt-4">
            <Button>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Muthumanikandan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
