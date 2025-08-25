import "./Authpage.css"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsTelephone } from "react-icons/bs";
import { CiAt } from "react-icons/ci";

function Login() {
    return (
        <div className="main-login">
            <header>
                <div className="logo">BRAPY</div>
            </header>
            <div className="tudo">
                <form className="form-container">
                    <div className="title">
                        <h1>Entrar na Brapy </h1>
                        <p>Use a conta de importador ou transportador</p>
                    </div>
                    <div className="input-box">
                        <input className="input-email" type="text" placeholder="Insira seu e-mail" />
                        <i><HiOutlineMail /> </i>
                    </div>
                    <div className="input-box">
                        <input className="input-password" type="password" placeholder="Insira sua senha" />
                        <i> <RiLockPasswordLine /> </i>
                    </div>
                </form>
                <section>
                    <a href="#">Esqueci minha senha</a>
                    <button>Entrar</button>
                    <a href="#">Crie sua conta grátis</a>
                    <div className="line">
                        <hr /> <span>ou</span> <hr />
                    </div>
                    <div className="line">
                        <button><span><FcGoogle /></span> <span>Entrar com o google</span></button>
                    </div>
                    <div className="line">
                        <button><span><BsTelephone /></span> <span>Entrar com telefone</span></button>
                    </div>
                    <div className="line">
                        <button><span><CiAt /></span> <span>Entrar com nome de usuário</span></button>
                    </div>
                </section>
            </div>
            <footer class="footer">
                <p>© 2025 BRAPY IMPORTAÇÕES. Todos os direitos reservados.</p>
            </footer>
        </div>

    )
}

export default Login;
