import PropTypes from "prop-types";

const MapsTitle = ({ text, mt, mb }) => {
   return (
      <div className="publish-button" style={{ verticalAlign: "middle", display: "flex" }}>
         <div
            style={{
               alignSelf: "center",
               fontFamily: '"Poppins", sans-serif',
               color: "#D9D9D9",
               fontSize: 35,
               fontWeight: "bold",
               margin: "-10px",
               marginTop: mt,
               marginBottom: mb,
            }}
         >
            {text}
         </div>
      </div>
   );
};

MapsTitle.propTypes = {
   text: PropTypes.string.isRequired,
   mt: PropTypes.number,
   mb: PropTypes.number,
};

export default MapsTitle;
