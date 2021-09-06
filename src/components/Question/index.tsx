import './styles.scss' 
import { ReactNode } from 'react'
import Swal from 'sweetalert2'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'

type QuestionProps = {
  content:  string;
  title: string;
  type: string;
  id: string;
  author: string;
  createdAt: string;
  children?: ReactNode;
}

export function Question({
  content ,
  type ,
  title,
  createdAt,
  author,
  id,
}: QuestionProps) {
  const {user} = useAuth()
  function capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(id)
  }
  async function fav() {
    await database.ref(`users/${user?.name}/fav`).push({
      id,
      title,
      type,
      createdAt,
      author,
      content
    })
    Swal.fire({
      title: 'Adicionado aos favoritos',
      showConfirmButton: false,
      icon: 'success',
      timer: 1000,
    })
  }
  return (
    <ul>
          <li className="main fav">
            <div className="content">
              <div className="together">
            <h1 className="type">{type} 
            <span> - {createdAt}</span>
            </h1>
              </div>
            <div className="heart" id="heart"  onClick={fav}></div>
            </div>
            <strong className="title">{capitalizeFirstLetter(title)}</strong>
            <p className="text">{capitalizeFirstLetter(content)}</p>
            <div className="author">
              <span className="author">Autor:
              <span>{author}</span>
              </span>
            <span className="id">ID da postagem: 
            <span onClick={copyRoomCodeToClipboard}>{id}</span>
            </span>
            </div>
          </li>
        </ul>
  );
}