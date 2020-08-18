import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { MainContext } from '../../contexts/MainContext';

const FoodMenu = () => {
  const {API_URL} = process.env;
  const pageData = useContext(MainContext);
  const router = useRouter();
  const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
  const page = result[0];
  const foodMenuItems = page.food_menus;

  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");

  // initialize an Isotope object with configs
 useEffect(() => {
    setIsotope(
    new Isotope(".portfolio-items", {
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows" }));
  }, []);

  // handling filter key change
  useEffect(
  () => {
    if (isotope) {
      filterKey === "*" ?
      isotope.arrange({ filter: `*` }) :
      isotope.arrange({ filter: `.${filterKey}` });
    }
  },
  [isotope, filterKey]);

  return (
    <section>
      <div className="container filterable-portfolio" id="portfolio">
            <ul className="nav nav-pills portfolio-filter menu">
              <li onClick= { () => setFilterKey("*") }><a>ALL</a></li>
              { foodMenuItems.map((type, indx) => 
                <li key={indx} onClick= { () => setFilterKey(`${type.Title.replace(/\s/g, '')}`) }>
                  <a>{type.Title}</a>
                </li>
              )}
            </ul>
            <div className="row portfolio-items">
            <div className="col-lg-12">
                { foodMenuItems.map(type => type.foodItems.map((food, ind) => (
                    <div key={ind} className={`portfolio-item col-md-6 menu-list ${type.Title.replace(/\s/g, '')}`}>
                        <div className="inner-menu">
                            <div className="plate-name">
                                <h5>{food.title}</h5>
                                <p>{food.description}</p>
                            </div>
                            <div className="plate-price">
                                <h6>{food.price}</h6>
                            </div>
                        </div>
                    </div>
                )
              ))}
            </div>
        </div>
        </div>
    </section>
  )
};

export default FoodMenu;