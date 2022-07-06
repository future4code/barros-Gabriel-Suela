import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  
  const postagens = [
    {nome:'paulinha', img:'https://picsum.photos/50/50', msg:'https://picsum.photos/200/150'},

    {nome:'gabriel', img:'https://picsum.photos/60/60', msg:'https://picsum.photos/300/250'},

    {nome:'thays', img:'https://picsum.photos/40/20', msg:'https://picsum.photos/320/210'}
  
  ]

  console.log(postagens)
  const postsMap = postagens.map((item) => {return (
  <Post 
  nomeUsuario={item.nome} 
  fotoUsuario={item.img} 
  fotoPost={item.msg}
  />

  )})

return(
  <div className='MainContainer'>
    {postsMap}
    
  </div>
)

}


export default App;
