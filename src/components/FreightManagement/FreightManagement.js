import { useEffect, useState } from "react";
import Map from "./Map";

const FreightManagement = () => {
  const [selectedIds, setSelectedId] = useState(new Set());
  const [mouseOverId, setMouseOverId] = useState(undefined);

  useEffect(() => {
    for (const id of selectedIds) {
        const element = document.getElementById(id);
        element.style.fill = "#F4FFF7";
        element.style.stroke = "#0a8229"
    }

    if (mouseOverId) {
      const element = document.getElementById(mouseOverId);
      element.style.stroke = "black";
    }
  }, [selectedIds, mouseOverId]);

  const handleMapClick = (event) => {
    const id = event.target.id;
    if (id) {
        let selectedAreas = selectedIds;
        selectedIds.add(id);
        console.log(selectedAreas)
        setSelectedId(selectedAreas);
        setMouseOverId(null);
    }
  };

  const handleMouseOver = (e) => {
    setMouseOverId(e.target.id);
  };

  return (
    <div>
      <div>
        <h1>Freight Management</h1>
        <span>Select freight zones and assign shipping prices</span>
      </div>
      <div
        onClick={(e) => handleMapClick(e)}
        onMouseOver={(e) => handleMouseOver(e)}
      >
        <Map />
      </div>
    </div>
  );
};

export default FreightManagement;
