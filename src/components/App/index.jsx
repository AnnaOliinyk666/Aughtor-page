import Nav from "../Nav";
import { Routes,Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AuthorPage from "../../pages/AuthorPage";
import CompaniesPage from "../../pages/CompaniesPage";
import ArticlesPage from "../../pages/ArticlesPage";
import './index.css';
import Footer from "../Footer";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aughtor" element={<AuthorPage/>}/>
        <Route path="/companies" element={<CompaniesPage/>}/>
        <Route path="/articles" element={<ArticlesPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
