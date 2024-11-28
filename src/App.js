import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Landing Page</h1>
        <p>
          Discover amazing features and services
        </p>
        <button style={{backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem', marginBottom: '20px'}}>
          Get Started
        </button>
        <button style={{backgroundColor: '#2196F3', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem', marginBottom: '20px'}}>
          Learn More
        </button>
        <a
          className="App-link"
          href="#contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
        <div style={{position: 'fixed', bottom: '20px', right: '20px', width: '320px', height: '180px'}}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
