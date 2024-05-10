import { useEffect, useState } from "react";
import Map from "./Map";
import SubRegions from "./SubRegions";
import AddPricing from "./AddPricing";

const FreightManagement = () => {
  const [selectedId, setSelectedId] = useState("");
  const [mouseOverId, setMouseOverId] = useState(undefined);

  useEffect(() => {
    selectedId && onAreaClicked(selectedId);
    if (mouseOverId) {
      const element = document.getElementById(mouseOverId);
      element.style.stroke = "black";
    }
  }, [selectedId, mouseOverId]);

  /**
   * @param {*} id ID of selected area
   * Set light green color for the selected area
   */
  const onAreaClicked = (id) => {
    const element = document.getElementById(id);
    element.style.fill = "#F4FFF7";
    element.style.stroke = "#0a8229";
  };

  /***
   * Set area to default state
   */
  const setDefaultState = (id) => {
    const element = document.getElementById(id);
    element.style.fill = "#F8FAFC";
    element.style.stroke = "#F8FAFC";
  };

  const handleMapClick = (event) => {
    const id = event.target.id;
    if (id) {
      selectedId && setDefaultState(selectedId);
      setSelectedId(id);
      setMouseOverId(null);
    }
  };

  const handleMouseOver = (event) => {
    const id = event.target.id;
    if (selectedId !== id) {
      setMouseOverId(id);
    }
  };
  /**
   * @param {*} event
   * Handles mouse out event
   */
  const handleMouseLeave = (event) => {
    const id = event.target.id;
    const element = document.getElementById(id);
    if (element && selectedId !== id) {
      element.style.stroke = "#D4E4F2";
    }
  };

  return (
    <div className="freight-container">
      <div className="content">
        <div className="header">
          <div className="heading">
            <span className="title">Freight Management</span>
            <span className="subtitle">
              Select freight zones and assign shipping prices
            </span>
          </div>
          <div className="action-items">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save</button>
          </div>
        </div>
        <div className="manage-freight">
          <div
            onClick={(e) => handleMapClick(e)}
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={(e) => handleMouseLeave(e)}
          >
            <Map />
          </div>
          <div className="info">
            <SubRegions selectedId={selectedId} />
            <AddPricing selectedId={selectedId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreightManagement;
