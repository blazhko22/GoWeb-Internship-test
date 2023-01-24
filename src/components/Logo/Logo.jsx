import s from './Logo.module.scss';
import logo from "../../images/logo.png";

function Logo() {

  return (
    <a className={s.logo} href='#.'>
      <img className={s.img} src={logo} alt="Logo" />
      <h1 className={s.name}>Finance <span className={s.text}>Ledger</span></h1>
    </a>
  );
}

export default Logo;