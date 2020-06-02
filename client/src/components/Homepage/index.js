import React from "react";
import Slider from '../Carousel'

class Homepage extends React.Component {
  render(){
    return(
      <div className="homapgecontainer ui grid">
        <div className="row">
          <div className="column">
            <h1>Welcome to Sports team Management System</h1>
          </div>
        </div>
        <div className="row">
          <div className="twelve wide column">
            <Slider/>
            {/* <img src="https://cdn.pixabay.com/photo/2015/09/09/20/33/basketball-933173_1280.jpg" alt="hamepageimg" className="ui big fluid image" /> */}
          </div>
          <div className="four wide column">
              <h2>Features</h2>
              <ul>
                <li>Create Teams</li>
                <li>View Player Details</li>
                <li>Get Estimate Fantasy Points</li>
                <li>View Your Created Teams</li>
                <li>Delete Your Created Teams</li>
              </ul>
              <h3>Team Members</h3>
              <ul>
                <li>Adeola</li>
                <li>Erik</li>
                <li>Terence</li>
                <li>David</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Homepage;
