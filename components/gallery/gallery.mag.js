import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { MainContext } from '../../contexts/MainContext';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';
import LighboxGallery from './lightboxgallery';

const GalleryMagnetic = () => {
  const pageData = useContext(MainContext);
  const router = useRouter();
  const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
  const page = result[0];
  const galleryCategories = page.galleries;

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

  const galleryOptions = {
    caption: {
      showCaption: false
    },
    thumbnails: {
      showThumbnails: false
    }
  };

  return (
    <section>
      <div className="container filterable-portfolio" id="portfolio">
            <ul className="nav nav-pills portfolio-filter gallery">
              <li onClick= { () => setFilterKey("*") }><a>ALL</a></li>
              { galleryCategories.map((type, indx) => 
                <li key={indx} onClick= { () => setFilterKey(`${type.title}`) }>
                  <a>{type.title.toUpperCase()}</a>
                </li>
              )}
            </ul>
          <div className="row portfolio-items">
          <SimpleReactLightbox>
          <SRLWrapper options={galleryOptions}>
            { galleryCategories.map(type => 
                type.images.map((image, ind) => (
                  <LighboxGallery key={ind} title={type.title} image={`${image.url}`} />
                )
              ))}
            </SRLWrapper>
          </SimpleReactLightbox>  
          </div>
        </div>
      </section>
  )
};

export default GalleryMagnetic;