import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

import illustationImg from "../assets/images/illustration.svg";
import logoImgDark from "../assets/images/logo-dark.svg";
// import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

// import '../styles/global.scss';
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustationImg}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>tire as dúvidas de sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImgDark} alt="logo da Letmeask" />
          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala existe? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
