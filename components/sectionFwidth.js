import ReactMarkdown from 'react-markdown';

const SectionFullWidthImage = ({sectionHeading, backgroundImage, description }) => {
    return (
        <div className="parallax" style={{backgroundImage: `url("${backgroundImage.url}")`}}>
            <div className="parallax-content">
                <h3>{sectionHeading}</h3>
                <ReactMarkdown source={description} />
            </div>
        </div>
    )
}

export default SectionFullWidthImage