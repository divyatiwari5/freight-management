import { Link, NavLink } from "react-router-dom";
import useDeviceType from "../../utility/useDeviceType";

const NavBar = () => {
  const dashboardItems = [
    {
      name: "Dashboard",
      icon: "assets/dashboard.svg",
      isNew: false,
      isSeparateSection: false,
      link: '/dashboard'
    },
    {
      name: "Orders",
      icon: "assets/order.svg",
      isNew: false,
      isSeparateSection: false,
      link: '/'
    },
    {
      name: "Customers",
      icon: "assets/customer.svg",
      isNew: false,
      isSeparateSection: false,
      link: '/'
    },
    {
      name: "Products",
      icon: "assets/product.svg",
      isNew: false,
      isSeparateSection: false,
      link: '/'
    },
    {
      name: "Pricing",
      icon: "assets/pricing.svg",
      isNew: true,
      isSeparateSection: false,
      link: '/'
    },
    {
      name: "Freight",
      icon: "assets/freight.svg",
      isNew: true,
      isSeparateSection: false,
      link: '/freight'
    },
    {
      name: "Settings",
      icon: "assets/settings.svg",
      isNew: false,
      isSeparateSection: true,
      link: '/'
    },
  ];
  const deviceType = useDeviceType();
  const isDesktop = deviceType === "Desktop";

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="top-section">
          {isDesktop && (
            <img src="assets/kenshiLogo.png" alt="logo" className="logo" />
          )}
          <div className="item-container">
            {dashboardItems.map((item, i) => (
              <NavLink key={i} to={item.link}
              className={({ isActive }) =>`nav-link ${isActive && 'active'}`}>
                <div  className="item-section">
                {item.isSeparateSection && <hr className="separator" />}
                <div className="navbar-item">
                  <div className="item">
                    <img src={item.icon} alt={item.name} />
                    <span className="name">{item.name}</span>
                  </div>

                  {item.isNew && <span className="new-item">NEW</span>}
                </div>
              </div>
              </NavLink>
            
            ))}
          </div>
        </div>

        {isDesktop && (
          <div className="nav-footer">
            <img src="assets/foboh.png" alt="foboh" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
