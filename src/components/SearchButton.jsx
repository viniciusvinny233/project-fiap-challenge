import PropTypes from "prop-types";

const SearchButton = ({ text }) => {
   return <input type="text" className="input-pesquisa" placeholder={text} />;
};

SearchButton.propTypes = {
   text: PropTypes.string.isRequired,
};


export default SearchButton