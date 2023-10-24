import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageTop from "../components/PageTop";
import RightContent from "../components/rightContent/RightContent";
import GreenArrow from "../components/publishContent/GreenArrow";
import PostButton from "../components/PostButton";
import Posts from "../components/centerContent/Posts";
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
import CommentsNumber from "../components/publishContent/CommentsNumber";
import LineDivider from "../components/publishContent/LineDivider";
import Comment from "../components/publishContent/Comment";
import UserComment from "../components/publishContent/UserComment";
import PostContent from "../components/postContent/PostContent";
import Logo from "../components/Logo";
import MenuItem from "../components/leftContent/MenuItem";
import Button from "../components/leftContent/Button";
import Blackout from "../components/leftContent/Blackout";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import UserPoints from "../components/rightContent/UserPoints";

const Publish = () => {
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
               <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/">
                     <GreenArrow />
                  </Link>
                  <PostButton text="Publicar um post ou uma dica" onClick={handlePostButtonClick} />
               </div>
               <Posts>
                  <PostCard
                     colorName="white"
                     backgroundImageName="linear-gradient(to right, #0D1617, #0D1617)"
                  >
                     <PostInfos>
                        <PostUser>
                           <UserImage className="box-perfil-post" imgSrc="./images/person1.png" />
                           <UserAccount name="Bruno Silvera" id="@brunoslvr" />
                        </PostUser>
                        <PostTitle title="Dicas e truques para armazenar cenoura!" />
                     </PostInfos>
                     <PostText text="Hoje fui na casa da minha prima e descobri um truque pra armazenar cenoura que eu nunca tinha ouvido antes. Ela me disse que faz durar muito mais tempo e fica toda bonitinha! O truque é simples: Só precisa colocar a cenoura dentro da água, com olado do caule pra cima. Ela me explicou que, como a cenoura é uma raiz, dessa forma ela absorve água e permanece crocante e laranjinha por mais tempo!" />
                     <PostOptions>
                        <PostInteractions
                           imgScr1="./images/lovegreen.png"
                           imgScr2="./images/commentsgreen.png"
                           imgScr3="./images/sharegreen.png"
                        />
                        <PostTranslate />
                     </PostOptions>
                     <CommentsNumber number={3} />
                     <LineDivider marginTop={15} />
                     <Comment />
                     <LineDivider marginTop={5} />
                     <UserComment
                        imgSrc="./images/person1.png"
                        user="Lucas de Souza"
                        id="@lucasdesouza"
                        comment="amei!! vou testar"
                     />
                     <LineDivider marginTop={15} />
                     <UserComment
                        imgSrc="./images/person3.png"
                        user="Mikayla Silva"
                        id="@mikas"
                        comment="já preparei aqui, vamos ver se dá certo!!"
                     />
                     <LineDivider marginTop={15} />
                     <UserComment
                        imgSrc="./images/person4.png"
                        user="Gloria Moovie"
                        id="@gloriamv"
                        comment="recomendo muitooooo"
                     />
                  </PostCard>
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

export default Publish;
