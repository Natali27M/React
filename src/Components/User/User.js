

const User = (props) => {
    const {id, name, username, email,street,suite,city,zipcode,lat,lng,phone,website,companyName} = props;
    return (
        <div>
            <h4>User : {id}</h4>
            <h3>{name}--{username}</h3>
            <div>Email : {email}</div>
            <div>Address : {street}; {suite}; {city}; {zipcode}; Geo : {lat}; {lng}</div>
            <div>Phone : {phone}</div>
            <div>Website : {website}</div>
            <div>Company : {companyName}</div>
        </div>
    );
};

export default User;