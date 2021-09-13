import { Link } from "react-router-dom";
import './Slide.css';


export default function Slide({img, link, title, subtitle}) {
  return (
    <div className="slide">
      <img className="slide__img" src={img} alt={title}/>
      <h3 className="slide__title">{title}</h3>
      <h4 className="slide__subtitle">{subtitle}</h4>
      <Link className="slide__link" to={link}>Go!</Link>
    </div>
  )
}