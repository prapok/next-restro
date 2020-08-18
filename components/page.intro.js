import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const PageIntro = ({title, description, sectionImage, readMoreBtn, columnOrderImage}) => {

    return (
        <div className="container">
          <div className="row">
              <div className="col-lg-6" style={ columnOrderImage == 1 ? ({order: 2}) : ({order: 0}) }>
                <div className="about-us aligment-bottom">
                    <h3>{title}</h3>
                    <hr className="short" />
                    <ReactMarkdown source={description} />
                     { readMoreBtn !== null ? (
                        <div className="btn-box">
                          <Link href="/[slug]" as={readMoreBtn.link}><a className={`btn btn-custom ${readMoreBtn.buttonType}`} 
                          role="button">{readMoreBtn.buttonText}</a></Link>
                        </div>
                      ) : (' ') } 
                </div>  
              </div>
              <div className="col-lg-6" style={{ order: `${columnOrderImage}`}}>
              { sectionImage.length == 1 ? (
                <figure className="about-pic">
               <img src={`${sectionImage.map(vdoImage => vdoImage.url)}`} alt={sectionImage.map(vdoImage => vdoImage.alternativeText)} />
               </figure>) : sectionImage.length > 1 ? (
                <div className="row">
                  { sectionImage.map((image, ind) =>
                    <div key={ind} className="col-md-6 col-lg-6 grid-box">
                      <figure className="grid">
                        <img src={`${image.url}`} alt={image.alternativeText} className="img-fluid" />
                      </figure>
                    </div>
                    )}
                </div>
              ) : ('')}        
              </div>
          </div>
        </div>
    )
}

export default PageIntro;