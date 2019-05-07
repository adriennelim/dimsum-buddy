import React from 'react';

const Dimsum = ({dimsum}) => {
    return (
        <div className="dimsum-container">
            <div className="dimsum-image-container">
                <img className="dimsum-image" src={dimsum.image_url} alt={`Photo of ${dimsum.name}`} />
            </div>
            <div className="dimsum-text-container">
                <div className="dimsum-title">{dimsum.name}</div>
                <div className="dimsum-chinese-chars">{dimsum.chars}</div>
                <div className="dimsum-pseudo-canto">Pronunciation: {dimsum.pseudo_canto_pronunciation}</div>
                <div className="dimsum-description">Description: {dimsum.description}</div>
                <br />
                <div className="dimsum-other-names">Also known as: {dimsum.other_names}</div>
            </div>
        </div>
)}

export default Dimsum;