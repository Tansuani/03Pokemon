import { useParams } from 'react-router-dom'
import CardPoke from '../components/CardPoke'
import { useEffect, useState } from 'react'

const Details = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState({})

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const getPokemon = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`)
      if (!res.ok) {
        throw new error('Network response was not ok')
      }

      const data = await res.json()
      const src = data.sprites.other.dream_world.front_default
      const stats = data.stats.map(stat => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }))
      const types = data.types.map(({ type }) => type.name).join(' - ')
      setPokemon({ name, stats, src, types })
    } catch (error) {
      console.log(Error)
    }
  }
  useEffect(() => {
    getPokemon(name)
  }, [name])
  return <CardPoke pokemon={pokemon} />
}
export default Details
