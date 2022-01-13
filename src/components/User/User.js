const User = ({id, name, getUserDetails}) => {
    return (
        <div className={'display spaceBetween m5 border p5'}>
            {name}
            <button onClick={() => getUserDetails(id)}>User details</button>
        </div>
    );
};

export default User;

