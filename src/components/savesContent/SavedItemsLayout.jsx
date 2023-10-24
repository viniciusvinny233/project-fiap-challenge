import PropTypes from "prop-types";

const SavedItemsLayout = ({ children }) => {
   return (
      <div className="search-box" style={{ margin: "0 -40px" }}>
         <div className="lista-pastas">{children}</div>
      </div>
   );
};

SavedItemsLayout.propTypes = {
   children: PropTypes.any,
};

export default SavedItemsLayout;
