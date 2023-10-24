import PropTypes from "prop-types";

const RankingUser = ({ number, imgSrc, userName, id, pointsNumber }) => {
   return (
      <div className="user" style={{ marginLeft: 25, marginBottom: 15 }}>
         <div
            style={{
               display: "flex",
               width: 45,
               alignItems: "center",
               justifyContent: "center",
               height: 70,
            }}
         >
            <div style={{ fontSize: 30, fontWeight: "bold" }}>{number}</div>
         </div>
         <img
            style={{ marginRight: 10, marginLeft: 30 }}
            className="box-perfil-ranking"
            src={imgSrc}
         />
         <div style={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
            <div className="infos-perfil">
               <span className="username-ranking">
                  {userName}
               </span>
               <span className="handle-ranking">
                  {id}
               </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
               <img
                  src="./images/coins_logo.png"
                  alt="Logo"
                  className="img-coins-ranking"
               />
               <span className="points-ranking">
                  {pointsNumber}
               </span>
            </div>
         </div>
      </div>
   );
};

RankingUser.propTypes = {
   number: PropTypes.number.isRequired,
   imgSrc: PropTypes.string.isRequired,
   userName: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   pointsNumber: PropTypes.number.isRequired,
};

export default RankingUser;
