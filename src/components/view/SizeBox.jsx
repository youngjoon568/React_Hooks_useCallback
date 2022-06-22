import React, { useCallback, useState } from 'react';
import Box from './Box';

export default function SizeBox() {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: "cornflowerblue",
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);

    return (
        <div style={{ backgroundColor: isDark ? "#000" : "#fff" }}>
            <input type="number" value={size} onChange={e => setSize(e.target.value)} />
            <button onClick={() => setIsDark(!isDark)}>Dark Mode</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    );
};