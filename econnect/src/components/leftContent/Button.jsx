import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
   return (
      <button
         onClick={onClick}
         id="postar-show-id"
         className="post-button"
         style={{ color: "black" }}
      >
         <span className="button-text">{text}</span>
      </button>
   );
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
   onClick: PropTypes.func,
};

export default Button;
