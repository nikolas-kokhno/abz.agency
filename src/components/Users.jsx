import React from 'react';
import { Grid } from '@material-ui/core';
import { UserCard } from './UserCard';

const Users = ({users, showMore}) => {
    console.log(users)
    return (
        <section className="users">
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
                        <Grid container spacing={3}>
                            {users.length !== 0 ? 
                                users.map(user => (
                                    <UserCard key={user.id} user={user} /> )) 
                            : <div>Loading...</div>}
                        </Grid>
                    </div>
                </Grid>

                <div className="button-page text-center users__button">
                    <button onClick={showMore}>Show more</button>
                </div>
            </div>
        </section>
    )
}

export default Users;