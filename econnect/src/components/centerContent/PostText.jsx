import PropTypes from "prop-types";

const PostText = ({ text }) => {
   return <p className="message" dangerouslySetInnerHTML={{ __html: text }} />;
};

PostText.propTypes = {
   text: PropTypes.any.isRequired,
};

export default PostText;
