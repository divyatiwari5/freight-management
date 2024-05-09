import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({width: window.innerWidth})

    useEffect(() => {
        const handleReSize = () => {
            setScreenSize({
                width: window.innerWidth
            })
        } 
        window.addEventListener('resize', handleReSize);
        return () => {
            window.removeEventListener('resize', handleReSize)
        }
    }, []);
    return screenSize;
}

export default useScreenSize;