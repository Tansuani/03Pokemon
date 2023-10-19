import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
    const [pokemones, setPokemones] = useState([])
    const [pokemonesSelected, setPokemonesSelected] = useState('')
    const navigated = useNavigate()

    const url = 'https://pokeapi.co/api/v2/pokemon'
    const getPokemons = async () => {
        const rest = await fetch(url)
        const { results } = await rest.json()
        setPokemones(results)
    }

    const goToPokemonDetails = () => {
        pokemonesSelected ? navigated(`/pokemons/${pokemonesSelected}`)
        : alert('Debes seleccionar tu pokemon')
    }
    useEffect(() => {
        getPokemons()
    },[])


    return (
        
        <div className="mt -5 text-center" >

            <h1>Selecciona un pokemon</h1>

            <div className="col -5 col -sm-3 col -lg-2 mx -auto">

                <select className="form-select text-center" defaultValue=""
                 onChange={({ target }) => setPokemonesSelected(target.value)}>

                    <option value="" disabled>---</option>
            
                    {pokemones.map(({ name}, i) => (

                        <option key={i} value= {name} >{name}
                        </option>

                    ))}
                </select>

                <button
                    onClick= {goToPokemonDetails}
                    variant="dark"
                    className="mt-3">
                        Buscar
                </button>
            </div>
        </div>
    )
}
export default Pokemons