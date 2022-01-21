import css from "./photo.module.css";


const Photo = ({photo}) => {
    const {id, title, url} = photo;

    return (
        <div className={css.stylePhoto}>
            {id}--{title}
            <img src={url} alt={title}/>
        </div>
    );
};

export {Photo};