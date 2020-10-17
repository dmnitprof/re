import Link from 'next/link'
import Head from "next/head"
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>SSR Site</title>
                <meta name="keywords" content="Next SSR, SIte"/>
                <meta name="description" content="Сайт ремонт телефонов, планшетов, пк"/>
                <meta charSet="UTF-8"/>
            </Head>
            <h1>Hello Next js</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
            <p>Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной рыбой для текстов на латинице с начала XVI века.</p>
        </MainLayout>
    )
}
