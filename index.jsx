import { useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css'
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaRegHandshake, FaShieldAlt, FaRegCommentDots, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { TbCreditCard } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
                       <header className="container">
                <div className="logo">BRAPY</div>

                {/* Botão hamburguer visível só no mobile */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                {/* Nav com toggle */}
                <nav className={`link-btt ${menuOpen ? "open" : ""}`}>
                    <ul className="links">
                        <a href="#">Home</a>
                        <a href="#comofunciona">Como Funciona</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#sobre">Contato</a>
                    </ul>
                    <ul className="nav-login">
                        <li><NavLink className="btn-login" to="/login">Login</NavLink></li>
                    </ul>
                    <ul className="nav-cadastro ">
                        <li><button to="/" className="btn-cadastro">Cadastre-se</button></li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                <div className="conteudo">
                    <h1>Conectamos quem precisa importar <br />com quem já está vindo do Paraguai</h1>
                    <p>Importe com confiança e pague menos. Transporte com segurança e ganhe dinheiro extra.<br />O pagamento é protegido e só é liberado após a entrega confirmada.</p>
                    <div className="sou-btn">
                        <button className="sou-importador" onClick={() => window.location.href = "#importador"}>Sou Importador</button>
                        <button className="sou-transportador" onClick={() => window.location.href = "#importador"}>Sou Transportador</button>
                    </div>
                </div>

                <div className="como-funciona" id="comofunciona">
                    <h2>Como Funciona:</h2>
                    <div className="card">
                        <div>
                            <i> <PiNotePencilDuotone /> </i>
                            <p>1. Faça seu pedido, descrevendo loja, cidade de compra e endereço de entrega.</p>
                        </div>
                        <div>
                            <i> <FaRegHandshake /> </i>
                            <p>2. O transportador aceita o pedido e é gerado a ordem de pagamento.</p>
                        </div>
                        <div>
                            <i> <BsChatText /> </i>
                            <p>3. Combine os detalhes com o transportador pelo chat seguro.</p>
                        </div>
                        <div>
                            <i> <TbCreditCard /> </i>
                            <p>4. Efetue o pagamento via Pix ou Cartão de credito (valor fica retido até a entrega).</p>
                        </div>
                    </div>
                </div>
                <div className="seguranca">
                    <h2>Segurança e Confiança:</h2>
                    <div className="card">
                        <div>
                            <i> <FaShieldAlt /> </i>
                            <h4>Identidade verificada</h4>
                            <p>Todos os usuários passam por verificação de identidade para mais segurança.</p>
                        </div>
                        <div>
                            <i> <MdLockOutline /> </i>
                            <h4>Pagamento protegido</h4>
                            <p>O valor só é liberado ao transportador após entrega confirmada.</p>
                        </div>
                        <div>
                            <i> <FaRegCommentDots /> </i>
                            <h4>Chat seguro</h4>
                            <p>Comunicação protegida dentro da plataforma.</p>
                        </div>
                    </div>
                </div>
                <div className="sou-cards" id="importador">
                    <div class="card-importador">
                        <h3>Importador</h3>
                        <p>Conecte-se com transportadores de confiança e realize suas importaçõesde de forma segura e eficiente. Pagamento só após entrega confirmada.</p>
                        <button to="/">Comece agora</button>
                    </div>
                    <div class="card-transportador">
                        <h3>Transportador</h3>
                        <p>Ganhe renda extra transportando produtos de forma segura e organizada. Recebimento imediato após entrega confirmada</p>
                        <button to="/">Comece agora</button>
                    </div>
                </div>
            </main>
            <section className="sobre" id="sobre">
                <div className="sobre-left">
                    <h2>Sobre a BRAPY IMPORTAÇÕES</h2>
                    <p>
                        A <strong>Brapy Importações</strong> conecta você aos melhores produtos do mercado internacional com qualidade, segurança e preço justo. Trabalhamos para simplificar o processo de importação e entregar sempre confiança, agilidade e transparência.</p>
                    <div className="icons-sociais">
                        <FaWhatsapp />
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                        <AiOutlineTikTok />
                    </div>
                <h6>CNPJ: 00.000.000/0000-00</h6>
                </div>
                <div className="sobre-right">
                    <a href="#termos">Termos de Uso</a>
                    <a href="#privacidade">Política de Privacidade</a>
                    <a href="#contato">Contato</a>
                </div>
            </section>
            <footer class="footer">
                <p>© 2025 BRAPY IMPORTAÇÕES. Todos os direitos reservados.</p>
            </footer>
        </div >
    )
}

export default Home;
