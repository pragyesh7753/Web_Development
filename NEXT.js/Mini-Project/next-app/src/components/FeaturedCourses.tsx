"use client"
import React from 'react'
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className='py-12 bg-zinc-950'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED COURSES
                    </h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                        Learn With the Best
                    </p>
                </div>
            </div>
            <div className='mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm transition-transform duration-200 hover:scale-105 shadow-lg'
                            >
                                {/* If you add images: 
                                <img src={course.image} alt={`${course.title} cover`} className="w-full h-40 object-cover" />
                                */}
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold'>{course.title}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-2'>{course.description}</p>
                                    <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-1'>
                                        Instructor: <span className="font-medium">{course.instructor}</span>
                                    </p>
                                    <p className='text-base font-bold text-teal-600 dark:text-teal-400 mb-4'>
                                        ${course.price.toFixed(2)}
                                    </p>
                                    <Link
                                        href={`/courses/${course.slug}`}
                                        className="inline-block mt-auto px-4 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link
                    href={"/courses"}
                    className='px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses