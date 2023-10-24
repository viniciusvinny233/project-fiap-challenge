import { useState, useEffect } from "react";
import Blackout from "./Blackout";
import Logo from "../Logo";
import PageTop from "../PageTop";
import PostContent from "../postContent/PostContent";
import MenuItem from "./MenuItem";
import Button from "./Button";
import VideoAndAbout from "./VideoAndAbout";

const LeftContent = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const shouldRenderAdditionalItems = windowWidth <= 834;

   return (
      <div className="left">
         {windowWidth > 834 && (
            <PageTop>
               <Logo />
            </PageTop>
         )}{" "}
         <Blackout />
         <PostContent />
         <div className="conteudo-esquerdo">
            <ul className="ul">
               <b>
                  <MenuItem imgSrc="./images/houseicon.png" title="Página Inicial" link="/" />
               </b>
               <MenuItem imgSrc="./images/usericon.png" title="Meu Perfil" link="profile" />
               <MenuItem imgSrc="./images/salvoicon.png" title="Itens Salvos" link="saves" />
               <MenuItem imgSrc="./images/planticon.png" title="Desafios" link="challenges" />
               <MenuItem imgSrc="./images/localicon.png" title="Mapa Sustentável" link="maps" />
               {shouldRenderAdditionalItems && (
                  <MenuItem
                     imgSrc="./images/usericon.png"
                     title="Ranking"
                     link="ranking"
                     className="menu-item"
                  />
               )}{" "}
            </ul>
            {shouldRenderAdditionalItems && (
               <div className="config-div">
                  <hr className="hr" />
                  <div className="config-buttons-div">
                     <MenuItem imgSrc="./images/recordicon.png" title="Vídeo Pitch" link="pitch" />
                     <MenuItem
                        imgSrc="./images/infoicon.png"
                        title="Sobre o Projeto"
                        link="about"
                     />
                  </div>
               </div>
            )}
            {windowWidth > 834 && <Button text="Postar" onClick={handlePostButtonClick} />}{" "}
         </div>
         {windowWidth > 834 && <VideoAndAbout />}{" "}
      </div>
   );
};

export default LeftContent;
