import React from 'react';
import '../App.scss';
import TopLogo from './pages/header/TopLogo';
import Menu from './pages/header/Menu';
import HomeContent from './pages/home-content/HomeContent';
import Footer from './pages/Footer';

const App = () => (
  <div>
    <div className="container header">
      <TopLogo></TopLogo>
      <Menu></Menu>
      <HomeContent></HomeContent>
    </div>
    <Footer></Footer>
  </div>
)

export default App;
