import classes from './buttton.module.scss';

export function Button({ children, varient, ...otherProps }) {
    const classList = [classes.Button];
    if (varient === 'flat') {
        classList.push(classes.Flat)
    }
    return (
        <button className={classList.join(' ')} {...otherProps}>{children}</button>
    )
}