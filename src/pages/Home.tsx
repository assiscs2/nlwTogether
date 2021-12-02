import illustationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
    return (
        <div>
            <aside>
                <img src={ illustationImg } alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>tire as dúvidas de sua audiência em tempo-real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="logo da Letmeask" />
                    <button>
                        <img src={ googleIconImg } alt="log do Google" />
                        Crie sua sala com o Google
                    </button>

                    <div> ou entre em uma sala</div>

                    <form>
                        <input 
                        type="text" 
                        placeholder="digite o código da sala"                        
                        />

                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}