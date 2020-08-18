const BoxListCard = ({title, shortDescription, listImage}) => {

  return (
    <div className="col-md-6 col-lg-4 services-hover card-services">
      <div className="image-box">
          <figure><img src={`${listImage.url}`} alt={listImage.alternativeText}  />
          </figure>
      </div>
      <div className="caption">
        <h5>{title}</h5>
          <p>{shortDescription}</p>
      </div>
    </div>
  )
}
export default BoxListCard