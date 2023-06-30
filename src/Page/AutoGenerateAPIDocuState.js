import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../font/Lora/font.css';

const mdData = 
`## API 문서 - 알림 목록 조회
### Description
- 알림 목록을 조회하는 API입니다.
### Request
- Method: GET
- URL: /api/notification/list
- Parameters:
    - next: 다음 페이지를 위한 커서 값 (optional)
    - size: 페이지당 알림 개수 (optional)
### Response
- Content Type: application/json
- Body:
    - success: API 실행 결과 (boolean)
    - message: 결과 메시지 (string)
    - data: 알림 목록 (array)
        - id: 알림 ID (number)
        - title: 알림 제목 (string)
        - url: 알림 URL (string)
### Example
#### Request
GET /api/notification/list?next=0&size=10
#### Response
`;

const mdData2 =`
\`\`\`json
{
    "success": true,
    "message": "알림 목록을 성공적으로 조회하였습니다.",
    "data": [
        {
            "id": 1,
            "title": "새로운 알림",
            "url": "https://example.com"
        },
        {
            "id": 2,
            "title": "중요한 알림",
            "url": "https://example.com"
        }
    ]
}
\`\`\` 
`;
const Button = styled.button`
  border: 0;
  background-color: ${props => (props.showChildren ? '#E2E2E2' : 'white')};
  margin-left: ${props => (props.indent ? '20px' : '0')};
  font-size: 15px;
  cursor: pointer;
`;

const DivLeft = styled.div`
  float: left;
  width: 10%;
  height: 663px;
  margin-left: 50px;
`;

const DivRight = styled.div`
  float: right;
  width: 50%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
  margin-right: 200px;
  
`;

function AutoGenerateAPIDocuState() {
  const [showChildrenParent, setShowChildrenParent] = useState(false);
  const [showChildrenChild, setShowChildrenChild] = useState(false);

  function toggleChildrenParent() {
    setShowChildrenParent(!showChildrenParent);
    setShowChildrenChild(false); // Reset child state when parent is toggled
  }

  return (
    <>
      <DivLeft>
        <Button
          showChildren={showChildrenParent}
          onClick={toggleChildrenParent}
          style={{ marginTop: '30px', fontSize: '20px' }}
        >
          주문 도메인
        </Button>
        {showChildrenParent && (
          <div style={{ marginLeft: '20px', whiteSpace: 'nowrap' }}>
            <DivLeft>
              <Button
                showChildren={showChildrenChild}
                onClick={() => setShowChildrenChild(!showChildrenChild)}
                indent
                showChildrenParent={showChildrenParent} // Pass parent state to child button
              >
                배송 API Docs
              </Button>
              {showChildrenChild && (
                <div style={{ marginLeft: '20px' }}>
                  
                </div>
              )}
            </DivLeft>
          </div>
        )}
      </DivLeft>
      {showChildrenChild && (
        <DivRight>
          {mdData.split('\n').map((line, index) => (
            <ReactMarkdown key={index} style={{ display: 'block', marginBottom: '10px' }}>
              {line}
            </ReactMarkdown>
          ))}
          <span style={{backgroundColor: "#FFFFF0"}}>
          {mdData2.split('\n').map((line, index) => (
            <ReactMarkdown key={index} style={{ display: 'block', marginBottom: '10px' }}>
              {line}
            </ReactMarkdown>
          ))}
          </span>
        </DivRight>
      )}
    </>
  );
}

export default AutoGenerateAPIDocuState;
