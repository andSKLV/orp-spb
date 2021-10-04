import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__section-list">
        <li className="footer__section">
          <h5 className="footer__title">
            Контакты:
          </h5>
          <a className="footer__item" href="tel:+7-812-716-90-21">(812) 716 90 21</a>
          <a className="footer__item" href="https://wa.me/79112109663" target="_blank" rel="noreferrer">(911)2109663</a>
          <a className="footer__item" href="tel:+7-921-583-67-45">(921) 583 67 45</a>
          <a className="footer__item" href="mailto:info@orp@spb.ru" target="_blank" rel="noreferrer">info@orp@spb.ru</a>
        </li>
        <li className="footer__section">
          <h5 className="footer__title">
            Контакты:
          </h5>
          <a className="footer__item" href="https://yandex.ru/maps/-/CCUmz0FxHD" target="_blank" rel="noreferrer">
            {`194021, Санкт-Петербург,
              ул. Политехническая, д. 9Б, 
              БЦ "Стройимпульс"
              3-х эт. корпус, офис 206
            `}
          </a>
        </li>
        <li className="footer__section">
          <h5 className="footer__title">
            Часы работы:
          </h5>
          <p className="footer__item">
            {`Понедельник - пятница
              с 10:00 до 19:00;
              суббота - воскресенье
              по договоренности.
            `}
          </p>
        </li>
        <li className="footer__section">
          <h5 className="footer__title">
            Оплата заказов:
          </h5>
          <p className="footer__item">
            {`безналичный расчет
              (с НДС / без НДС)
              документы выдаются
              со сдачей заказа
            `}
          </p>
        </li>
      </ul>
      <p className="footer__requirements">Требования к макетам</p>
    </div>
  )
}

export default Footer;