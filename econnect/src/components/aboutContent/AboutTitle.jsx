import PropTypes from "prop-types";

const AboutTitle = ({ title, marginTop, marginBottom }) => {
   return (
      <div className="publish-button" style={{ verticalAlign: "middle", display: "flex" }}>
         <div
         className="about-title"
            style={{
               alignSelf: "center",
               marginBottom: marginBottom,
               fontFamily: '"Poppins", sans-serif',
               color: "#D9D9D9",
               fontWeight: "bold",
               marginTop: marginTop
            }}
         >
            {title}
         </div>
      </div>
   );
};

AboutTitle.propTypes = {
   title: PropTypes.string.isRequired,
   marginTop: PropTypes.number,
   marginBottom: PropTypes.number,
};

export default AboutTitle;
