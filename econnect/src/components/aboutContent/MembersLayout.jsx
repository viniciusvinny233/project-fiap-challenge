import PropTypes from "prop-types";

const MembersLayout = ({ children }) => {
   return (
      <div
         className="members-layout"
         style={{
            display: "flex",
            flexWrap: "wrap",
         }}
      >
         {children}
      </div>
   );
};

MembersLayout.propTypes = {
   children: PropTypes.any,
};

export default MembersLayout;
