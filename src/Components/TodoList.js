// 이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map 을 사용하여 
// 여러개의 TodoItem 컴포넌트를 렌더링해줍니다.
import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text='TodoTemplate 컴포넌트 생성하기' done={true} />
            <TodoItem text='TodoHead 컴포넌트 생성하기' done={true} />
            <TodoItem text='TodoList 컴포넌트 생성하기' done={true} />
            <TodoItem text='TodoItem 컴포넌트 생성하기' done={true} />
            <TodoItem text='TodoCreate 컴포넌트 생성하기' done={false} />
            <TodoItem text='font-family global 적용하기' done={false} />
        </TodoListBlock>
    )
}

export default TodoList