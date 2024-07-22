import { useState } from 'react';
import HtmlDisplay from './html-display';

function App() {
  const [rawText, setRawText] = useState()
  const [userCss, setUserCss] = useState()


  const handleMarkdownSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())
    setRawText(formJson.markdown)
  }

  const handleCssSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())
    setUserCss(formJson.headerCss)
  }

  return (
    <>
      <style>
        {userCss}
      </style>
      <div className="App">
        <form onSubmit={handleMarkdownSubmit}>
          <textarea name="markdown" cols="40" rows="40"/>
          <button type="submit">Convert to HTML</button>
        </form>
        <form onSubmit={handleCssSubmit}>
          <textarea name="headerCss" cols="40" rows="40"/>
          <button type="submit">Apply Styling</button>
        </form>
        <HtmlDisplay textInput={rawText} />
      </div>
    </>

  );
}

export default App;
