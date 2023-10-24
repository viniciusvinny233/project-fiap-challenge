import { useState, useEffect } from "react";
import Button from "../components/leftContent/Button";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import PostButton from "../components/PostButton";
import MenuItem from "../components/leftContent/MenuItem";
import PostContent from "../components/postContent/PostContent";
import RightContent from "../components/rightContent/RightContent";
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

const Profile = () => {
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
                  <b>
                     <MenuItem imgSrc="./images/usericon.png" title="Meu Perfil" link="" />
                  </b>
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
            <div className="conteudo-centro conteudo-centro-p">
               <PostButton text="Publicar um post ou uma dica" onClick={handlePostButtonClick} />
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
                                 imgSrc="./images/person5.png"
                              />
                              <UserAccount name="Bruna Binati" id="@brubinati" />
                           </PostUser>
                           <PostTitle title="Dia dos namorados" />
                        </PostInfos>
                        <PostText
                           text="Mais um post do mês dos namorados! Semana passada postei &#34;5 Restaurantes
                           com Práticas Sustentáveis&#34; e hoje vou deixar algumas lojinhas que eu amo,
                           são super sustentáveis e dariam ótimos presentes!
                           <br />
                           <br />
                           <b>1.Bars Over Bottles (BOB)</b>
                           <br />
                           <br />
                           Todo mundo sabe que a algum tempo tenho tentado fazer escolhas melhores
                           quando vou comprar os meus cosméticos. Então a primeira dica não poderia
                           ser outra coisa. A BOB procura diminuir as embalagens plásticas
                           produzindo shampoo, condicionador e vários outros em barra! Eu sempre
                           indico essa loja porque tem tudo pra todos os gostos.
                           <br />
                           <br />
                           https://www.usebob.com.br/
                           <br />
                           <br />
                           <b>2.Mapeei</b>
                           <br />
                           <br />
                           Essa daqui é pra quem é de São Paulo! Se seu parceiro ou parceira gosta
                           de produtos de casa, a Mapeei é o melhor lugar pra se procurar! Eu fui lá
                           esses dias e sério, tem várias coisas incríveis e num preço bom. A Mapeei
                           é uma loja colaborativa e ecológica, ou seja, várias lojinhas
                           sustentáveis também vendem lá. A Mapeei não tem site então vou deixar o
                           instagram e o endereço deles aqui:
                           <br />
                           <br />
                           @mapeeicolab
                           <br />
                           Rua Lisboa, 568"
                        />
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
                  <Link to="../publish" style={{ textDecoration: "none", color: "white" }}>
                     <PostCard>
                        <PostInfos>
                           <PostUser>
                              <UserImage
                                 className="box-perfil-post"
                                 imgSrc="./images/person2.png"
                              />
                              <UserAccount name="Bruna Binati" id="@brubinati" />
                           </PostUser>
                           <PostTitle title="Estoque de cenoura" />
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

export default Profile;
