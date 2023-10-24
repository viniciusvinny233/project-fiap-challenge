import PropTypes from "prop-types";

const PostInteractions = ({ imgScr1, imgScr2, imgScr3 }) => {
   return (
      <div className="actions">
         <img className="actions-icon" src={imgScr1} />
         <img className="actions-icon" src={imgScr2} />
         <img className="actions-icon" src={imgScr3} />
      </div>
   );
};

PostInteractions.propTypes = {
   imgScr1: PropTypes.string,
   imgScr2: PropTypes.string,
   imgScr3: PropTypes.string,
};

export default PostInteractions;
