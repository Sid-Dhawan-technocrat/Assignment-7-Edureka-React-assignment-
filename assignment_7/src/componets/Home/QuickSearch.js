import React, { Component } from 'react'
import Mealtype from './Mealtype';

export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealtype: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8989/mealtype', { method: 'GET' })
      .then(responce => responce.json())
      .then(data => this.setState({ mealtype: data.data }))
  }
  render() {
    let mealtype = this.state.mealtype.length && this.state.mealtype.map(item =><Mealtype key={item.name} item={item}></Mealtype>)
    return (
      <div className="quicksearch">
        <p className="quicksearchHeading">
          Quick Searches
        </p>
        <p className="quicksearchSubHeading">
          Discover restaurants by type of meal
        </p>
        <div className="container-fluid" id='sd'>
          <div className='row'>
            {mealtype}
          </div>
        </div>
      </div>
    )
  }
}
