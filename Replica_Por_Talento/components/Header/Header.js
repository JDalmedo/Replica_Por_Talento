import "./Header.css";

const template = () => {
  return `
  
  <div id="header">
   <div class="section">
    <div class="header_container">
     <div class="site_logo">
      <a href="#" id="logo">
       <img src="public/img/logo.png" alt="Inicio">
      </a>
     </div>
     <div class="logo-gso2021" alt="gso2021">
      <a href="#" id="gso2021">
       <img src="public/img/logo-gso2021.png" alt="Grupo Social ONCE">
      </a>
     </div> 
     <ul>
      
      <span>
        <a href="#" class="active">¿Qué es XTD?</a>
      </span>
      <span>
        <a href="#" class="active">Cursos</a>
      </span>
      <span>
        <a href="#" class="active">Becas</a>
      </span>
      <span>
        <a href="#" class="active">Blog</a>
      </span>
      <span>
        <a href="#" class="active">Alumni</a>
      </span> 
      <span>
        <a href="#" class="active">Colaboradores</a>
      </span> 
     </ul>  
    <nav>
        <span>
            <img href="#" src="./public/icons/icon-facebook.png"></img>
        </span>
        <span>
            <img href="#" src="./public/icons/icon-twitter.png"></img>
        </span>
        <span>
            <img href="#" src="./public/icons/icon-youtube.png"></img>
        </span>
        <span>
            <img href="#" src="./public/icons/icon-instagram.png"></img>
        </span>
        <span>
            <img href="#" src="./public/icons/icon-linkedin.png"></img>
        </span>    
        
    </nav> 
    </div>
   </div>
  </div>   
   
  `;
};

const Header = () => {
  document.querySelector("Header").innerHTML = template();
};

export default Header;