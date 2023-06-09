import {useRef} from "react";
import SnippetForm from "./SnippetForm/SnippetForm"
export default function Header({onSnippetAdded}) {

  const dialogRef = useRef(null);
  
  const onAddButtonPressed = () => {
    console.log("on add button pressed")
    dialogRef.current.showModal();
  }
  const onSnippetFormSubmitted = (newSnippetObject) => {
    dialogRef.current.close();
    onSnippetAdded(newSnippetObject)
  }
  return (<header>
        <h1>📥 Snippet Storage</h1>
        <div>
          <label>
            🔎 
            <input type="search"/>
          </label>
          <button onClick={onAddButtonPressed}>+Add</button>
        </div>
    
    <dialog ref={dialogRef}>
        <SnippetForm onFormSubmitted={onSnippetFormSubmitted}/>
      </dialog>
      </header>)
}