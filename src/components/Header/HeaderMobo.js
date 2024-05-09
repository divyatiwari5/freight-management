import useDeviceType from "../../utility/useDeviceType";

const HeaderMobo = () => {
  const deviceType = useDeviceType();
  const isMobo = deviceType === 'Mobile';
  const isTab = deviceType === 'Tab';

  return (
    <div>
      <div className="header-mobo-container">
        {isTab && (
          <img src="assets/kenshiLogo.png" alt="logo" className="logo" />
        )}
         {isMobo && (
            <div className="close-navbar">
              <img src="assets/close.svg" alt="close-navbar" />
            </div>
          )}
        <div className="action-items">
          <div className="profile">
            <span className="title">Divya Tiwari</span>
            <span className="subtitle">Heaps Normal</span>
          </div>
          <img
            src="https://1.gravatar.com/avatar/7319bba0df2cf8f9e06a86b4a3a80f4e823221aaefac3f65ecbca934745142d3?size=512"
            alt="profile-pic"
            className="avatar"
          />
          {isTab && (
            <div className="close-navbar">
              <img src="assets/close.svg" alt="close-navbar" />
            </div>
          )}
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default HeaderMobo;
