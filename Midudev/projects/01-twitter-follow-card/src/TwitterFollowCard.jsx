import './App.css'
import {useState} from 'react'



export default function TwitterFollowCard({isFollowing ,username,name,avatar}){
  console.log(isFollowing)

  const [follow, setFollow] = useState(isFollowing)

  const addAt = (username) => {
    return `@${username}`
  }

  const handleFollow = () => {
    setFollow(!follow)
  }

  const textFollowButton = follow ? 'Siguiendo' : 'Seguir'
  const classFollowButton = follow ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return (
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' 
          src={`https://unavatar.io/google/${avatar}`}
          alt="Avatar" />
          <div className='tw-followCard-info'>
            <strong>
              {name}
            </strong>
            <span className='tw-followCard-infoUserName'>{addAt(username)}</span>
          </div>
        </header>

        <aside>
          <button className={classFollowButton} 
            onClick={handleFollow}>
            <span className='tw-followCard-text'>
              {textFollowButton}
            </span>
            <span className='tw-followCard-stopFollow'>
              Dejar de Seguir
            </span>
          </button>
        </aside>
       </article>
    )
}