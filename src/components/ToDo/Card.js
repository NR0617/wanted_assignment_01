import {useState} from 'react'
import styled from "styled-components";
import Check from '../../assets/svg/Check';
import Circle from '../../assets/svg/Circle'
import ModalAlert from '../ModalAlert';
import Modal from '../Modal'
import { updateTodo,deleteTodo } from '../../api/todo';

const Card = ({ id, todo, isCompleted, userId,invalidate }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(0)
  const [editModalMessage, setEditModalMessage] = useState('')
  const [toDoContent, setToDoContent] = useState(todo)
  const [toDoIsCompleted, setToDoIsCompleted] = useState(isCompleted)

  const editToDo = (e) => {
    setToDoContent(e.target.value)
  }
  const handleUpdateTodo = async() => {
    await updateTodo(id, toDoContent, toDoIsCompleted, userId)
    invalidate()
    setIsEditMode(false)
    modalClose()
  }
  const handleDeleteTodo = async(id) => {
    await deleteTodo(id)
    invalidate()
    modalClose()
  }
  const handleComplete = () => {
    setToDoIsCompleted(!toDoIsCompleted)
  }

  const handleEditBtn = () => {
    setIsEditMode(true)
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsEditModalOpen(0)
    setIsModalOpen(false)
  }
  const handleEditModalOpen = (option, message) => {
    setEditModalMessage(message)
    setIsEditModalOpen(option)
  }
  const handleCancelEditMode = () => {
    setIsEditMode(false)
    setIsModalOpen(false)
    setToDoContent(todo)
    setToDoIsCompleted(isCompleted)
  }
  return (
    <Layout isCompleted={toDoIsCompleted} isEditMode={isEditMode}>
      <Mark>{toDoIsCompleted ? <Check /> : <Circle />}</Mark>
      <div className="content">{toDoContent}</div>
      <EventWrapper>
        {isEditMode ? (
          <>
            <Edit className="leftOne"  onClick={() => handleEditModalOpen(1, '제출하시겠습니까?')}>
              제출
            </Edit>
            <Edit onClick={handleCancelEditMode}>
              취소
            </Edit>
          </>
        ) : (
          <>
            <Edit className="leftOne" onClick={handleEditBtn}>
              수정
            </Edit>
            <Edit onClick={() => handleEditModalOpen(2,'정말 삭제하시겠습니까?')}>
              삭제
            </Edit>
          </>
        )}
        {isModalOpen && (
          <Modal
            modalClose={modalClose}
            todo={toDoContent}
            editToDo={editToDo}
            handleCancelEditMode={handleCancelEditMode}
            isCompleted={toDoIsCompleted}
            handleComplete={handleComplete}
          />
        )}
        {isEditModalOpen === 1 ? <ModalAlert leftBtnClick={()=>handleUpdateTodo()} leftBtnMessage='네'  rightBtnClick={modalClose} rightBtnMessage='아니오'>{editModalMessage}</ModalAlert> :<></>}
        {isEditModalOpen === 2? <ModalAlert  leftBtnClick={()=>handleDeleteTodo(id)}  leftBtnMessage='네' rightBtnClick={modalClose} rightBtnMessage='아니오'>{editModalMessage}</ModalAlert> :<></>}
      </EventWrapper>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: normal;
  width: 100%;
  margin: 2% 0;
  padding: 2%;
  background-color: ${(props) =>
    props.isCompleted
      ? props.isEditMode
        ? 'var(--color-yellow)'
        : 'var(--color-mauve)'
      : props.isEditMode
        ? 'var(--color-yellow)'
        : 'white'};
  border-radius: 2rem;
  transition: all ease 0.5s 0.5s;
  border: ${(props) => (props.isEditMode ? '3px solid var(--color-orange)' : 'none')};
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 400%;
    padding-left: 4%;
    white-space: nowrap;
  }
  @media screen and (max-width: 413px) {
    max-width: 38rem;
    font-size: 50%;
  }
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  font-size: 250%;
  white-space: nowrap;
`
const Edit = styled.div`
  min-width: 4.4rem;
  cursor: pointer;
  &.leftOne {
    margin-right: 10%;
  }
`
const Mark = styled.div`
  min-height: 5rem;
  min-width: 5rem;
`


export default Card