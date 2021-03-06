import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                status:false
        }
    }


    toggle = ()=>{
        if(this.state.status === false){
            this.setState({status:true});
        }else{
            this.setState({status:false})
        }
    }
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
      
          <a href="#ToggleNavbar" role="button" onClick={this.toggle} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className={this.state.status === true ? 'navbar-menu is-active':"navbar-menu"}>
          <div className="navbar-start">
            <Link to='/home' className="navbar-item" href="#Home">
              Home
            </Link>
      
            <a className="navbar-item" href="#services">
              Services
            </a>
      
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to='/' className="navbar-link" href="#login">
                Login
              </Link>
      
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
        )
    }
}

export default Navbar
