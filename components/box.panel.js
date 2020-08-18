            
const BoxPanel= ({title, content, icon, backgroundImage}) =>{
 
    return(
        <div className="col-lg-4 box-panels" style={{backgroundImage: `url("${backgroundImage.url}")`}}>
            <div className="panel-content">
                <figure className="front-icon"><img src={`${icon.url}`} alt="" /></figure>
                <div className="figure-caption">
                    <h5>{title}</h5> 
                    <p>{content}</p>
                  </div>
            </div>
        </div>
    )
}      

export default BoxPanel;
            