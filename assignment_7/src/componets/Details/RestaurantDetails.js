import React, { useEffect ,useState} from 'react'
import Header from '../Common/Header'
import img from '../../Images/breakfast.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {  useParams } from 'react-router-dom';


export default function RestaurantDetails() {
  let { rName } = useParams();
  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8989/getRestaurantByName/${rName}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>setRestaurant(data.data[0]))
  }, [])
  const{name,thumb,cost,address,Cuisine,}=restaurant
  const cuisinelist= !(Cuisine == undefined) && Cuisine.length && <ul>{Cuisine.map(item=><li key={item.name}>{item.name}</li>)}</ul>
  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        <img className='image shadow' src={thumb} />
      </div>
      <div>
        <h2 className='mt-4 ms-4'>{name}</h2>
      </div>

      <div className="mx-5">
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Contact</Tab>
          </TabList>

          <TabPanel>
            <div>About the place</div>
            <div>Cuisine</div>
            {cuisinelist}
            <div>Average Cost</div>
            <div>&#8377;{cost}</div>
          </TabPanel>

          <TabPanel>
           <div>Phone Number</div>
           <div>+91 7709272504</div>
           <div>{address}</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}