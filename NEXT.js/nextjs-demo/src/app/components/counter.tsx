"use client";

import { useState } from 'react';
// import { useAuth } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export const Counter = () => {

    // const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isLoaded, isSignedIn, user } = useUser()

    console.log("Counter component")
    const [count, setCount] = useState(0);

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <button
            onClick={() => setCount(count + 1)}
        >
            Clicked {count} times
        </button>
    )
}