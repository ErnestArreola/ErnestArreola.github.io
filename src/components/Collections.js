import {Link, BrowserRouter, Route} from "react-router-dom";
import Atropos from 'atropos/react';


//links
import ProjectInfo from '../views/ProjectInfo';


//data
import {projectList} from '../views/Data';
import "./Atropos.css";

import {
  spotifyOne,
  spotifyTwo,
  spotifyThree,
  spotifyFour,
  spotifyTitle,
} from './index.js';

import image1 from '../assests/img/Spotify-2.png';
const callouts = [
    {
      name: 'Native Commerce',
      description: 'E-Commerce',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Native Commerce',
      href: '#',
    },
    {
      name: 'E-Comemrce',
      description: 'Native Commerce',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Native Commerce',
      href: '#',
    },
    {
      name: 'Spotify',
      description: 'Spotify Clone',
      imageSrc: `${spotifyTitle}`,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Collections() {
    return (
      <div className="bg-gray-100" id = "Projects" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-24 lg:max-w-none">
            <h2 className="text-4xl font-extrabold text-gray-900">Projects</h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10 py-8 ">
              {callouts.map((callout) => (
                <Link to = {`/projects/${callout.name}`}>
                              <Atropos  
                              shadowOffset = {4.5}
                              highlight = {false} >
                <div key={callout.name} className="group relative">

                  <div className="relative w-full h-80 bg-gray rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      data-atropos-offset = "-5"
                      src= {callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"

                    />
                  </div>

                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
                </Atropos>
                </Link>

              ))}
            </div>

          </div>
        </div>
      </div>
    )
  }