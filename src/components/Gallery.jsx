import { useState, useEffect } from 'react'
import axios from "axios"
import Image from './Image'

const URL_API = 'https://picsum.photos/v2/list'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(URL_API)
    .then(response => {
      setImages(response.data)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
    })
  }, [])
  

  return (
    <>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <Image images={images} />
    )
    }
   </> 
  )
}

export default Gallery