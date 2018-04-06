import React, { Component } from 'react';
import './App.css';
import guides from './guides.json';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';

class App extends Component {
  state = {
    guides: guides,
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Button color="success" onClick={() => { GetWeather() }}>Get Weather</Button>
        <GuideCards />
      </div>
    );
  }
}

function Header(){
  return(
    <header className="App-header">
        <h1 className="App-title">Wide World Travel Guides Pt. 2</h1>
      </header>
  )
}

function GetWeather(){
  return(
    console.log("Weather")
  )
}

// class GuideCardList extends Component{
//   render(){
//     const guides = this.props.guides.map((guide) => {
//       <GuideCards 
//         key={guide.key}
//         type={guide.type}
//         title={guide.title}
//         price={guide.price}
//       />
//     })
//     return(
//       {guides}
//     )
//   }
// }

function GuideCards(){
  return (
  <div className="Card-body">
        <Row>
          {
            guides.map(function(guide){
              return (
              <Col sm="4">
              <Card className="Card">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{guide.title} </CardTitle>
                  <CardSubtitle>{guide.type}</CardSubtitle>
                  <CardText>${guide.price}</CardText>
                  <Button onClick={() => { LogThis(guide)}}>Button</Button>
                </CardBody>
              </Card>
              </Col>
             )
            })
          }
        </Row>
        </div>
  )
}

function LogThis(props){
  return(
    console.log(props)
  )
}

export default App;
