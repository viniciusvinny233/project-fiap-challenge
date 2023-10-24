import PropTypes from "prop-types";

const UserImage = ({ imgSrc, className }) => {
   return <img src={imgSrc} className={className} />;
};

UserImage.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default UserImage;
