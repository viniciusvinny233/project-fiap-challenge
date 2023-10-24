import PropTypes from "prop-types";

const Layout = ({ children }) => {
   return (
      <div
         style={{
            width: "calc(100vw - 12px)",
            minHeight: "120vh",
            display: "flex",
         }}
      >
         {children}
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.any,
};

export default Layout;
