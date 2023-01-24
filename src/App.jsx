import s from './App.module.scss';
import Box from './components/Box';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className={s.App}>
      <Box />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
