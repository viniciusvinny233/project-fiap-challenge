import PropTypes from "prop-types";

const PostTitle = ({ title }) => {
   return (
      <p
         className="post-title"
         style={{
            fontFamily: '"League Spartan", sans-serif',
            fontWeight: "bold",
            textAlign: "end",
         }}
      >
         {title}
      </p>
   );
};

PostTitle.propTypes = {
   title: PropTypes.string.isRequired,
};

export default PostTitle;
