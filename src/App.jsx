import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [scrollTop, setScrollTop] = useState(0);
  
  useEffect(() => {
    const hendleScroll = (e) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', hendleScroll);

    return () => {
      window.removeEventListener('scroll', hendleScroll);
    };
  }, []);

  console.log(scrollTop)
  return (
    <div className={s.App} >
      <Header scrollTop={scrollTop}/>
      <Main scrollTop={scrollTop}/>
      <Footer />
    </div>
  );
}

export default App;
