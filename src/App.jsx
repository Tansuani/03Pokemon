import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import Details from './views/Details'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemons"
          element={<Pokemons />}
        />
        <Route
          path="/pokemons/:name"
          element={<Details />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
