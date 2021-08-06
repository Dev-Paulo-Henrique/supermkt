import logoImg from '../assets/images/logo.svg'
import '../styles/room.scss'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button';

export function Room() {
  const {user} = useAuth()

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask"/>
          <form action="">
          <input type="search" name="" id="" />
          <Button>Buscar</Button>
          </form>
          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : ('') }
          </div>
        </div>
      </header>
      <main className="content">
        {user?.name}
      </main>
    </div>
    
  );
}