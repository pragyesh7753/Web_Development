import React, {useEffect, useState } from 'react'

function HomePage() {

    const [data, setData] = useState([])

    const fetchApi = async () => {
        const response = await ((await fetch("https://jsonplaceholder.typicode.com/todos")).json())
        setData(response)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <small>
                {JSON.stringify(data)}
            </small>
        </>
    )
}

export default HomePage
