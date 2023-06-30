import React from 'react';
import styled from "styled-components";
import TestCodeblock from "../Component/TestCodeblock"
import '../font/Lora/font.css';

function TestCode() {

    const Container = styled.div`
        
    `
    const DivLeft = styled.div`
        float: left;
        width: 25%;
        height: 1000px;
        margin-left: 20px;
    `;

    const DivRight = styled.div`
        float: right;
        width: 50%;
        height: 1000px;
        background-color: #292A35;
        border: 1px solid black;
        margin-right: 400px;
    `;

    return(
        <>
            
            <DivRight>
                <TestCodeblock/>
            </DivRight>
        </>
    )
}

export default TestCode;