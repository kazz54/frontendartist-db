import React, { Component } from 'react';
import Defaultheader from './defaultheader';
import Banner from './banner';
import { Link } from 'react-router-dom';
export default class Default extends Component {
  render() {
    return (
	   <div>
       
        <Banner></Banner>     
       
        <Defaultheader title="404" styleClass="default-hero">
        <h2 className="text-defapri text-uppercase">
         The page you're looking for doesn't exist
        </h2>
        <Link to="/" className="text-defapri  text-uppercase">
          return home
        </Link>
      </Defaultheader>
      </div>
    );
  }
}