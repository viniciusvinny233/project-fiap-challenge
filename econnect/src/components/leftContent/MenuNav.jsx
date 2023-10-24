import Button from "./Button";
import MenuItem from "./MenuItem";

const MenuNav = () => {
   return (
      <div className="conteudo-esquerdo">
         <ul>
            <b>
               <MenuItem imgSrc="./images/houseicon.png" title="Página Inicial" link="/" />
            </b>
            <MenuItem imgSrc="./images/usericon.png" title="Meu Perfil" link="profile" />
            <MenuItem imgSrc="./images/salvoicon.png" title="Itens Salvos" link="saves" />
            <MenuItem imgSrc="./images/planticon.png" title="Desafios" link="challenges" />
            <MenuItem imgSrc="./images/localicon.png" title="Mapa Sustentável" link="maps" />
         </ul>
         <Button text="Postar" onClick={handlePostButtonClick} />
      </div>
   );
};

export default MenuNav;
