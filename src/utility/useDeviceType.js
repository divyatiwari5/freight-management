import { useEffect, useState } from "react";
import useScreenSize from "./useScreenSize";

const useDeviceType = () => {
    const screenSize = useScreenSize();
    const [deviceType, setDeviceType] = useState('Desktop')
    useEffect(() => {
        if (screenSize.width < 768) {
            setDeviceType('Mobile');
        } else if (screenSize.width >= 768 && screenSize.width<= 850) {
            setDeviceType('Tab');
        } else {
            setDeviceType('Desktop');
        }
    }, [screenSize]);
   
    return deviceType;
}

export default useDeviceType;