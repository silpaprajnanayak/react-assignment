import './App.css';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <div>
            <Post />
          </div>
          {/* <Routes>
            <Route exact path="/post" component={Post} />
            <Route exact path='/update' component={Update} />
            <Route exact path='/delete' component={Delete} />
          </Routes> */}
        </div>
      </BrowserRouter>
  );
}

export default App;
