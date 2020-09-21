import React, { useState } from 'react';
import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const Form = ({token, positions, modalOpen}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [positionID, setPositionID] = useState(1);
    const [file, setFile] = useState(null);
    const [error, setError] = useState([]);

    const onChange = (e) => {
        setFile(e.target.files[0]);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("position_id", positionID);

        file == null ? formData.append("photo", file) :
            formData.append("photo", file, file.name);

        axios
            .post(`${baseURL}/users`, formData, {headers: {token: token } })
            .then((res) => {
                modalOpen(true);
                setError([]);
                setName('');
                setEmail('');
                setPhone('');
                setPositionID(1);
                setFile(null);
            })
            .catch((err) => {
                setError(err.response.data.fails);
                console.log("Errors: ", err.response.data.fails);
            })
    }

    const handleOptionChange = (e) => {
        setPositionID(e.target.value);
        console.log(e.target.value);
    }

    return (
        <section className="form" id="form">
            <div className="container section">

                <div className="form__container">
                <div className="section__header">
                        Register to get a work
                    </div>

                    <div className="section__subheader">
                        Attention! After successful registration and alert, 
                        update the list of users in the block from the top
                    </div>

                    <div className="form__content">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    className={error.name ? "form-group__error" : ""}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <span className={error.name ? 'span__error' : 'span__none'}>
                                    {error.name}
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Your email"
                                    className={error.email ? "form-group__error" : ""}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <span className={error.name ? 'span__error' : 'span__none'}>
                                    {error.email}
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone number</label>
                                <input 
                                    type="text" 
                                    placeholder="+380 XX XXX XX XX"
                                    className={error.phone ? "form-group__error" : ""}
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <span className={error.name ? 'span__error' : 'span__default'}>
                                    {error.phone ? error.phone : 'Еnter phone number in open format'}
                                </span>
                            </div>

                            <div className="form-group__radio" >
                                <label className="radio__title">Select your position</label>
                                
                                {positions.map(item => (
                                    <div className="radio__item" key={item.id}>                  
                                        <input 
                                            id={item.id} 
                                            type="radio" 
                                            value={item.id} 
                                            name="position"
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor={item.id}>{item.name}</label>                   
                                    </div>
                                ))}

                            </div>

                            <div className="form-group__file">
                                <label>Photo</label>
                                <label htmlFor="file" className={error.phone ? "labelfile error" : "labelfile default"}>
                                    <span>Upload your photo</span>
                                    <strong>Browse</strong>
                                </label>
                                <input 
                                    type="file"
                                    id="file" 
                                    className="inputfile"
                                    onChange={e => onChange(e)}
                                />

                                <span 
                                    style={error.photo ? {display: "block"} : { display: "none"}}
                                    className="error__display"
                                >
                                    {error.photo}
                                </span> 
                            </div>

                            <div className="button-page text-center">
                                <button onClick={submitForm}>Sing up now</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Form;