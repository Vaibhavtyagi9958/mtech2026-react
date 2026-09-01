 import react, {useState} from 'react';
 function C2f(){
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Count1: {count}</p>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default C2f