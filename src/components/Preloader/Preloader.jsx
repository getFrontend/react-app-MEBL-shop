import "./Preloader.scss";

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <span className="preloader-text">MEBL</span>
        <div className="preloader-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
