const SavedRegions = (props) => {
    console.log('props', props, Array.from(props.areas))
    const getSource = (area) => {
        const source = <svg
        width="142"
        height="127"
        viewBox="0 0 142 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >{area.element.outerHTML}</svg>
      return source;
    }
   
    return(
        <div>
            <p>Saved Region</p>
            {Array.from(props.areas).map((area,i) => (
                <div key={i}>
                    <span>{area.price}</span>
                    <span>{area.id}</span>
                </div>
            ))}
        </div>
    )
}

export default SavedRegions;