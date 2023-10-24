import PropTypes from "prop-types";

const PageTop = ({ children }) => {
   return <div className="topo-pagina">{children}</div>;
};

PageTop.propTypes = {
   children: PropTypes.any,
};

export default PageTop;
