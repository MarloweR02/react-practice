import "../styles/ImageAndText.css"

function ImageAndText({ heading, description, primaryBtn, secondaryBtn }) {
  return (
    <section className="image-and-text">
      <div className="page-width image-and-text__wrapper">
        <div className="image-and-text__content">
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className="image-and-text__buttons">
            <button className="image-and-text__buttons--primary">{primaryBtn}</button>
            <button className="image-and-text__buttons--secondary">{secondaryBtn}</button>
          </div>
        </div>

        <div>
          {/* render the image here! */}
        </div>
      </div>
    </section>
  )
}

export default ImageAndText