
import './App.css'
import {Suspense} from 'react'
import Navbar from './components/navbar/Navbar'
import Players from './components/homepage/players/Players'
const fetchPlayers = async () => {
  const result = await fetch('/data.json');
  return result.json();
  // return fetch('/data.json').then(res => res.json()) 
}
function App() {
  
  const playersPromise = fetchPlayers();
  // console.log(playersPromise)
  return (
    <>
      <Navbar/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <Players playersPromise = {playersPromise}/>
      </Suspense>

    </>
  )
}

export default App
