import './App.css';
import Header from './Header';
import ImageSlider from './ImageSlider';

function App() {
  const country = 'India';
  return (
    <div className="App">
      <h1>My Dummy Appsss</h1> 
      <Header country={country}/> 
      <ImageSlider />
    </div>
  );
}

export default App;