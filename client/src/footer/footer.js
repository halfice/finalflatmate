import React, { Suspense, Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css";
import '../i18n';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
class Footer extends Component {
	handleClick(lang) {
		i18next.changeLanguage(lang)
	}

	render() {
		return (
			<div className="mainDivFooter">
				<div className="container">
					<div className="row text-center text-xs-center text-sm-left text-md-left">
						<div className="col-xs-12 col-sm-4 col-md-4">
							<div className="mainquicklinks">Explore covid-19</div>
							<ul className="list-unstyled quick-links">
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Home</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>About</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>FAQ</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Get Started</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Videos</a></li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4">
							<div className="mainquicklinks">Social Media</div>
							<ul className="list-unstyled quick-links">
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Home</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>About</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>FAQ</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Get Started</a></li>
								<li><a href="https://www.fiverr.com/share/qb8D02"><i className=""></i>Videos</a></li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4">
							<div className="mainquicklinks">About Us</div>
							<ul className="list-unstyled quick-links">
								<li>
								<a onClick={() => this.handleClick('en')} ><i className=""></i>English</a>
								</li>
								<li>
								<a onClick={() => this.handleClick('ko')} ><i className=""></i>Korean</a>
								</li>
								<li>
								<a onClick={() => this.handleClick('chi')} ><i className=""></i>Chinese</a>
								</li>
								<li>
								<a onClick={() => this.handleClick('ar')} ><i className=""></i>Arabic</a>
								</li>


							</ul>

							
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
							<ul className="list-unstyled list-inline social text-center">
								<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram"></i></a></li>
								<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-google-plus"></i></a></li>
								<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>

				</div>
				<hr></hr>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
						<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
						<p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
					</div>

				</div>
				<hr></hr>
			</div>
		);
	}

}

export default withTranslation()(Footer);
/*
function Footer() {

	handleClick(lang) {
		i18next.changeLanguage(lang)
	  }


}

export default Footer;

*/