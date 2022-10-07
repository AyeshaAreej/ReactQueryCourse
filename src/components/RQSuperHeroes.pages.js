import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSuperHeroes } from '../hooks/useSuperHeroes'



export const SuperHeroesPage=()=> {
  
// onSuccess and on Error function to preform side effects functions like navigation to another rout on success
const onSuccess=(data)=>{
  
  console.log("perform side-effect after data fetching",data)
}
const onError=(error)=>{
  console.log("perform side-effect after encountering error",error)

}
  
  const {isLoading,data, isError, error,isFetching, refetch } = useSuperHeroes(onSuccess, onError)
   
   console.log( isLoading,isFetching)
  if (isError){
    return <h2>{error.message}</h2>
  }

  if (isLoading || isFetching ){
    return <h2>Loading ...</h2>
  }


  return (
    <>
       <h2>Super Heroes Page</h2>
       { data?.data.map(hero=>{
       return(
        <div key={hero.id}>
        {hero.name}
        </div>
      )})}

      
     </>
   )
}
