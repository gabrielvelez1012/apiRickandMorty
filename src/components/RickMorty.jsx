import React, { useEffect, useState } from 'react';
import axios from "axios"
import Location from './Location';
import Residents from './Residents';
import Page from './Page';

const RickMorty = () => {

    const [rmLocation, setRmLocation] = useState({})

    useEffect(()  => {
        const idLocation = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(res => setRmLocation(res.data))
    }, [])

    //console.log(rmLocation.residents);

    const [searchLocation, setSearchLocation] = useState("")

    const search = () =>{
        if(searchLocation <= 126){
            axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
        .then(res => setRmLocation(res.data))
        setSearchLocation("")
        }else{
            alert("El id ingresado es incorrecto")
        }
        
    }

    const [page, setPage] = useState(1)
    const perPage = 4
    const quantyPage = Math.ceil(rmLocation.residents?.length / perPage)
    const firstIndex = (page-1)* perPage
    console.log(quantyPage);

    const residents = rmLocation.residents?.slice(firstIndex, firstIndex + perPage)


    return (
        <div className='search'>
            <input className='input' type="number" min={1} max={126} 
            value={searchLocation} onChange={(e) => 
            setSearchLocation(e.target.value)} 
            placeholder='Ingrese un número'/>

            <button className='button-search' onClick={search}>Buscar</button>
            <Location rm={rmLocation} />
            <Page page={page} setPage={setPage} quantyPage={quantyPage} />
            { residents?.map((rm) => (
                <Residents url={rm} key={rm}/>
            ))
                
            }   
        </div>
    );
};

export default RickMorty;