import { subRegions } from "../../utility/constants";

const SubRegions = ({ selectedId }) => {
  return (
    <div className="subregions-container">
      <div className="select">
        {selectedId ? (
          <span>
            You've selected{" "}
            <span className="selected-region">{selectedId} Regions</span> 
          </span>
        ) : (
          <span>You’ve not selected a region, yet</span>
        )}

        {selectedId && <span className="change">Change</span>}
      </div>

      <div className="list">
        {selectedId ? (
          <>
            <span>This includes the following sub-regions,</span>
            <div className="sub-regions">
              {subRegions.map((region, i) => (
                <>
                <p key={i} className="chips">
                  {region}
                </p>{(i !== subRegions.length-1) && ','}
                
                </>
                
              ))}
            </div>
          </>
        ) : (
          <span>Selected a region to see sub-regions</span>
        )}
      </div>
    </div>
  );
};

export default SubRegions;
