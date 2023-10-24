import PropTypes from "prop-types";
import { useState } from "react";

const SavedItem = ({ item }) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleClick = () => {
      setIsSelected(!isSelected);
   };

   const selectedStyle = isSelected
      ? {
           backgroundImage: "linear-gradient(to right, #00BF36, #059932)",
           color: "black",
           border: "transparent",
        }
      : {};

   return (
      <div className="pastas" onClick={handleClick} style={selectedStyle}>
         {item}
      </div>
   );
};

SavedItem.propTypes = {
   item: PropTypes.string.isRequired,
};

export default SavedItem;
