import Link from "next/link"
import {MainLayout} from "../components/MainLayout"
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={classes.error}>Error 404</h1>
            <p>Страница не найдена.<Link href={'/'}><a> Вернуться назад</a></Link></p>
        </MainLayout>
    )
}