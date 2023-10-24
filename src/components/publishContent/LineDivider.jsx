import PropTypes from "prop-types";

const LineDivider = ({ marginTop }) => {
   return (
      <div
         className="line-divider"
         style={{
            backgroundColor: "rgb(79, 79, 79)",
            height: 1,
            margin: "15px -20px",
            marginTop: marginTop,
         }}
      />
   );
};

LineDivider.propTypes = {
   marginTop: PropTypes.number,
};

export default LineDivider;
