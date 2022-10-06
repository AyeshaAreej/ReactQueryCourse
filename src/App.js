import { BrowserRouter as Router,  Route ,Link, Routes } from 'react-router-dom';
import './App.css'
import {HomePage} from './components/Home.page'
import {SuperHeroesPage} from './components/RQSuperHeroes.pages'
import { QueryClientProvider,QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient=new QueryClient() 

function App() {
  return (
   <QueryClientProvider client={queryClient}>
   <Router>
     <nav>
         <ul> 
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/super-heroes'>React Query Heroes</Link></li>
         </ul>
       </nav>

     <Routes>
     <Route path="/" element={<HomePage />}/>
     <Route path="super-heroes" element={<SuperHeroesPage />} />
      
       </Routes>

   </Router>  
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>   
  
  

  );
}

export default App;





