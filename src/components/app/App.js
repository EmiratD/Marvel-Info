import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {MainPage, ComicsPage, ErrorPage, SingleComic} from '../pages'

import AppHeader from "../appHeader/AppHeader";

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/comics" element={<ComicsPage/>}/>
              <Route path='/comics/:comicId' element={<SingleComic/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
