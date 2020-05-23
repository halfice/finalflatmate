import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from '@fortawesome/free-solid-svg-icons'
import './sliding.css';
import {
  faCoffee,  faCog,  faSpinner,  faQuoteLeft,  faSquare,  faCheckSquare,  faBackward,
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
      RoomFurnishing: "",
      Internet: "",
      BathRoomType: "",
      Parking: "",
      MaxNumberoflatemate: "",
      picstring: "",
      file: '',
      imagePreviewUrl: '',
      thisplaceisfor:"",
      myname:"",
      age:"",
      gender:"",
      employeestatus:"",
      abouturselfparagraph:"",

      typediv1:"normaldivbutton",
      typediv2:"normaldivbutton",
      typediv3:"normaldivbutton",
      typediv4:"normaldivbutton",
      typediv5:"normaldivbutton",
      typediv6:"normaldivbutton",
      typediv7:"normaldivbutton",
      typediv8:"normaldivbutton",

      roomfurdiv1:"innervbuuton",
      roomfurdiv2:"innervbuuton",
      roomfurdiv3:"innervbuuton",

      inernetdiv1:"innervbuuton",
      inernetdiv2:"innervbuuton",
      inernetdiv3:"innervbuuton",

      bathroomdiv1:"innervbuuton",
      bathroomdiv2:"innervbuuton",
      bathroomdiv3:"innervbuuton",

      parkingdiv1:"innervbuuton",
      parkingdiv2:"innervbuuton",
      parkingdiv3:"innervbuuton",

      noflatematediv1:"innervbuuton",
      noflatematediv2:"innervbuuton",
      noflatematediv3:"innervbuuton",



    }

    this.handleClick = this.handleClick.bind(this);
    this.handleGoBackClick = this.handleGoBackClick.bind(this);


    this.handleinternet = this.handleinternet.bind(this);
    this.handlebathroomtype = this.handlebathroomtype.bind(this);
    this.handleparking = this.handleparking.bind(this);
    this.handlemaxnumber = this.handlemaxnumber.bind(this);
    this.handlroomfurnishing = this.handlroomfurnishing.bind(this);
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
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    
    reader.readAsDataURL(file);
    
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        picstring:reader.result,
      });
    }

    reader.readAsDataURL(file)
  }



  render() {
    const varclaas = "visible";
    const varclaashidden = "hidden";

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="mypreviewimage" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

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
                            <div className={this.state.typediv1}  onClick={this.handletype.bind(this, 'Room(s) in an existing sharehouse','1')} >
                              Rooms in and Eixisitn sharehouse
                          </div>



                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div className={this.state.typediv2}   onClick={this.handletype.bind(this, 'Whole Property for rent','2')} >
                              Whole Property for rent
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >

                            <div className={this.state.typediv3}  onClick={this.handletype.bind(this, 'Studio','3')} >
                              Studio
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div className={this.state.typediv4}  onClick={this.handletype.bind(this, 'Granny flats','4')} >
                              Granny flats
                          </div>


                          </div>
                        </div>
                      </div>

                      <div className="row">

                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div className={this.state.typediv5}  onClick={this.handletype.bind(this, 'student accomodation','5')} >
                              student accomodation
                          </div>


                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div  className={this.state.typediv6}  onClick={this.handletype.bind(this, 'One bed flat','6')} >
                              One bed flat
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div className={this.state.typediv7}  onClick={this.handletype.bind(this, 'Home Stay','7')} >
                              Home Stay
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <div className={this.state.typediv8}  onClick={this.handletype.bind(this, 'Shared room','8')} >
                              Shared room
                          </div>

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
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="iconsclassgray" >
                            <input type="email" className="form-control" onChange={this.handlearea} placeholder="Search for area"></input>

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12"> area selected.</div>
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
                      </div>

                      <div className="row">
                        <div className="col-sm-12 textalighleft"> Room Furnishing</div>
                        <div className="col-sm-4">
                        <div className={this.state.roomfurdiv1}  onClick={this.handlroomfurnishing.bind(this, 'Flexible','1')} >
                            Flexible
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div className={this.state.roomfurdiv2} onClick={this.handlroomfurnishing.bind(this, 'Required','2')} >
                            Required
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.roomfurdiv3} onClick={this.handlroomfurnishing.bind(this, 'Not required','3')} >
                            Not Required
                          </div>
                        </div>
                        
                      </div>


                      <div className="row">
                        <div className="col-sm-12"> Internet</div>
                        </div>

                        <div className="row">
                        <div className="col-sm-4">
                          <div className={this.state.inernetdiv1}  onClick={this.handleinternet.bind(this, 'Flexible','1')} >
                            Flexible
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.inernetdiv1} onClick={this.handleinternet.bind(this, 'Required','2')} >
                            Required
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.inernetdiv1} onClick={this.handleinternet.bind(this, 'Not required','3')} >
                            Not Required
                          </div>
                        </div>
                      </div>



                      <div className="row">
                        <div className="col-sm-12"> BathRoom type</div>
                        </div>

                        <div className="row">
                        <div className="col-sm-4">
                          <div  className={this.state.bathroomdiv1} onClick={this.handlebathroomtype.bind(this, 'Sharing','1')} >
                            Sharing
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.bathroomdiv2} onClick={this.handlebathroomtype.bind(this, 'Flexible','2')} >
                            Flexible
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div className={this.state.bathroomdiv3}  onClick={this.handlebathroomtype.bind(this, 'Ensuit or Own required','3')} >
                            Ensuit or Own required
                          </div>
                        </div>


                      </div>

                      <div className="row">
                        <div className="col-sm-12"> Parking </div>
                        </div>


                        <div className="row">
                        <div className="col-sm-4">
                          <div className={this.state.parkingdiv1} onClick={this.handleparking.bind(this, 'Flexible','1')} >
                            Flexible
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.parkingdiv2} onClick={this.handleparking.bind(this, 'Required','2')} >
                            Required
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.parkingdiv3} onClick={this.handleparking.bind(this, 'Off-street required','3')} >
                            Off-street required
                          </div>
                        </div>


                      </div>



                      <div className="row">
                        <div className="col-sm-12"> Max number of flatmate </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-4">
                          <div className={this.state.noflatematediv1}  onClick={this.handlemaxnumber.bind(this, 'Flexible','1')} >
                            Flexible
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div className={this.state.noflatematediv2} onClick={this.handlemaxnumber.bind(this, '1 Other','2')} >
                            1 Other
                          </div>
                          </div>
                          <div className="col-sm-4">
                          <div  className={this.state.noflatematediv3} onClick={this.handlemaxnumber.bind(this, '2 Other','3')} >
                            2 Other
                          </div>
                        </div>
                      </div>



                    </div>
                  }


                  {
                    this.state.divcountre == 5 &&
                    <div className={this.state.divcountre == 5 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Introduce abour yourself.</div>

                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          pic

                          <input className="fileInput"
                            type="file"
                            onChange={(e) => this._handleImageChange(e)} />

                          <div className="imgPreview">
                            {$imagePreview}
                          </div>





                        </div>

                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 6 &&
                    <div className={this.state.divcountre == 6 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> About you.</div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12"> This place is for</div>
                        <div className="col-sm-12">
                          <div  onClick={this.handlethisplaceisfor.bind(this, 'Me')} >
                            Me
                          </div>
                          <div  onClick={this.handlethisplaceisfor.bind(this, 'Couple')} >
                            Couple
                          </div>
                          <div  onClick={this.handlethisplaceisfor.bind(this, 'Group')} >
                            Group
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12"> You name</div>
                        <div className="col-sm-12">
                        <input type="email" className="form-control" onChange={this.handlename} placeholder="your name"></input>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12"> You age</div>
                        <div className="col-sm-12">
                        <input type="email" className="form-control" onChange={this.handleage} placeholder="your name"></input>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12"> Gender</div>
                        <div className="col-sm-12">
                          <div  onClick={this.handlgender.bind(this, 'Female')} >
                            Female
                          </div>
                          <div  onClick={this.handlgender.bind(this, 'Male')} >
                            Male
                          </div>
                         
                        </div>
                      </div>



                    </div>
                  }


                  {
                    this.state.divcountre == 7 &&
                    <div className={this.state.divcountre == 7 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Employement Status.</div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Working full-time')} >
                          Working full-time
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Working part-time')} >
                            Working part-time
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Working holiday')} >
                            Working holiday
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Retired')} >
                            Retired
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Unemployeed')} >
                            Unemployeed
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Backpacker')} >
                            Backpacker
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, 'Student')} >
                            Student
                          </div>
                          <div  onClick={this.handleEmployeeStatus.bind(this, ' Job Offer')} >
                            Job Offer
                          </div>
                        </div>
                      </div>
                    </div>
                  }



                  {
                    this.state.divcountre == 8 &&
                    <div className={this.state.divcountre == 8 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> Life Style.</div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                          <div  onClick={this.handlelifestyle.bind(this, 'Smoker')} >
                          Smoker
                          </div>
                          <div  onClick={this.handlelifestyle.bind(this, 'LBTB1+')} >
                          LBTB1
                          </div>
                          <div  onClick={this.handlelifestyle.bind(this, 'Pets')} >
                          Pets
                          </div>
                          <div  onClick={this.handlelifestyle.bind(this, 'Children')} >
                          Children
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                  {
                    this.state.divcountre == 9 &&
                    <div className={this.state.divcountre == 9 ? this.state.visibleclass : this.state.hiddenclass}>
                      <div className="row">
                        <div className="col-sm-12"> What makes you to greate to live with.</div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                        

                        <input type="email" className="form-control" onChange={this.handlabouturselfparagraph} placeholder="fews line for all others"></input>

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

  handletype(val,tval) {
switch(tval){
  case "1":
    this.setState({
      type: val,
      typediv1:"fdvihover",
      typediv2:"normaldivbutton",
      typediv3:"normaldivbutton",
      typediv4:"normaldivbutton",
      typediv5:"normaldivbutton",
      typediv6:"normaldivbutton",
      typediv7:"normaldivbutton",
      typediv8:"normaldivbutton",
    });
    break;

    case "2":
    this.setState({
      type: val,
      typediv2:"fdvihover",
      typediv1:"normaldivbutton",
      typediv3:"normaldivbutton",
      typediv4:"normaldivbutton",
      typediv5:"normaldivbutton",
      typediv6:"normaldivbutton",
      typediv7:"normaldivbutton",
      typediv8:"normaldivbutton",
    });
    break;

    case "3":
    this.setState({
      type: val,
      typediv3:"fdvihover",
      typediv2:"normaldivbutton",
      typediv1:"normaldivbutton",
      typediv4:"normaldivbutton",
      typediv5:"normaldivbutton",
      typediv6:"normaldivbutton",
      typediv7:"normaldivbutton",
      typediv8:"normaldivbutton",
    });
    break;

    case "4":
      this.setState({
        type: val,
        typediv4:"fdvihover",
        typediv2:"normaldivbutton",
        typediv3:"normaldivbutton",
        typediv1:"normaldivbutton",
        typediv5:"normaldivbutton",
        typediv6:"normaldivbutton",
        typediv7:"normaldivbutton",
        typediv8:"normaldivbutton",
      });
      break;


      case "5":
      this.setState({
        type: val,
        typediv5:"fdvihover",
        typediv2:"normaldivbutton",
        typediv3:"normaldivbutton",
        typediv1:"normaldivbutton",
        typediv4:"normaldivbutton",
        typediv6:"normaldivbutton",
        typediv7:"normaldivbutton",
        typediv8:"normaldivbutton",
      });
      break;


      case "6":
        this.setState({
          type: val,
          typediv6:"fdvihover",
          typediv2:"normaldivbutton",
          typediv3:"normaldivbutton",
          typediv1:"normaldivbutton",
          typediv4:"normaldivbutton",
          typediv5:"normaldivbutton",
          typediv7:"normaldivbutton",
          typediv8:"normaldivbutton",
        });
        break;

        case "7":
        this.setState({
          type: val,
          typediv7:"fdvihover",
          typediv2:"normaldivbutton",
          typediv3:"normaldivbutton",
          typediv1:"normaldivbutton",
          typediv4:"normaldivbutton",
          typediv5:"normaldivbutton",
          typediv6:"normaldivbutton",
          typediv8:"normaldivbutton",
        });
        break;

        case "8":
          this.setState({
            type: val,
            typediv8:"fdvihover",
            typediv2:"normaldivbutton",
            typediv3:"normaldivbutton",
            typediv1:"normaldivbutton",
            typediv4:"normaldivbutton",
            typediv5:"normaldivbutton",
            typediv6:"normaldivbutton",
            typediv7:"normaldivbutton",
          });
          break;
}


    
  }

  handlearea(val) {
    this.setState({
      area: val,
      location: val,
    });
  }

  handlearent(val) {
    this.setState({
      rent: val,
    });
  }



  handlestaylength(val) {
    this.setState({
      timelength: val,
    });
  }


  handlroomfurnishing(val,roomfurval) {
switch(roomfurval){
  case "1":
    this.setState({
      roomfurdiv1:"innervbuutonhover",
      roomfurdiv2:"innervbuuton",
      roomfurdiv3:"innervbuuton",
      RoomFurnishing: val,
    });
    break;

    case "2":
    this.setState({
      roomfurdiv1:"innervbuuton",
      roomfurdiv2:"innervbuutonhover",
      roomfurdiv3:"innervbuuton",
      RoomFurnishing: val,
    });
    break;

    case "3":
    this.setState({
      roomfurdiv1:"innervbuuton",
      roomfurdiv2:"innervbuuton",
      roomfurdiv3:"innervbuutonhover",
      RoomFurnishing: val,
    });
    break;
}

    
  }


  handleinternet(val) {
    this.setState({
      Internet: val,
    });
  }
  handlebathroomtype(val) {
    this.setState({
      BathRoomType: val,
    });
  }

  handleparking(val) {
    this.setState({
      Parking: val,
    });
  }


  handlemaxnumber(val) {
    this.setState({
      MaxNumberoflatemate: val,
    });
  }


  handlethisplaceisfor(val){
    this.setState({
      thisplaceisfor: val,
    }); 
  }

  handlename(val){
    this.setState({
      myname: val,
    }); 
  }

  handleage(val){
    this.setState({
      age: val,
    }); 
  }

  handlgender(val){
    this.setState({
      gender: val,
    }); 
  }

  handleEmployeeStatus(val){
    this.setState({
      employeestatus: val,
    }); 
  }

  handlelifestyle(val){
    this.setState({
      lifestyle: val,
    }); 
  }
  handlabouturselfparagraph(val){
    this.setState({
      abouturselfparagraph: val,
    }); 
  }
  
  
}

export default withTranslation()(lookingoforroom);
