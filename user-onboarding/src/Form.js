import React from 'react'

export default function Form(props) {
    const { values, update, submit, errors } = props

    const onChange = evt => {
        const {name, value, type, checked } = evt. target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }



const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

return (
    <div className="Form Container">
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="enter your name here"
                    maxLength="40"
                    onChange={onChange}
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='enter your email here'
                    maxLength='40'
                    onChange={onChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={values.password}
                    placeholder="enter your password here"
                    maxLength="40"
                    onChange={onChange}
                />
            </label>
            <label>
                Terms of Service
                <input
                    type="checkbox"
                    name="ToS"
                    checked={values.ToS}
                    onChange={onChange}
                />
            </label>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            <div className="submit button">
                <button disabled={!values.name || !values.email || !values.password || !values.ToS}>submit</button>
            </div>
        </form>
    </div>
)
}