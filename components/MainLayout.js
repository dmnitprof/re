import Link from 'next/link'

export function MainLayout({children}) {
    return (
        <>
            <Head></Head>
            <nav>
                <Link href={'/'}><a>Главная</a></Link>
                <Link href={'/about'}><a>О Нас</a></Link>
                <Link href={'/posts'}><a>Посты</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            
            nav a {
            color: #fff;
            text-decoration: none;
            }
            
            main {
            margin-top: 60px;
            padding: 1rem;
            }`
            }
            </style>
        </>
    )
}