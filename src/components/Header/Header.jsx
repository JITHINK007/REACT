import './Header.css'

export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* <img src="./logo.png" alt="logo" width={100} /> */}
        <h2>HealthAssistant</h2>

        <div className="flexCenter h-menu">
          <a href="">Home</a>
          <a href="">Monitor</a>
          <a href="">Chat</a>
          <a href="">Profile</a>
        </div>
      </div>
    </section>
  );
};
