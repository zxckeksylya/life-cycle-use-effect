import { useEffect, useState } from "react"

const LyfecycleFunctionComponent = () =>{
    const [count,setCount]= useState(0);

    const incrimentCount = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        fetch('https://todo-redev.herokuapp.com/api/users')
        .then((value)=>value.json())
        .then(value=>console.log(value))
        .catch(()=>console.log('произошла ошибка подключения'))

        console.log('Function: componentDidMount')
    },[])

    useEffect(()=>{
        
        console.log('Function: componentDidUpdate')
        console.log(`Function: counter : ${count}`)
        
    },[count])

    useEffect(()=>{
        return ()=> console.log('Function: componentWillUnmount')
    },[])

    return (<div>
        <div>функциональный компонент</div>
        <div>{count}</div>
        <button onClick={incrimentCount}>+</button>
    </div>)
}

export default LyfecycleFunctionComponent