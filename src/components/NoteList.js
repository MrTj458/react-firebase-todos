import React, { useEffect, useState } from 'react'
import firebase from '../utils/firebase'

const NoteList = ({ user }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (user.uid) {
      firebase.firestore().collection('todos').where('uid', '==', user.uid).onSnapshot(snapshot => {
        const newTodos = snapshot.docs.map(todo => {
          return {
            id: todo.id,
            ...todo.data()
          }
        })
        setTodos(newTodos)
      })
    }
  }, [user])

  const deleteTodo = (id) => {
    firebase.firestore().collection('todos').doc(id).delete()
  }

  return (
    <>
      <h2>Todos:</h2>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NoteList
