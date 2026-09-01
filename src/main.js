import{useEsffect, useState} from 'react';

const main = () => {
    count [count,setCount] = useState(0);
    const [age,setAge] = useState(18);
    const [resdata, setResdata] = useState({});

    
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/todos/1")
        .then(res =>res.json())
        .then(data=>setResdata(data))
        .catch(err=>console.log(err));

        console.log("Use Effect")
    },[age])
    return(
        <div>
            <h1>Example of useEffect</h1>
            <h3>Countvalue is {count}</h3>
            <button onClick= {()=>setCount(count +1)}> Add </button>
            <h3>Age value is {age}</h3>
            <button onClick= {()=>setSelectionRange(age + 1)}> Add Age </button>

            <table border= '1'>
                <thead>
                    <tr>
                        <th>Use ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                    <tr>
                        <td>{resdata.useId}</td>
                        <td>{resdata.title}</td>
                        <td>{resdata.completed ? 'true': 'false'}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default main;