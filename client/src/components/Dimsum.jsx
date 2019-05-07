import React from 'react';

const Dimsum = ({dimsum}) => {
    return (
        <div className="dimsum-container">
            <div className="dimsum-image-container">
                <img className="dimsum-image" src={dimsum.image_url} alt={`Photo of ${dimsum.dimsum}`} />
            </div>
            <div className="dimsum-text-container">
                <div className="dimsum-title">{dimsum.dimsum}</div>
                <div className="dimsum-chinese-chars">{dimsum.chars}</div>
                <div className="dimsum-pseudo-canto">{dimsum.pseudo_canto_pronunciation}</div>
                <div className="dimsum-description">{dimsum.description}</div>
                <div className="dimsum-other-names">{dimsum.other_names}</div>
                <hr />
            </div>
        </div>
)}

export default Dimsum;