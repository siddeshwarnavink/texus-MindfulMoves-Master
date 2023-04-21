import classes from './authCard.module.scss';

export function AuthCard(props) {
    return (
        <div className={classes.AuthCard}>
            {props.children}
        </div>
    )
}