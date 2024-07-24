import { useEffect, useState } from 'react';
import TextInputForm from './text-input-form';
import ProcessedTextVisuals from './processed-text-visuals';
import './main-app.css';
import exampleImg from './example.png'

function App() {
  const [phoneOwner, setPhoneOwner] = useState('');
  const [textInput, setTextInput] = useState('');
  const [contactName, setContactName] = useState('');

  
  useEffect(() => {
    console.log(phoneOwner, textInput)
  }, [phoneOwner, textInput])

  return(
    <>
      <div className='instructions'>
        <h1>A03 iOS Text Message workskin generator</h1>
        <p>
          This tool is based on selfishlaundry's excellent 
          <a href="https://archiveofourown.org/works/18844690"> iOS workskin tutorial </a>
          <br />
          I did <em>not</em> talk to them about using their tutorial yet.
        </p>
        <p>
          This currently support just texting on iOS with one person and every message will have a tail
        </p>

        <h2>How to use this</h2>
        <ol>
          <li>Create a workskin using the beginning of 
            <a href="https://archiveofourown.org/works/18844690"> selfishlaundry's instructions </a>
            but, paste in <a href="https://archiveofourown.org/works/57623512"> this css </a> instead. 
            It fixes a minor bug that was making the first message overlap into the header
          </li>
          <li>Set the phone owner's name, and the contact name</li>
          <li>Type the text message in this format 
            <br /> Phone Owner: Hello 
            <br /> Contact: World
          </li>
          <li>Review the preview at the bottom</li>
          <li>Copy the generated html code into your Ao3 editor. 
            <b><em> Make sure you enabled your workskin </em></b>
          </li>
        </ol>

        <h2>Example</h2>
        <img src={exampleImg} alt='an example of what the form looks like when it is filled out' />
      </div>

      <div className='appSource'>
        <div className='mainContainer'>
          <h1>Actual html generator</h1>

          <TextInputForm 
            setTextInput={setTextInput}
            setPhoneOwner={setPhoneOwner}
            setContactName={setContactName}/>
          <ProcessedTextVisuals 
            phoneOwner={phoneOwner}
            textInput={textInput}
            contactName={contactName}
          />
        </div>

      </div>
    </>
  )
  
}

export default App;
