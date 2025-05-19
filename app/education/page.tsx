"use client";
import { Github, Mail, Twitter, Send, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { text } from "stream/consumers";



// process.env.NODE_ENV - getting data from env


const socials = [
    {
        icon: <GraduationCap size={20} />,
        href: "https://twitter.com/someuser",
        label: "Technological University (TU)",
        // handle: "ACDE - University",
        text: "The Technological University (TU) should become the foundation for training specialists in the field of technology.",
    },
    {
        icon: <GraduationCap size={20} />,
        href: "https://twitter.com/someuser",
        label: "University of the Humanities — UH",
        // handle: "ACDE - University",
        text: "The Humanitarian University (UH) should provide a connection between technologies and society, studying their interaction and preserving national identity.",
    },
    {
        icon: <GraduationCap size={20} />,
        href: "https://twitter.com/someuser",
        label: "Open Pedagogical University - OPU",
        // handle: "ACDE - University",
        text: "Training of modern teachers and development of educational programs for all levels of the education system, taking into account technological and social changes of the 21st century.",
    },

];

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">

            <Navigation />



<p className="px-40 pt-20 mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    «Vivat et respublica Et qui illam regit!
Vivat nostra civitas, Maecenatum caritas,
Quae nos hic protegit Quae nos hic protegit!»
                </p>

            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">

                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    
                    {socials.map((s) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {s.handle}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {s.label}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {s.text}
                                    </span>
                                </div>
                            </Link>
                            
                        </Card>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
