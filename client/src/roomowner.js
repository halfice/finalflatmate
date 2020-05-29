import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from '@fortawesome/free-solid-svg-icons'
import './sliding.css';
import axios from 'axios';
import imageCompression from 'browser-image-compression';


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
      LoginUserID: this.props.UserID,
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
      imagePreviewUrl: '',
      picstring:"",
      
      divActiveClass:"normaldivbutton",
      innerdivActiveClass:"innervbuuton",

      divhoverClass:"normaldivbuttonhover",
      fdiv1Active:"normaldivbutton",

      fdiv2Active:"normaldivbutton",
      fdiv3Active:"normaldivbutton",
      fdiv4Active:"normaldivbutton",

      totalbeddiv1:"innervbuuton",
      totalbeddiv2:"innervbuuton",
      totalbeddiv3:"innervbuuton",
      totalbeddiv4:"innervbuuton",
      totalbeddiv5:"innervbuuton",
      totalbeddiv6:"innervbuuton",

      totalbathdiv1:"innervbuuton",
      totalbathdiv2:"innervbuuton",
      totalbathdiv3:"innervbuuton",
      totalbathdiv4:"innervbuuton",
      totalbathdiv5:"innervbuuton",
      totalbathdiv6:"innervbuuton",

      parkingdiv1:"innervbuuton",
      parkingdiv2:"innervbuuton",

      internetdiv1:"innervbuuton",
      internetdiv2:"innervbuuton",

      flatmatediv1:"innervbuuton",
      flatmatediv2:"innervbuuton",
      flatmatediv3:"innervbuuton",
      flatmatediv4:"innervbuuton",
      flatmatediv5:"innervbuuton",
      flatmatediv6:"innervbuuton",

      roomtypediv1:"innervbuuton",
      roomtypediv2:"innervbuuton",

      roomfunishdiv1:"innervbuuton",
      roomfunishdiv2:"innervbuuton",
      roomfunishdiv3:"innervbuuton",

      bathroompdiv1:"innervbuuton",
      bathroompdiv2:"innervbuuton",
      bathroompdiv3:"innervbuuton",


      feturediv1:"innervbuuton",
      feturediv2:"innervbuuton",
      feturediv3:"innervbuuton",
      feturediv4:"innervbuuton",
      feturediv5:"innervbuuton",
      feturediv6:"innervbuuton",
      feturediv7:"innervbuuton",
      feturediv8:"innervbuuton",
      feturediv9:"innervbuuton",
      feturediv10:"innervbuuton",
      feturediv11:"innervbuuton",
      feturediv12:"innervbuuton",
      feturediv13:"innervbuuton",
      feturediv14:"innervbuuton",
      feturediv15:"innervbuuton",
      feturediv16:"innervbuuton",

      bedsizediv1:"innervbuuton",
      bedsizediv2:"innervbuuton",
      bedsizediv3:"innervbuuton",
      bedsizediv4:"innervbuuton",
      loader:false,

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);

    this.hovermefdiv1 = this.hovermefdiv1.bind(this);
    this.removehovermefdiv1 = this.removehovermefdiv1.bind(this);

    this.hovermefdiv2 = this.hovermefdiv2.bind(this);
    this.removehovermefdiv2 = this.removehovermefdiv2.bind(this);
    
    this.hovermefdiv3 = this.hovermefdiv3.bind(this);
    this.removehovermefdiv3 = this.removehovermefdiv3.bind(this);
    this.hovermefdiv4 = this.hovermefdiv4.bind(this);
    this.removehovermefdiv4 = this.removehovermefdiv4.bind(this);


    this.handlearent = this.handlearent.bind(this);
    this.handlebond = this.handlebond.bind(this);
    this.handlebills = this.handlebills.bind(this);
    this.handlepropertyAddress = this.handlepropertyAddress.bind(this);
    this.handleroomename = this.handleroomename.bind(this);






  }

  callingInsert(){

    this.setState({
      loader: true,
    });

    const data ={
    LoginUserID: this.state.LoginUserID,
    location: this.state.location,
    typeofAccomodation: this.state.typeofAccomodation,
    propertyAddress: this.state.propertyAddress,
    totalbed: this.state.totalbed,
    totalbathrooms: this.state.totalbathrooms,
    parking: this.state.parking,
    internet: this.state.internet,
    roomename: this.state.roomename,
    roomtype: this.state.roomtype,
    roomfuninishing: this.state.roomfuninishing,
    bathroom: this.state.bathroom,
    bedsize: this.state.bedsize,
    roomfeatures: this.state.roomfeatures,
    rent: this.state.rent,
    bonds: this.state.bonds,
    bills: this.state.bills,
    picstring: this.state.picstring,
    itemid:this.uuidv4(),
    };

    axios
    .post('http://localhost:4000/owner/register', data)
    .then(res => {
      this.setState({
        universalid: res.data,
        loader:false,
      });

    })
    .catch(err => {
      console.log("Error in CreateBook!");
    });



  }


  

  render() {
    const varclaas = "visible";
    const varclaashidden = "hidden";

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="mypreviewimage" />);
    } else {
      $imagePreview = (<div className="previewText">Preview</div>);
    }

    return (
      <div className="row centeraligh">
        <div className="row ">
          <div className="container-fluid">
            <div className="row" >
              <div className="col-sm-12">
              {
     this.state.loader==true &&
     <div className="loader"></div>
   }
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

                      <div className="row textalighleft">

                        <div className="col-sm-12 textalighleft"> What type of Accomodation you are offering.</div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                        
                            <div className={ this.state.fdiv1Active }   
                            onClick={this.handletypeofAccormodation.bind(this, 'Rooms(s) in sharehouse','1')} >
                              Rooms(s) in sharehouse
                          </div>
                          
                        </div>
                        <div className="col-sm-3">
                          
                        <div className={this.state.fdiv2Active} onClick={this.handletypeofAccormodation.bind(this, 'Whole property for rent','2')} 
                         >
                              Whole property for rent
                         
                          </div>
                        </div>
                        <div className="col-sm-3">
                          
                        <div className={this.state.fdiv3Active}  
                        onClick={this.handletypeofAccormodation.bind(this, 'Student Accomodation','3')}
                         
                         >
                              Student Accomodation
                        
                          </div>
                        </div>
                        <div className="col-sm-3">
                         
                        <div className={this.state.fdiv4Active}  
                        onClick={this.handletypeofAccormodation.bind(this, 'Homestay','4')} 
                       
                        
                        >
                              Homestay
                          
                          </div>
                        </div>

                      </div>
<hr></hr>

                      <div className="row">
                        <div className="col-sm-12 textalighleft"> Introduce about property.</div>

                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          

                          <input type="file" accept="image/*" onChange={this.handleImageUpload.bind(this)}></input>

                          <div className="imgPreview">
                            {$imagePreview}
                          </div>





                        </div>

                      </div>

                    </div>
                  }

                  {
                    this.state.divcountre == 2 &&
                    <div className={this.state.divcountre == 2 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row ">
                        <div className="col-sm-12"> About the Property.</div>
                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Property Address
                        </div>
                          <div className="smalheadingcss">
                            <input type="text" className="form-control" onChange={this.handlepropertyAddress} placeholder="Search for area"></input>
                          </div>
                        </div>
                      </div>

                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total Bedrooms
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className={this.state.totalbeddiv1}  onClick={this.handletotalbed.bind(this, '1','1')} >
                            1
                          </div>
                        </div>
                        <div className="col-sm-2">
                        <div className={this.state.totalbeddiv2} onClick={this.handletotalbed.bind(this, '2','2')} >
                            2
                         </div>
                        </div>
                        <div className="col-sm-2">
                        <div className={this.state.totalbeddiv3} onClick={this.handletotalbed.bind(this, '3','3')} >
                            3
                         </div>
                        </div>
                        <div className="col-sm-2">
                        <div className={this.state.totalbeddiv4} onClick={this.handletotalbed.bind(this, '4','4')} >
                            4
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbeddiv5} onClick={this.handletotalbed.bind(this, '5','5')} >
                            5
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbeddiv6} onClick={this.handletotalbed.bind(this, '6plus','6')} >
                            6+
                         </div>
                        </div>
                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total Bathrooms
                        </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv1} onClick={this.handletotalbathroom.bind(this, '1','1')} >
                            1
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv2} onClick={this.handletotalbathroom.bind(this, '2','2')} >
                            2
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv3} onClick={this.handletotalbathroom.bind(this, '3','3')} >
                            3
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv4} onClick={this.handletotalbathroom.bind(this, '4','4')} >
                            4
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv5} onClick={this.handletotalbathroom.bind(this, '5','5')} >
                            5
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.totalbathdiv6} onClick={this.handletotalbathroom.bind(this, '6 plus','6')} >
                            6+
                         </div>
                        </div>
                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Parking
                        </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.parkingdiv1} onClick={this.handleparking.bind(this, 'Yes','1')} >
                            Yes
                         </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.parkingdiv2} onClick={this.handleparking.bind(this, 'Not Avilable','2')} >
                            Not available
                         </div>
                        </div>

                      </div>



                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Internet
                        </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.internetdiv1} onClick={this.handleinternet.bind(this, 'Yes','1')} >
                            Yes
                         </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.internetdiv2} onClick={this.handleinternet.bind(this, 'Not Avilable','2')} >
                            Not available
                         </div>
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


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="smalheadingcss">
                            Total number of flate mates
                        </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv1} onClick={this.handleflatemates.bind(this, '1','1')} >
                            1
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv2} onClick={this.handleflatemates.bind(this, '2','2')} >
                            2
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv3} onClick={this.handleflatemates.bind(this, '3','3')} >
                            3
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv4} onClick={this.handleflatemates.bind(this, '4','4')} >
                            4
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv5} onClick={this.handleflatemates.bind(this, '5','5')} >
                            5
                         </div>
                        </div>
                        <div className="col-sm-2">
                         <div className={this.state.flatmatediv6} onClick={this.handleflatemates.bind(this, '6 plus','6')} >
                            6+
                         </div>
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

                      <div className="row textalighleft" >
                        <div className="col-sm-12">
                          <div className="" >
                            Room Name
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            <input type="text" className="form-control" onChange={this.handleroomename} placeholder="Room name"></input>
                          </div>
                        </div>
                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="" >
                            Room type
                          </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.roomtypediv1} onClick={this.handleroomtype.bind(this, 'Private','1')} >
                            Private
                         </div>
                        </div>
                        <div className="col-sm-6">
                         <div className={this.state.roomtypediv2} onClick={this.handleroomtype.bind(this, 'Shared','2')} >
                            Shared
                         </div>
                        </div>
                      </div>

                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="" >
                            Room furnishing
                          </div>
                        </div>
                        <div className="col-sm-4">
                         <div className={this.state.roomfunishdiv1} onClick={this.handleroomfuninishing.bind(this, 'Flexible','1')} >
                            Flexible
                         </div>
                        </div>
                        <div className="col-sm-4">
                         <div className={this.state.roomfunishdiv2} onClick={this.handleroomfuninishing.bind(this, 'Furnished','2')} >
                            Furnished
                         </div>
                        </div>

                        <div className="col-sm-4">
                         <div className={this.state.roomfunishdiv3} onClick={this.handleroomfuninishing.bind(this, 'Un-Furnishe','3')} >
                            Un-Furnished
                         </div>
                        </div>
                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="" >
                            Bathroom
                          </div>
                        </div>
                        <div className="col-sm-4">
                         <div className={this.state.bathroompdiv1} onClick={this.handlebathroom.bind(this, 'Shared','1')} >
                            Shared
                         </div>
                        </div>
                        <div className="col-sm-4">
                         <div className={this.state.bathroompdiv2} onClick={this.handlebathroom.bind(this, 'Own','2')} >
                            Own
                         </div>
                        </div>

                        <div className="col-sm-4">
                         <div className={this.state.bathroompdiv3} onClick={this.handlebathroom.bind(this, 'Esuit','3')} >
                            Esuit
                         </div>
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

                      <div className="row textalighleft">
                        <div className="col-sm-12">
                          <div className="" >
                            Bed Size
                          </div>
                        </div>

