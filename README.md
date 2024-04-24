# Simple Image Gallery

This React app, called Gallery, fetches a list of images from the Picsum Photos API using Axios. It utilizes React's useState and useEffect hooks to manage state and handle side effects respectively. While the data is being fetched, it displays a "Loading..." message, and once the data is loaded, it renders the images using another component called Image, passing the fetched images as props. If an error occurs during the fetching process, it logs the error to the console.

Live preview: https://simple-fotogallery.netlify.app/
