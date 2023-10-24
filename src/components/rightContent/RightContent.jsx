import PropTypes from "prop-types";
import PageTop from "../PageTop";
import CoinsAmount from "../CoinsAmount";
import SearchButton from "../SearchButton";
import SuggestionItem from "./SuggestionItem";
import UserImage from "../userInfo/UserImage";
import UserAccount from "../userInfo/UserAccount";
import UserPoints from "./UserPoints";
import { Link } from "react-router-dom";

const RightContent = ({ children }) => {
   return (
      <div className="right">
         <PageTop>
            <CoinsAmount imgSrc="./images/coins_logo.png" coins="1000" />
         </PageTop>
         <div className="conteudo-direito">
            <div className="search-box">
               <SearchButton text="Pesquisar publicação..." />
               <div className="lista-sugestao">
                  <SuggestionItem text="Datas Comemorativas" />
                  <SuggestionItem text="Saúde" />
                  <SuggestionItem text="Beleza" />
                  <SuggestionItem text="Energia" />
                  <SuggestionItem text="Estoque de alimentos" />
                  <SuggestionItem text="Restaurantes" />
                  <SuggestionItem text="Alimentação" />
                  <SuggestionItem text="Presentes" />
                  <SuggestionItem text="Cosmetologia" />
                  <SuggestionItem text="Economia" />
               </div>
            </div>
            <div className="ranking-box">
               {children}
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person4.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Gloria Moovie" id="@gloriamv" />
                     <UserPoints points="1921" />
                  </div>
               </div>
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person1.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Lucas de Souza" id="@lucasdesouza" />
                     <UserPoints points="1752" />
                  </div>
               </div>
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person5.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Bruna Binati" id="@brubinati" />
                     <UserPoints points="932" />
                  </div>
               </div>
               <div className="div-span-ranking">
                  <Link to="../ranking" style={{ textDecoration: "none" }}>
                     <span className="span-ranking">+ Ver mais</span>
                  </Link>
               </div>
            </div>
            <div className="trending-box">
               <h3 className="title-ranking">Em Alta</h3>
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person1.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Bruno Silvera" id="@brunoslvr" />
                     <UserPoints points="425" />
                  </div>
               </div>
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person2.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Renata Vasconcelos" id="@revasqs" />
                     <UserPoints points="141" />
                  </div>
               </div>
               <div className="user">
                  <UserImage className="box-perfil" imgSrc="./images/person3.png" />
                  <div className="infos-perfil">
                     <UserAccount name="Mikayla Silva" id="@mikas" />
                     <UserPoints points="736" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

RightContent.propTypes = {
   children: PropTypes.any,
};

export default RightContent;