<div className="row">

                        <div className="col-sm-3">
                         <div className={this.state.bedsizediv1} onClick={this.handlebedsize.bind(this, 'Single','1')} >
                            Single
                         </div>
                        </div>
                        <div className="col-sm-3">
                         <div className={this.state.bedsizediv2} onClick={this.handlebedsize.bind(this, 'Double','2')} >
                            Double
                         </div>
                        </div>

                        <div className="col-sm-3">
                         <div className={this.state.bedsizediv3} onClick={this.handlebedsize.bind(this, 'King','3')} >
                            King
                         </div>
                        </div>

                        <div className="col-sm-3">
                         <div className={this.state.bedsizediv4} onClick={this.handlebedsize.bind(this, 'Queen','4')} >
                            Queen
                         </div>
                        </div>
                        </div>


                      </div>


                      <div className="row textalighleft">
                        <div className="col-sm-12">
                        <div className="" >
                            Room Furnishing and features
                            </div>
                        </div>



                      
 </div>
 <div className="row"> 
                        <div className="col-sm-3">
                         <div className={this.state.feturediv5} onClick={this.handleroomfeatures.bind(this, 'Bed side table','5')} >
                            Bed table
                         </div>
                        </div>

                        <div className="col-sm-3">
                         <div className={this.state.feturediv6} onClick={this.handleroomfeatures.bind(this, 'Wardrobe','6')} >
                            Wardrobe
                         </div>
                        </div>

                        <div className="col-sm-3">
                         <div className={this.state.feturediv7} onClick={this.handleroomfeatures.bind(this, 'Drawers','7')} >
                            Drawers
                         </div>
                        </div>

                        <div className="col-sm-3">
                         <div className={this.state.feturediv8} onClick={this.handleroomfeatures.bind(this, 'Air conditioner','8')} >
                            AC
                         </div>
                        </div>
  </div>



  <div className="row"> 
                        <div className="col-sm-3">
                         <div className={this.state.feturediv9} onClick={this.handleroomfeatures.bind(this, 'Heater','9')} >
                            Heater
                         </div>
                        </div>
                       

                        <div className="col-sm-3">
                         <div className={this.state.feturediv10} onClick={this.handleroomfeatures.bind(this, 'Desk','10')} >
                            Desk
                         </div>
                        </div>


                       
                        <div className="col-sm-3">
                         <div className={this.state.feturediv11} onClick={this.handleroomfeatures.bind(this, 'Lamp','11')} >
                            Lamp
                         </div>
                        </div>


                        <div className="col-sm-3">
                         <div className={this.state.feturediv12} onClick={this.handleroomfeatures.bind(this, 'Chair','12')} >
                            Chair
                         </div>
                        </div>
