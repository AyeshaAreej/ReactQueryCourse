import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export default function RQSuperHero() {
    const {heroId}=useParams()
    const {isLoading, data, isError,error}= useSuperHeroData(heroId)
  
    if (isError){
        return <h2>{error.message}</h2>
      }
    
      if (isLoading  ){
        return <h2>Loading ...</h2>
      }

  return (<>
    <div>RQSuperHero</div>
    <div>{data?.data.name}-{data?.data.alterEgo}</div>
    </>)
}
