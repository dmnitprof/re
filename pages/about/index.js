import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../../components/MainLayout'

export default function About() {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'О Нас'}>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Вернуться на главную!!!</button>
            <button onClick={() => Router.push('/posts')}>Вернуться к странице постов</button>
        </MainLayout>
    )
}
