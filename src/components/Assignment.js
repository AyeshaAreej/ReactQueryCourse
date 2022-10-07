import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHeroes = () =>{
  return axios.get('http://localhost:4000/superheroes')
}


export const Assignment=()=> {

  
  const[refetchInterval,setRefetchInterval] = useState(3000)
  
  
  // onSuccess and on Error function to preform side effects functions like navigation to another rout on success
const onSuccess=(data)=>{
  if(data.data.length===11){
  return setRefetchInterval(false)
  }
  else{
      return refetchInterval;
      }
  //console.log("perform side-effect after data fetching",data)
}
const onError=(error)=>{
  //console.log("perform side-effect after encountering error",error)
  if(error){
      return setRefetchInterval(false)
  }
}
  
  const {isLoading,data, isError, error,isFetching, refetch } = useQuery('super-heroes',
  fetchSuperHeroes,
  {
    cacheTime:5000,
    // to be save from too much queries when data is not rapidly changing so i
    // staleTime:3000
    // refetchOnMount:'always', //true or false or always
    // For making ui uptodate when users came to app tab
    // refetchOnWindowFocus:true //update data without refreshing
   
    // For polling values: true false or any number for time interval
      refetchInterval:refetchInterval,
    //  Continues to fetch data even when browser is not in focus
      // refetchIntervalInBackground:true,

      //Fetching data on onClick Step1 For restricting useQuery to fire on component mount
      //  enabled:false,
     
      onSuccess:onSuccess,
      // es6 shotrhand when key and value have same name
      onError,

  })
 
   
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
       {/* Step 2 of firing useQuery on button click */}
       {/* <button onClick={refetch}>Fetch Heroes</button> */}
       { data?.data.map(hero=>{
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
