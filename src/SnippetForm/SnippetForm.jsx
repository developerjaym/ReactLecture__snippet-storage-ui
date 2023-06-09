import "./SnippetForm.css"
export default function SnippetForm({onFormSubmitted}) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    fetch("http://localhost:3000/snippets",
          {
            method: "POST", 
           headers: {
             "accept": "application/json", 
             "Content-Type": "application/json"}, 
            body: JSON.stringify(formData)
          }
    ).then(response => response.json())
    .then(responseSnippetObject => onFormSubmitted(responseSnippetObject))
    
  }
  return (<form onSubmit={onSubmit} className="form">
          <label>
            Title
            <input name="title"/>
          </label>
          <label>
            Tags
            <input name="tags"/>
          </label>
          <label>
            Language
            <select name="language">
              <option>JavaScript</option>  
              <option>Python</option>  
              <option>HTML</option>  
              <option>CSS</option>  
            </select>
          </label>
          <label>
            Code
            <textarea name="code">
            </textarea>
          </label>
          <label>
            Explanation
            <textarea name="explanation">
            </textarea>
          </label>
          <button>Save</button>
        </form>)
}