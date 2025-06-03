"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from '@/utils/cn';


const musicSchoolTestimonials = [
    {
        quote: "The instructors at this academy are incredibly talented and patient. My piano skills have improved so much!",
        name: "Emily Chen",
        title: "Piano Student"
    },
    {
        quote: "I love the friendly environment and the personalized lessons. Highly recommend for anyone wanting to learn guitar.",
        name: "Michael Lee",
        title: "Guitar Student"
    },
    {
        quote: "My daughter looks forward to her violin classes every week. The teachers make learning fun and engaging.",
        name: "Priya Sharma",
        title: "Parent"
    },
    {
        quote: "The vocal training here has helped me gain confidence and perform on stage.",
        name: "Sofia Martinez",
        title: "Vocal Student"
    },
    {
        quote: "Great facilities and a wonderful community of musicians. I’ve made so many friends here.",
        name: "David Kim",
        title: "Drum Student"
    },
    {
        quote: "The academy offers a wide range of instruments to learn. I started with keyboard and now I’m learning saxophone too!",
        name: "Lucas Brown",
        title: "Multi-instrumentalist"
    },
    {
        quote: "The teachers are very supportive and always encourage us to do our best.",
        name: "Ava Wilson",
        title: "Flute Student"
    },
    {
        quote: "I appreciate the flexible scheduling and the attention given to each student’s progress.",
        name: "Noah Patel",
        title: "Parent"
    },
    {
        quote: "The annual recitals are a great way to showcase what we’ve learned. It’s a fantastic experience.",
        name: "Grace Thompson",
        title: "Violin Student"
    },
    {
        quote: "Joining this academy was the best decision for my musical journey. The lessons are both fun and challenging.",
        name: "Ethan Nguyen",
        title: "Guitar Student"
    }
]

function MusicSchoolTestimonials() {
    return (
        <div
            className={cn(
                "min-h-screen w-full flex flex-col justify-center items-center", // full page, center content
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}>
            <h2
                className='text-4xl font-bold text-center mb-12 z-10'>
                Hear Our Harmony: Voices of Success
            </h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                        className="p-8 md:p-12 text-lg md:text-xl rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonials