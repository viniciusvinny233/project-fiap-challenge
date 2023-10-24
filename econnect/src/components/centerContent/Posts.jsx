import PropTypes from "prop-types";

const Posts = ({ children }) => {
   return <div className="posts">{children}</div>;
};

Posts.propTypes = {
   children: PropTypes.any,
};

export default Posts;
