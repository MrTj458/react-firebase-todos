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
      {todos.map(todo => {
        return (
          <div className="todo-card" key={todo.id}>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>X</button>
            <br/>
            <p>{todo.text}</p>
          </div>
        )
      })}
    </>
  )
}

export default NoteList
