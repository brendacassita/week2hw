import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksList from './Pages/BooksList';
import About from './Pages/About';
import DataProvider from './Providers/DataProvider';
import NewBooks from './Pages/NewBooks';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          </Route>
          <Route path='/bookslist' element={<BooksList/>} />
          <Route path='/about' element={<About/>} />
          <Route path='newbooks' element={<NewBooks/>} />
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
