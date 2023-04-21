import classes from './authHead.module.scss';

export function AuthHead(props) {
    return (
        <div className={classes.AuthHead}>
            <img src='/assets/logo.png' alt='Mindful moves' />
            <h1>{props.caption}</h1>
        </div>
    );
}