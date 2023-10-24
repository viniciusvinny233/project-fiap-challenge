import { useState, useEffect } from "react";
import Button from "../components/leftContent/Button";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import MenuItem from "../components/leftContent/MenuItem";
import PostContent from "../components/postContent/PostContent";
import RightContent from "../components/rightContent/RightContent";
import SaveTitle from "../components/savesContent/SaveTitle";
import SavedItemsLayout from "../components/savesContent/SavedItemsLayout";
import SavedItem from "../components/savesContent/SavedItem";
import Posts from "../components/centerContent/Posts";
import { Link } from "react-router-dom";
import PostCard from "../components/centerContent/PostCard";
import PostInfos from "../components/centerContent/PostInfos";
import PostUser from "../components/centerContent/PostUser";
import UserImage from "../components/userInfo/UserImage";
import UserAccount from "../components/userInfo/UserAccount";
import PostTitle from "../components/centerContent/PostTitle";
import PostText from "../components/centerContent/PostText";
import PostOptions from "../components/centerContent/PostOptions";
import PostInteractions from "../components/centerContent/PostInteractions";
import PostTranslate from "../components/centerContent/PostTranslate";
import Blackout from "../components/leftContent/Blackout";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import UserPoints from "../components/rightContent/UserPoints";

const Saves = () => {
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
                  <b>
                     <MenuItem imgSrc="./images/salvoicon.png" title="Itens Salvos" link="" />
                  </b>
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
            <div className="conteudo-centro">
               <SaveTitle title="Minhas Pastas:" marginBottom={5} />
               <SavedItemsLayout>
                  <SavedItem item="Datas Comemorativas" />
                  <SavedItem item="Saúde" />
                  <SavedItem item="Beleza" />
                  <SavedItem item="Restaurantes" />
                  <SavedItem item="Presentes" />
                  <SavedItem item="Cosmetologia" />
                  <SavedItem item="Economia" />
                  <SavedItem item="Armazen. de alimentos" />
                  <SavedItem item="Restaurantes" />
               </SavedItemsLayout>
               <Posts>
                  <SaveTitle title="Todos os Itens Salvos" marginBottom={20} marginTop={20} />
                  <Posts>
                     <Link to="../publish" style={{ textDecoration: "none", color: "white" }}>
                        <PostCard
                           colorName="black"
                           backgroundImageName="linear-gradient(to right, #03A532, #04A433)"
                        >
                           <PostInfos>
                              <PostUser>
                                 <UserImage
                                    className="box-perfil-post"
                                    imgSrc="./images/person1.png"
                                 />
                                 <UserAccount name="Bruno Silvera" id="@brunoslvr" />
                              </PostUser>
                              <PostTitle title="Dicas e truques para armazenar cenoura!" />
                           </PostInfos>
                           <PostText text="Hoje fui na casa da minha prima e descobri um truque pra armazenar cenoura que eu nunca tinha ouvido antes. Ela me disse que faz durar muito mais tempo e fica toda bonitinha! O truque é simples: Só precisa colocar a cenoura dentro da água, com olado do caule pra cima. Ela me explicou que, como a cenoura é uma raiz, dessa forma ela absorve água e permanece crocante e laranjinha por mais tempo!" />
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

export default Saves;
