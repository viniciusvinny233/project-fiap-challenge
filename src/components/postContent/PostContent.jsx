import PropTypes from "prop-types";
import { useState } from "react";

const PostContent = (props) => {
   const [selectedButton, setSelectedButton] = useState("POST");

   return (
      <div id="box-post-id" className="box-post" style={{ color: "#D9D9D9", ...props.style }}>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <div
               className="tile-post"
               style={{
                  fontFamily: '"Questrial", sans-serif',
                  padding: "40px 40px 0px 30px",
                  marginBottom: "-5px",
               }}
            >
               Escolha se sua publicação será:
            </div>
            <div
               style={{
                  fontFamily: '"Questrial", sans-serif',
                  padding: "40px 40px 0px 30px",
                  fontSize: 35,
                  marginBottom: "-20px",
                  fontWeight: "bold",
                  cursor: "pointer",
               }}
               id="fechar-box-id"
               onClick={props.onClose}
            >
               x
            </div>
         </div>
         <div
            className="box-content"
            style={{
               display: "flex",
               padding: 20,
               justifyContent: "center",
               flexDirection: "column",
            }}
         >
            <div
               style={{
                  display: "flex",
                  marginBottom: "-50px",
                  cursor: "pointer",
               }}
               onClick={() => setSelectedButton("POST")}
            >
               <img
                  src="./images/checkpreto.png"
                  className={selectedButton === "POST" ? "publicar-botao-select" : "publicar-botao"}
               />
               <div
                  className="post-t"
                  style={{
                     fontFamily: '"Poppins", sans-serif',
                     fontWeight: 600,
                     display: "flex",
                     alignItems: "center",
                     marginBottom: 30,
                     marginLeft: 20,
                  }}
               >
                  POST
               </div>
               <div
                  className="post-p"
                  style={{
                     fontFamily: '"Questrial", sans-serif',
                     display: "flex",
                     alignItems: "center",
                     margin: "0px 30px 30px 30px",
                  }}
               >
                  <span className="post-p-span">
                     (Postagens longas, artigos, fotos, e até vídeos! O que você sentir vontade de
                     compartilhar)
                  </span>
               </div>
            </div>
            <div
               style={{ display: "flex", cursor: "pointer" }}
               onClick={() => setSelectedButton("DICA")}
            >
               <img
                  src="./images/checkpreto.png"
                  className={selectedButton === "DICA" ? "publicar-botao-select" : "publicar-botao"}
               />
               <div
                  className="post-t"
                  style={{
                     fontFamily: '"Poppins", sans-serif',
                     fontWeight: 600,
                     display: "flex",
                     alignItems: "center",
                     marginBottom: 30,
                     marginLeft: 22,
                  }}
               >
                  DICA
               </div>
               <div
                  className="post-p"
                  style={{
                     fontFamily: '"Questrial", sans-serif',
                     display: "flex",
                     alignItems: "center",
                     margin: "0px 30px 30px 30px",
                  }}
               >
                  <span className="post-p-span">
                     (Postagens de texto curto contendo uma dica pro pessoal ver de forma rápida.
                     Você pode linkar outras publicações pra quem quiser se aprofundar)
                  </span>
               </div>
            </div>
            <div className="box-title-post">
               <input
                  style={{
                     backgroundColor: "#132122",
                     border: "none",
                     fontFamily: '"Questrial", sans-serif',
                     padding: "30px 30px 0px 30px",
                     fontSize: 22,
                     color: "white",
                     outline: "none",
                  }}
                  type="text"
                  placeholder="Digite aqui o título da sua postagem..."
               />
            </div>
            <div className="box-desc-post">
               <textarea
                  className="text-area"
                  style={{
                     backgroundColor: "#132122",
                     border: "none",
                     fontFamily: '"Questrial", sans-serif',
                     padding: 30,
                     fontSize: 22,
                     color: "white",
                     outline: "none",
                     height: "20vh",
                     wordBreak: "break-word",
                     resize: "none",
                  }}
                  placeholder="Digite aqui a sua postagem..."
                  defaultValue={""}
               />
               <div
                  id="postar-id"
                  className="postar"
                  style={{
                     display: "flex",
                     justifyContent: "end",
                     position: "absolute",
                     bottom: 0,
                  }}
               >
                  <button
                     className="post-button"
                     style={{
                        width: "25vh",
                        margin: "0px 30px 30px 30px",
                     }}
                     onClick={props.onClose}
                  >
                     Postar
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

PostContent.propTypes = {
   style: PropTypes.object,
   onClose: PropTypes.func,
};

export default PostContent;
