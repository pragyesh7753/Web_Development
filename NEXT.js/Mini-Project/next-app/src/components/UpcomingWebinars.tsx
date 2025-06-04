"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'
import React from 'react'

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: "Mastering Jazz Piano",
            description: "Explore advanced jazz piano techniques with live demonstrations.",
            slug: "mastering-jazz-piano",
            isFeatured: true,
        },
        {
            title: "Songwriting Essentials",
            description: "Learn the fundamentals of songwriting from industry professionals.",
            slug: "songwriting-essentials",
            isFeatured: true,
        },
        {
            title: "Electronic Music Production",
            description: "Dive into the world of electronic music with hands-on production tips.",
            slug: "electronic-music-production",
            isFeatured: true,
        },
        {
            title: "Vocal Training for Beginners",
            description: "Start your vocal journey with proven exercises and techniques.",
            slug: "vocal-training-beginners",
            isFeatured: true,
        },
        {
            title: "Guitar Improvisation Workshop",
            description: "Unlock your creativity with improvisation strategies for guitarists.",
            slug: "guitar-improvisation-workshop",
            isFeatured: true,
        },
        {
            title: "Music Theory Demystified",
            description: "Break down complex music theory concepts into easy steps.",
            slug: "music-theory-demystified",
            isFeatured: true,
        },
        {
            title: "Mixing & Mastering Basics",
            description: "Get started with mixing and mastering your own tracks at home.",
            slug: "mixing-mastering-basics",
            isFeatured: true,
        },
        {
            title: "Live Performance Techniques",
            description: "Enhance your stage presence and performance skills.",
            slug: "live-performance-techniques",
            isFeatured: true,
        },
    ]

    return (
        <div className='p-12 bg-gray-900 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 '>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>
                <div className='mt-10'>
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title:webinar.title,
                                description:webinar.description,
                                link:'/webinars/' + webinar.slug,
                            }
                        ))}
                    />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:'
                    >
                        View All Webinars</Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars