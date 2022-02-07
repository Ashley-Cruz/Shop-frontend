import { useState } from "react"

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter(initialState);
    }

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(prev => Math.max(prev - 1, initialState));
    }

    return {
        counter,
        increment,
        decrement
    };
}
