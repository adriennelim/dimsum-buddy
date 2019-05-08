import React from 'react';

const Restaurants = (props) => (
    <div>
        <input type="text" className="search-bar" value=" Seattle" />
        <button className="search-button">Search</button>
        <div className="restaurant-map-container">
            <div className="restaurant-container">
                <h2 className="restaurant-category-title">Top Restaurants in Seattle, WA</h2>
                <img className="mock-restaurants" src="https://i.imgur.com/OG2Ngiv.png" alt="Placeholder image of restaurants" />
            </div>
            <div className="map-container">
                <img className="mock-map" src="https://i.imgur.com/F6worlk.png" alt="Placeholder image of google maps" />
            </div>
        </div>
    </div>
)

export default Restaurants;