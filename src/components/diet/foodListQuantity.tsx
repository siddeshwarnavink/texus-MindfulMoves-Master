import classes from './foodListQuantity.module.scss';

export function FoodListQuantity(props) {
    return (
        <div className={classes.FoodListQuantity}>
            <button onClick={() => props.updateCount(props.count - 1)}>-</button>
            <span>{props.count}</span>
            <button onClick={() => props.updateCount(props.count + 1)}>+</button>
        </div>
    )
}