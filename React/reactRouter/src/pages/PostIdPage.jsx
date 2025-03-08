import React from 'react'
import { useParams, useSearchParams } from 'react-router'

function PostIdPage() {

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    const onClickHandler = () => {
        setSearchParams((pre)=>
            {
                pre.set("name", "Dheerja")
                return pre
            })
    }

    return (
        <>
            {/* <h1>PostIdPage{JSON.stringify(params)}</h1> */}
            <h1>PostIdPage {params.id}</h1>
            {/* <h1>PostIdPage {params.id ? params.id : 0}</h1> */}

            <h1>{JSON.stringify(searchParams.get("name"))}</h1>
            <h1>{JSON.stringify(searchParams.get("age"))}</h1>
            <h1>{JSON.stringify(searchParams.get("gaon"))}</h1>

            <button onClick={onClickHandler}>Change Name</button>
        </>
    )
}

export default PostIdPage
