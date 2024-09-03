import './Gallery.css'

const Gallery = () => {
  return (
    <>
  {/* Image Scrolling Section */}
  <div className="overflow-hidden relative">
    <div className="flex animate-scroll">
      <div className="flex-none w-50 md:w-2/12">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/cleaning_img.jpg"
          alt="Image 1"
        />
      </div>
      <div className="flex-none w-50 md:w-2/12">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/plumbing.jpg"
          alt="Image 2"
        />
      </div>
      <div className="flex-none w-50 md:w-2/12">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/cleaning4.jpg"
          alt="Image 3"
        />
      </div>
      <div className="flex-none w-50 md:w-2/12">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/AirConditioning.jpg"
          alt="Image 4"
        />
      </div>
      
      {/* Duplicate images to ensure continuous scrolling */}
      <div className="flex-none w-full md:w-1/4">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/cleaning_img.jpg"
          alt="Image 1"
        />
      </div>
      <div className="flex-none w-full md:w-1/4">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/plumbing.jpg"
          alt="Image 2"
        />
      </div>
      <div className="flex-none w-full md:w-1/4">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/cleaning4.jpg"
          alt="Image 3"
        />
      </div>
      <div className="flex-none w-full md:w-1/4">
        <img
          className="w-50 h-48 object-contain"
          src="../src/assets/images/AirConditioning.jpg"
          alt="Image 4"
        />
      </div>
    </div>
  </div>
</>

  )
}

export default Gallery

