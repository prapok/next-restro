import Link from 'next/link';
import { useContext } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import { useRouter } from 'next/router';

const NavBar = () => {
    const { menuItems } = useContext(HeaderContext)
    const router = useRouter();

    return (
        <>
        <nav>
            <div className="container">
                <hr className="top" />
                <nav className="navbar navbar-expand-lg">
                  <Link href='/'><a className="navbar-brand"><div className="logo-brand"><img src="./img/master/logo.png" alt="" /></div></a></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav ml-auto"> 
                        { menuItems.map((menu, ind) => (
                        <li key={ind} className="nav-item">
                            { menu.slug ==='home' ? (
                            <Link href={'/'} ><a className='nav-link'>{menu.title}</a></Link> ) : ( 
                            <Link href='/[slug]' as={`/${menu.slug}`}><a className='nav-link'>{menu.title}</a></Link>)}
                        </li>
                        ))}
                    </ul>
                  </div>
                </nav>
            </div>
        </nav>
        </>
    )
}

export default NavBar;