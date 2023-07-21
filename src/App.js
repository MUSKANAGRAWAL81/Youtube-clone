import { BrowserRouter , Route, Routes } from "react-router-dom";
import Header from "./Header";
import './App.css';

import RecommadatedVedio from "./RecommadatedVedio";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element = {
           <div className="app_page">
           <Sidebar />
           <SearchPage />
         </div>
        } />
        
          
          <Route path="/"  element ={
           
               <div className="app_page">
              <Sidebar /> 
              <RecommadatedVedio  />
              </div>
         
          } />
         
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes> 
    //       <Route exact path="/" element = { <Header />} /> 
    //       <Route path="/search" element= {<h1> search page</h1>} />

        
         
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
