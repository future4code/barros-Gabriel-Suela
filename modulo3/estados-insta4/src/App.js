import React from 'react';
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2'
import Post3 from './components/Post3/Post3'
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post2 
          nomeUsuario={'gabriel'}
          fotoUsuario={'https://picsum.photos/60/60'}
          fotoPost={'https://picsum.photos/300/250'}
          />
          <Post3
          nomeUsuario={'thays'}
          fotoUsuario={'https://picsum.photos/40/20'}
          fotoPost={'https://picsum.photos/320/210'}
          />
  </div>
)

}


export default App;
