import React from 'react';

import axios from 'axios';

import Dimsums from './Dimsums.jsx';

import Restaurants from './Restaurants.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'dimsums',
            dimsums: [],
            filterCategory: null
        }

        this.changeView = this.changeView.bind(this);
        this.renderView = this.renderView.bind(this);
    }

    changeView(option) {
        this.setState({
          view: option
        });
    }

    getDimSums() {
        axios.get('/dimsums')
        .then(response => {
            this.setState({
                dimsums: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getDimSums();
    }

    renderView() {
        const {view} = this.state;
        if (view === 'dimsums') {
          return <Dimsums dimsums={this.state.dimsums} />
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