import React from 'react';

import Dimsum from './Dimsum.jsx'

const Dimsums = ({dimsums, type}) => {
    if (dimsums.length) {
        return (
            <div>
                <h2 className="dimsum-category-title">{type}</h2>
                <hr />
                {dimsums.map(dimsum => <Dimsum dimsum={dimsum} key={dimsum._id}/>)}
            </div>
        )
    } else {
        return <div>No dim sums found :(</div>
    }
}

export default Dimsums;

