import PropTypes from "prop-types";

const ChallengesHeader = ({ children }) => {
   return (
      <div
         className="publish-button"
         style={{
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "space-between",
         }}
      >
         {children}
      </div>
   );
};

ChallengesHeader.propTypes = {
   children: PropTypes.any,
};

export default ChallengesHeader;
