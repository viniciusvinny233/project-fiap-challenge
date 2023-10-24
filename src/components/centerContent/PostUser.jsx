import PropTypes from "prop-types";

const PostUser = ({ children }) => {
   return <div className="post-user">{children}</div>;
};

PostUser.propTypes = {
   children: PropTypes.any,
};

export default PostUser;
