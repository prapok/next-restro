import {NextSeo} from 'next-seo';
import BoxPanel from '../box.panel';
import PageIntro from '../page.intro';
import OurStaffs from '../staffs';
import SectionFullWidthImage from '../sectionFwidth';
import BoxListCard from '../card/boxListCardImg';
import GalleryMagnetic from '../gallery/gallery.mag';
import FoodMenu from '../food-menu/foodmenu';

const BaseLayout = ({ page }) => {
    const SEO = {
        title: page.title,
        description: page.description,
        openGraph: {
            title: page.title,
            description: page.description
        }
    }
    return (
        <>
        <NextSeo {...SEO } />
        { page.Section.map((items, ind) => (
            (items.__component) === 'page-sections.page-intro' ? (
            <PageIntro key={ind} title={items.title} description={items.description} sectionImage={items.sectionImage} readMoreBtn={items.readMoreBtn} columnOrderImage={items.columnOrderImage} />
                ) : items.__component === 'bg-text-block.block-text' ? (
                <div  key={ind} className="container-fluid">
                    <div className="row">
                        { items.BlockTextImage.map(({id, ...otherProps}) => (
                        <BoxPanel key={id} {...otherProps} />
                        ))}
                    </div>
                </div>
                ) : items.__component === 'section-fullwidth-image.full-width-image-section' ? (
                <SectionFullWidthImage key={ind} sectionHeading={items.sectionHeading} 
                backgroundImage={items.backgroundImage} description={items.description} />
                ) : items.__component === 'services-box.box-list-item' ? (
                <div key={ind} className="container">
                    <div className="section-title">
                        <h2>{items.SectionHeading}</h2>
                        <p>{items.subHeadingSection}</p>
                    </div>
                    <div className="row hover-effects image-hover">
                       { items.cardListBox.map(({id, ...otherProps}) => (
                        <BoxListCard key={id} {...otherProps} />
                        ))}
                    </div>
                </div>
                ) : ('')
                ))}
                { page.worker ? (<OurStaffs/>) : ('') }
                { page.galleries[0] ? ( <GalleryMagnetic /> ) : ('') }
                { page.food_menus[0] ? ( <FoodMenu /> ) : ('') }
        </>
    )
}

export default BaseLayout;