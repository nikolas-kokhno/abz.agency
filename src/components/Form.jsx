import React from 'react';

const Form = () => {
    const [token, getToken] =  React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [file, setFile] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addUser(name, email, phone, file);
    }

    const addUser = async (name, email, phone, file) => {
        const fb = new FormData();
        fb.append('image', file, file.name);

        await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            headers: {
                'token': token
            },
            body: {
                name: name,
                email: email,
                phone: phone,
                position_id: 1,
                file: fb

            }
        })
    }

    return (
        <section className="form">
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    className="form-group__error"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <span>error</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input 
                                    type="text" 
                                    placeholder="Your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <span>error</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone number</label>
                                <input 
                                    type="text" 
                                    placeholder="+380 XX XXX XX XX"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <span>error</span>
                            </div>

                            <div className="form-group__radio">
                                <label className="radio__title">Select your position</label>

                                <div className="radio__item">                  
                                    <input id="front" type="radio" value="front" name="position"/>
                                    <label htmlFor="front">Frontend developer</label>                   
                                </div>
                                
                                <div className="radio__item">                  
                                    <input id="back"type="radio" value="back" name="position"/>
                                    <label htmlFor="back">Backend developer</label>                   
                                </div>

                                <div className="radio__item">                  
                                    <input id="designer"type="radio" value="designer" name="position"/>
                                    <label htmlFor="designer">Designer</label>                   
                                </div>

                                <div className="radio__item">                  
                                    <input id="qa"type="radio" value="qa" name="position"/>
                                    <label htmlFor="qa">QA</label>                   
                                </div>
                            </div>

                            <div className="form-group__file">
                                <label>Photo</label>
                                <label htmlFor="file" className="labelfile">
                                    <span>Upload your photo</span>
                                    <strong>Browse</strong>
                                </label>
                                <input 
                                    type="file" 
                                    name="file" 
                                    id="file" 
                                    className="inputfile"
                                    value={file}
                                    onChange={e => setFile(e.target.value)}
                                />
                            </div>

                            <div className="button-page text-center">
                                <button>Sing up now</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Form;