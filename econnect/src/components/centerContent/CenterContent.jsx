import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTop from "../PageTop";
import PostButton from "../PostButton";
import Posts from "./Posts";
import PostCard from "./PostCard";
import PostInfos from "./PostInfos";
import PostText from "./PostText";
import PostOptions from "./PostOptions";
import PostUser from "./PostUser";
import PostTitle from "./PostTitle";
import UserImage from "../userInfo/UserImage";
import UserAccount from "../userInfo/UserAccount";
import PostInteractions from "./PostInteractions";
import PostTranslate from "./PostTranslate";
import PostImage from "../PostImage";
import Logo from "../Logo";
import UserPoints from "../rightContent/UserPoints";

const CenterContent = () => {
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

   return (
      <div className="center">
         <PageTop >
            {windowWidth <= 834 && <><UserPoints points="1000" /><Logo /></>}{" "}
         </PageTop>
         <div className="conteudo-centro">
            <PostButton text="Publicar um post ou uma dica" />
            <Posts>
               <Link to="publish" style={{ textDecoration: "none", color: "white" }}>
                  <PostCard
                     colorName="black"
                     backgroundImageName="linear-gradient(to right, #03A532, #04A433)"
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
                           imgScr1="./images/love.png"
                           imgScr2="./images/comments.png"
                           imgScr3="./images/share.png"
                        />
                        <PostTranslate />
                     </PostOptions>
                  </PostCard>
               </Link>
            </Posts>
            <Posts>
               <Link to="publish" style={{ textDecoration: "none", color: "white" }}>
                  <PostCard>
                     <PostInfos>
                        <PostUser>
                           <UserImage className="box-perfil-post" imgSrc="./images/person2.png" />
                           <UserAccount name="Renata Vasconcelos" id="@revasqs" />
                        </PostUser>
                        <PostTitle title="Estoque de cenoura" />
                     </PostInfos>
                     <PostText
                        text={`Testei a diquinha da Rê e deu super certo!! VIm até postar a foto pra deixar a prova! Olha aqui <b>@revasqs</b>`}
                     />
                     <PostImage imgSrc="./images/cenoura.jpg" />
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
   );
};

export default CenterContent;
