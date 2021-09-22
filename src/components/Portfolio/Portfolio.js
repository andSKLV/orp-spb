import './Portfolio.css';
import { portfolioItems } from '../../utils/portfolioItems.js';

function Portfolio() {

  return (
    <div className="portfolio">
      <h3 className="portfolio__title">
        Популярная продукция
      </h3>
      <p className="portfolio__subtitle">
        продукция, которую у нас чаще заказывают
      </p>
      <div className="portfolio__items-container">
        {portfolioItems.map((item, index) => 
        <a className="portfolio__item" href={item.link} target="_blank" rel="noreferrer" key={index}>
          <img className="portfolio__img" src={item.img} alt={item.alt}/>
        </a>
        )}
      </div>
    </div>
  )
}

export default Portfolio;