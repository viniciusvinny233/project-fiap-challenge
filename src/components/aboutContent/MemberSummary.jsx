import PropTypes from "prop-types";

const MemberSummary = ({ imgSrc, member, role, rm, mb }) => {
   return (
      <div style={{ width: "18vh", marginBottom: mb }}>
         <img
            className="box-perfil-member"
            style={{
               margin: "auto",
               marginLeft: 30,
            }}
            src={imgSrc}
         />
         <div
            className="username-member"
            style={{
               width: "18vh",
               textAlign: "center",
               height: "7vh",
            }}
         >
            {member}
         </div>
         <div
            className="username-member"
            style={{
               width: "18vh",
               textAlign: "center",
               marginTop: 20,
               fontWeight: 500,
               height: "5vh",
            }}
         >
            {role}
         </div>
         <div
            className="username-member"
            style={{
               width: "18vh",
               textAlign: "center",
               marginTop: 20,
               fontWeight: 500,
            }}
         >
            RM: {rm}
         </div>
      </div>
   );
};

MemberSummary.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   member: PropTypes.string.isRequired,
   role: PropTypes.string.isRequired,
   rm: PropTypes.string.isRequired,
   mb: PropTypes.number,
};

export default MemberSummary