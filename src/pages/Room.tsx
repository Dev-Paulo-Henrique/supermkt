import '../styles/room.scss'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button';
import { useHistory, useParams } from 'react-router-dom'
//import Swal from 'sweetalert2'
import { auth } from '../services/firebase'
import Envelope from '../assets/images/envelope.svg'
import Bell from '../assets/images/bell.svg'
import List from '../assets/images/list.svg'

type RoomParams = {
  id: string;
}

export function Room() {
  const history = useHistory()
  const { user } = useAuth()

  async function play() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams<RoomParams>()
    const roomId = params.id
    await  history.push(`/play/${roomId}`)
  }

  async function exit() {
    auth.signOut().then(() => {
      console.log('Usuário desconectado')
    })
    await  history.push('/')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : ('')}
          </div>
          <div className="btn">
          <Button onClick={play}>Play</Button>
          <Button onClick={exit}>Sair</Button>
          <img src={Envelope} alt="Envelope"/>
          <img src={Bell} alt="Bell"/>
          <img src={List} alt="List"/>
          </div>
        </div>
      </header>
      <div className="matter">
        <nav>
        <div className="together">
        <div className="content">
        <div className="background one"></div>
            <a href="/matter/ciencias-da-natureza">
              Ciências da Natureza
              </a>
              </div>
              <div className="content">
              <div className="background two"></div>
            <a href="/matter/ciencias-da-natureza">
              Ciências Humanas
              </a>
              </div>
              <div className="content">
              <div className="background three"></div>
            <a href="/matter/liguagens-codigos-e-suas-tecnologias">
              Liguagens, Códigos e suas Tecnologias
              </a>
              </div>
              <div className="content">
              <div className="background four"></div>
            <a href="/matter/matematica-e-suas-tecnologias">
              Matemática e suas tecnologias
              </a>
              </div>
              <div className="content">
              <div className="background five"></div>
            <a href="/matter/redacao">
              Redação
              </a>
              </div>
              </div>
        </nav>
        <div className="xp">
        <aside>
        <div className="background"></div>
          Experience
          </aside>
          <div className="load">
          <div className="loading">
          <div className="indicator"></div>
          </div>
          
          </div>
         <div className="space">
         <span className="zero">0</span>
         <span className="hundred">100</span>
         </div>
        </div>
      </div>
      <fieldset>
        <ul>
          <li className="main">
            <div className="content">
              <div className="together">
              <div className="background"></div>
            <h1 className="type">Linguagens, Códigos e suas Tecnologias</h1>
              </div>
            <div className="heart"></div>
            </div>
            <strong className="title">Inglês</strong>
            <p className="text">In ancient Rome, there was the habit of celebrating the birthday of a person. There weren’t parties like we know today, but cakes were prepared and offers were made. Then, the habits of wishing happy birthday, giving gifts and lighting candles became popular as a way to protect the birthday person from devils and ensure good things to the next year in the person’s life. The celebrations only became popular like we know today after fourteen centuries, in a collective festival performed in Germany.</p>
          </li>
        </ul>

      </fieldset>

    </div>

  );
}