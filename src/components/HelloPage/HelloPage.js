import Carousel from '../Carousel/Carousel';
import Portfolio from '../Portfolio/Portfolio';
import './HelloPage.css';
// import { useHistory } from 'react-router-dom';

function HelloPage() {
  //const history = useHistory();

  return (
    <div className="hello-page">
      <Carousel/>
      <Portfolio/>
    </div>
  )
}

export default HelloPage;