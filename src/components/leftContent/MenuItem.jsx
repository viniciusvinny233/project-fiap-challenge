import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ imgSrc, title, link, className }) => {
   const windowWidth = window.innerWidth;

   return (
      <Link
         style={{
            textDecoration: "none",
            color: "white",
         }}
         to={link}
         className={className}
      >
         <div className="ul-div">
            <img className="left-icons" src={imgSrc} />
            {windowWidth > 834 && <span className="config-button-span">{title}</span>}
         </div>
      </Link>
   );
};

MenuItem.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default MenuItem;
