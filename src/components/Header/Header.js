import './Header.css';
import headerLogo from '../../images/header__logo.png';
import { useHistory } from 'react-router-dom';

function MenuNav() {
  const history = useHistory();
  function goHome() {
    history.push('/');
  }
  return (
    <div className="header">
      <div className="header__logo-container" onClick={goHome}>
        <p className="header__logo-title">
          {`Центр оперативной
          рекламной полиграфии`}
        </p>
        <img className="header__logo" src={headerLogo} alt="ОРП принт"/>
      </div>
      <div className="header__contacts">
        <div className="header__phones">
          <p className="header__item">(812) 716 90 21</p>
          <p className="header__item">(911) 210 96 63</p>
          <p className="header__item">(921) 583 67 45</p>
        </div>
        <div className="header__addresses">
          <p className="header__item">info@orp@spb.ru</p>
          <p className="header__item">Спб, ул. Политехническая, д. 9Б, офис 206</p>
        </div>

      </div>
    </div>
  )
}

export default MenuNav;