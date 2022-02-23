import logo from './logo.svg';
import './App.css';
import ShowsList from './ShowsList';

function App() {
  return (
    <div className="App">
     <ShowsList name='Shows to Watch List' initialShowsToWatch={[{id:1, watch: 'Ozark', seen:true}]} />
     <ShowsList name='' initialShowsToWatch={[{id:1, watch: 'Breakiing Bad', seen:true}]} />
     <ShowsList name='Animated Shows to Watch List' initialShowsToWatch={[{id:1, watch: 'Simpsons', seen:false}]} />
     <ShowsList name='' initialShowsToWatch={[{id:1, watch: 'Futurama', seen:true}]} />
     <ShowsList name='' initialShowsToWatch={[{id:1, watch: 'Disenchantment', seen:true}]} />
    </div>
  );
}

export default App;
