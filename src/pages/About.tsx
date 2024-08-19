import CheckEmail from "../components/CheckEmail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {ArrowRight} from "lucide-react";

export default function About() {

    return (
        <>
            <Header/>
            <div className="container hero-about">
                <div className="block">
                    <h3 className="current-page">Главная / <b className="current-page">О нас</b></h3>
                    <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button>Get in touch <ArrowRight width={25} height={18}/> </button>
                </div>
                <img src="/img/ofiice.png" width="1792" className="img-office" alt=""/>
            </div>

            <div className="container hero-work">
                <h2>Why work with us</h2>
                <div className="blocks">
                    <div className="block">
                        <span className="badge-purple">Lorem ipsum</span>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="block">
                        <span className="badge-orange">Lorem ipsum</span>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="block">
                        <span className="badge-green">Lorem ipsum</span>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
            <div className="container hero-workers">
                <h2>Our Team</h2>
                <div className="blocks">
                    <div className="block">
                        <img src="/img/avatar1.svg" alt=""/>
                        <h3>Arut Nazaryan</h3>
                        <p>CEO</p>
                    </div>
                    <div className="block">
                        <img src="/img/avatar2.svg" alt=""/>
                        <h3>Gusein Gasanov</h3>
                        <p>COO</p>
                    </div>
                    <div className="block">
                        <img src="/img/avatar3.svg" alt=""/>
                        <h3>Ayaz Shabutdinov</h3>
                        <p>COO</p>
                    </div>
                    <div className="block">
                        <img src="/img/avatar4.svg" alt=""/>
                        <h3>Krutoi Tip</h3>
                        <p>COO</p>
                    </div>
                </div>
            </div>

            <CheckEmail/>

            <Footer/>
        </>
    )
}
