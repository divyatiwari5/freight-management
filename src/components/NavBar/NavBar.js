import useDeviceType from "../../utility/useDeviceType";

const NavBar = () => {
  const dashboardItems = [
    {
      name: "Dashboard",
      icon: "assets/dashboard.svg",
      isNew: false,
      isSeparateSection: false,
    },
    {
      name: "Orders",
      icon: "assets/order.svg",
      isNew: false,
      isSeparateSection: false,
    },
    {
      name: "Customers",
      icon: "assets/customer.svg",
      isNew: false,
      isSeparateSection: false,
    },
    {
      name: "Products",
      icon: "assets/product.svg",
      isNew: false,
      isSeparateSection: false,
    },
    {
      name: "Pricing",
      icon: "assets/pricing.svg",
      isNew: true,
      isSeparateSection: false,
    },
    {
      name: "Freight",
      icon: "assets/freight.svg",
      isNew: true,
      isSeparateSection: false,
    },
    {
      name: "Settings",
      icon: "assets/settings.svg",
      isNew: false,
      isSeparateSection: true,
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
              <div key={i} className="item-section">
                {item.isSeparateSection && <hr className="separator" />}
                <div className="navbar-item">
                  <div className="item">
                    <img src={item.icon} alt={item.name} />
                    <span className="name">{item.name}</span>
                  </div>

                  {item.isNew && <span className="new-item">NEW</span>}
                </div>
              </div>
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
