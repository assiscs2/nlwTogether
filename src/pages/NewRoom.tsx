import { Link } from "react-router-dom";

import illustationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
// import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from '../components/Button';

// import '../styles/global.scss';
import '../styles/auth.scss';


export function NewRoom() {
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

                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input 
                        type="text" 
                        placeholder="Nome da sala"                        
                        />

                        <Button type="submit">Criar sala</Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existe? <Link to="/">clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )
}