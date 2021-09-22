import './Header.css';
import headerLogo from '../../images/header__logo.png';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

function Header({handleBurgerClick, isMenuOpened}) {
  const history = useHistory();
  function goHome() {
    history.push('/');
  }

  function openMenu() {
    handleBurgerClick(true);
  }

  const burgerMenuSelectors = classNames('header__burger-menu', {
    'header__burger-menu_hidden': isMenuOpened
  });

  return (
    <div className="header">
      <div className="header__logo-container">
        <p className="header__logo-title">
          {`Центр оперативной
          рекламной полиграфии`}
        </p>
        <img className="header__logo" src={headerLogo} alt="ОРП принт" onClick={goHome}/>
        <button type="button" className={burgerMenuSelectors} onClick={openMenu}/>
      </div>
      <div className="header__contacts">
        <div className="header__phones">
          <a className="header__item" href="tel:+7-812-716-90-21">(812) 716 90 21</a>
          <a className="header__item" href="https://wa.me/79112109663" target="_blank" rel="noreferrer">whatsapp</a>
          <a className="header__item header__item_mobile-hidden" href="tel:+7-921-583-67-45">(921) 583 67 45</a>
        </div>
        <div className="header__addresses">
          <a className="header__item" href="mailto:info@orp@spb.ru" target="_blank" rel="noreferrer">info@orp@spb.ru</a>
          <a className="header__item header__item_mobile-hidden" href="https://yandex.ru/maps/-/CCUmz0FxHD" target="_blank" rel="noreferrer">Спб, ул. Политехническая, д. 9Б, офис 206</a>
        </div>
      </div>
    </div>
  )
}

export default Header;