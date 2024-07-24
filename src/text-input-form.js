import './text-input-form.css'

const TextInputForm = ({setTextInput, setPhoneOwner, setContactName}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        setTextInput(formJson.textInput)
        setContactName(formJson.contactName)
        setPhoneOwner(formJson.phoneOwner)
    }

    return (
        <form className='inputForm' onSubmit={handleSubmit}>
            <label>Phone Owner</label>
            <input name="phoneOwner" type="text"></input>

            <label>Contact Name</label>
            <input name="contactName" type="text"></input>

            <label>Text Messages</label>
            <textarea name="textInput" rows={10} cols={40}></textarea>
            <button type="submit">Set Up Text</button>
        </form>
    )
}

export default TextInputForm