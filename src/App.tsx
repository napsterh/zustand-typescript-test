import { useEffect } from 'react'
import { useCounterStore } from './store/counterStore'
import shallow from 'zustand/shallow';


function App() {

  const { title, count, posts } = useCounterStore((state) => ({
      count: state.count, 
      title: state.title,
      posts: state.posts
    }), shallow)

  const { increment,
          getPosts,
          decrement,
          clearStore,
          multiply
        } = useCounterStore()  

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <h1>{title}: {count}</h1>

      <button
        onClick={() => {
          increment(20)
        }}
      >
        Incrementar de 20
      </button>
      <button
        onClick={() => {
          decrement(10)
        }}
      >
        Decremntar de 10
      </button>
      <button
        onClick={() => {
          clearStore()
        }}
      >
        Limpiar
      </button>
      <button
        onClick={() => {
          multiply(2)
        }}
      >
        Multiplicador 
      </button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  )
}

export default App;