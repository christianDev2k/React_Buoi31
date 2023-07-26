import React from 'react';

const Model = ({ glasses: g }) => {
    return (
        <div className='model relative mx-auto'>
            <img src='./glassesImage/model.jpg' alt='...' className='img-fluid' />
            {g && (
                <div>
                    <div className='glasses-img absolute'>
                        <img src={g.url} alt='' className='img-fluid' />
                    </div>
                    <div className='glasses-info absolute p-4'>
                        <h3 className='text-lg font-bold'>{g.name}</h3>
                        <h3 className='text-base font-semibold'>${g.price}</h3>
                        <p className='text-sm'>{g.desc}...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Model;
