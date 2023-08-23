
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop():null {
  const routePath = useLocation();
  const onTop = () => {
    console.log('scrolling to top');
    const element = document.querySelector("body");
    console.log(element);
    element?.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return null;
}