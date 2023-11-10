import './App.css';
import ProfilePic from './ProfilePic.jpg';

function App() {
  return (
    <div className="App">
      <div className='Body'>


        <div className='Header'>
          <div className='Nav'>
            <div className='Menu'>
              <a href="" className="Btn">Home</a>
              <a href="" className="Btn">About Me</a>
              <a href="" className="Btn">My Work</a>
              <a href="" className="Btn">My Resume</a>
              <a href="" className="Btn">My Info</a>
            </div>
          </div>
          <h1 className='Me'>Home</h1>
        </div>

        <div className='Main'>
          <div className='Intro'>
            <img src={require('./ProfilePic.jpg')} alt='Profile of Lisa Thompson wearing glasses and smiling slightly' height={300} width={300}></img>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
