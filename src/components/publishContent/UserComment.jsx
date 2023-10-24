import PropTypes from "prop-types";

const UserComment = ({ imgSrc, user, id, comment }) => {
   return (
      <div style={{ display: "flex", alignItems: "center" }}>
         <img className="img-comment" style={{ marginRight: 20 }} src={imgSrc} />
         <div>
            <div style={{ display: "flex" }}>
               <div style={{ fontWeight: "bold", fontSize: 18 }}>{user}</div>
               <div style={{ fontSize: 11, fontWeight: 300, margin: "6px 0 0 10px" }}>{id}</div>
            </div>
            <div>
               <div style={{ fontSize: 16 }}>{comment}</div>
            </div>
         </div>
      </div>
   );
};

UserComment.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   user: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   comment: PropTypes.string.isRequired,
};

export default UserComment;
