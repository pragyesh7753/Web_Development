"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from highly qualified and passionate music teachers with years of experience in performance and education. Our instructors tailor lessons to each student's needs, ensuring effective and enjoyable learning.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
                Expert Instructors
            </div>
        ),
    },
    {
        title: "Personalized Curriculum",
        description:
            "We offer customized lesson plans for all ages and skill levels, from beginners to advanced musicians. Whether you want to master an instrument, improve your vocals, or learn music theory, our curriculum adapts to your goals.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/music-lesson.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Personalized music lesson"
                />
            </div>
        ),
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your talent through regular recitals, concerts, and community events. Gain confidence and stage experience while sharing your music with friends, family, and fellow students.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
                Performance Opportunities
            </div>
        ),
    },
    {
        title: "Modern Facilities",
        description:
            "Practice and learn in a comfortable, inspiring environment equipped with state-of-the-art instruments and technology. Our academy provides everything you need to support your musical journey.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
                Modern Facilities
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