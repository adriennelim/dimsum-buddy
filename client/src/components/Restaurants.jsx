import React from 'react';

const Restaurants = (props) => (
    <div>
        <input type="text" className="search-bar" value=" Seattle" />
        <button className="search-button">Search</button>
        <div className="restaurant-map-container">
            <div>
                <h2 className="restaurant-category-title">Top Restaurants in Seattle, WA</h2>
                <img src="https://i.imgur.com/OG2Ngiv.png" alt="Placeholder image of restaurants" />
            </div>
            <div>
                <img src="https://i.imgur.com/F6worlk.png" alt="Placeholder image of google maps" />
            </div>
        </div>
    </div>
)

export default Restaurants;