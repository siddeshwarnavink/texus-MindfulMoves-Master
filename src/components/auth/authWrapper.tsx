import classes from './authWrapper.module.scss';

export function AuthWrapper(props) {
    return (
        <div className={classes.AuthWrapper}>
            {props.children}
        </div>
    );
}