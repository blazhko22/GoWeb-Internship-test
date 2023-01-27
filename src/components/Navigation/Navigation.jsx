import s from './Navigation.module.scss';

function Navigation() {
  return (
    <nav id="nav" className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}><a id='link-home' href="#home">Home</a></li>
        <li className={s.item}><a id='link-about' href="#about">About</a></li>
        <li className={s.item}><a id='link-cases' href="#cases">Cases</a></li>
        <li className={s.item}><a id='link-blog' href="#blog">Blog</a></li>
        <li className={s.item}><a id='link-form' href="#form">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
