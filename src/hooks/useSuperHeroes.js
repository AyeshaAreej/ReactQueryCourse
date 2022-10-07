import {useQuery, useMutation, useQueryClient} from 'react-query'
import axios from 'axios'


  const fetchSuperHeroes = ()=>{
      return axios.get('http://localhost:4000/superheroes')         //simple
    
  }

export const useSuperHeroes = (onSuccess,onError) => {
    return useQuery(
        'super-heroes',
         fetchSuperHeroes,
         {
          onSuccess,
          onError,
    
        }
         )
}




