import React, {useState} from 'react';

type Props = {
    addMessage: Function
}

export const Form = (props: Props) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        props.addMessage({subject: subject, body: body, read: false});
        setSubject('');
        setBody('');
    };

    return (
        <>
            <div className='formContainer'>
                <h1>New Message</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject || ''}
                    />
                    <textarea
                        name="body"
                        onChange={(e) => setBody(e.target.value)}
                        value={body || ''}
                    />
                    <button className='submit-btn' disabled={!(subject && body)}>Submit</button>
                </form>
            </div>
        </>
    )
};
