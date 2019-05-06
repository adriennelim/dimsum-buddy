import React from 'react';

import Dimsums from './Dimsums.jsx';

import Restaurants from './Restaurants.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'dimsums',
            category: null
        }

        this.changeView = this.changeView.bind(this);
        this.renderView = this.renderView.bind(this);
    }

    changeView(option) {
        this.setState({
          view: option
        });
    }

    renderView() {
        const {view} = this.state;
        if (view === 'dimsums') {
          return <Dimsums />
        } else if (view === 'restaurants') {
          return <Restaurants />
        } 
    }

    render() {
        return (
            <div className="dim-sum-buddy">
                <div className="nav-bar">
                    <span className="logo"
                        onClick={() => this.changeView('dimsums')}>
                        Dim Sum Buddy
                    </span>
                    <span className={this.state.view === 'dimsums'
                        ? 'nav-selected' : 'nav-unselected'}
                        onClick={() => this.changeView('dimsums')}>
                        Dim Sums
                    </span>
                    <span className={this.state.view === 'restaurants'
                        ? 'nav-selected': 'nav-unselected'}
                        onClick={() => this.changeView('restaurants')}>
                        Restaurants
                    </span>
                </div>

                <div className="main">
                    {this.renderView()}
                </div>
            </div>
        )
    }
}

export default App;