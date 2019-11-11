import React, { Component } from 'react';

const ContactSocial = (props) => 
    <div className="contact">
        <a href={props.link} className="contact__social">
            <img src={images[props.imageLink]} alt={props.imageName} className={props.className} />
        </a>
    </div>
;
  
  export default ContactSocial;