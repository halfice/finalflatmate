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
export class lookingoforroom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      divcountre: 0,
      currentclass: "hidden",
      parentdiv: 0,
      buttontext: "Lets Start!!!",

      country: "",
      city: "",
      area: "",
      location: "",
      rent: "",
      timelength: "",
      propertypreferences: "",
      abouturself: "",
      aboutyou: "",
      employeestatus: "",
      lifestyle: "",
      type: "",


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
    if (tmp < 9) {
      tmp = tmp + 1;
    }
    var btntext = "Lets Start!!!";
    if (tmp > 1 && tmp < 9) {
      btntext = "Next"
    }

    if (tmp == 9) {
      btntext = "Finish"
      tmp = 9;
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
    if (tmp < 9) {
      btntext = "Next"

    }
    if (tmp == 1) {
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

                      <div>
                        <div className="col-sm-12"> What type of Place you are looking for.</div>
                      </div>
                      <div className="row">

                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Room(s) in an existing sharehouse')} >
Rooms in and Eixisitn sharehouse
                          </Button>

                          
                          
                           </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Whole Property for rent')} >
                          Whole Property for rent
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Studio')} >
                      Studio
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Granny flats')} >
                      Granny flats
                          </Button>
                          
                          
                          </div>
                        </div>
                      </div>

                      <div className="row">

                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'student accomodation')} >
                  student accomodation
                          </Button>
                          
                          
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'One bed flat')} >
                      One bed flat
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Home Stay')} >
                     Home Stay
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" > 
                          <Button className="mybuttons" onClick={this.handletype.bind(this,'Shared room')} >
                     Shared room
                          </Button>
                          
                          </div>
                        </div>
                      </div>


                    </div>
                  }

                  {
                    this.state.divcountre == 2 &&
                    <div className={this.state.divcountre == 2 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Where would you like to live.</div>

                        <div className="row">
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                          <input type="email" className="form-control" onChange={this.handlearea} placeholder="Search for area"></input>

                             </div>
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 3 &&
                    <div className={this.state.divcountre == 3 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Rent  and time.</div>
                        </div>
                        <div className="row">

                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                          <input type="email" className="form-control" onChange={this.handlearent} placeholder="Weekly Budget"></input>

                             </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > 
                          <input type="email" className="form-control" onChange={this.handledate} placeholder="mode date"></input>

                          
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" > 
                          <input type="email" className="form-control" onChange={this.handlestaylength} placeholder="Prefereed length of stay"></input>

                          
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 4 &&
                    <div className={this.state.divcountre == 4 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Peroperty preferences.</div>
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
                        <div className="col-sm-12"> Introduce abour yourself.</div>
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
                        <div className="col-sm-12"> About you.</div>
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
                    this.state.divcountre == 7 &&
                    <div className={this.state.divcountre == 7 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Employement Status.</div>
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
                    this.state.divcountre == 8 &&
                    <div className={this.state.divcountre == 8 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Life Style.</div>
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
                    this.state.divcountre == 9 &&
                    <div className={this.state.divcountre == 9 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> What makes you to greate to live with.</div>
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
                    this.state.divcountre == 10 &&
                    <div className={this.state.divcountre == 10 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> listing Preview.</div>
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

  handletype(val) {
    alert(val);
    this.setState({
      type: val
    });
  }
  handlearea(val) {
    alert(val);
    this.setState({
      area: val,
      location:val,
    });
  }

  handlearent(val) {
    this.setState({
      rent: val,
    });
  }

  handlearent(val) {
    this.setState({
      handledate: val,
    });
  }

  handlestaylength(val) {
    this.setState({
      timelength: val,
    });
  }

}

export default withTranslation()(lookingoforroom);
