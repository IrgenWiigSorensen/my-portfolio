import { createContext, useState } from "react";


export const OverlayContext = createContext({
  isOverlayActive: false,
  triggerOverlay: () => {},
});

export const OverlayProvider =({children}) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const triggerOverlay = () => {
    setIsOverlayActive(!isOverlayActive);
  }

  const value = {
    triggerOverlay, 
    isOverlayActive
  }

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  )
}










