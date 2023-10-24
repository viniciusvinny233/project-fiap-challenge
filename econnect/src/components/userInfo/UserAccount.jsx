import PropTypes from "prop-types";

const UserAccount = ({ name, id }) => {
   return (
      <div
         className="user-account"
         style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
         }}
      >
         <span className="username">{name}</span>
         <span className="handle">{id}</span>
      </div>
   );
};

UserAccount.propTypes = {
   name: PropTypes.string.isRequired,
   id: PropTypes.string,
};

export default UserAccount;
