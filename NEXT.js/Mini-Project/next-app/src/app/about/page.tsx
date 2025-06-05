import React from "react";
import Image from "next/image";

const AboutPage = () => (
    <div className="max-w-4xl mx-auto py-16 px-4 mt-24">
        <h1 className="text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-700 drop-shadow-lg">
            About Us
        </h1>
        <div className="flex justify-center mb-8">
            <Image
                src="https://plus.unsplash.com/premium_photo-1664301857931-0db8043f94e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Harmony Music School"
                width={800}
                height={320}
                className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover h-64 md:h-80"
                priority
            />
        </div>
        <div>
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">About Harmony Music School</h2>
            <p className="text-lg text-neutral-300 mb-4">
                Harmony Music School is dedicated to nurturing musical talent and passion in students of all ages and backgrounds.
                Our experienced instructors and comprehensive curriculum help you unlock your full musical potential.
            </p>
            <p className="text-lg text-neutral-300 mb-4">
                Whether you&apos;re a beginner or an advanced musician, we offer tailored programs in classical, contemporary, and digital music. Our state-of-the-art studios, regular recitals, and masterclasses with renowned artists ensure a holistic musical journey.
            </p>
        </div>
        <section className="bg-neutral-900 rounded-lg p-8 shadow-lg mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Our Mission</h2>
            <p className="mb-4 text-neutral-200">
                To inspire and empower individuals through the universal language of music. We believe in fostering creativity, discipline, and confidence in every student.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-neutral-200 space-y-2">
                <li>Expert instructors with real-world experience</li>
                <li>Personalized learning paths for every student</li>
                <li>Modern facilities and resources</li>
                <li>Supportive and inclusive community</li>
                <li>Performance opportunities and workshops</li>
                <li>Flexible online and offline classes</li>
                <li>Access to exclusive music events and competitions</li>
            </ul>
        </section>
        <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8 shadow-md mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-yellow-900 dark:text-yellow-100">
                <div>
                    <h3 className="font-bold mb-1">Passion</h3>
                    <p>We encourage a love for music in every lesson and performance.</p>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Excellence</h3>
                    <p>We strive for the highest standards in teaching and learning.</p>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Community</h3>
                    <p>We foster a welcoming, supportive, and collaborative environment.</p>
                </div>
            </div>
        </section>
    </div>
);

export default AboutPage;
