import PropTypes from "prop-types";

const ConfigButtons = ({ children }) => {
   return (
      <div
         className="config-button"
         style={{
            display: "flex",
            position: "fixed",
            alignItems: "end",
         }}
      >
         {children}
      </div>
   );
};

ConfigButtons.propTypes = {
   children: PropTypes.any,
};

export default ConfigButtons;
