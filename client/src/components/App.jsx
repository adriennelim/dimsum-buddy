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
            dimSumType: 'All Dim Sums'
        }

        this.changeView = this.changeView.bind(this);
        this.renderView = this.renderView.bind(this);
        this.filterDimSumType = this.filterDimSumType.bind(this);
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

    filterDimSums(allDimSums, category) {
       return allDimSums.filter(dimsum => {
           return dimsum.category.includes(category)
       }) 
    }

    filterDimSumType(e) {
        this.setState({ dimSumType: e.target.value })
    }

    componentDidMount() {
        this.getDimSums();
    }

    renderView() {
        const {view} = this.state;
        if (view === 'dimsums') {
            let allDimSums = this.state.dimsums;
            if (this.state.dimSumType !== 'All Dim Sums') {
                allDimSums = this.filterDimSums(allDimSums, this.state.dimSumType)
            }
            let steamed = this.filterDimSums(allDimSums, 'steamed')
            let fried = this.filterDimSums(allDimSums, 'fried')
            let dessert = this.filterDimSums(allDimSums, 'dessert')
            return (
                <div>
                    <div className='reviewToolbar'>
                        <select onChange={this.filterDimSumType}>
                            <option value='All Dim Sums'>All Dim Sums</option>
                            <option value='classic'>Classic</option>
                            <option value='vegetarian'>Vegetarian</option>
                            <option value='feeling adventurous'>Feeling Adventurous?</option>
                            <option value='buns'>Buns</option>
                            <option value='dumplings'>Dumplings</option>
                            <option value='rolls'>Rolls</option>
                        </select>
				    </div>
                    {steamed.length ? <Dimsums dimsums={steamed} type={'Steamed Dishes'} /> : null}
                    {fried.length ? <Dimsums dimsums={fried} type={'Fried Dishes'} /> : null}
                    {dessert.length ? <Dimsums dimsums={dessert} type={'Desserts'} /> : null}
                </div>
            )
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