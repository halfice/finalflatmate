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
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Room(s) in an existing sharehouse')} >
                              Rooms in and Eixisitn sharehouse
                          </Button>



                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Whole Property for rent')} >
                              Whole Property for rent
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >

                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Studio')} >
                              Studio
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Granny flats')} >
                              Granny flats
                          </Button>


                          </div>
                        </div>
                      </div>

                      <div className="row">

                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'student accomodation')} >
                              student accomodation
                          </Button>


                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'One bed flat')} >
                              One bed flat
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Home Stay')} >
                              Home Stay
                          </Button>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="iconsclassgray" >
                            <Button className="mybuttons" onClick={this.handletype.bind(this, 'Shared room')} >
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
                        <div className="col-sm-12"> Room Furnishing</div>
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handlroomfurnishing.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                          <Button className="mybuttons" onClick={this.handlroomfurnishing.bind(this, 'Required')} >
                            Required
                          </Button>
                          <Button className="mybuttons" onClick={this.handlroomfurnishing.bind(this, 'Not required')} >
                            Not Required
                          </Button>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12"> Internet</div>
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handleinternet.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                          <Button className="mybuttons" onClick={this.handleinternet.bind(this, 'Required')} >
                            Required
                          </Button>
                          <Button className="mybuttons" onClick={this.handleinternet.bind(this, 'Not required')} >
                            Not Required
                          </Button>
                        </div>
                      </div>



                      <div className="row">
                        <div className="col-sm-12"> BathRoom type</div>
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handlebathroomtype.bind(this, 'Sharing')} >
                            Sharing
                          </Button>
                          <Button className="mybuttons" onClick={this.handlebathroomtype.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                          <Button className="mybuttons" onClick={this.handlebathroomtype.bind(this, 'Ensuit or Own required')} >
                            Ensuit or Own required
                          </Button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12"> Parking </div>
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handleparking.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                          <Button className="mybuttons" onClick={this.handleparking.bind(this, 'Required')} >
                            Required
                          </Button>
                          <Button className="mybuttons" onClick={this.handleparking.bind(this, 'Off-street required')} >
                            Off-street required
                          </Button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12"> Max number of flatmate </div>
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handlemaxnumber.bind(this, 'Flexible')} >
                            Flexible
                          </Button>
                          <Button className="mybuttons" onClick={this.handlemaxnumber.bind(this, '1 Other')} >
                            1 Other
                          </Button>
                          <Button className="mybuttons" onClick={this.handlemaxnumber.bind(this, '2 Other')} >
                            2 Other
                          </Button>
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
                          <Button className="mybuttons" onClick={this.handlethisplaceisfor.bind(this, 'Me')} >
                            Me
                          </Button>
                          <Button className="mybuttons" onClick={this.handlethisplaceisfor.bind(this, 'Couple')} >
                            Couple
                          </Button>
                          <Button className="mybuttons" onClick={this.handlethisplaceisfor.bind(this, 'Group')} >
                            Group
                          </Button>
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
                          <Button className="mybuttons" onClick={this.handlgender.bind(this, 'Female')} >
                            Female
                          </Button>
                          <Button className="mybuttons" onClick={this.handlgender.bind(this, 'Male')} >
                            Male
                          </Button>
                         
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
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Working full-time')} >
                          Working full-time
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Working part-time')} >
                            Working part-time
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Working holiday')} >
                            Working holiday
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Retired')} >
                            Retired
                          </Button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Unemployeed')} >
                            Unemployeed
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Backpacker')} >
                            Backpacker
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, 'Student')} >
                            Student
                          </Button>
                          <Button className="mybuttons" onClick={this.handleEmployeeStatus.bind(this, ' Job Offer')} >
                            Job Offer
                          </Button>
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
                          <Button className="mybuttons" onClick={this.handlelifestyle.bind(this, 'Smoker')} >
                          Smoker
                          </Button>
                          <Button className="mybuttons" onClick={this.handlelifestyle.bind(this, 'LBTB1+')} >
                          LBTB1
                          </Button>
                          <Button className="mybuttons" onClick={this.handlelifestyle.bind(this, 'Pets')} >
                          Pets
                          </Button>
                          <Button className="mybuttons" onClick={this.handlelifestyle.bind(this, 'Children')} >
                          Children
                          </Button>
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

  handletype(val) {
    this.setState({
      type: val
    });
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


  handlroomfurnishing(val) {
    this.setState({
      RoomFurnishing: val,
    });
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
