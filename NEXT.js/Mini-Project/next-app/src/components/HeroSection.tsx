import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className='p-4 relative z-10 w-full text-center flex flex-col items-center'>
                {/* Decorative Icon */}
                <div className="mb-4 flex justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="animate-pulse">
                        <circle cx="24" cy="24" r="22" stroke="#fbbf24" strokeWidth="4" fill="#fef3c7" />
                        <path d="M24 14v12l8 4" stroke="#f59e42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                {/* Animated Subtitle */}
                <span className="inline-block text-sm md:text-base text-yellow-400 font-semibold tracking-wide mb-2 animate-fade-in">
                    Your musical journey starts here
                </span>
                <h1
                    className='mt-2 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                >
                    Master the art of music
                </h1>
                <p
                    className='mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto'
                >
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className='mt-8 flex flex-col md:flex-row gap-4 justify-center'>
                    <Link href={"/courses"}>
                        <Button
                            borderRadius='1.75rem'
                            className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg hover:scale-105 transition-transform'
                        >Explore courses</Button>
                    </Link>
                    <Link href={"/about"}>
                        <Button
                            borderRadius='1.75rem'
                            className='bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors'
                        >Learn more</Button>
                    </Link>
                </div>
            </div>
            {/* Optional: Add subtle background gradient overlay */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-yellow-900/10 via-transparent to-transparent" />
        </div>
    )
}

export default HeroSection