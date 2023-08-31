import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="white-gradient" />
          <div className="hero-title">
            <div className="circle" />
            <h1>
              Explore
              <br />
              Your Personalized
              <br />
              Health Assistant
            </h1>
          </div>
          <div className="secondaryText flexColStart hero-des">
            <span className="secondaryText">
              Monitor your health in Realtime
            </span>
            <span className="secondaryText">Your Guardian in your hands</span>
          </div>
        </div>
        <div className="hero-right flexCenter">
          <div className="image-container">
            {/* <img src="./hero-image.png" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
