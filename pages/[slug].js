import { useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../contexts/MainContext';
import BaseLayout from 'components/layouts/baseLayout';
import AboutUs from 'components/layouts/aboutus';
import ContactUs from 'components/layouts/contactus';

function Page(){
    const pageData = useContext(MainContext)
    const router = useRouter();
    const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
    const page = result[0]

    return(
        <>
            { router.query.slug == 'home' ? (
                <section><div className="container">
                   <center>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                    </center>
                    </div>
                </section>
            ) : router.query.slug == 'about' ? (<AboutUs/>) : router.query.slug == 'contact' ? (<ContactUs/>) : (
            <section>
                <BaseLayout page={page}/>
            </section>
             )} 
        </>
    )
}

export default Page;