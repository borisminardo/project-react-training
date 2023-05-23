import image from "./../../../public/immagini/react-logo.jpg";

export default function Homepage() {
  return (
    <>
      <div className="homepage--box">
        <h3>Homepage</h3>
        <img className="homepage--img" src={image}></img>
      </div>
    </>
  );
}
