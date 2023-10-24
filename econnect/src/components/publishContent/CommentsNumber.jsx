import PropTypes from "prop-types";

const CommentsNumber = ({ number }) => {
   return (
      <div>
         <div style={{ marginTop: 20, display: "flex" }}>
            <p
               style={{
                  fontSize: 27,
                  fontFamily: '"League Spartan", sans-serif',
                  fontWeight: "bold",
                  textAlign: "start",
                  margin: 0,
                  paddingLeft: 2,
               }}
            >
               comentários
            </p>
            <div style={{ paddingLeft: 20, paddingTop: 1, fontWeight: 600 }}>{number}</div>
         </div>
      </div>
   );
};

CommentsNumber.propTypes = {
   number: PropTypes.number.isRequired,
};

export default CommentsNumber;
