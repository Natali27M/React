const UserDetails = ({user, getUserId}) => {
    return (
        <div>
            {
                user && <div className={'border w100 display align styleUserDetail'}>
                    <div className={'display flexColumn align w80'}>
                        <h2>User details</h2>
                        <h5 className={'m0'}>Id : {user?.id}</h5>
                        <h4 className={'m0'}>Name : {user?.name}</h4>
                        <h4 className={'m0'}>Username : {user?.username}</h4>
                        <h5 className={'m0'}>Email : {user?.email}</h5>
                        <h6 className={'border'}>
                            <div className={'display flexColumn align p5'}>
                                Address :
                                <p className={'m0'}>Street - {user?.address.street}</p>
                                <p className={'m0'}>Suite - {user?.address.suite}</p>
                                <p className={'m0'}>City - {user?.address.city}</p>
                                <p className={'m0'}>Zipcode - {user?.address.zipcode}</p>
                                <p className={'m0'}>Geo : lat - {user?.address.geo.lat}</p>
                                <p className={'m0'}>lng - {user?.address.geo.lng}</p>
                            </div>
                        </h6>
                        <h5 className={'m0'}>Phone : {user?.phone}</h5>
                        <h5 className={'m0'}>Website : {user?.website}</h5>
                        <h6 className={'border'}>
                            <div className={'display flexColumn align p5'}>
                                Company :
                                <p className={'m0'}>Name - {user?.company.name}</p>
                                <p className={'m0'}>CatchPhrase - {user?.company.catchPhrase}</p>
                                <p className={'m0'}>Bs - {user?.company.bs}</p>
                            </div>
                        </h6>
                    </div>
                    <button className={'styleButton'} onClick={()=>getUserId(user.id)}>Get posts</button>
                </div>
            }
        </div>
    );
};

export default UserDetails;