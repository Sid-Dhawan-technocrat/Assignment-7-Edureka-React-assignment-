import React, { Component } from 'react';
import wallpaper from '../../Images/homepageimg.png'
import { Link } from 'react-router-dom';
import '../../styles/style.css'
export default class Wallpaper extends Component {
    constructor(){
        super();
        this.state={
            locations:[],
            restaurants:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8989/location',{method:'GET'})
        .then(responce=>responce.json())
        .then(data=>this.setState({ locations:data.data}))
    }

    fetchrestaurants=(event)=>{
        fetch(`http://localhost:8989/getRestaurantByCity/${event.target.value}`,{method:'GET'})
        .then(responce=>responce.json())
        .then(data=>this.setState({restaurants:data.data}))
    }
    render() {
        let locations = this.state.locations.length && this.state.locations.map(item=><option key={item.name} value={item.city_id}>{item.name}</option>)
        let restaurantslist = this.state.restaurants.length && <ul>{this.state.restaurants.map(item=><li key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link></li>)}</ul>
        return (
            <div>
                <img src={wallpaper} width="100%" height="450" />
                <div>
                    <div className="logo">
                        <p className='text-center ps'>e!</p>
                    </div>
                    <div className="headings">
                        Find the best restaurants, cafes, bars
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown" onChange={this.fetchrestaurants}>
                            <option value="0" defaultValue="selected" disabled>Select</option>
                            {locations}
                        </select>

                        <div className='input'>
                            <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
                            <span className="glyphicon glyphicon-search search"></span>
                            {restaurantslist}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
