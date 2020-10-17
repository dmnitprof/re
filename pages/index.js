import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout title={'Главная'}>
            <h1>Hello Next js</h1>
            <p><Link href={'/about'}><a>О нас</a></Link></p>
            <p><Link href={'/posts'}><a>Новости</a></Link></p>
            <p>Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной рыбой для текстов на латинице с начала XVI века.</p>
        </MainLayout>
    )
}
