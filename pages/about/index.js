import React from 'react'
import Router from "next/router";

export default function About() {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <React.Fragment>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Вернуться на главную!!!</button>
            <button onClick={() => Router.push('/posts')}>Вернуться к странице постов</button>
        </React.Fragment>
    )
}
