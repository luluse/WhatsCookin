import React from 'react';
import { connect } from "react-redux";

function MyCookBook({ currentUser, cookbook }) {



    return (
        <>
            <h2>My CookBook</h2>
            <p>Coming Soon!</p>

            {cookbook.map(element => (
                <p>
                    {element.recipeName}
                </p>
            ))}


            <br />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.user,
        cookbook: state.userReducer.cookbook
    };
};


export default connect(mapStateToProps)(MyCookBook);
