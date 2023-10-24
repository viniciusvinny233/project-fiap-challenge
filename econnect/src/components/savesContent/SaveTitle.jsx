import PropTypes from "prop-types";

const SaveTitle = ({ title, marginBottom, marginTop }) => {
   return (
      <div className="publish-button" style={{ verticalAlign: "middle", display: "flex" }}>
         <div
            style={{
               alignSelf: "center",
               fontSize: 30,
               fontFamily: '"Questrial", sans-serif',
               color: "#D9D9D9",
               marginBottom: marginBottom,
               marginTop: marginTop,
            }}
         >
            {title}
         </div>
      </div>
   );
};

SaveTitle.propTypes = {
   title: PropTypes.string.isRequired,
   marginBottom: PropTypes.number,
   marginTop: PropTypes.number,
};

export default SaveTitle;
