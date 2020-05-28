import React from "react";

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
            <img src="https://th.bing.com/th/id/OIP.e-AHmIwIQIzStTSqhfGwCwHaDZ?pid=Api&rs=1" alt="hamepageimg" className="ui big fluid image" />
          </div>
          <div className="four wide column">
              <h6>Features</h6>
              <ul>
                <li>Add Players</li>
                <li>Delete Player</li>
                <li>Player Stats</li>
                <li>Team Stats</li>
              </ul>
              <h6>Technology used</h6>
              <ul>

                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>REACT</li>
                  <li>MongoDB</li>

              </ul>
              <h6>Team Members</h6>
              <ul>
                <li>ADeola</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Homepage;