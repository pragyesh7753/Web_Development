import React from 'react'
import { Form } from 'react-router'

function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <Form action="post">
                <input type="text" name='title'/>
                <button type="submit">Submit</button>
            </Form>
            <h1>response:</h1>
        </>
    )
}

export default AboutPage
