import PropTypes from "prop-types";

const PostImage = ({ imgSrc }) => {
   return (
      <div
         className="carrot-img-div"
         style={{
            width: "100%",
            backgroundColor: "beige",
            borderRadius: 25,
            margin: "30px 0",
         }}
      >
         <img
            className="carrot-img"
            style={{
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               borderRadius: 20,
               width: "100%",
            }}
            src={imgSrc}
         />
      </div>
   );
};

PostImage.propTypes = {
   imgSrc: PropTypes.string.isRequired,
};

export default PostImage;
