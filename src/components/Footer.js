import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default function Footer() {
  return (
    <footer className="text-dark container-fluid pb-4">
      <div className="row d-flex justify-content-center">
          <div className="align-self-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="">
              <p className="text-center">Hand-built with React.js<br/>Jonathan Le © 2020</p>
            </div>
          </div>
      </div>
    </footer>
  )
}