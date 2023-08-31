import "./List.css";
import Apps from '../../assets/apps1.png';
import Feature from '../../assets/mobile_feature.jpg';
import Call from '../../assets/video_call.jpg';


export function List() {
  return (
    <section className="paddings list-wrapper">
      <div className="list-title">
        <h1 className="primaryText">FEATURES</h1>
      </div>
      <div className="flexCenter list-container">
        <div className="flexCenter list-row">
          <div className="flexColCenter list-item">
            <div className="list-item-title">
              <h3>Remote Health Monitoring</h3>
            </div>
            <div className="list-item-image-container">
              <img src={Feature} alt="" />
            </div>
            <div className="secondaryText list-item-desc">
              Real-time health data tracking from wearables. Stay informed
              effortlessly.
            </div>
          </div>
          <div className="flexColCenter list-item">
            <div className="list-item-title">
              <h3>Instant Doctor Communication</h3>
            </div>
            <div className="list-item-image-container">
              <img src={Call} alt="" />
            </div>
            <div className="secondaryText list-item-desc">
              On-demand doctor consultations. Expert advice at your convenience.
            </div>
          </div>
          <div className="flexColCenter list-item">
            <div className="list-item-title">
              <h3>Personalized Health Insights</h3>
            </div>
            <div className="list-item-image-container">
              <img src={Apps} alt="" />
            </div>
            <div className="secondaryText list-item-desc">
              Tailored recommendations based on your health metrics. Optimize
              well-being.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
