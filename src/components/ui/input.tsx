import classes from './input.module.scss';

export function Input({ children, ...otherProps }) {
    return (
        <input className={classes.Input} {...otherProps} />
    )
}