import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav />
    <Banner fetchUrl={requests.fetchNetflixOriginals} />
     <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row isPoster={true} title="Trending in India" fetchUrl={requests.fetchTrending} />
     <Row isPoster={true} title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
     <Row isPoster={true} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row isPoster={true} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row isPoster={true} title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row isPoster={true} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row isPoster={true} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;