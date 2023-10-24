import PropTypes from "prop-types";
import { useState } from "react";

const FilterListItem = ({ item }) => {
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
      <div style={{ padding: 12, ...selectedStyle }} className="sugestao" onClick={handleClick}>
         {item}
      </div>
   );
};

FilterListItem.propTypes = {
   item: PropTypes.string.isRequired,
};

export default FilterListItem;
