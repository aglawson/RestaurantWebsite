import { useEffect, useState } from 'react';
import Link from 'next/link';
import './api/hello';
import { menu, order, about } from './api/hello';
const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
      <div className="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    {/* <div class="topnav">
      <a href="#home" class="active">Logo</a>
      <div id="myLinks">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#order">Order</a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div> */}
        <nav>
          <div className="mybrand">Ichirin 一輪</div>
          <div>
            {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
          </div>
        </nav>
        <section>
          <div className="heroSection">
            {/* <h1>Ichirin 一輪</h1> */}
            {/* <h3>
              Bento Boxes
            </h3>
            <p>
              Take a look at our menu and submit an order
            </p> */}
            <span>
            <a className='menu-img' href='https://ipfs.moralis.io:2053/ipfs/QmXMpVJwccMfwYyrCS7XxeTZgCTussVgn2BNLfGGGS5Y1h' target={'_blank'}><button className="menu-btn"><p className='menu-txt'>Menu</p></button></a>
             {/* <a href='#order'><button className="primary-btn"></button></a>
             <a href='#about'><button className="primary-btn"></button></a> */}
            </span>
          </div>

          <div className='container' id='about'>
              {/* <h2>
                About
              </h2>
              
          </div>

          <div className='menu' id='menu'>
              <h2>
                Menu
              </h2>
          </div>

          <div className='container' id='order'>
              <h2>
                Order
              </h2> */}
              
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;