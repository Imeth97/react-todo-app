import './App.css';
import Navbar from './Navbar';
import Title from './Title';
import Usefetch from './Usefetch';
import ItemList from './ItemList';

// TO-DO ------------ New List
// 
// List Name
// 
// todo1
// todo2
// ... 


function App() {

  const {data, isPending, error} = Usefetch('http://localhost:8000/Lists');
  

  return (
    <div className="App">
      <Navbar />

      {isPending && <div>Loading...</div>}
      {error && <div>Error loading data!</div>}
      {data && <Title data={data[0].title}/>}

      {data && <ItemList data={data[0].items}/>}



    </div>
  );
}

export default App;
