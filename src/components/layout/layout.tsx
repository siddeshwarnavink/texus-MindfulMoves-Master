import { AppBar } from './appBar';
import classes from './layout.module.scss'

export function Layout(props) {
    return (
        <div className={classes.Layout}>
            <AppBar />
            <div className={classes.Container}>
                {props.children}
            </div>
        </div>
    )
}