import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Fonts/_Fonts.scss';
import './Default/_Default.scss';

import Header from './components/Header/Header';
import TitleSection from './components/TitleSection/TitleSection';
import Partners from './components/Partners/Partners';
import ContentSection from './components/ContentSection/ContentSection';
import SpecialWay from './components/SpecialWay/SpecialWay';
import MakeTogether from './components/MakeTogether/MakeTogether';
import Footer from './components/Footer/Footer';

// V1.0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <main className='main'>
        <TitleSection/>
        <Partners/>
        <ContentSection/>
        <SpecialWay/>
        <MakeTogether/>
        <Footer/>
    </main>
  </React.StrictMode>
);
