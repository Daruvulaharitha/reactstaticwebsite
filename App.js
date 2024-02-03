import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Card2 from './Card2';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary-top-fixed">
  <div class="container-fluid" id="a">
    <a class="navbar-brand" href="#">Stimulus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="hari">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    	
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ABOUT ME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">EXPERIENCES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">TESTIMONIAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</div>

</nav>
<Card/>
<Card2 />
    </div>
  );
}

export default App;
