"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"


function Instructors() {

    const instructors = [
        {
            id: 1,
            name: "Emily Carter",
            designation: "Piano Instructor",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400&facepad=2"
        },
        {
            id: 2,
            name: "James Lee",
            designation: "Guitar Instructor",
            image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2"
        },
        {
            id: 3,
            name: "Sophia Martinez",
            designation: "Violin Instructor",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2"
        },
        {
            id: 4,
            name: "Michael Chen",
            designation: "Drums Instructor",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2"
        },
        {
            id: 5,
            name: "Olivia Smith",
            designation: "Voice Instructor",
            image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=400&h=400&facepad=2"
        },
        {
            id: 6,
            name: "David Kim",
            designation: "Saxophone Instructor",
            image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2"
        }
    ]

    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
                    Meet Our Instructors

                </h2>
                <p className="text-base md:text-lg text-white text-center mb-4">
                    Discover the talented professionals who will guide your musical journey
                </p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors