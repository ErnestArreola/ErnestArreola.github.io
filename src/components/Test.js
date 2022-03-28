import React from 'react';
import Atropos from 'atropos/react';
 
import "./Atropos.css";



export default function Test() {
    return (
            <div className = "container">
                <Atropos className = "atripos-banner" highlight = {false} >
                        <img
                            data-atropos-offset="-5"
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                          />
                        <img
                            data-atropos-offset="-2.5"
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                          />
                </Atropos>
                 </div>     
    )
  }