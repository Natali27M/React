const User = ({user, getUser}) => {

    return (
        <div className={'display spaceBetween m5 border p5'}>
            {user.name}
            <button onClick={() => getUser(user)}>User details</button>
        </div>
    );
};

export default User;

