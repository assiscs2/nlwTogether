import illustationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from '../components/Button';

// import '../styles/global.scss';
import '../styles/auth.scss';


export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={ illustationImg } alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>tire as dúvidas de sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logo da Letmeask" />
                    <button className="create-room">
                        <img src={ googleIconImg } alt="log do Google" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separator"> ou entre em uma sala</div>

                    <form>
                        <input 
                        type="text" 
                        placeholder="digite o código da sala"                        
                        />

                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}