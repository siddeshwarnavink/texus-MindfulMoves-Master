import classes from './buttton.module.scss';

export function Button({ children, ...otherProps }) {
    return (
        <button className={classes.Button} {...otherProps}>{children}</button>
    )
}