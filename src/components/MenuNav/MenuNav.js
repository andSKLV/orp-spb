import { NavLink } from 'react-router-dom';
import './MenuNav.css';
import { MenuNavItems } from '../../utils/MenuNavItems';
import classNames from 'classnames';

function MenuNav({handleCloseBtnClick, isOpened}) {

  const menuNavSelectors = classNames('menu-nav', {
    'menu-nav_opened': isOpened
  });

  function closeMenu() {
    handleCloseBtnClick(false);
  }
  return (
    <div className={menuNavSelectors}>
      <button type="button" className="menu-nav__close-btn" onClick={closeMenu}>close</button>
      {MenuNavItems.map((el, index) => 
        <NavLink to={el.link} className="menu-nav__item" activeClassName="menu-nav__item_active" key={index}>
          {el.text}
        </NavLink>)
      }
    </div>
  )
}

export default MenuNav;