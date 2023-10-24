import PropTypes from "prop-types";

const PostInfos = ({ children }) => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 10,
            gap: 26,
         }}
      >
         {children}
      </div>
   );
};

PostInfos.propTypes = {
   children: PropTypes.any,
};

export default PostInfos;
