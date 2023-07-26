import React from 'react';

const ListClasses = ({ DataGlasses, setGlasses }) => {
    const handleSetGlasess = glasses => {
        setGlasses(glasses);
    };
    return (
        <div className='mt-5 bg-white p-5 grid grid-cols-6 gap-3'>
            {DataGlasses.map(g => (
                <div key={g.id} onClick={() => handleSetGlasess(g)}>
                    <img src={g.url} alt='...' className='img-fluid cursor-pointer' />
                </div>
            ))}
        </div>
    );
};

export default ListClasses;
