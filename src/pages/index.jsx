import React from 'react';

import { getToken } from '../api/getToken';
/* Components */
import { Banner } from '../components/Banner';
import { About } from '../components/About';
import Users from '../components/Users';
import Form from '../components/Form';
import { Footer } from '../components/Footer';

const MainPage = () => {
    const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
    const [token, setToken] = React.useState('');
    const [users, setUsers] = React.useState([]);
    const [pageAPI, setPageAPI] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState('');

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
    }, []);

    const showMore = async () => {
        console.log(pageAPI + ' ' + page);
        setLoading('loader');
    
        if (page > pageAPI) {
          console.log('the end');
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

    return (
        <>
            <Banner />
            <About />
            <Users 
                users={users} 
                loading={loading} 
                showMore={showMore} 
            />
            <Form />
            <Footer />
        </>
    )
}

export default MainPage;