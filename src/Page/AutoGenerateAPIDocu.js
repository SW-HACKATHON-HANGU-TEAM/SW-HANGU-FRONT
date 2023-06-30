import React from 'react';
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../font/Lora/font.css';

const Formdata = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const Title = styled.div`
    font-size: 50px;
`;
const Subtitle = styled.div`
    display: flex;
    font-size: 30px;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    line-height: 1.5;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
`;

const Input = styled.textarea`
    font-size: 30px;
    border: 3px solid black;
    width: 700px;
    height: 300px;
    border-radius: 15px;
`;

const SubmitButton = styled(Link)`
    font-size: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    border: 0px;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

function AutoGenerateAPIDocu() {
    return (
        <>
            <div style={{ height: '100px' }}></div>
            <Formdata action="#">
                <Title>Enter the Code</Title>
                <div style={{ height: '20px' }}></div>
                <Subtitle>If you enter the code,<br/>we will create a test code for you.</Subtitle>
                <div style={{ height: '20px' }}></div>
                <InputWrapper>
                    <Input type="textarea"/>
                    <Link to="/AutoGenerateAPIDocuState">
                    <SubmitButton to="/AutoGenerateAPIDocuState"><AiOutlineSearch /></SubmitButton>
                    </Link>
                </InputWrapper>
            </Formdata>
        </>
    );
}

export default AutoGenerateAPIDocu;
