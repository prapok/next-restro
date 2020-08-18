import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { HeaderWrapper, SliderWrapper, StaffsWrapper, ContactWrapper, BaseWrapper } from 'components/ContextWrapper';

function MyApp({ Component, pageProps, navigation, homeSlider, dataStaffs, contactInf, dataPages }) {

  return (
    <>
    <DefaultSeo {...SEO} />
    <BaseWrapper dataPages={dataPages}>
      <SliderWrapper hslides={homeSlider}>
        <ContactWrapper contactInf={contactInf}>
          <HeaderWrapper navigation={navigation} >
            <Header />
          </HeaderWrapper>
            <StaffsWrapper dataStaffs={dataStaffs}>
              <Component {...pageProps} />
            </StaffsWrapper>
            <Footer/>
        </ContactWrapper>
      </SliderWrapper>
    </BaseWrapper>
    </>   
  )
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async (context) => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/menu`)
    const data = await res.json()
    const navigation = data.Navigation[0].pages;
    
    const resSlider = await fetch(`${publicRuntimeConfig.API_URL}/homepage-slider`);
    const homeSlider = await resSlider.json();

    const resWorkers = await fetch(`${publicRuntimeConfig.API_URL}/workers`);
    const dataStaffs = await resWorkers.json();

    const resContact = await fetch(`${publicRuntimeConfig.API_URL}/contact`);
    const contactInf = await resContact.json();

    const resPage = await fetch(`${publicRuntimeConfig.API_URL}/pages`);
    const dataPages = await resPage.json();

    return { navigation, homeSlider, dataStaffs, contactInf, dataPages }
}

export default MyApp;