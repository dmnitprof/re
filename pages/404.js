import Link from "next/link"

export default function ErrorPage() {
    return (
        <>
            <h1>Error 404</h1>
            <p>Страница не найдена.<Link href={'/'}><a> Вернуться назад</a></Link></p>
            </>
    )
}