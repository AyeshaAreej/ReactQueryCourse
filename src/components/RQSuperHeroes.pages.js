import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHeroes = () =>{
  return axios.get('http://localhost:4000/superheroes')
}
export const SuperHeroesPage=()=> {

  const {isLoading,data, isError, error,isFetching } = useQuery('super-heroes',
  fetchSuperHeroes,
  {
    cacheTime:5000,
    // to be save from too much queries when data is not rapidly changing so i
    // staleTime:3000
    refetchOnMount:'always', //true or false or always
    // For making ui uptodate when users came to app tab
    refetchOnWindowFocus:true //update data without refreshing
  }

  
  )
 
   
   console.log( isLoading,isFetching)
  if (isError){
    return <h2>{error.message}</h2>
  }

  if (isLoading){
    return <h2>Loading ...</h2>
  }


  return (
    <>
       <h2>Super Heroes Page</h2>
       {
    data?.data.map(hero=>{
      return(
        <div key={hero.id}>
        {hero.name}
        </div>
      )
    })

   }
     </>
   )
}
