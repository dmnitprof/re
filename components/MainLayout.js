import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title = 'SRR Site'}) {
    return (
        <>
            <Head>

                <title>{title} | SSR Site</title>
                <meta name="keywords" content="Next SSR, SIte"/>
                <meta name="description" content="Сайт ремонт телефонов, планшетов, пк"/>
                <meta charSet="UTF-8"/>

            </Head>
            <nav>
                <Link href={'/'}><a>Главная</a></Link>
                <Link href={'/about'}><a>О Нас</a></Link>
                <Link href={'/posts'}><a>Посты</a></Link>
                <Link href={'/services'}><a>Услуги</a></Link>
                <Link href={'/contacts'}><a>Контакты</a></Link>
            </nav>
            <main>
                {children}
            </main>
            {/*<style jsx>{`*/}
            {/*nav {*/}
            {/*position: fixed;*/}
            {/*height: 60px;*/}
            {/*left: 0;*/}
            {/*right: 0;*/}
            {/*top: 0;*/}
            {/*background: darkblue;*/}
            {/*display: flex;*/}
            {/*justify-content: space-around;*/}
            {/*align-items: center;*/}
            {/*}*/}

            {/*nav a {*/}
            {/*color: #fff;*/}
            {/*text-decoration: none;*/}
            {/*}*/}

            {/*main {*/}
            {/*margin-top: 60px;*/}
            {/*padding: 1rem;*/}
            {/*}`*/}
            {/*}*/}
            {/*</style>*/}
            <footer>
                <ul>
                    <li><a href="mailto:dmn.itprof@gmail.com">Email</a></li>
                    <li><a href="https://vk.com/public199239684" target="_blank">VK</a></li>
                    <li><a href="https://t.me/QualityRepairPC" target="_blank">Telegram</a></li>
                    <li><p>tel:</p><a href="tel:+7-925-861-59-59">+7-925-861-59-59</a></li>
                </ul>

            </footer>
        </>
    )
}