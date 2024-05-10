import { useEffect, useState } from "react";
import SavedRegions from "./SavedRegions";

const AddPricing = ({ selectedId }) => {

    const [areas, setAreas] = useState(new Set());
    const [price, setPrice] = useState('');

    useEffect(() => {
        console.log(areas)
    }, [areas]);

    const onSavePrice = () => {
        const element = document.getElementById(selectedId);
        const areaPricing = areas;
        areaPricing.add({ id: selectedId, element: element, price: price })
        console.log({areaPricing})
        setAreas(areaPricing);
    }

  return (
    <div className="add-pricing-box">
      <div className="add-pricing-container">
        <p className="label">Enter Pricing</p>
        <input placeholder="A$" className="price-input" disabled={!selectedId} value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button className="save" disabled={!selectedId} onClick={onSavePrice}>Save Pricing</button>
      </div>
      <p className="disclaimer">No Saved Region yet</p>
      <SavedRegions areas={areas} />
    </div>
  );
};

export default AddPricing;
