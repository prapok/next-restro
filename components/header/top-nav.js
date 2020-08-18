import Link from 'next/link'
import { useContext } from 'react'
import {ContactContext} from '../../contexts/ContactContext'

const TopHeader = () => {
    const contactDet = useContext(ContactContext)
    const contactInfo = contactDet[0].ContactInfo;
    const socialLinks = contactDet[0].SocialNetLink;
    return (
        <>
        <div className="top-header">
            <div className="container">
                <div className="leftside">
                    <div className="email-top"><p>{contactInfo.CompanyEmail}</p></div>
                    <div className="phone-top"><p>{contactInfo.CompanyPhone}</p></div>
                    <div className="address-top"><p>{contactInfo.Address}</p></div>
                </div>
                <div className="rightside">
                {socialLinks.map((socialLinkItem, ind) => 
                    <div key={ind} className="social-items">
                        <p><Link href={socialLinkItem.link} as={`//${socialLinkItem.link}`}>
                            <a target="_blank"><i className={`fa fa-${socialLinkItem.SocialMediaLinks}`} aria-hidden="true"></i></a></Link>
                        </p>
                    </div>
                     )}
                </div>
            </div>
        </div>
        </>
    )
}

export default TopHeader;