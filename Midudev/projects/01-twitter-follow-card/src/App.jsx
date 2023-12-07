import TwitterFollowCard from "./TwitterFollowCard"


export default function App() {
  const users =[
    {
      username: 'netflix',
      name: 'Netflix',
      avatar: 'netflix.com',
      isFollowing: true
    },
    {
      username: 'google',
      name: 'Google',
      avatar: 'google.com'
    },
    {
      username: 'pokemon',
      name: 'Pokemon',
      avatar: 'pokemon.com'
    },
    {
      username: 'twitter',
      name: 'Twitter',
      avatar: 'twitter.com'
    },
    {
      username: 'twitch',
      name: 'Twitch',
      avatar: 'twitch.com'
    }
  ]
  return (
    <section className='tw-followCard-container'>
      {
        users.map((user) => {
          return (
            <TwitterFollowCard 
              key={user.username}
              username={user.username}
              name={user.name}
              avatar={user.avatar}
              isFollowing={user.isFollowing}
            />
          )
        })
      }

    </section>
  )
}