const Header = () => {
  return (
    <div className="header-container">
      <div className="info">
        <span className="name">Hello, Ekemini</span>
        <span className="date">Tue, 13 March 2024</span>
      </div>
      <div className="notification">
        <div className="icons">
          <div className="circle-frame">
            <img src="assets/bellIcon.svg" alt="notification" />
          </div>
          <div className="circle-frame">
            <img src="assets/faq.svg" alt="faq" />
          </div>
        </div>

        <div className="profile">
          <div className="intro">
            <span className="name">Divya Tiwari</span>
            <span className="about">Heaps Normal</span>
          </div>
          <img
            src="https://1.gravatar.com/avatar/7319bba0df2cf8f9e06a86b4a3a80f4e823221aaefac3f65ecbca934745142d3?size=512"
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
