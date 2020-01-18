export const Widths = {
    xl: "1280px",
    lg: "960px",
    md: "770px",
    sm: "640px"
  };
  
const sizes = {
    laptop: "1220px",
    laptopS: "1100px",
    tablet: "980px",
    tabletM: "910px",
    tabletS: "768px",
    mobileL: "576px"
  };
  
export const devices = {};
  
Object.keys(sizes).forEach(
  size => (devices[size] = `(max-width: ${sizes[size]})`)
);
  
