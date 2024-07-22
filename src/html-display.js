import showdown from 'showdown'

const customClassExt = () => {
    const extConfig = {
        type: 'output',
        filter: (text) => {
            // eslint-disable-next-line
            const re =  /\<p>;;;([^\[]+)\;;;(\(([^)]*))\)<\/p>/gim
            return text.replace(re, '<p class="$3">$1</p>')
        }
    }

    return [extConfig]
}

const htmlDisplay =  ({
    textInput
}) => {
    showdown.extension('customClassExt', customClassExt)

    const converter = new showdown.Converter({extensions: ['customClassExt']});
    const toHtml  = converter.makeHtml(textInput)
    console.log(toHtml)
    
    
    return(
        <>
            <div>{toHtml}</div>
            <div dangerouslySetInnerHTML={{__html: toHtml}} />
        </>
    )
}

export default htmlDisplay