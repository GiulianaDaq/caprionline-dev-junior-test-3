import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import ActorList from './ActorList.jsx'
import MovieList from './MovieList.jsx'
import HeaderHome from './HeaderHome.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* intestazione */}
      <HeaderHome />

    {/* filtri */}
      <App /> 

    {/* lista attori */}
      <ActorList />

    {/* lista film disponibili */}
      <MovieList />

  </React.StrictMode>,
)




