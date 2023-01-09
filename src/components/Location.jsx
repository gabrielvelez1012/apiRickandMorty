import React from 'react';

const Location = ({rm}) => {
    return (
        <div className='card-location'>
            <div className='location'>
            <p className='description'><strong>Nombre: <br></br></strong>{rm.name}</p>
            <p className='description'><strong>Tipo: <br></br></strong>{rm.type}</p>
            <p className='description'><strong>Dimensión: <br></br></strong>{rm.dimension}</p>
            <p className='description'><strong>Población: <br></br></strong>{rm.residents?.length}</p>
            </div>
            
        </div>
    );
};

export default Location;