import { useEffect, useState } from "react";
import googleSheetsApi from "../../utils/GoogleSheetsApi";
import tablesLinks from "../../utils/tablesLinks";
import bannersImg from '../../images/banners_1_img.png'

function Banners() {
  const [banners1, setBanners1] = useState([["360 точек",350],["720 точек",450],["1440 точек",550]]);
  const [banners2, setBanners2] = useState([["360 точек",490],["720 точек",630],["1440 точек",770]]);
  useEffect(() => {
    googleSheetsApi.getTableData(tablesLinks.banners1)
      .then((tableData) => {
        setBanners1(tableData.result);
      })
      .catch((error) => {
        console.log(error);
      });

      googleSheetsApi.getTableData(tablesLinks.banners2)
      .then((tableData) => {
        setBanners2(tableData.result);
        console.log(tableData);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  return (
    <div>
      <img className="product-page__image" src={bannersImg} alt="Фотография баннера"/>
      <h4>Печать баннеров / Изготовление баннеров</h4>
      <p>Баннер — это рекламный или информационный носитель, изготовленный на тканевой основе, так называемой «баннерной ткани» или в быту «клеёнке». Печать баннеров помогает изготавливать растяжки, транспаранты, выставочные стенды, стенды для оформления витрин или помещений.
        Важное преимущество в изготовление баннеров — относительно низкая стоимость. В зависимости от целей и месторасположения баннера различается и качество печати баннеров. Так, для наружной рекламы чаще используется печать баннеров с разрешением 360 dpi. Из-за просмотра с большого расстояния при невысокой резолюции изображение остается четким, а изготовление баннеров становится дешевле. Для носителей, расположенных внутри помещений, требуется более качественная печать баннеров. Такие заказы выполняются с качеством печати 720 — 1440 dpi.
        Современные краски позволяют получать прочное, сохраняющее в течение многих лет свою яркость изображение.
        Размер баннеров практически не ограничен — при изготовлении баннеров крупногабаритных успешно используется сварка/склейка.
        Печать баннеров занимает не много времени.
      </p>
      <h5>Изготовление баннеров «стандарт»</h5>
      <table className="product-page__table">
        <tbody>
          <tr>
            <td className="product-page__cell">Материал</td>
            <td className="product-page__cell">Разрешение печати</td>
            <td className="product-page__cell">Стоимость за м2.</td>
          </tr>
          <tr>
            <td rowSpan="3" className="product-page__cell">Баннер ламинированный Frontlit 440 гр.</td>
            <td className="product-page__cell">{banners1[0][0]}</td>
            <td className="product-page__cell">{banners1[0][1]}</td>
          </tr>
          <tr>
            <td className="product-page__cell">{banners1[1][0]}</td>
            <td className="product-page__cell">{banners1[1][1]}</td>
          </tr>
          <tr>
            <td className="product-page__cell">{banners1[2][0]}</td>
            <td className="product-page__cell">{banners1[2][1]}</td>
          </tr>
        </tbody>
      </table>  
      <p>
        Изготовление баннеров за 2-4 рабочих дня, в зависимости от загрузки производства.
      </p>
      <h4>Изготовление баннеров «24 часа»</h4>
      <table className="product-page__table">
        <tbody>
          <tr>
            <td className="product-page__cell">Материал</td>
            <td className="product-page__cell">Разрешение печати</td>
            <td className="product-page__cell">Стоимость за м2.</td>
          </tr>
          <tr>
            <td rowSpan="3" className="product-page__cell">Баннер ламинированный Frontlit 440 гр.</td>
            <td className="product-page__cell">{banners2[0][0]}</td>
            <td className="product-page__cell">{banners2[0][1]}</td>
          </tr>
          <tr>
            <td className="product-page__cell">{banners2[1][0]}</td>
            <td className="product-page__cell">{banners2[1][1]}</td>
          </tr>
          <tr>
            <td className="product-page__cell">{banners2[2][0]}</td>
            <td className="product-page__cell">{banners2[2][1]}</td>
          </tr>
        </tbody>
      </table>        
      <p>{`
        Изготовление баннеров за 24 часа с момента предоставления заказа, возможно для баннеров общей площадью до 50 м2.

        360 точек — для печати баннеров крупноформатных, просматриваемых с большого расстояния, на близком расстоянии заметны полосы на печатном поле, с расстояния 2-3 метра они уже не видны

        720 точек — для печати баннеров оптимальным качеством, например пленки для витрин, там где расстояние просмотра незначительно

        1440 точек — для интерьерной печати баннеров, где расстояние просмотра минимально

 

        У Вас есть идея вашего баннера? Мы можем для Вас сделать макет баннера. Макет баннера изготавливается 1-2 дня, в зависимости от исходного задания для правильного осуществления дизайн баннера. Стоимость дизайн баннера можно посмотреть у нас на сайте.

        Монтаж баннера могут осуществить наши монтажники. Стоимость монтажа баннера зависит от многих составляющих и для правильного расчета лучше позвоните нам. Монтаж баннера занимает не много времени, но зависит от площади и места монтажа. На монтаж баннера обычно выезжает 1-2 сотрудника, при необходимости вызывается бригада альпинистов.

        Все цены указаны в рублях с учетом НДС 18%. Указанные цены актуальны на 20 января 2016 года и/или при курсе валют $ до 87 руб., € до 95 руб. Информация на сайте не является публичной офертой.
      `}</p>
    </div>
  )
}

export default Banners;