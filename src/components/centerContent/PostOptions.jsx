import PropTypes from "prop-types";

const PostOptions = ({ children }) => {
   return <div style={{ display: "flex", justifyContent: "space-between" }}>{children}</div>;
};

PostOptions.propTypes = {
   children: PropTypes.any,
};

export default PostOptions;
