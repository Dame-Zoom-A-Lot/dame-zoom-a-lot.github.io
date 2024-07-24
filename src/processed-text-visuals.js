import { useEffect, useState } from "react"
import './ios-workskin.css'

const ProcessedTextVisuals = ({textInput, phoneOwner, contactName}) => {
    const [textStrings, setTextStrings] = useState('')

    const generateRawHtml = (line) => {
        const parsedLine = line.split(':')
        const person = parsedLine[0]
        if (person) return (
            `<span class=${person === phoneOwner ? 'blueTextTail' : 'greyTextTail'}><span class="hide"><b>${person}:</b></span>${parsedLine[1].trim()}</span>`
        )
    }

    useEffect(() => {
        const separatedByLine = textInput.split('\n')
        const generatedHtml = separatedByLine.map((line) => generateRawHtml(line))
        setTextStrings(generatedHtml.filter(l => l).join('\n <br />'))
    }, [textInput])


    const rawHtml = `
    <div class="phone">
        <p class="body">
        <span class="header">${contactName !== '' ? contactName : 'Placeholder Contact Name'}</span>
        <br />
        ${textStrings}
        </p>
    </div>
    `


    return (
        <>
            <div>
                <p>The below is the generated html code. Paste this into your Ao3 editor</p>
                <div className='htmlDisplay' style={{
                    'white-space': 'preserve-break', 
                    border: 'solid black'
                }}>{rawHtml}</div>
            </div>
            <div dangerouslySetInnerHTML={{__html: rawHtml}}/>
        </>

    )
}

export default ProcessedTextVisuals