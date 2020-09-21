import React from 'react';
import axios from 'axios';

/* Components */
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import Users from '../components/Users';
import Form from '../components/Form';
import { Footer } from '../components/Footer';
import { ModalWindow } from '../components/Modal';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const MainPage = () => {
    const [token, setToken] = React.useState('');
    const [users, setUsers] = React.useState([]);
    const [pageAPI, setPageAPI] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [positions, setPositions] = React.useState([]);
    const [loading, setLoading] = React.useState('');
    const [showButton, setShowButton] = React.useState('button-page text-center users__button');
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        getToken();
        getUsers();
        getPosition();
    }, []);

    const getToken = async () => {
        await axios.get(`${baseURL}/token`)
            .then((res) => {
                setToken(res.data.token);
            }
        )
    }

    const getUsers = async () => {
        await axios.get(`${baseURL}/users?page=${page}&count=${checkWidthScreen()}`)
            .then((res) => {
                setUsers(prevState => ([...prevState, ...res.data.users]));
                setPageAPI(res.data.total_pages);
                setPage(page + 1);
                setLoading('');
            }
        )
    }

    const getPosition = async () => {
        await axios.get(`${baseURL}/positions`)
            .then((res) => {
                setPositions(res.data.positions);
            }
        )
    }

    const checkWidthScreen = () => {
        if (window.screen.availWidth > 420) {
            return 6;
        } else {
            return 3;
        }
    }

    const showMore = async () => {
        setLoading('loader');
    
        if (page > pageAPI) {
          setShowButton('hide-button');
          setLoading('');
        } else {
          setPage(page + 1);
          getUsers();
        }
    }

    const updateUser = () => {
        axios.get(`${baseURL}/users?count=6`)
            .then((res) => {
                setUsers(res.data.users);
                setPageAPI(res.data.total_pages);
                setPage(page + 1);
                setOpen(false);
            }
        )
    }

    const handleOpen = () => {
        setOpen(true);
    };

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

            <ModalWindow 
                updateUser={updateUser} 
                open={open} 
            />
        </>
    )
}

export default MainPage;