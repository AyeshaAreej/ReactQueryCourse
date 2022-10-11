import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends=()=>{
    return axios.get('http://localhost:4000/friends')
}

export const ParallerQueriesPage=()=> {


    // To be save from data redundancy in parallel queries uses name aliases
  const{data: superheroes } = useQuery('super-heoes',fetchSuperHeroes)
  const{data: friends } =  useQuery('freinds',fetchFriends)
 
  return (
    <>
       <h2>Parallel queries</h2>
     
     </>
   )
}