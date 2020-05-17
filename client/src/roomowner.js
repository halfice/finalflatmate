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
      location: "",
      typeofAccomodation: "",
      propertyAddress: "",
      totalbed: "",
      totalbathrooms: "",
      parking: "",
      internet: "",
      roomename: "",
      roomtype: "",
      roomfuninishing: "",
      bathroom: "",
      bedsize: "",
      roomfeatures: "",
      rent: "",
      bonds: "",
      bills: "",

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);

  }

  callingInsert(){

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
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            <h3>Describe your place</h3></div>
                        </div>
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            <h5>bed, bathrooms, internet etc.</h5></div>
                        </div>
                      </div>




                    </div>
                  }

                  {
                    this.state.divcountre == 1 &&


                    <div className={this.state.divcountre == 1 ? this.state.visibleclass : this.state.hiddenclass}>

                      <div className="row">

                        <div className="col-sm-12"> What type of Accomodation you are offering.</div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletypeofAccormodation.bind(this, ' Rooms(s) in sharehouse')} >
                              Rooms(s) in sharehouse
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletypeofAccormodation.bind(this, 'Whole property for rent')} >
                              Whole property for rent
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletypeofAccormodation.bind(this, 'Student Accomodation')} >
                              Student Accomodation
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletypeofAccormodation.bind(this, 'Homestay')} >
                              Homestay
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
                        <div className="col-sm-12"> About the Property.</div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Property Address
                        </div>
                          <div className="smalheadingcss">
                            <input type="email" className="form-control" onChange={this.handlepropertyAddress} placeholder="Search for area"></input>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total Bedrooms
                        </div>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '')} >
                            1
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '2')} >
                            2
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '3')} >
                            3
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '4')} >
                            4
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '5')} >
                            5
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbed.bind(this, '6plus')} >
                            6+
                          </Button>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total Bathrooms
                        </div>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '1')} >
                            1
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '2')} >
                            2
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '3')} >
                            3
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '4')} >
                            4
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '5')} >
                            5
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handletotalbathroom.bind(this, '6 plus')} >
                            6+
                          </Button>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Parking
                        </div>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleparking.bind(this, 'Yes')} >
                            Yes
                          </Button>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleparking.bind(this, 'Not Avilable')} >
                            Not available
                          </Button>
                        </div>

                      </div>



                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Internet
                        </div>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleinternet.bind(this, 'Yes')} >
                            Yes
                          </Button>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleinternet.bind(this, 'Not Avilable')} >
                            Not available
                          </Button>
                        </div>

                      </div>



                    </div>
                  }

                  {
                    this.state.divcountre == 3 &&
                    <div className={this.state.divcountre == 3 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Who Currently live in the property.</div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total number of flate mates
                        </div>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '1')} >
                            1
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '2')} >
                            2
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '3')} >
                            3
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '4')} >
                            4
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '5')} >
                            5
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handleflatemates.bind(this, '6 plus')} >
                            6+
                          </Button>
                        </div>
                      </div>




                    </div>
                  }

                  {
                    this.state.divcountre == 4 &&
                    <div className={this.state.divcountre == 4 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> About the rooms.</div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Room Name
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            <input type="email" className="form-control" onChange={this.handleroomename} placeholder="Room name"></input>
                          </div>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Room type
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleroomtype.bind(this, 'Private')} >
                            Private
                          </Button>
                        </div>
                        <div className="col-sm-6">
                          <Button className="mybuttons" onClick={this.handleroomtype.bind(this, 'Shared')} >
                            Shared
                          </Button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Room furnishing
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handleroomfuninishing.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                        </div>
                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handleroomfuninishing.bind(this, 'Furnished')} >
                            Furnished
                          </Button>
                        </div>

                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handleroomfuninishing.bind(this, 'Un-Furnishe')} >
                            Un-Furnished
                          </Button>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Bathroom
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handlebathroom.bind(this, 'Shared')} >
                            Shared
                          </Button>
                        </div>
                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handlebathroom.bind(this, 'Own')} >
                            Own
                          </Button>
                        </div>

                        <div className="col-sm-4">
                          <Button className="mybuttons" onClick={this.handlebathroom.bind(this, 'Esuit')} >
                            Esuit
                          </Button>
                        </div>
                      </div>



                    </div>
                  }


                  {
                    this.state.divcountre == 5 &&
                    <div className={this.state.divcountre == 5 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Room Features.</div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Bed Size
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handlebedsize.bind(this, 'Single')} >
                            Single
                          </Button>
                        </div>
                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handlebedsize.bind(this, 'Double')} >
                            Double
                          </Button>
                        </div>

                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handlebedsize.bind(this, 'King')} >
                            King
                          </Button>
                        </div>

                        <div className="col-sm-2">
                          <Button className="mybuttons" onClick={this.handlebedsize.bind(this, 'Queen')} >
                            Queen
                          </Button>
                        </div>

                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            Room Furnishing and features
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Bed side table')} >
                            Bed side table
                          </Button>
                        </div>
                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Wardrobe')} >
                            Wardrobe
                          </Button>
                        </div>

                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Drawers')} >
                            Drawers
                          </Button>
                        </div>

                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Air conditioner')} >
                            Air conditioner
                          </Button>
                        </div>


                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Heater')} >
                            Heater
                          </Button>
                        </div>


                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Desk')} >
                            Desk
                          </Button>
                        </div>



                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Lamp')} >
                            Lamp
                          </Button>
                        </div>


                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Chair')} >
                            Chair
                          </Button>
                        </div>

                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Couch')} >
                            Couch
                          </Button>
                        </div>



                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'TV')} >
                            TV
                          </Button>
                        </div>

                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'Balcony')} >
                            Balcony
                          </Button>
                        </div>

                        <div className="col-sm-3">
                          <Button className="mybuttons" onClick={this.handleroomfeatures.bind(this, 'kitchentee')} >
                            kitchentee
                          </Button>
                        </div>

                      </div>



                    </div>
                  }

                  {
                    this.state.divcountre == 6 &&
                    <div className={this.state.divcountre == 6 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Rent  and time.</div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                            <input type="email" className="form-control" onChange={this.handlearent} placeholder="$ rent"></input>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                            <input type="email" className="form-control" onChange={this.handlebond} placeholder="$ bonds"></input>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                            <input type="email" className="form-control" onChange={this.handlebills} placeholder="$ bills"></input>
                          </div>
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


  //rnder end

  shoonChangewsp() {
    this.setState({
      value: 4
    });
  }
  handleClick() {
    var tmp = this.state.divcountre;
    if (tmp < 7) {
      tmp = tmp + 1;
    }
    var btntext = "Lets Start!!!";
    if (tmp > 1 && tmp < 6) {
      btntext = "Next"
    }

    if (tmp == 6) {
      btntext = "Finish"
      tmp = 6;
    }

    if (tmp < 7) {
      this.setState({
        parentdiv: 2,
        visibleclass: "visible",
        hiddenclass: "hidden",
        divcountre: tmp,
        buttontext: btntext
      });
    }
    if (tmp == 7) {
      this.callingInsert();
    }
  }

  handleGoBackClick() {
    var tmp = this.state.divcountre;
    tmp = tmp - 1;

    var btntext = "Lets Start!!!";
    if (tmp < 6) {
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
  //after rend

  handletypeofAccormodation(val) {
    this.setState({
      typeofAccomodation: val,
    });
  }
  handlepropertyAddress(val) {
    this.setState({
      propertyAddress: val,
    });
  }

  handletotalbed(val) {
    this.setState({
      totalbed: val,
    });
  }

  handletotalbathroom(val) {
    this.setState({
      totalbathrooms: val,
    });
  }


  handleparking(val) {
    this.setState({
      parking: val,
    });
  }


  handleinternet(val) {
    this.setState({
      internet: val,
    });
  }

  handleflatemates(val) {
    this.setState({
      totalflatmates: val,
    });
  }


  handleroomename(val) {
    this.setState({
      roomename: val,
    });
  }

  handleroomtype(val) {
    this.setState({
      roomtype: val,
    });
  }

  handlebathroom(val) {
    this.setState({
      bathroom: val,
    });
  }

  handleroomfuninishing(val) {
    this.setState({
      totalflatmates: val,
    });
  }


  handlebedsize(val) {
    this.setState({
      bedsize: val,
    });
  }


  handleroomfeatures(val) {
    this.setState({
      roomfeatures: val,
    });
  }

  handlearent(val) {
    this.setState({
      rent: val,
    });
  }


  handlebond(val) {
    this.setState({
      bonds: val,
    });
  }

  handlebills(val) {
    this.setState({
      bills: val,
    });
  }


}

export default withTranslation()(RoomOwners);
