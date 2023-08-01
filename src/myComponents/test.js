import React, {useEffect} from 'react'

const test = () => {
    const getData = ()=>{
        fetch('../Data/data.json',{headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>test</div>
  )
}

export default test