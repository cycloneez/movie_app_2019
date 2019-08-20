import React from 'react';
import PropTypes from 'prop-types'

const foodList = [
  {
    id: 1,
    name: "kimchi",
    img: "http://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: "5.0"
  },
  {
    id: 2,
    name: "ramen",
    img: "http://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: "3.9"
  },
  {
    id: 3,
    name: "gogi",
    img: "http://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: "4.5"
  }
];


function Food({ name, picture, rating }) {
  return <div>
    <h1> I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

function App() {
  return <div>
    {foodList.map(dish => <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating} />)}
  </div >;
}

export default App;
