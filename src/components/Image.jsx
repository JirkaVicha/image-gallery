
const Image = ({ images }) => {
  
  return (
    <>
      {images.map((image) => (
        <div key={image.id}>
          <img 
            src={image.download_url} 
            alt={image.author} 
            onClick={() => window.open(image.download_url)}
          />
        </div>
      ))}
    </>
  )
}

export default Image