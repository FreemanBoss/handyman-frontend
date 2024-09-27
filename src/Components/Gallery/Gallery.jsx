
import './Gallery.css'

const Gallery = () => {
  return (
    <>
  {/* Image Scrolling Section */}
  <div className="overflow-hidden relative">
    <div className="flex animate-scroll">
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/cleaning_img.jpg"
          alt="Image 1"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/plumbing.jpg"
          alt="Image 2"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/cleaning4.jpg"
          alt="Image 3"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/AirConditioning.jpg"
          alt="Image 4"
          data-aos='zoom-in'
        />
      </div>
      
      {/* Duplicate images to ensure continuous scrolling */}
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/cleaning_img.jpg"
          alt="Image 1"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/plumbing.jpg"
          alt="Image 2"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/cleaning4.jpg"
          alt="Image 3"
          data-aos='zoom-in'
        />
      </div>
      <div className="flex-none w-1/2 md:w-1/4">
        <img
          className="w-full h-48 object-contain"
          src="../../../images/AirConditioning.jpg"
          alt="Image 4"
          data-aos='zoom-in'
        />
      </div>
    </div>
  </div>
</>

  )
}

export default Gallery
