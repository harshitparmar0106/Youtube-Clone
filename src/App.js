import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';



function App() {
  return (
    <div className="App">
        <h1>
        </h1>
        <Header/>
        <div className='body_section'>
        <Sidebar/>
        <RecommendedVideos/>
        </div>

    </div>
  );
}

export default App;
