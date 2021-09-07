import { NavLink } from 'react-router-dom';
import './MenuNav.css';
import { MenuNavItems } from '../../utils/MenuNavItems';

function MenuNav() {
  return (
    <div className="menu-nav">
      {MenuNavItems.map((el, index) => 
        <NavLink to={el.link} className="menu-nav__item" activeClassName="menu-nav__item_active" key={index}>
          {el.text}
        </NavLink>)
      }
    </div>
  )
}

export default MenuNav;