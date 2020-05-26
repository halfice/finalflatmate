
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Suspense, Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Header } from "./header/header";
import Footer from "./footer/footer";
import Bodycards from "./bodycards";
import Loginsecion from './loginsecion'
import { Rating } from "./rating";
import Looking from './lookingforroom';
import RoomOwner from './roomowner';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import axios from 'axios';
import imageCompression from 'browser-image-compression';




class bodycards extends Component {


  constructor(props) {
    super(props);
    this.state = {
      ObjectArray: [],
      ObjectArrayTenant: [],

    }
  }

  componentDidMountme() {
    axios
      .get('http://localhost:4000/cardtenants/')
      .then(res => {
      
        this.setState({
          ObjectArrayTenant: res.data,
        });

      })
      .catch(err => {
        console.log("Error in Getting Card!" + err);
      });





      
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/card/')
      .then(res => {
        // console.log(res);
        this.setState({
          ObjectArray: res.data,
        });
this.componentDidMountme();
      })
      .catch(err => {
        console.log("Error in Getting Card!" + err);
      });






  }

  render() {


    


    var SubProjectArrays = this.state.ObjectArray.map((item, i) => {
      return (<div >
 <div className="col-sm-3 ">
        <Card style={{ width: '18rem' }}>
          <Card.Img width="120px" height="120px" variant="top" src={item["picstring"]} />
          <Card.Body>
            <Card.Title>{item["typeofAccomodation"]}</Card.Title>
            <Card.Text>
              {item["typeofAccomodation"]}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>);
    });

    var SubProjectArrays2 = this.state.ObjectArrayTenant.map((item, i) => {
      return (<div >
 <div className="col-sm-3 ">
        <Card style={{ width: '18rem' }}>
          <Card.Img width="120px" height="120px" variant="top" src={item["picstring"]} />
          <Card.Body>
            <Card.Title>{item["Area"]}</Card.Title>
            <Card.Text>
              {item["abouturselfparagraph"]}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>);
    });





    return (

      
          <div className="container-fluid">
            <div className="row" >
             

                {SubProjectArrays}
                {SubProjectArrays2}
           
            </div>
          </div>
        

          );
        }
      
      }
      
      export default withTranslation()(bodycards);
      
      /*
function bodycards() {
    return (
<div className="divwithuppermargin" >
            <Card >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


            <Card >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          );
      }
      export default bodycards;
      
*/