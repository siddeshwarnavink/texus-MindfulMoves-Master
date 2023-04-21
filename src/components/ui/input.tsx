import classes from './input.module.scss';

export function Input({ children, forwardedRef, ...otherProps }) {
    return (
        <input ref={forwardedRef} className={classes.Input} {...otherProps} />
    )
}