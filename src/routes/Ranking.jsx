import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import Blackout from "../components/leftContent/Blackout";
import Button from "../components/leftContent/Button";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import MenuItem from "../components/leftContent/MenuItem";
import PostContent from "../components/postContent/PostContent";
import RankingTitle from "../components/rankingContent/RankingTitle";
import RankingUser from "../components/rankingContent/RankingUser";
import RightContent from "../components/rightContent/RightContent";
import UserPoints from "../components/rightContent/UserPoints";
import { Link } from "react-router-dom";

const Ranking = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [isPostContentVisible, setIsPostContentVisible] = useState(false); // Novo estado

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

   const handlePostButtonClick = () => {
      setIsPostContentVisible(true);
      console.log("Button clicked, isPostContentVisible:", isPostContentVisible);
   };

   const closePostContent = () => {
      setIsPostContentVisible(false);
   };

   return (
      <Layout>
         <div className="left">
            {windowWidth > 834 && (
               <PageTop>
                  <Logo />
               </PageTop>
            )}{" "}
            <Blackout style={{ display: isPostContentVisible ? "block" : "none" }} />
            <PostContent
               style={{ display: isPostContentVisible ? "block" : "none" }}
               onClose={closePostContent} // Passando a função de callback
            />
            <div className="conteudo-esquerdo">
               <ul className="ul">
                  <MenuItem imgSrc="./images/houseicon.png" title="Página Inicial" link="/" />
                  <MenuItem imgSrc="./images/usericon.png" title="Meu Perfil" link="../profile" />
                  <MenuItem imgSrc="./images/salvoicon.png" title="Itens Salvos" link="../saves" />
                  <MenuItem imgSrc="./images/planticon.png" title="Desafios" link="../challenges" />
                  <MenuItem imgSrc="./images/localicon.png" title="Mapa Sustentável" link="" />
                  {shouldRenderAdditionalItems && (
                     <MenuItem
                        imgSrc="./images/usericon.png"
                        title="Ranking"
                        link="../ranking"
                        className="menu-item"
                     />
                  )}{" "}
               </ul>
               {shouldRenderAdditionalItems && (
                  <div className="config-div">
                     <hr className="hr" />
                     <div className="config-buttons-div">
                        <MenuItem
                           imgSrc="./images/recordicon.png"
                           title="Vídeo Pitch"
                           link="../pitch"
                        />
                        <MenuItem
                           imgSrc="./images/infoicon.png"
                           title="Sobre o Projeto"
                           link="../about"
                        />
                     </div>
                  </div>
               )}
               {windowWidth > 834 && <Button text="Postar" onClick={handlePostButtonClick} />}{" "}
            </div>
            {windowWidth > 834 && (
               <ConfigButtons>
                  <div className="config-button-span left-icons-text ul">
                     <MenuItem
                        imgSrc="./images/recordicon.png"
                        title="Vídeo Pitch"
                        link="../pitch"
                     />
                     <MenuItem
                        imgSrc="./images/infoicon.png"
                        title="Sobre o Projeto"
                        link="../about"
                     />
                  </div>
               </ConfigButtons>
            )}{" "}
         </div>
         <div className="center">
            <PageTop>
               {shouldRenderAdditionalItems && (
                  <>
                     <UserPoints points="1000" />
                     <Logo />
                  </>
               )}{" "}
            </PageTop>
            <RankingTitle />
            <RankingUser
               number={1}
               imgSrc="./images/person4.png"
               userName="Gloria Moovie"
               id="@gloriamv"
               pointsNumber={1921}
            />
            <RankingUser
               number={2}
               imgSrc="./images/person1.png"
               userName="Lucas de Souza"
               id="@lucasdesouza"
               pointsNumber={1752}
            />
            <RankingUser
               number={3}
               imgSrc="./images/person5.png"
               userName="Bruna Binati"
               id="@brubinati"
               pointsNumber={932}
            />
            <RankingUser
               number={4}
               imgSrc="./images/person3.png"
               userName="Mikayla Silva"
               id="@mikas"
               pointsNumber={736}
            />
            <RankingUser
               number={5}
               imgSrc="./images/person1.png"
               userName="Bruno Silvera"
               id="@brunoslvr"
               pointsNumber={425}
            />
         </div>
         <RightContent>
            <Link to="" style={{ textDecoration: "none" }}>
               <h3 className="title-ranking">Ranking de Agosto</h3>
            </Link>
         </RightContent>
      </Layout>
   );
};

export default Ranking;
