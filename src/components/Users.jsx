import React from 'react';
import { UserCard } from './UserCard';

import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const Users = ({users, showMore, showButton, loading}) => {
    return (
        <section className="users" id="users">
            <div className="container">
                <Grid container spacing={3} className="section">
                    <Grid item xs={12} sm={12} style={{paddingTop: "0px"}}>
                        <div className="section__header">
                            Our cheerful users
                        </div>
                        <div className="section__subheader">
                            Attention! Sorting users by registration date
                        </div>
                    </Grid>
                    
                    <div className="users__cards">
                        <Grid container spacing={3} style={{justifyContent: "center"}}>
                            {users.length !== 0 ? 
                                users.map(user => (
                                    <UserCard key={user.id} user={user} /> )) 
                            : <div className="users__loading">
                                <CircularProgress />
                            </div>}
                        </Grid>
                    </div>
                </Grid>

                <div className={showButton}>
                    <button onClick={showMore} className="users__button-more">
                        <CircularProgress
                            className={loading ? 'loading__show' : 'loading__none'}
                            color="inherit" 
                            size={15}
                        />
                        <span>Show more</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Users;