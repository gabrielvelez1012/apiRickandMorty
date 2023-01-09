import React from 'react';

const Page = ({page, setPage, quantyPage}) => {
    return (
        <div className='container-button'>
            {page > 1 && <button className='button' onClick={() => setPage(page - 1)}>Anterior</button>}<p>{page} de {quantyPage}</p>{quantyPage > page && <button className='button' onClick={() => setPage(page + 1)}>Siguiente</button>}
        </div>
    );
};

export default Page;