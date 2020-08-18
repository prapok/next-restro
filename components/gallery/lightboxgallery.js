const LighboxGallery = ({title, image}) => {
    return(
        <figure className={`portfolio-item col-md-4 ${title}`}>
            <div className="magnific-img">
                <a className="image-popup-vertical-fit">
                    <img src={image} alt="" />
                </a>
            </div>
        </figure>
    )
}

export default LighboxGallery