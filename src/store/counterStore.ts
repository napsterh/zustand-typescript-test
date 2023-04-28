import create from 'zustand';

interface Post {
   id: number,
   title: string,
   body: string
}

interface CounterState {
   count: number,
   title: string,
   posts: Post[]
   increment: ( value: number ) => void,
   decrement: ( value: number ) => void,
   getPosts: () => Promise<void> 
}

export const useCounterStore = create<CounterState>((set) => ({
   count: 10,
   title: 'Some title',
   posts: [],
   increment: ( value: number ) => set(state => ({
      count: state.count + value
   })),
   decrement: ( value: number ) => set(state => ({
      count: state.count - value
   })),
   getPosts: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      set(state => ({
         ...state,
         posts
      }))
   }
}))