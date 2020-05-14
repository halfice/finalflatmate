import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from '@fortawesome/free-solid-svg-icons'
import './sliding.css';

import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faBackward,
} from '@fortawesome/free-solid-svg-icons'

import './i18n';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import Button from 'react-bootstrap/Button'

export class RoomOwners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      divcountre: 0,
      currentclass: "hidden",
      parentdiv: 0,
      buttontext: "Lets Start!!!",
      location:"",
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);

  }
  shoonChangewsp() {
    this.setState({
      value: 4
    });
  }


  handleClick() {
    var tmp = this.state.divcountre;
    if (tmp<6){
    tmp = tmp + 1;
    }
    var btntext = "Lets Start!!!";
    if (tmp > 1 && tmp < 6) {
      btntext = "Next"
    }

    if (tmp == 6) {
      btntext = "Finish"
      tmp=6;
    }
    this.setState({
      parentdiv: 2,
      visibleclass: "visible",
      hiddenclass: "hidden",
      divcountre: tmp,
      buttontext: btntext
    })
  }

  handleGoBackClick() {
    var tmp = this.state.divcountre;
    tmp = tmp - 1;

    var btntext = "Lets Start!!!";
    if (tmp < 6) {
      btntext = "Next"
      
    }
    if (tmp==1){
      btntext = "Lets Start!!!"
    }
    
    this.setState({
      parentdiv: 2,
      visibleclass: "visible",
      hiddenclass: "hidden",
      divcountre: tmp,
      buttontext: btntext
      
    })
  }



  render() {


    const varclaas = "visible";
    const varclaashidden = "hidden";

    return (
      <div className="row centeraligh">
        <div className="row ">
          <div className="container-fluid">
            <div className="row" >
              <div className="col-sm-12">
                <div className="row">

                  <div className="col-sm-4 ">
                    <div className="iconsclassgray" onClick={this.handleGoBackClick} >

                      <FontAwesomeIcon icon={faBackward} /> </div>
                  </div>
                  <div className="col-sm-8 ">
                    <div className="subheadings"> welcome</div>
                  </div>

                </div>
                <div className="row">
                  {
                    this.state.parentdiv == 0 &&
                    <div className="row">
                      <div className="col-sm-12 ">
                        <div>Thanks Abdul Aziz Farooqi,let's list your place</div>
                        <div className="col-sm-12">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>




                    </div>
                  }

                  {
                    this.state.divcountre == 1 &&


                    <div className={this.state.divcountre == 1 ? this.state.visibleclass : this.state.hiddenclass}>

                      <div className="row">

                        <div className="col-sm-12"> What type of Accomodation you are offering.</div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>

                      </div>


                    </div>
                  }

                  {
                    this.state.divcountre == 2 &&
                    <div className={this.state.divcountre == 2 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> About the Property.</div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 3 &&
                    <div className={this.state.divcountre == 3 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Who Currently live in the property.</div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclass" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 4 &&
                    <div className={this.state.divcountre == 4 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> About the rooms.</div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>
                    </div>
                  }


                  {
                    this.state.divcountre == 5 &&
                    <div className={this.state.divcountre == 5 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Room Features.</div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 6 &&
                    <div className={this.state.divcountre == 6 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Rent , Bonds and Bills.</div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faCoffee} /></div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > <FontAwesomeIcon icon={faHome} /></div>
                        </div>
                      </div>
                    </div>
                  }



                </div>
                <div className="row centeraligh">

                  <Button className="mybuttons" onClick={this.handleClick} >{this.state.buttontext}</Button>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default withTranslation()(RoomOwners);
