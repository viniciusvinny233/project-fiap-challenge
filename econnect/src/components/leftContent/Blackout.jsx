import PropTypes from "prop-types";

const Blackout = (props) => {
   return <div style={{ ...props.style }} id="blackout-page-id" className="blackout-page"></div>;
};

Blackout.propTypes = {
   style: PropTypes.object,
};

export default Blackout;
