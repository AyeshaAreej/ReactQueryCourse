import React from 'react'
// For dynamic parallel queries
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero= (heroId)=>{
  
      return axios.get(`http://localhost:4000/superheroes/${heroId}`)         //simple
    
  }

export const DynamicParallelPage=({heroIds})=> {
    // It returns array of query results
   const queryResults= useQueries(
        heroIds.map(id=>{
            return{
                queryKey:['super-hero',id],
                queryFn:()=>fetchSuperHero(id)
            }
            })
    )
    console.log({queryResults})
  return (
    <div>
      
    </div>
  )
}
