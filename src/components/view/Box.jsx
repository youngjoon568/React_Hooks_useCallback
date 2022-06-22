import React, { useEffect, useState } from 'react';

export default function Box({ createBoxStyle }) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log("박스 스타일 변경되었음");
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return (
        <div style={style}></div>
    );
};