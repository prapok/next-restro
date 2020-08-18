import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import TopHeader from './top-nav';
import NavBar from './navigation';
import SimpleSlider from 'components/slider/slider-slick';
import InnerPageHeader from 'components/header/innerpage-header';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const router = useRouter()

    return (
      <>
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
        <header className={router.pathname == '/' ? ('front-page') : ('section-header')} >
          <TopHeader/>
          <NavBar/>  
          { router.pathname == '/' ? (<SimpleSlider/>) : (<InnerPageHeader/>) }
        </header>
       </>
    )
}

export default Header;