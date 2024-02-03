import ran from './ran.jpeg';
import './App.css';
export default function Card() {
    return (
        <div className="Card">
            <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title" style={{color:"orange"}}>  Sed vulputate vitae diam quis bibendum</h5>
      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
    </div>
  </div>
  <div class="card">
    <img src={ran} alt='ran' height={280}/>
  </div>
  <div class="card">
    <div class="card-body" style={{backgroundColor:"orange"}}>
      <h5 class="card-title">Photoshop.HTML CSS JS.Web Design</h5>
      <p class="card-text"><h6>Fontend Design</h6></p>
        <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark" style={{width:"90%"}}>90%</div>
</div><br></br>
<h6>Backend Processing</h6>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark " style={{width:"70%"}}>70%</div>
</div><br></br>
<h6>HTML&&CSS</h6>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"style={{width:"80%"}}> 80%</div>
</div>
    </div>
  </div>
</div>
        </div>
    );
}
