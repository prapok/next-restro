import Link from 'next/link'
import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'
import ReactMarkdown from 'react-markdown';

const Footer = () => {
    const contactDet = useContext(ContactContext)
    const contactInfo = contactDet[0].ContactInfo;
    const socialLinks = contactDet[0].SocialNetLink;
    return (
<>
        <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <div className="footer-info">
                        <div className="footer-logo"><img src="./img/master/logo.png" alt="" /></div>
                        <div className="span-location">
                            <div className="address-icon"><i className="fa fa-location-arrow" aria-hidden="true"></i></div>
                            <p>{contactInfo.Address}</p>
                        </div>
                        <div className="span-location">
                            <div className="address-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                            <p>{contactInfo.WorkingHours}</p>
                        </div>
                        <div className="span-location">
                            <div className="address-icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            <p>{contactInfo.CompanyEmail}</p>
                        </div>
                        <div className="social-footer">
                            <h5>Follow Us</h5>
                            {socialLinks.map((socialLinkItem, ind) => 
                            <div key={ind} className="circle-icon">
                                <Link href={socialLinkItem.link} as={`//${socialLinkItem.link}`}><a target="_blank"><div className="center-fa"><i className={`fa fa-${socialLinkItem.SocialMediaLinks}`} aria-hidden="true"></i></div></a></Link> 
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="footer-maps"><ReactMarkdown source={contactInfo.locationMap} escapeHtml={false}/></div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container-fluid">
                <div className="footer-copyright">
                    <p>© 2020 GI Burger</p>
                </div>
            </div>
        </div>
    </footer>
    
    <Link href={''} ><a className="cd-top">Top</a></Link>
    </>
    )

}

export default Footer;