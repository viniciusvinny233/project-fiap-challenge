import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import PageTop from "../components/PageTop";
import Blackout from "../components/leftContent/Blackout";
import Button from "../components/leftContent/Button";
import ConfigButtons from "../components/leftContent/ConfigButtons";
import MenuItem from "../components/leftContent/MenuItem";
import DropDownContent from "../components/mapsContent/DropDownContent";
import FilterList from "../components/mapsContent/FilterList";
import FilterListItem from "../components/mapsContent/FilterListItem";
import FilterSuggs from "../components/mapsContent/FilterSuggs";
import GoogleMaps from "../components/mapsContent/GoogleMaps";
import MapsTitle from "../components/mapsContent/MapsTitle";
import PostContent from "../components/postContent/PostContent";
import RightContent from "../components/rightContent/RightContent";
import UserPoints from "../components/rightContent/UserPoints";
import { Link } from "react-router-dom";

const Maps = () => {
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
                  <b>
                     <MenuItem imgSrc="./images/localicon.png" title="Mapa Sustentável" link="" />
                  </b>
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
               <MapsTitle text="Selecionar País e Estado:" />
               <DropDownContent />
               <MapsTitle text="Filtros:" mb={10} mt={10} />
               <div className="filter-box" style={{ marginTop: 10 }}>
                  <FilterList>
                     <FilterListItem item="Datas Comemorativas" />
                     <FilterListItem item="Lojas" />
                     <FilterListItem item="Energia" />
                     <FilterListItem item="Estoque alimentos" />
                     <FilterListItem item="Restaurantes" />
                     <FilterListItem item="..." />
                  </FilterList>
                  <FilterSuggs />
               </div>
               <GoogleMaps />
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

export default Maps;
