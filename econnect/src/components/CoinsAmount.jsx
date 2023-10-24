import PropTypes from "prop-types";

const CoinsAmount = ({ imgSrc, coins }) => {
   return (
      <div className="contagem-coins">
         <img src={imgSrc} alt="Logo" className="logo2" />
         <span style={{ fontWeight: "bold", fontSize: 39, marginTop: 10, marginLeft: 5 }}>
            {coins}
         </span>
      </div>
   );
};

CoinsAmount.propTypes = {
   imgSrc: PropTypes.string,
   coins: PropTypes.string,
}

export default CoinsAmount;
