"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from highly qualified and passionate music teachers with years of experience in performance and education. Our instructors tailor lessons to each student's needs, ensuring effective and enjoyable learning.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white text-2xl font-bold animate-fade-in">
                <span role="img" aria-label="Teacher">🎓</span> Expert Instructors
            </div>
        ),
    },
    {
        title: "Personalized Curriculum",
        description:
            "We offer customized lesson plans for all ages and skill levels, from beginners to advanced musicians. Whether you want to master an instrument, improve your vocals, or learn music theory, our curriculum adapts to your goals.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-400))] text-white text-2xl font-bold animate-fade-in">
                <span role="img" aria-label="Sheet Music">🎼</span> Personalized Curriculum
            </div>
        ),
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your talent through regular recitals, concerts, and community events. Gain confidence and stage experience while sharing your music with friends, family, and fellow students.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white text-2xl font-bold animate-fade-in">
                <span role="img" aria-label="Stage">🎤</span> Performance Opportunities
            </div>
        ),
    },
    {
        title: "Modern Facilities",
        description:
            "Practice and learn in a comfortable, inspiring environment equipped with state-of-the-art instruments and technology. Our academy provides everything you need to support your musical journey.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white text-2xl font-bold animate-fade-in">
                <span role="img" aria-label="Building">🏢</span> Modern Facilities
            </div>
        ),
    },
    {
        title: "Flexible Scheduling",
        description:
            "We understand your busy lifestyle. Choose lesson times that fit your schedule, including evenings and weekends, for maximum convenience.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-400),var(--orange-500))] text-white text-2xl font-bold animate-fade-in">
                <span role="img" aria-label="Clock">⏰</span> Flexible Scheduling
            </div>
        ),
    },
];

function WhyChooseUs() {
    return (
        <div  className="w-full py-4">
                <StickyScroll content={content}/>
            </div>
    )
}

export default WhyChooseUs