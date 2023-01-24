import s from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}><a href="#.">Home</a></li>
        <li className={s.item}><a href="#.">About</a></li>
        <li className={s.item}><a href="#.">Cases</a></li>
        <li className={s.item}><a href="#.">Blog</a></li>
        <li className={s.item}><a href="#.">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
