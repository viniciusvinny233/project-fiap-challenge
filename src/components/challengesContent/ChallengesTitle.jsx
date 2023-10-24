import PropTypes from "prop-types";

const ChallengesTitle = ({ title }) => {
   return (
      <div
      className="challenges-title"
         style={{
            alignSelf: "center",
            fontFamily: '"Poppins", sans-serif',
            color: "#D9D9D9",
            marginBottom: 5,
            fontWeight: 600,
            lineHeight: "100%",
         }}
      >
         {title}
      </div>
   );
};

ChallengesTitle.propTypes = {
   title: PropTypes.string.isRequired,
};

export default ChallengesTitle;
