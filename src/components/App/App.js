import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../utils/firebaseConfig';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuNav from '../MenuNav/MenuNav';

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, [])
  return (
    <div className="App">
      <header><Link to="/"><span>header</span></Link></header>
      <div className="App__main-container">
        <MenuNav/>
        <div className="App__main-content">
          <Switch>
            <Route exact path="/">
              <div className="">ОСП СПБ</div>
            </Route>
            <Route exact path="/banners">
              <div className="">Баннера</div>
            </Route>
            <Route exact path="/notebooks">
              <div className="">Блокноты</div>
            </Route>
            <Route exact path="/keychains-with-a-logo">
              <div className="">Брелки с логотипом</div>
            </Route>
            <Route exact path="/brochure">
              <div className="">Брошюровка</div>
            </Route>
            <Route exact path="/booklets-catalogs">
              <div className="">Буклеты/каталоги</div>
            </Route>
            <Route exact path="/business-cards">
              <div className="">Визитки</div>
            </Route>
            <Route exact path="/design">
              <div className="">Дизайн</div>
            </Route>
            <Route exact path="/eurobuklets">
              <div className="">Евробуклеты</div>
            </Route>
            <Route exact path="/diaries">
              <div className="">Ежедневники</div>
            </Route>
            <Route exact path="/diplomas">
              <div className="">Дипломы</div>
            </Route>
            <Route exact path="/umbrellas-with-a-logo">
              <div className="">Зонты с логотипом</div>
            </Route>
            <Route exact path="/calendars">
              <div className="">Календари</div>
            </Route>
            <Route exact path="/mugs-with-a-logo">
              <div className="">Кружки с логотипом</div>
            </Route>
            <Route exact path="/lamination">
              <div className="">Ламинация</div>
            </Route>
            <Route exact path="/flyers">
              <div className="">Листовки / флаерсы</div>
            </Route>
            <Route exact path="/stickers">
              <div className="">Наклейки</div>
            </Route>
            <Route exact path="/postcards">
              <div className="">Открытки</div>
            </Route>
            <Route exact path="/paper-plastic-bags">
              <div className="">Пакеты бумажные / пэ</div>
            </Route>
            <Route exact path="/folders">
              <div className="">Папки</div>
            </Route>
            <Route exact path="/seals-stamps">
              <div className="">Печати / штампы</div>
            </Route>
            <Route exact path="/foil-printing">
              <div className="">Печать фольгой</div>
            </Route>
            <Route exact path="/posters">
              <div className="">Плакаты / постеры</div>
            </Route>
            <Route exact path="/plotter-cutting">
              <div className="">Плоттерная резка</div>
            </Route>
            <Route exact path="/pseudoplastics">
              <div className="">Псевдопластик</div>
            </Route>
            <Route exact path="/risography">
              <div className="">Ризография</div>
            </Route>
            <Route exact path="/roll-up-X-stand">
              <div className="">Ролл ап / Х - стенд</div>
            </Route>
            <Route exact path="/pens-with-a-logo">
              <div className="">Ручки с логотипом</div>
            </Route>
            <Route exact path="/self-copying-forms">
              <div className="">Самокопирующиеся бланки</div>
            </Route>
            <Route exact path="/information-stands">
              <div className="">Стенды информационные</div>
            </Route>
            <Route exact path="/souvenir-products">
              <div className="">Сувенирная продукция</div>
            </Route>
            <Route exact path="/signs">
              <div className="">Таблички</div>
            </Route>
            <Route exact path="/flash-cards-with-a-logo">
              <div className="">Флеш-карты с логотипом</div>
            </Route>
            <Route exact path="/t-shirts-with-a-logo">
              <div className="">Футболки с логотипом</div>
            </Route>
          </Switch>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
