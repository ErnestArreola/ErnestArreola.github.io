import React from 'react'

//components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Collections from '../components/Collections';
import Test from '../components/Test';
import {Footer} from "../components/Footer";
import {HeroIntro} from '../components/HeroIntro';
import {Jump} from '../components/Jump';
import Navbar2 from '../components/Navbar-2';
import {Contact} from './Contact';
import Skills from '../components/Skills/Skills';
import IntroSection from '../components/IntroSection';


//components
import ModalResume from '../components/Modal';

function Index() {
    return (
        <div >
            <HeroIntro/>
            <Collections/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Index
