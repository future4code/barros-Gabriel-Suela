import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  
  const [postagens, setPostagens] = useState([
    {nome:'paulinha', img:'https://picsum.photos/50/50', msg:'https://picsum.photos/200/150'},
    {nome:'gabriel', img:'https://picsum.photos/60/60', msg:'https://picsum.photos/300/250'},
    {nome:'thays', img:'https://picsum.photos/40/20', msg:'https://picsum.photos/320/210'}])
  const [name, setName]= useState('')
  const [pic, setPic]= useState('')
  const [msg, setMsg]= useState('')

  const postsMap = postagens.map((item, index) => {return (
  <Post key={index}
  nomeUsuario={item.nome} 
  fotoUsuario={item.img} 
  fotoPost={item.msg}
  />
  )})

  const handleName = (e) =>{
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  const handleImg = (e) => {
    e.preventDefault()
    setPic(e.target.value)
    console.log(pic)
  }


  const handlePost = (e) => {
    e.preventDefault()
    setMsg(e.target.value)
    console.log(msg)
  }


  const handleClick = (e) => {
    e.preventDefault()
    const newPosts = [...postagens,{nome:name, img:pic, msg:msg}]
    setPostagens(newPosts)
    setName('')
    setPic('')
    setMsg('')
  }


return(
  <div className='MainContainer'>
    <div className='form' action=''>
      <form>
        <label htmlFor='name'>Nome: </label>
        <input 
        type='text' 
        name='name' 
        value={name}
        placeholder='Digite seu nome' 
        onChange={handleName} />
        
        <label htmlFor='foto'>Foto: </label>
        <input 
        type='text'
        name='foto'
        value={pic}
        placeholder='Insira a foto de perfil'
        onChange={handleImg} />

        <label htmlFor='post'>Post: </label>
        <input
        type='text'
        name='post'
        value={msg}
        placeholder='Insira a foto do post'
        onChange={handlePost} />

      </form>
      <button className ='btn'
      onClick={handleClick}>Enviar</button>
    </div>
  <ul>
     {postsMap}
  </ul>
   
    
  </div>
)

}


export default App;
