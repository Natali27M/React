const Launche = (props) => {
    const {name,year,img} = props;
    return (
        <div className={'style'}>
            <div>
                <h4>{name}</h4>
                <h5>{year}</h5>
            </div>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Launche;