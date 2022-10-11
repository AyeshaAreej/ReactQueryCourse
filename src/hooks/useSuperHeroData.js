import {useQuery,} from 'react-query'
import axios from 'axios'


  const fetchSuperHero= ({ queryKey })=>{
    // querykey array mimics the array we passed into useQuery
     const heroId = queryKey[1]
      return axios.get(`http://localhost:4000/superheroes/${heroId}`)         //simple
    
  }

export const useSuperHeroData = (heroId) => {
    return useQuery(  ['super-hero',heroId],fetchSuperHero )
}




