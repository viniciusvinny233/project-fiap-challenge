import PropTypes from "prop-types";

const UserPoints = ({ points }) => {
   return (
      <div className="coins-img" style={{ display: "flex" }}>
         <img
            src="./images/coins_logo.png"
            alt="Logo"
            style={{ width: 25, paddingRight: 7, height: 25, marginTop: 2 }}
         />
         <span className="points">{points}</span>
      </div>
   );
};

UserPoints.propTypes = {
   points: PropTypes.any,
};

export default UserPoints;
