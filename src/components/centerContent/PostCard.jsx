import PropTypes from "prop-types";

const PostCard = ({ children, colorName, backgroundImageName }) => {
   return (
      <div
         className="post"
         style={{
            padding: 20,
            color: colorName,
            backgroundImage: backgroundImageName,
         }}
      >
         {children}
      </div>
   );
};

PostCard.propTypes = {
   children: PropTypes.any.isRequired,
   colorName: PropTypes.string,
   backgroundImageName: PropTypes.string,
};

export default PostCard;
