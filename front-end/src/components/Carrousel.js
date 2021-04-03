import img from '../images/carrousel-images/dieta1.jpg';
import img2 from '../images/carrousel-images/dieta2.jpg';
import img3 from '../images/carrousel-images/dieta3.jpg';

export default function Carrousel() {
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active fixedHeightImg">
      <img class="d-block w-100" src={img} alt="Primeiro Slide" height="400px" width="600px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b>BEM-VINDO</b></h5>
        <p><b>Pratique exercícios físicos e cuide da sua alimentação!</b></p>
      </div>
    </div>
    <div class="carousel-item fixedHeightImg">
      <img class="d-block w-100" src={img2} alt="Segundo Slide" height="400px" width="600px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><b>Monte suas refeições e dieta</b></h5>
        <p><font color="green"><b>MinhaDieta</b></font></p>
      </div>
    </div>
    <div class="carousel-item fixedHeightImg">
      <img class="d-block w-100" src={img3} alt="Terceiro Slide" height="400px" width="600px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5><font color="white"><b>Saúde em primeiro lugar!</b></font></h5>
        <p><font color="white">Ajudamos você a emagrecer!</font></p>
      </div>
    </div>
  </div>
  
</div>


        
    )
}