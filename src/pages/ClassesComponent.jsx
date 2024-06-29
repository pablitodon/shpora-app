    import React, { useState, useCallback } from 'react';

                const ComponentUseCallback = () => {
                    const [count, setCount] = useState(0);
                    
                    const  handleClick = useCallback(() => {
                        setCount((prevCount) => prevCount + 1)
                    },[count])

                    return (
                        <div>
                        <p>{count}</p>
                        <button onClick={handleClick}>+</button>
                        </div>
                    )
                }

                export default ComponentUseCallback;