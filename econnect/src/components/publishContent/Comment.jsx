import { Link } from "react-router-dom";

const Comment = () => {
   return (
      <div style={{ display: "flex", alignItems: "center" }}>
         <img className="my-img" style={{ marginRight: 20 }} src="./images/person5.png" />
         <div
            className="input-comment"
            style={{
               paddingTop: 6,
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <input
               type="text"
               className="input-pesquisa-comment"
               style={{ fontWeight: 500, marginRight: 10 }}
               placeholder="Poste seu comentário..."
            />
            <Link to="">
               <img
                  style={{
                     width: 40,
                     height: 40,
                     paddingBottom: 10,
                     cursor: "pointer",
                  }}
                  src="./images/plusicon.png"
               />
            </Link>
         </div>
      </div>
   );
};

export default Comment;
