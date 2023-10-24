import { useState, useEffect } from "react";
import Button from "../components/leftContent/Button";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import AboutParagraph from "../components/aboutContent/AboutParagraph";
import AboutTitle from "../components/aboutContent/AboutTitle";
import MemberSummary from "../components/aboutContent/MemberSummary";
import MembersLayout from "../components/aboutContent/MembersLayout";
import MenuItem from "../components/leftContent/MenuItem";
import PostContent from "../components/postContent/PostContent";
import RightContent from "../components/rightContent/RightContent";
import Blackout from "../components/leftContent/Blackout";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import { Link } from "react-router-dom";
import UserPoints from "../components/rightContent/UserPoints";

export const About = () => {
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
                        <MenuItem imgSrc="./images/infoicon.png" title="Sobre o Projeto" link="" />
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
                     <b>
                        <MenuItem imgSrc="./images/infoicon.png" title="Sobre o Projeto" link="" />
                     </b>
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
            <div className="conteudo-centro">
               <AboutTitle title="Integrantes" marginBottom={30} />
               <MembersLayout>
                  <MemberSummary
                     imgSrc="./images/marcos.jpg"
                     member="Marcos Vinicius Pinheiro Rodrigues"
                     role="Dev. Front-end"
                     rm="99894"
                     mb={10}
                  />
                  <MemberSummary
                     imgSrc="./images/ana.jpg"
                     member="Ana Vitória Baetas da Silva"
                     role="Planejamento Criativo"
                     rm="99006"
                     mb={10}
                  />
                  <MemberSummary
                     imgSrc="./images/platini.jpg"
                     member="Gabriel Platiní Mendes Vieira"
                     role="Suporte"
                     rm="551212"
                     mb={10}
                  />
                  <MemberSummary
                     imgSrc="./images/vitor.jpg"
                     member={
                        <div>
                           Vitor Futida <br />
                           Sternik
                        </div>
                     }
                     role="UX/UI Design"
                     rm="98697"
                  />
                  <MemberSummary
                     imgSrc="./images/matheus.jpg"
                     member="Matheus Guedes Bertaiolli"
                     role="Desenvolvimento do Pitch"
                     rm="551223"
                  />
               </MembersLayout>
               <AboutTitle title="Sobre o projeto" marginTop={40} marginBottom={12} />
               <AboutParagraph />
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

export default About;