</div>


<div className="row"> 
                     
                     <div className="col-sm-3">
                      <div className={this.state.feturediv13} onClick={this.handleroomfeatures.bind(this, 'Couch','13')} >
                         Couch
                      </div>
                     </div>



                     <div className="col-sm-3">
                      <div className={this.state.feturediv14} onClick={this.handleroomfeatures.bind(this, 'TV','14')} >
                         TV
                      </div>
                     </div>
              

                    

                     <div className="col-sm-3">
                      <div className={this.state.feturediv15} onClick={this.handleroomfeatures.bind(this, 'Balcony','15')} >
                         Balcony
                      </div>
                     </div>

                     <div className="col-sm-3">
                      <div className={this.state.feturediv16} onClick={this.handleroomfeatures.bind(this, 'kitchentee','16')} >
                         kitchentee
                      </div>
                     </div>


                   </div>



                    </div>
                  }

                  {
                    this.state.divcountre == 6 &&
                    <div className={this.state.divcountre == 6 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row textalighleft">
                        <div className="col-sm-12"> Rent  and time.</div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="" >
                            <input type="text" className="form-control" onChange={this.handlearent} placeholder="$ rent"></input>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                            <input type="text" className="form-control" onChange={this.handlebond} placeholder="$ bonds"></input>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="iconsclassgray" >
                            <input type="text" className="form-control" onChange={this.handlebills} placeholder="$ bills"></input>
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

  handletypeofAccormodation(val,divval) {
if (divval==1)
{
  this.setState({
    typeofAccomodation: val,
    fdiv1Active:"fdvihover",
    fdiv2Active:"normaldivbutton",
    fdiv3Active:"normaldivbutton",
    fdiv4Active:"normaldivbutton",

  });
}

if (divval==2)
{
  this.setState({
    typeofAccomodation: val,
    fdiv2Active:"fdvihover",
    fdiv1Active:"normaldivbutton",
    fdiv3Active:"normaldivbutton",
    fdiv4Active:"normaldivbutton",
  });
}


if (divval==3)
{
  this.setState({
    typeofAccomodation: val,
    fdiv1Active:"normaldivbutton",
    fdiv2Active:"normaldivbutton",
    fdiv3Active:"fdvihover",
    fdiv4Active:"normaldivbutton",
  });
}
if (divval==4)
{
  this.setState({
    typeofAccomodation: val,
    fdiv1Active:"normaldivbutton",
    fdiv2Active:"normaldivbutton",
    fdiv3Active:"normaldivbutton",
    fdiv4Active:"fdvihover",
  });
}


    
  
  }
  handlepropertyAddress(event) {
    this.setState({
      propertyAddress: event.target.value,
    });
  }

  handletotalbed(val,tbval) {
switch(tbval){
  
  case "1":
    this.setState({
      totalbed: val,
      totalbeddiv1:"innervbuutonhover",
      totalbeddiv2:"innervbuuton",
      totalbeddiv3:"innervbuuton",
      totalbeddiv4:"innervbuuton",
      totalbeddiv5:"innervbuuton",
      totalbeddiv6:"innervbuuton",
      
    });
    break;

    case "2":
      this.setState({
        totalbed: val,
        totalbeddiv1:"innervbuuton",
        totalbeddiv2:"innervbuutonhover",
        totalbeddiv3:"innervbuuton",
        totalbeddiv4:"innervbuuton",
        totalbeddiv5:"innervbuuton",
        totalbeddiv6:"innervbuuton",
        
      });
      break;


      case "3":
        this.setState({
          totalbed: val,
          totalbeddiv1:"innervbuuton",
          totalbeddiv2:"innervbuuton",
          totalbeddiv3:"innervbuutonhover",
          totalbeddiv4:"innervbuuton",
          totalbeddiv5:"innervbuuton",
          totalbeddiv6:"innervbuuton",
          
        });
        break;


        case "4":
          this.setState({
            totalbed: val,
            totalbeddiv1:"innervbuuton",
            totalbeddiv2:"innervbuuton",
            totalbeddiv3:"innervbuuton",
            totalbeddiv4:"innervbuutonhover",
            totalbeddiv5:"innervbuuton",
            totalbeddiv6:"innervbuuton",
            
          });
          break;


          case "5":
            this.setState({
              totalbed: val,
              totalbeddiv1:"innervbuuton",
              totalbeddiv2:"innervbuuton",
              totalbeddiv3:"innervbuuton",
              totalbeddiv4:"innervbuuton",
              totalbeddiv5:"innervbuutonhover",
              totalbeddiv6:"innervbuuton",
              
            });
            break;


            case "6":
              this.setState({
                totalbed: val,
                totalbeddiv1:"innervbuuton",
                totalbeddiv2:"innervbuuton",
                totalbeddiv3:"innervbuuton",
                totalbeddiv4:"innervbuuton",
                totalbeddiv5:"innervbuuton",
                totalbeddiv6:"innervbuutonhover",
                
              });
              break;


}

    
  }

  handletotalbathroom(val,btval) {
    switch(btval){
  
      case "1":
        this.setState({
          totalbathrooms: val,
          totalbathdiv1:"innervbuutonhover",
          totalbathdiv2:"innervbuuton",
          totalbathdiv3:"innervbuuton",
          totalbathdiv4:"innervbuuton",
          totalbathdiv5:"innervbuuton",
          totalbathdiv6:"innervbuuton",
          
        });
        break;
    
        case "2":
          this.setState({
            totalbathrooms: val,
            totalbathdiv1:"innervbuuton",
            totalbathdiv2:"innervbuutonhover",
            totalbathdiv3:"innervbuuton",
            totalbathdiv4:"innervbuuton",
            totalbathdiv5:"innervbuuton",
            totalbathdiv6:"innervbuuton",
            
          });
          break;
    
    
          case "3":
            this.setState({
              totalbathrooms: val,
              totalbathdiv1:"innervbuuton",
              totalbathdiv2:"innervbuuton",
              totalbathdiv3:"innervbuutonhover",
              totalbathdiv4:"innervbuuton",
              totalbathdiv5:"innervbuuton",
              totalbathdiv6:"innervbuuton",
              
            });
            break;
    
    
            case "4":
              this.setState({
                totalbathrooms: val,
                totalbathdiv1:"innervbuuton",
                totalbathdiv2:"innervbuuton",
                totalbathdiv3:"innervbuuton",
                totalbathdiv4:"innervbuutonhover",
                totalbathdiv5:"innervbuuton",
                totalbathdiv6:"innervbuuton",
                
              });
              break;
    
    
              case "5":
                this.setState({
                  totalbathrooms: val,
                  totalbathdiv1:"innervbuuton",
                  totalbathdiv2:"innervbuuton",
                  totalbathdiv3:"innervbuuton",
                  totalbathdiv4:"innervbuuton",
                  totalbathdiv5:"innervbuutonhover",
                  totalbathdiv6:"innervbuuton",
                  
                });
                break;
    
    
                case "6":
                  this.setState({
                    totalbathrooms: val,
                    totalbathdiv1:"innervbuuton",
                    totalbathdiv2:"innervbuuton",
                    totalbathdiv3:"innervbuuton",
                    totalbathdiv4:"innervbuuton",
                    totalbathdiv5:"innervbuuton",
                    totalbathdiv6:"innervbuutonhover",
                    
                  });
                  break;
    
    
    }
  }


  handleparking(val,pval) {

    if (pval==1){
      this.setState({
        parking: val,
        parkingdiv1:"innervbuutonhover",
        parkingdiv2:"innervbuuton",
      });
    }
    if (pval==2){
      this.setState({
        parking: val,
        parkingdiv1:"innervbuuton",
        parkingdiv2:"innervbuutonhover",
      });
    }
   
  }


  handleinternet(val,ival) {


    if (ival==1){
      this.setState({
        internet: val,
        internetdiv1:"innervbuutonhover",
        internetdiv2:"innervbuuton",
      });
    }
    if (ival==2){
      this.setState({
        internet: val,
        internetdiv1:"innervbuuton",
        internetdiv2:"innervbuutonhover",
      });
    }


  
  }

  handleflatemates(val,fval) {

    
    switch(fval){
      case "1":
        this.setState({
          totalflatmates: val,
          flatmatediv1:"innervbuutonhover",
          flatmatediv2:"innervbuuton",
          flatmatediv3:"innervbuuton",
          flatmatediv4:"innervbuuton",
          flatmatediv5:"innervbuuton",
          flatmatediv6:"innervbuuton",
        });
        break;

        case "2":
          this.setState({
            totalflatmates: val,
            flatmatediv2:"innervbuutonhover",
            flatmatediv1:"innervbuuton",
            flatmatediv3:"innervbuuton",
            flatmatediv4:"innervbuuton",
            flatmatediv5:"innervbuuton",
            flatmatediv6:"innervbuuton",
          });
          break;

          case "3":
            this.setState({
              totalflatmates: val,
              flatmatediv3:"innervbuutonhover",
              flatmatediv2:"innervbuuton",
              flatmatediv1:"innervbuuton",
              flatmatediv4:"innervbuuton",
              flatmatediv5:"innervbuuton",
              flatmatediv6:"innervbuuton",
            });
            break;

            case "4":
              this.setState({
                totalflatmates: val,
                flatmatediv4:"innervbuutonhover",
                flatmatediv2:"innervbuuton",
                flatmatediv3:"innervbuuton",
                flatmatediv1:"innervbuuton",
                flatmatediv5:"innervbuuton",
                flatmatediv6:"innervbuuton",
              });
              break;

              case "5":
                this.setState({
                  totalflatmates: val,
                  flatmatediv5:"innervbuutonhover",
                  flatmatediv2:"innervbuuton",
                  flatmatediv3:"innervbuuton",
                  flatmatediv4:"innervbuuton",
                  flatmatediv1:"innervbuuton",
                  flatmatediv6:"innervbuuton",
                });
                break;


                case "6":
                  this.setState({
                    totalflatmates: val,
                    flatmatediv6:"innervbuutonhover",
                    flatmatediv2:"innervbuuton",
                    flatmatediv3:"innervbuuton",
                    flatmatediv4:"innervbuuton",
                    flatmatediv5:"innervbuuton",
                    flatmatediv1:"innervbuuton",
                  });
                  break;
    }
   
  }


  handleroomename(event) {
    this.setState({
      roomename: event.target.value,
    });
  }

  handleroomtype(val,rtval) {
    if (rtval==1){
      this.setState({
       roomtypediv1:"innervbuutonhover",
       roomtypediv2:"innervbuuton",
        roomtype: val,
      });
    }else{
      this.setState({
        roomtype: val,
        roomtypediv1:"innervbuuton",
       roomtypediv2:"innervbuutonhover",
      });
    }

    
  }

  handlebathroom(val,bval) {
    if (bval==1){
      this.setState({
        bathroompdiv1:"innervbuutonhover",
        bathroompdiv2:"innervbuuton",
        bathroompdiv3:"innervbuuton",
        bathroom: val,
      });
    }

    if (bval==2){
      this.setState({
        bathroompdiv1:"innervbuuton",
        bathroompdiv2:"innervbuutonhover",
        bathroompdiv3:"innervbuuton",
        bathroom: val,
      });
    }

    if (bval==3){
      this.setState({
        bathroompdiv1:"innervbuuton",
        bathroompdiv2:"innervbuuton",
        bathroompdiv3:"innervbuutonhover",
        bathroom: val,
      });
    }
   
  }

  handleroomfuninishing(val,fuval) {
    if (fuval==1){
      this.setState({
       roomfunishdiv1:"innervbuutonhover",
       roomfunishdiv2:"innervbuuton",
       roomfunishdiv3:"innervbuuton",
       roomfuninishing: val,
      });
    }

    if (fuval==2){
      this.setState({
        roomfunishdiv1:"innervbuuton",
       roomfunishdiv2:"innervbuutonhover",
       roomfunishdiv3:"innervbuuton",
       roomfuninishing: val,
      });
    }

    if (fuval==3){
      this.setState({
        roomfunishdiv1:"innervbuuton",
        roomfunishdiv2:"innervbuuton",
        roomfunishdiv3:"innervbuutonhover",
        roomfuninishing: val,
      });
    }


    
  }


  handlebedsize(val,bdval) {
    switch(bdval){
      case "1": this.setState({
      bedsizediv1:"innervbuutonhover",
      bedsizediv2:"innervbuuton",
      bedsizediv3:"innervbuuton",
      bedsizediv4:"innervbuuton",
        bedsize: val,
      });
        break;

       
          case "2": this.setState({
            bedsizediv1:"innervbuuton",
            bedsizediv2:"innervbuutonhover",
            bedsizediv3:"innervbuuton",
            bedsizediv4:"innervbuuton",
            bedsize: val,
          });
            break;

        
              case "3": this.setState({
                bedsizediv1:"innervbuuton",
                bedsizediv2:"innervbuuton",
                bedsizediv3:"innervbuutonhover",
                bedsizediv4:"innervbuuton",
                bedsize: val,
              });
                break;

       
                  case "4": this.setState({
                    bedsizediv1:"innervbuuton",
                    bedsizediv2:"innervbuuton",
                    bedsizediv3:"innervbuuton",
                    bedsizediv4:"innervbuutonhover",
                    bedsize: val,
                  });
                    break;
    }
   
  }


  handleroomfeatures(val,fval) {
    var tmpfeature=this.state.roomfeatures;
    var newfinalfeature=tmpfeature+","+val;
    switch(fval){
      case "1":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv1:"innervbuutonhover",          
        });
        break;

        case "2":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv2:"innervbuutonhover",          
        });
        break;

        case "3":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv3:"innervbuutonhover",          
        });
        break;

        case "4":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv4:"innervbuutonhover",          
        });
        break;


        case "5":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv5:"innervbuutonhover",          
        });
        break;


        case "6":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv6:"innervbuutonhover",          
        });
        break;

        case "7":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv7:"innervbuutonhover",          
        });
        break;

        case "8":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv8:"innervbuutonhover",          
        });
        break;

        case "9":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv9:"innervbuutonhover",          
        });
        break;

        case "10":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv10:"innervbuutonhover",          
        });
        break;

        case "11":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv11:"innervbuutonhover",          
        });
        break;

        case "12":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv12:"innervbuutonhover",          
        });
        break;

        case "13":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv13:"innervbuutonhover",          
        });
        break;

        case "14":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv14:"innervbuutonhover",          
        });
        break;

        case "15":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv15:"innervbuutonhover",          
        });
        break;

        case "16":
        this.setState({
          roomfeatures: newfinalfeature,
          feturediv16:"innervbuutonhover",          
        });
        break;
        
    }
    
  }

  handlearent(event) {
    this.setState({
      rent: event.target.value,
    });
  }


  handlebond(event) {
    this.setState({
      bonds: event.target.value,
    });
  }

  handlebills(event) {
    this.setState({
      bills: event.target.value,
    });
  }

  hovermefdiv1(){
  
    this.setState({ fdiv1Active: "fdvihover" });
    }
    removehovermefdiv1(e){
      
      this.setState({ fdiv1Active: "normaldivbutton" });
    }


    hovermefdiv2(){ this.setState({ fdiv2Active: "fdvihover" });}
    removehovermefdiv2(e){        this.setState({ fdiv2Active: "normaldivbutton" });}


    hovermefdiv3(){ this.setState({ fdiv3Active: "fdvihover" });}
    removehovermefdiv3(e){ this.setState({ fdiv3Active: "normaldivbutton" });}

    hovermefdiv4(){ this.setState({ fdiv4Active: "fdvihover" });}
    removehovermefdiv4(e){ this.setState({ fdiv4Active: "normaldivbutton" });}

    async  handleImageUpload(event) {
 
      const imageFile = event.target.files[0];
      console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
     
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 100,
        useWebWorker: true
      }
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
        let reader = new FileReader();
        let file = compressedFile;
        var newfile = file;
        //console.log(compressedFile);
        reader.onloadend = () => {
       
          this.setState({
            
            file: reader.result,
            imagePreviewUrl: reader.result,
            picstring: reader.result,
          });
        }
        reader.readAsDataURL(file)
     
        //await uploadToServer(compressedFile); // write your own logic
      } catch (error) {
        console.log(error);
      }
     
    }
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }



}

export default withTranslation()(RoomOwners);
