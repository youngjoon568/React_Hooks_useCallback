import React, { useCallback, useEffect, useState } from 'react';


export default function UpCount() {
    const [num, setNum] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunc = useCallback(() => {
        console.log(`someFunc: num: ${num}`);
        return;
    }, [num]);

    useEffect(() => {
        console.log("someFunc 함수가 변경되었음");
    }, [someFunc]);

    return (
        <div>
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={() => setToggle(!toggle)}>{ toggle.toString() }</button>
            <br />
            <button onClick={someFunc}>Call someFunc</button>
        </div>
    );
};