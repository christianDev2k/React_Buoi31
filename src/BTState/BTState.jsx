import React, { useState } from 'react';
import './style.scss';
import Model from './Model';
import ListClasses from './ListGlasses';
import DataGlasses from './data.json';

const BTState = () => {
    const [glasses, setGlasses] = useState(DataGlasses[0]);
    return (
        <div className='sm:container mx-auto'>
            <div className='max-w-screen-lg mx-auto grid grid-rows-2'>
                <div className='mt-5 grid grid-cols-2'>
                    <div>
                        <Model glasses={glasses} />
                    </div>
                    <div>
                        <Model />
                    </div>
                </div>
                <div>
                    <div className='col-span-2'>
                        <ListClasses DataGlasses={DataGlasses} setGlasses={setGlasses} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BTState;
