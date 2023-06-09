import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'

export default function App() {
//showModal()
const [snippets, setSnippets] = useState([])

const onSnippetAdded = (snippetObj) => setSnippets([...snippets, snippetObj])

useEffect(()=> {
    const fetchSnippets = () => fetch("http://localhost:3000/snippets").then(response => response.json());
    async function startFetching() {
      const snippetData = await fetchSnippets()
      setSnippets(snippetData);
    } 
    
  startFetching();
}, [])
  const snippetElements = snippets.map(snippetObj => (
    <section key={snippetObj.id}>
      <header>
        <h2>{snippetObj.title}</h2>
      </header>
      <code>{snippetObj.code}</code>
      <p>{snippetObj.explanation}</p>
    </section>
  ) )

  return (
    <main>
      <Header onSnippetAdded={onSnippetAdded}/>
      <div className='snippet-list'>
        {snippetElements}
      </div>
    </main>
  )
}