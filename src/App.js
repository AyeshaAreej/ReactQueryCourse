import { BrowserRouter as Router,  Route ,Link, Routes } from 'react-router-dom';
import './App.css'
import {HomePage} from './components/Home.page'
import {SuperHeroesPage} from './components/RQSuperHeroes.pages'
import { QueryClientProvider,QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import RQSuperHero from './components/RQSuperHero.page';
import { ParallerQueriesPage } from './components/ParallerQueries.page';
import { DynamicParallelPage } from './components/DynamicParallelQuery.page';
import { DependentQueriesPage } from './components/DependentQueries.page';

const queryClient=new QueryClient() 

function App() {
  return (
   <QueryClientProvider client={queryClient}>
   <Router>
     <nav>
         <ul> 
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/super-heroes'>React Query Heroes</Link></li>
            <li> <Link to='/rq-parallel'>Paraller Query</Link></li>
            <li> <Link to='/rq-dynamic-parallel'>Dynamic Paraller Query</Link></li>
         </ul>
       </nav>

     <Routes>
     <Route path="/" element={<HomePage />}/>
     <Route path="super-heroes" element={<SuperHeroesPage />} />
     <Route path="assignment" element={<SuperHeroesPage />} />
     <Route path="super-heroes/:heroId" element={<RQSuperHero />} />
     <Route path="/rq-parallel" element={ <ParallerQueriesPage/> } />
     <Route path="/rq-dynamic-parallel" element={ <DynamicParallelPage heroIds={[1,3,5]}/> } />
     <Route path="/rq-dependent" element={ <DependentQueriesPage  email="ayesha@gmail.com"/> } />
   
     </Routes>

   </Router>  
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>   
  
  

  );
}

export default App;





