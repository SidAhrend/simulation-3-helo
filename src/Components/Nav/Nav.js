import React, { Component } from "react";
import "../Nav/nav.css";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src=''/>
        <br />
        <Link to='/dashboard'><button>home</button></Link>
        <br/>
        <Link to='/new'><button>new post</button></Link>
        <br/>
        <Link to='/'><button>logout</button></Link>
      </div>
    );
  }
}

export default Nav;
