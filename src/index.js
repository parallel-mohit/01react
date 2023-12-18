import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from './Screens/LoginPage';
import Dashboard from './Screens/Dashboard';
import Projects from './Screens/Projects';
import MainHeader from './Screens/MainHeader';
import Release from './components/Release';
import Overview from './components/Overview';
import Requirenments from './components/Requirenments';
import TestCases from './components/TestCases';
import TestCycles from './components/TestCycles';
import Bugs from './components/Bugs';
import ReleaseDetails from './components/ReleaseDetails';
import ReleaseEdit from './components/ReleaseEdit';
import ReleaseConatiner from './Screens/ReleaseConatiner';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='' element={<LoginPage />} />
    <Route path='Dashboard' element={<Dashboard />} />
    <Route path='Projects' element={<Projects />} />
    <Route path='MainHeader' element={<MainHeader />}>
      <Route path='' element={<Overview />} />
      <Route path='Release Container' element={<ReleaseConatiner />}>
        <Route path='' element={<Release />} />
        <Route path='Release Details' element={<ReleaseDetails />} />
        <Route path='Release Edit' element={<ReleaseEdit />} />
      </Route>

      <Route path='Requirenments' element={<Requirenments />} />
      <Route path='Test Cases' element={<TestCases />} />
      <Route path='Test Cycles' element={<TestCycles />} />
      <Route path='Bugs' element={<Bugs />} />
    </Route>

  </Route>
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
