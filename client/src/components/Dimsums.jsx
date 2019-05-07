import React from 'react';

import Dimsum from './Dimsum.jsx'

const Dimsums = ({dimsums}) => {
    if (dimsums.length) {
        return (
            <div>
                {dimsums.map(dimsum => <Dimsum dimsum={dimsum} key={dimsum._id}/>)}
            </div>
        )
    } else {
        return <div>Loading dim sums...</div>
    }
}

export default Dimsums;

