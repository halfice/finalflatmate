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
import LoginScreen from './screenlogin'
import Register from './screenregister'




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
     // needwizard: 0,
     needwizard: 1,
      ownerwizard: 0,
      userid: 0,
      showcard: 1,

    }
  }

  handlerhome = (val) => {
    this.setState({
      needwizard: val,
      showcard: 1,
    })
  }

  handlerRegister = (val) => {

    this.setState({
      needwizard: val,
      showcard: 0,

    })
  }

  handleRegisnteredUserId = (useridfromdb) => {
    //alert(useridfromdb);
    this.setState({
      userid: useridfromdb,
      needwizard: 0,
      showcard: 1,

    })
  }



  handler = (val) => {

    var tmpuserchecking = 0;
    var tempval = val;
    var tmpshowcards = 1;
    if (this.state.userid == 0) {
      tempval = 100;
      tmpshowcards = 0;
    } else {
      tempval = val;
    }

    this.setState({
      needwizard: tempval,
      showcard: tmpshowcards,
    })
  }

  handlertwo = (val) => {

    var tmpuserchecking = 0;
    var tempval = val;
    var tmpshowcards = 1;
    if (this.state.userid == 0) {
      tempval = 100;
      tmpshowcards = 0;
    } else {
      tempval = val;
    }

    this.setState({
      ownerwizard: tempval,
      showcard: tmpshowcards,
    })
  }

  render() {
    const { t } = this.props;

    let somthingNeedsTobe = "";
    let tagetedValue = 1;
    //when you want it to be rtl 
    if (tagetedValue === 1) {
      somthingNeedsTobe = "rtl"
    } else {
      somthingNeedsTobe = "ltr"
    }

    return (
      <div className="App">
        <div className=""><Header handlerhome={this.handlerhome} /></div>
        {this.state.needwizard == 0 && this.state.ownerwizard == 0 &&
          <div className=""><Rating handler={this.handler} />
            {this.state.userid}</div>
        }

        <br></br>

        {this.state.needwizard == 1000 &&

          <div className="row">

            <Register handleRegisnteredUserId={this.handleRegisnteredUserId} />
          </div>

        }


        {this.state.needwizard == 100 &&

          <div className="row">

            <LoginScreen handlerRegister={this.handlerRegister} handleRegisnteredUserId={this.handleRegisnteredUserId} />
          </div>

        }

        {this.state.needwizard == 0 &&

          <div className="row"><Loginsecion handler={this.handler} /></div>

        }

        {this.state.needwizard == 1 &&

          <div className="col-sm-12"><Looking /></div>

        }

{
            this.state.needwizard == 3 &&

            <div className="col-sm-12"><RoomOwner /></div>

          }

        <div className="row">
          {
            this.state.showcard == 1 &&

            <div className="col-sm-12"><Bodycards /></div>

          }

          

        </div>
        <div className="dontshow" >
          <p>{t('Thanks.1')}</p>  <p>{t('Why.1')}</p>
          {somthingNeedsTobe === "rtl" ?
            t('Position1') :
            t('Position2')
          }
          {somthingNeedsTobe === "rtl" ?
            //Load External Css A
            <></>
            :
            <></>
            //Load External Css B
          }

        </div>
        <div className="row"><Footer /></div>

      </div>
    )
  }


}

export default withTranslation()(App);
