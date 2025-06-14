"use client"
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Image from "next/image"

function page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white drop-shadow-lg">
                All Courses ({courseData.courses.length})
            </h1>
            <div className="flex flex-wrap justify-center">
                {courseData.courses.map((course, idx) => (
                    <CardContainer className="inter-var m-4" key={course.id ?? idx}>
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.15] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-2xl hover:shadow-emerald-400/20">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-extrabold text-neutral-700 dark:text-white tracking-tight"
                            >
                                {course.title}
                            </CardItem>
                            {/* Instructor and Duration */}
                            <div className="flex items-center gap-3 mt-1 mb-2">
                                {course.instructor && (
                                    <span className="text-xs text-emerald-500 font-semibold bg-emerald-100 dark:bg-emerald-900/20 px-2 py-0.5 rounded">
                                        {course.instructor}
                                    </span>
                                )}
                            </div>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                           
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <Image
                                    src={course.image}
                                    height={240}
                                    width={480}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition duration-300"
                                    alt={course.title ?? "thumbnail"}
                                    unoptimized={!!course.image}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-16">
                                <CardItem
                                    translateZ={20}
                                    translateX={-40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    translateX={40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold shadow-md hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default page