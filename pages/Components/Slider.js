export default function Slider () {
  return (
    <section>
    <div className="container slider mt-5">
      <div className="row">
        <div className="col-md-1" id="slider-heading">Software</div>
        <div className="col-md-2">
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text
            used in laying out print, graphic or web designs. The passage is
            attributed to
          </p>
          <img src="img/aero.png" alt="" />
        </div>
        <div className="col-md-9 card-slider">
          <div className="main-slider">
            <div className="item" id="first-item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
            <div className="item">10</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}