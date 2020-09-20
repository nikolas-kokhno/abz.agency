import React from 'react';

/* Components */
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import Users from '../components/Users';
import Form from '../components/Form';
import { Footer } from '../components/Footer';

/* Modal Material UI */
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const MainPage = () => {
    const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
    const [token, setToken] = React.useState('');
    const [users, setUsers] = React.useState([]);
    const [pageAPI, setPageAPI] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [positions, setPositions] = React.useState([]);
    const [loading, setLoading] = React.useState('');
    const [showButton, setShowButton] = React.useState('button-page text-center users__button');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        fetch(`${baseURL}/token`)
            .then(res => res.json())
            .then(json => {
                setToken(json.token);
            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            })

        fetch(`${baseURL}/users?page=${page}&count=6`)
            .then(res => res.json())
            .then(json => {
                setUsers(json.users);
                setPageAPI(json.total_pages);
                setPage(page + 1);
            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            })

        fetch(`${baseURL}/positions`)
            .then(res => res.json())
            .then(json => {
                setPositions(json.positions);
            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            })
    }, []);

    const showMore = async () => {
        console.log(pageAPI + ' ' + page);
        setLoading('loader');
    
        if (page > pageAPI) {
          setShowButton('hide-button');
          setLoading('');
        } else {
          setPage(page + 1);
          await fetch(`${baseURL}/users?page=${page}&count=6`)
          .then(res => res.json())
          .then(json => {
            setUsers(prevState => ([...prevState, ...json.users]));
            setLoading('');
          })
          .catch(err => {
            console.error(err);
        })
        }
    }

    const updateUser = () => {
        fetch(`${baseURL}/users?count=6`)
            .then(res => res.json())
            .then(json => {
                setUsers(json.users);
                setPageAPI(json.total_pages);
                setPage(page + 1);
                setOpen(false);
            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            })
    }

    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Users 
                users={users} 
                loading={loading} 
                showMore={showMore} 
                showButton={showButton}
            />
            <Form 
                token={token} 
                positions={positions} 
                modalOpen={handleOpen}
            />
            <Footer />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={open}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className="modal__paper">
                    <div className="modal__header">
                        <h2 id="transition-modal-title">Congratulations</h2>
                        <span onClick={updateUser}>x</span>
                    </div>
                    <div className="modal__body">
                        You have successfully passed the registration
                    </div>
                    <div className="modal__footer">
                        <button 
                            className="modal__footer-btn" 
                            onClick={updateUser}
                        >
                            Great
                        </button>
                    </div>
                </div>
                </Fade>
            </Modal>
        </>
    )
}

export default MainPage;