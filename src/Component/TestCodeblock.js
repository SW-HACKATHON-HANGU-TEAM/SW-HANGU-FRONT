import React from 'react'
import ReactMarkdown from 'react-markdown'

const mdData = `
\`\`\`java
package com.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class PasswordTest {

    @Test
    @DisplayName("비밀번호가 올바른 패턴을 가지는지 테스트")
    public void testValidPattern() {
        // 유효한 비밀번호 패턴 테스트
        String validPassword = "Dkssudgktpdy1!";
        Password password = Password.from(validPassword);

        Assertions.assertEquals(validPassword, password.getPassword());
    }

    @Test
    @DisplayName("비밀번호가 null인 경우 예외가 발생하는지 테스트")
    public void testNullPassword() {
        // null 비밀번호 테스트
        Assertions.assertThrows(IllegalArgumentException.class, () -> {
            Password.from(null);
        });
    }

    @Test
    @DisplayName("비밀번호 길이가 최대 길이를 초과하는 경우 예외가 발생하는지 테스트")
    public void testExceedMaxLength() {
        // 최대 길이를 초과한 비밀번호 테스트
        String longPassword = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
        Assertions.assertThrows(IllegalArgumentException.class, () -> {
            Password.from(longPassword);
        });
    }

    @Test
    @DisplayName("올바른 패턴이 아닌 경우 예외가 발생하는지 테스트")
    public void testInvalidPattern() {
        // 올바르지 않은 패턴의 비밀번호 테스트
        String invalidPassword = "password";
        Assertions.assertThrows(IllegalArgumentException.class, () -> {
            Password.from(invalidPassword);
        });
    }
}
\`\`\`
`

const TestCodeblock = () => {
    return <div style={{color: 'white'}}>
        <ReactMarkdown children={mdData} />
    </div>
}

export default TestCodeblock



/*import React from 'react';
import styled from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";

function TestCodeblock() {

    return(
        <CodeBlock
            text='
            console.log("Hello, world!");
            sdf
            '
            language='javascript'
            showLineNumbers={true}
            theme={dracula}
        />
    )
}

export default TestCodeblock;*/