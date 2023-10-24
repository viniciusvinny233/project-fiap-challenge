import PropTypes from "prop-types";
import { useState } from "react";

const SuggestionItem = ({ text }) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleClick = () => {
      setIsSelected(!isSelected);
   };

   const selectedStyle = isSelected
      ? {
           backgroundImage: "linear-gradient(to right, #00BF36, #059932)",
           color: "black",
           border: "1px solid transparent",
        }
      : {};

   return (
      <div className="sugestao" id="sugestao-id" onClick={handleClick} style={selectedStyle}>
         {text}
      </div>
   );
};

SuggestionItem.propTypes = {
   text: PropTypes.string.isRequired,
};

export default SuggestionItem;
