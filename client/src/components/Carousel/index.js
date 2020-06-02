import React, { Component } from 'react';
import {Container} from "semantic-ui-react"
import Carousel from 'nuka-carousel';
 
class Slider extends Component {
  render() {
    return (
      <Container fluid style={{height: '86vh', margin: "auto"}}>
        <Carousel>
        <img src="https://wallpapercave.com/wp/wp5591840.jpg" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://wallpapercave.com/wp/wp6151942.jpg" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://wallpapercave.com/wp/wp2415922.jpg" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://wallpapercave.com/wp/wp3985992.jpg" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://wallpapercave.com/wp/7ui3aDh.jpg" alt="hamepageimg" className="ui big fluid image" />
        </Carousel>
      </Container>
    )
  }
}

export default Slider;
