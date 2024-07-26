import Header from '@/Components/Header';
import CheckEmail from '@/Components/CheckEmail';
import Footer from '@/Components/Footer';
import {Head} from "@inertiajs/react";

export default function Home() {
  return (
    <>
        <Head title="Software Galaxy | Главная"/>

        <Header />

            <div className="hero container">
                <div className="hero--info">
                    <h2>Продавец программного обеспечения</h2>
                    <h1>Купи будущее сейчас</h1>
                    <p>Невероятные достижения начинаются с одной программы — выбирайте лучшее, расширяйте границы возможного и улучшайте
                        ваш бизнес вместе с нашими инновационными программными продуктами!</p>
                    <button className="button">Узнать больше</button>
                </div>
            </div>
            <div className="container trending">
                <a href="#" className="see-all">Увидеть все</a>
                <h3>Популярное ПО в настоящее время</h3>

                <div className="programs">
                    <div className="block">
                        <img src="/img/Windows_Logo.svg" alt=""/>
                        <span>Microsoft<br/>Windows</span>
                    </div>
                    <div className="block">
                        <img src="/img/Office_Logo.svg" alt=""/>
                        <span>Microsoft<br/>Office</span>
                    </div>
                    <div className="block">
                        <img src="/img/Creative_Logo.svg" alt=""/>
                        <span>Adobe<br/>Creative Cloud</span>
                    </div>
                        <div className="block">
                            <img src="/img/Autocad_Logo.svg" alt=""/>
                            <span>Autodesk<br/>Autocad</span>
                        </div>
                </div>
            </div>

            <CheckEmail />

            <Footer />
    </>
  )
}
