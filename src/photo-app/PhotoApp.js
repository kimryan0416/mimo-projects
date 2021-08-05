import "./PhotoApp.css";

const images = [
 "https://mimo.app/i/cafe.png",
 "https://mimo.app/i/mountain-road.png",
 "https://mimo.app/i/flowers.png","https://mimo.app/i/kluane.png",
 "https://mimo.app/i/bank-lobby.png",
];

const PhotoApp = () => {

 const imgs = images.map(url=>{
  return (<img src={url} />)
 });
 
 return (
  <div>
   <h1>
    Interest in the Picturesque
   </h1>
   {imgs}
  </div>
 );
}

export default PhotoApp;