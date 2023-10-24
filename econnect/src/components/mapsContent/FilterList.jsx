import PropTypes from "prop-types";

const FilterList = ({ children }) => {
   return (
      <div className="lista-filter">
         {children}
      </div>
   );
};

FilterList.propTypes = {
   children: PropTypes.any.isRequired,
};

export default FilterList