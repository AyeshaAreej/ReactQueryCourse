import { BrowserRouter as Router,  Route ,Link, Routes } from 'react-router-dom';
import './App.css'
import {HomePage} from './components/Home.page'
import {SuperHeroesPage} from './components/RQSuperHeroes.pages'


function App() {
  return (
   
   <Router>
     <nav>
         <ul> 
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/rq-super-heroes'>React Query Heroes</Link></li>
         </ul>
       </nav>

     <Routes>
       <Route path='/rq-super-heroes' element={<SuperHeroesPage/>} />
       <Route path='/' element={ <HomePage/> }/>
       </Routes>

   </Router>  
  );
}

export default App;





