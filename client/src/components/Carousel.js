import React from "react";
import Carousel from 'nuka-carousel';
import Homepage from "./Homepage";
 
class Carousel extends Component {
  renderHomepagePics = () => (
    this.props((Homepage) => (
      <div>
        <img src="https://th.bing.com/th/id/OIP.yfJU6G365Dk9y1v8lAIFVgHaEK?w=300&h=168&c=7&o=5&dpr=2.25&pid=1.7" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://th.bing.com/th/id/OIP.Q8S4AyT36urIO7Z0SUZLBQHaE8?w=256&h=169&c=7&o=5&dpr=2.25&pid=1.7" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://th.bing.com/th/id/OIP.Fhw8zXczBWhBvOddkfcfEAHaEK?w=300&h=168&c=7&o=5&dpr=2.25&pid=1.7" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=4fV1V47r&id=28B61C2596C8C7D5EE8F7C818253D67AF729D5AF&thid=OIP.4fV1V47rr93VcdUbvYPhxQHaE8&mediaurl=http%3a%2f%2fcbsla.files.wordpress.com%2f2013%2f09%2f3371092.jpg%3fw%3d1500&exph=1003&expw=1500&q=shaquille+o%27neal&simid=607987250838704028&selectedIndex=0" alt="hamepageimg" className="ui big fluid image" />
        <img src="https://th.bing.com/th/id/OIP.i_0_S3NloEsM7ULsYC-HawHaEK?w=299&h=168&c=7&o=5&dpr=2.25&pid=1.7" alt="hamepageimg" className="ui big fluid image" />
      </div>
    )
  )

  render() {
    return (
      <Container fluid style={{height: '86vh', margin: "auto"}}>
        <Carousel>
        {this.renderHomepagePics}
        </Carousel>
      </Container>
  }
}

export default Carousel;