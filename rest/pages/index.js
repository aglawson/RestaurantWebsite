import { useEffect, useState } from 'react';

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
        <nav>
          <div className="mybrand">一輪</div>
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
            <h1>Ichirin 一輪</h1>
            <h3>
              Ramen
            </h3>
            <p>
              Take a look at our menu and submit an order

                {/* <a href="https://twitter.com/ishan02016" target="_blank">
                  menu
                </a> */}
            </p>
            <span>
             <button className="primary-btn">Menu</button>
             <button className="primary-btn">Order</button>
             <button className="primary-btn">About</button>
            </span>
           

          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;