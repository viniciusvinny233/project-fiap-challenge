import PropTypes from "prop-types";

const PostButton = ({ text, onClick }) => {  // Adicionar 'onClick' aqui
   return (
      <div
         id="publish-button-id"
         className="publish-button"
         style={{ verticalAlign: "middle", display: "flex", cursor: "pointer" }}
         onClick={onClick}  // E aqui
      >
         <img className="publish-icon" src="./images/plusicon.png" />
         <div
            className="publish-text"
            style={{
               alignSelf: "center",
               marginLeft: 10,
               fontFamily: '"Questrial", sans-serif',
               color: "#D9D9D9",
            }}
         >
            {text}
         </div>
      </div>
   );
};

PostButton.propTypes = {
   text: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,  // E adicionar a validação PropTypes para 'onClick'
};

export default PostButton;
