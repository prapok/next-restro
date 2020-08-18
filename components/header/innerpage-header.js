import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';

const InnerPageHeader = () => {
    const pageData = useContext(MainContext)
    const router = useRouter();
    const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
    const page = result[0];
      return (
          <>
            <div className="pages-header"  style={{ backgroundImage: page.featuredImage ? `url(${page.featuredImage.url})` : ('url("../img/images/img2.jpg")') }}>
            <div className="container">
                <div className="pages-title">
                 <h1>{page.title}</h1>
                    <p>{page.description}</p>
                </div>
            </div>
        </div>
          </>
      )
}

export default InnerPageHeader;