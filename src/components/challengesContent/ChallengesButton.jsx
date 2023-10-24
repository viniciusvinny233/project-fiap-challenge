import PropTypes from "prop-types";

const ChallengesButton = ({ title }) => {
   return (
      <div className="challenges-button"
         style={{
            display: "flex",
            alignSelf: "center",
            fontFamily: '"Poppins", sans-serif',
            color: "#D9D9D9",
            marginBottom: 5,
            fontWeight: "bold",
            width: "24vh",
            lineHeight: "100%",
            textAlign: "end",
            cursor: "pointer",
         }}
      >
         <div>{title}</div>
         <img
         className="challenges-img"
            style={{ width: 40, marginRight: 10, height: 30, marginTop: 5 }}
            src="./images/setaverde.png"
         />
      </div>
   );
};

ChallengesButton.propTypes = {
   title: PropTypes.string.isRequired,
};

export default ChallengesButton;
