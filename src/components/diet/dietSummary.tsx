import classes from './dietSummary.module.scss'

export function DietSummary(props){
    return(
        <div className={classes.DietSummary}>
            <h2>Total calorie: {props.total}</h2>
        </div>
    )
}