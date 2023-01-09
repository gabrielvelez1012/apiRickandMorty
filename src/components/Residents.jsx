import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({url}) => {

    const [residents, setResidents] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setResidents(res.data))
    }, [])

    //console.log(residents);
    let statusArray = []
    const status = () => {
        
        if (residents.status === "Alive"){
            statusArray.push("chartreuse", "Vivo") 
        }else if (residents.status === "Dead"){
            statusArray.push("red", "Muerto")  
        }else{
            statusArray.push("grey", "Sin información") 
        }
        return statusArray
    }
    status()
    //console.log(statusArray);

    return (
        <div className='residents-card'>
            <div className='img-residents'>
                <img src={residents.image} alt="" />  
            </div>
            <div className='residents'>
                
            <h2>{residents.name}</h2>
            <div className='container-status'>
                <div className='status'>
                <div style={{backgroundColor: statusArray[0]}}></div><p>{statusArray[1]}</p>
                </div>
                
            </div>  
            <p><strong>Especie: </strong>{residents.species}</p>
            <p><strong>Origen: </strong>{residents.origin?.name}</p>
            <p><strong>Episodios: </strong>{residents.episode?.length}</p>  
            </div>
                  
        </div>
    );
};

export default Residents;