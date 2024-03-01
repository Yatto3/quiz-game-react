import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainPage from './routes/MainPage/MainPage';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import QuizTemplate from './components/QuizTemplate/QuizTemplate';
import "./Index.css"
import Quiz from './questions';


const router = createBrowserRouter([
 
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/home",
    element: <MainPage/>,
  },
  {
    path: "/Music",
    element:<QuizTemplate data = {new Quiz("Music")}/>,
  },
  {
    path: "/History",
    element:<QuizTemplate data = {new Quiz("History")}/>,
  },
  {
    path: "/Science",
    element:<QuizTemplate data = {new Quiz("Science")}/>,
  },
  {
    path: "/Invention",
    element:<QuizTemplate data = {new Quiz("Invention")}/>,
  },
  {
    path: "/Quotes",
    element:<QuizTemplate data = {new Quiz("Quotes")}/>,
  },
  {
    path: "/Movies",
    element:<QuizTemplate data = {new Quiz("Movies")}/>,
  },
  {
    path: "/Tech",
    element:<QuizTemplate data = {new Quiz("Tech")}/>,
  },
  {
    path: "/Books",
    element:<QuizTemplate data = {new Quiz("Books")}/>,
  },
  {
    path: "/Food",
    element:<QuizTemplate data = {new Quiz("Food")}/>,
  },

  {
    path: "/Nature",
    element:<QuizTemplate data = {new Quiz("Nature")}/>,
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
