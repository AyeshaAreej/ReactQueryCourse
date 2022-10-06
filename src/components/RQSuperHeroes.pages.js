import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes=()=>{
  return axios.get('http://localhost:4000/superheroes')
}

export const SuperHeroesPage=()=> {

   const { isLoading,data, isError, error } =useQuery(
    'super-heroes',
    fetchSuperHeroes
    )
   
  if (isError){
    return <h2>{error.message}</h2>
  }

  if (isLoading){
    return <h2>Loading ...</h2>
  }


  return (
    <>
       <h2>Super Heroes Page</h2>
      
     </>
   )
}
