import { MainContext } from '../contexts/MainContext'
import { HeaderContext, SliderContext } from '../contexts/HeaderContext'
import { StaffsContext } from '../contexts/StaffsContext'
import { ContactContext } from '../contexts/ContactContext'
import { useState } from 'react'

export const BaseWrapper = ({children, dataPages}) => {
    const pageData = useState(dataPages);
    
    return (
        <MainContext.Provider value={pageData}>
            {children}
        </MainContext.Provider>
    )
}

export const HeaderWrapper = ({children, navigation}) => {
    const [menuItems] = useState(navigation);
    return (
        <HeaderContext.Provider value={{menuItems}}>
            {children}
        </HeaderContext.Provider>
    )
}

export const SliderWrapper = ({children, hslides}) => {
    const slides = useState(hslides);
    const homeSlides = slides[0].HomeSlider.Slide
    return (
        <SliderContext.Provider value={homeSlides}>
            {children} 
        </SliderContext.Provider>
    )
}

export const StaffsWrapper = ({children, dataStaffs}) => {
    const [staffs] = useState(dataStaffs);
    return (
        <StaffsContext.Provider value={{staffs}}>
            {children} 
        </StaffsContext.Provider>
    )
}

export const ContactWrapper = ({children, contactInf}) => {
    const contactDet = useState(contactInf);
    return (
        <ContactContext.Provider value={contactDet}>
            {children} 
        </ContactContext.Provider>
    )
}

