import { useState, useEffect } from "react";
import Blackout from "../components/leftContent/Blackout";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import Button from "../components/leftContent/Button";
import MenuItem from "../components/leftContent/MenuItem";
import PostContent from "../components/postContent/PostContent";
import RightContent from "../components/rightContent/RightContent";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import ChallengesHeader from "../components/challengesContent/ChallengesHeader";
import ChallengesTitle from "../components/challengesContent/ChallengesTitle";
import ChallengesButton from "../components/challengesContent/ChallengesButton";
import ChallengesParagraph from "../components/challengesContent/ChallengesParagraph";
import ChallengesPostTitle from "../components/challengesContent/ChallengesPostTitle";
import PostOptions from "../components/centerContent/PostOptions";
import PostInteractions from "../components/centerContent/PostInteractions";
import PostTranslate from "../components/centerContent/PostTranslate";
import UserImage from "../components/userInfo/UserImage";
import PostUser from "../components/centerContent/PostUser";
import PostInfos from "../components/centerContent/PostInfos";
import PostCard from "../components/centerContent/PostCard";
import { Link } from "react-router-dom";
import Posts from "../components/centerContent/Posts";
import UserAccount from "../components/userInfo/UserAccount";
import PostTitle from "../components/centerContent/PostTitle";
import PostText from "../components/centerContent/PostText";
import PostImage from "../components/PostImage";
import UserPoints from "../components/rightContent/UserPoints";

const Challenges = () => {
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
                  <b>
                     <MenuItem imgSrc="./images/planticon.png" title="Desafios" link="" />
                  </b>
                  <MenuItem
                     imgSrc="./images/localicon.png"
                     title="Mapa Sustentável"
                     link="../maps"
                  />
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
            <div className="conteudo-centro ">
               <div style={{ borderBottom: "1px rgb(55, 55, 55) solid", margin: "0 -40px" }}>
                  <div style={{ margin: "0px 30px 40px 30px" }}>
                     <ChallengesHeader>
                        <ChallengesTitle title="Desafio Agosto" />
                        <ChallengesButton title="Ver Desafios de Outros Meses" />
                     </ChallengesHeader>
                     <ChallengesParagraph />
                     <Button text="Enviar meu Desafio" onClick={handlePostButtonClick} />
                  </div>
               </div>
               <Posts>
                  <ChallengesPostTitle />
                  <Link to="../publish" style={{ textDecoration: "none", color: "white" }}>
                     <PostCard
                        colorName="black"
                        backgroundImageName="linear-gradient(to right, #03A532, #04A433)"
                     >
                        <PostInfos>
                           <PostUser>
                              <UserImage
                                 className="box-perfil-post"
                                 imgSrc="./images/person3.png"
                              />
                              <UserAccount name="Mikayla Silva" id="@mikas" />
                           </PostUser>
                           <PostTitle title="Desafio de Agosto" />
                        </PostInfos>
                        <PostText
                           text={`Aqui em casa é muito difícil não ter carne! Então esse mês foi desafio
                           MESMO!!! rs
                           <br><br>
                           Mas aqui vai minha receita: batata com brócolis ao forno`}
                        />
                        <PostImage imgSrc="./images/vegana.jpg" />
                        <PostOptions>
                           <PostInteractions
                              imgScr1="./images/love.png"
                              imgScr2="./images/comments.png"
                              imgScr3="./images/share.png"
                           />
                           <PostTranslate />
                        </PostOptions>
                     </PostCard>
                  </Link>
               </Posts>
            </div>
         </div>
         <RightContent>
            <Link to="../ranking" style={{ textDecoration: "none" }}>
               <h3 className="title-ranking">Ranking de Agosto</h3>
            </Link>
         </RightContent>
      </Layout>
   );
};

export default Challenges;
