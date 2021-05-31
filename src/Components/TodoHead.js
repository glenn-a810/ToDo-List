// 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.
import React from 'react'
import styled from 'styled-components'

const TodoheadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    font-family: sans-serif;

    h1 {
        margin: 0;
        font-weight: 700;
        font-size: 32px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-weight: 700;
        font-size: 20px;
    }

    .task-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: 700;
    }
`

const today = new Date().toDateString()
console.log(today)

function TodoHead() {
    return(
        <TodoheadBlock>
            <h1>{today}</h1>
            <div className='day'>화요일</div>
            <div className='task-left'>할 일 2개 남음</div>
        </TodoheadBlock>
    )
}

export default TodoHead