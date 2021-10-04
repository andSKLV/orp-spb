import Carousel from '../Carousel/Carousel';
import Portfolio from '../Portfolio/Portfolio';
import './HelloPage.css';
// import { useHistory } from 'react-router-dom';

function HelloPage() {
  //const history = useHistory();

  return (
    <div className="hello-page">
      <div className="hello-page__carousel-container">
        <Carousel/>
      </div>
    </div>
  )
}

export default HelloPage;