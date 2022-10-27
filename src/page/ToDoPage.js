import { useState } from 'react'
import styled from 'styled-components'
import Layout from "../components/Layout"
import ToDoForm from '../components/ToDo/ToDoForm'
import Filter from '../components/ToDo/Filter'
import { useToDoList } from '../hooks/useToDoList'
import Card from '../components/ToDo/Card'
import ModalAlert from '../components/ModalAlert'

const ToDoPage = () => {
  let [todoList, invalidate] = useToDoList()
  const [isModalOpen, setIsModalOpen] = useState(0)
  const [modalMessage, setModalMessage] = useState('')

  const handleModalOpen = (option, message) => {
    setModalMessage(message)
    setIsModalOpen(option)
  }
  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  }
  const handleModalClose = () => {
    setIsModalOpen(0)
  }

  return(
    <Layout>
      <Container>
        <Wrapper>
        <h1>To Do List</h1>
        <LogOut>
              <span className='btnName'  onClick={() => handleModalOpen(1, '로그아웃 하시겠습니까?')}>로그아웃</span>
            </LogOut>
        </Wrapper>
        <ToDoForm invalidate={invalidate}/>
        <Filter />
        {todoList?.map((todo)=>(
          <Card key = {todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} invalidate={invalidate}/>
        ))}
      </Container>
      {isModalOpen === 1 ? <ModalAlert leftBtnClick={handleLogOut} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert> : <></>}
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  @media screen and (max-width: 413px) {
    width: 80%;
  }
`
const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 500%;
  padding-top: 1rem;
  text-align: center;
  margin: 4% 0;
`
const LogOut = styled.div`
  text-align: end;
  .btnName {
    cursor: pointer;
    font-size: 25%;
    background-color: var(--color-blue );
    border-radius: 1rem;
    margin-left: auto;
    padding:1rem ;
    color: var(--color-white);
  }
`


export default ToDoPage