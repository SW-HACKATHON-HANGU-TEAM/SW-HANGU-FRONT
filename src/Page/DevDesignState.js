import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import ERDImage from './ERD.png';
import ProcessSequenceImage from './squ.png';

function DevDesignState() {
  const DivLeft = styled.div`
    float: left;
    width: 30%;
    height: 663px;
    margin-left: 20px;
  `;

  const DivRight = styled.div`
    float: right;
    width: 60%;
    height: 663px;
  `;

  const Ul = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    color: rgb(0, 0, 100);
  `;

  const FIsrtLi = styled.li`
    list-style-type: none;
    padding-left: 0px;
    color: rgb(0, 0, 100);
    margin-top: 50px;
    font-size: 25px;
    margin-bottom: 50px;
    cursor: pointer;
  `;

  const Li = styled.li`
    list-style-type: none;
    padding-left: 0px;
    color: rgb(0, 0, 100);
    font-size: 25px;
    margin-bottom: 50px;
    white-space: nowrap;
    cursor: pointer;
  `;

  const LiSequence = styled.li`
    list-style-type: none;
    padding-left: 0px;
    color: rgb(0, 0, 100);
    font-size: 25px;
    margin-bottom: 50px;
    white-space: nowrap;
    cursor: pointer;
  `;

  const [showERD, setShowERD] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [showProcessSequence, setShowProcessSequence] = useState(false);

  const handleClickERD = () => {
    setShowERD(true);
    setShowDescription(false);
    setShowProcess(false);
    setShowProcessSequence(false);
  };

  const handleClickDescription = () => {
    setShowERD(false);
    setShowDescription(true);
    setShowProcess(false);
    setShowProcessSequence(false);
  };

  const handleClickProcess = () => {
    setShowERD(false);
    setShowDescription(false);
    setShowProcess(true);
    setShowProcessSequence(false);
  };

  const handleClickProcessSequence = () => {
    setShowERD(false);
    setShowDescription(false);
    setShowProcess(false);
    setShowProcessSequence(true);
  };

  const markdownText = `
## 일기예보 어플리케이션 제작 프로젝트의 개발 과정은 다음과 같이 진행됩니다:

1. **요구사항 분석:** 사용자의 요구사항을 분석하여 기능과 특징을 도출합니다.

2. **디자인:** 데이터베이스 스키마와 시스템 아키텍처를 설계합니다. 사용자 인터페이스(UI)와 백엔드 로직의 상세 디자인을 수립합니다.

3. **백엔드 개발:** 데이터베이스와의 연동을 위한 백엔드 서비스를 개발합니다. 사용자 등록, 날씨 알림 설정, 날씨 예보 데이터 처리 등의 기능을 구현합니다.

4. **프론트엔드 개발:** 사용자에게 날씨 정보와 알림을 시각적으로 제공하는 프론트엔드 UI를 개발합니다. 위치 검색, 날씨 예보 표시, 알림 설정 등의 기능을 구현합니다.

5. **테스트:** 개발된 시스템을 테스트하여 버그를 찾고 수정합니다. 유닛 테스트, 통합 테스트, 성능 테스트 등을 수행하여 안정적인 동작을 확인합니다.

6. **배포:** 완성된 어플리케이션을 서버에 배포하고, 사용자가 실제로 사용할 수 있도록 배포 환경을 구성합니다.

7. **유지보수:** 사용자의 피드백을 수렴하고, 버그 수정 및 기능 개선을 위한 유지보수 작업을 수행합니다. 새로운 요구사항에 대한 개발과 업데이트를 진행합니다.
`;

  return (
    <>
      <DivLeft>
        <Ul>
          <FIsrtLi onClick={handleClickERD}>ERD</FIsrtLi>
          <Li onClick={handleClickDescription}>Database Description</Li>
          <Li onClick={handleClickProcess}>Development Process</Li>
          <LiSequence onClick={handleClickProcessSequence}>Process Sequence</LiSequence>
        </Ul>
      </DivLeft>

      <DivRight>
        {showERD && <img src={ERDImage} alt="ERD" style={{ width: '100%', height: 'auto' }} />}
        {showDescription && <ReactMarkdown>{markdownText}</ReactMarkdown>}
        {showProcess && (
          <div>
            <h2>개발 과정</h2>
            <ol>
              <li>요구사항 분석: 사용자의 요구사항을 분석하여 기능과 특징을 도출합니다.</li><br/>
              <li>디자인: 데이터베이스 스키마와 시스템 아키텍처를 설계합니다. 사용자 인터페이스(UI)와 백엔드 로직의 상세 디자인을 수립합니다.</li><br/>
              <li>백엔드 개발: 데이터베이스와의 연동을 위한 백엔드 서비스를 개발합니다. 사용자 등록, 날씨 알림 설정, 날씨 예보 데이터 처리 등의 기능을 구현합니다.</li><br/>
              <li>프론트엔드 개발: 사용자에게 날씨 정보와 알림을 시각적으로 제공하는 프론트엔드 UI를 개발합니다. 위치 검색, 날씨 예보 표시, 알림 설정 등의 기능을 구현합니다.</li><br/>
              <li>테스트: 개발된 시스템을 테스트하여 버그를 찾고 수정합니다. 유닛 테스트, 통합 테스트, 성능 테스트 등을 수행하여 안정적인 동작을 확인합니다.</li><br/>
              <li>배포: 완성된 어플리케이션을 서버에 배포하고, 사용자가 실제로 사용할 수 있도록 배포 환경을 구성합니다.</li><br/>
              <li>유지보수: 사용자의 피드백을 수렴하고, 버그 수정 및 기능 개선을 위한 유지보수 작업을 수행합니다. 새로운 요구사항에 대한 개발과 업데이트를 진행합니다.</li><br/>
            </ol>
          </div>
        )}
        {showProcessSequence && <img src={ProcessSequenceImage} alt="Process Sequence" style={{ width: '100%', height: 'auto' }} />}
      </DivRight>
    </>
  );
}

export default DevDesignState;
