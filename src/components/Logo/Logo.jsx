import s from './Logo.module.scss';
import sprite from '../../images/icons.svg';

function Logo() {

  return (
    <a className={s.logo} href='#.'>
      <svg className={s.img} alt="Logo" width="247" height="38">
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
    </a>
  );
}

export default Logo;