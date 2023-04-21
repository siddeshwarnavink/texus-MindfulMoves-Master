import { Button } from '../ui/button';
import classes from './foodList.module.scss';
import { FoodListQuantity } from './foodListQuantity';

export function FoodList(props) {
    return (
        <table className={classes.FoodList}>
            <tr>
                <th>Name</th>
                <th>Calories</th>
                <th>Fat</th>
                <th>Protein</th>
            </tr>
            {props.list.map((foodItm, index) => {
                return (
                    <tr key={foodItm.id}>
                        <td>{foodItm.name}</td>
                        <td>{foodItm.calories}</td>
                        <td>{foodItm.fat}g</td>
                        <td>{foodItm.protein}g</td>
                        <td>
                            {
                                foodItm.quantity === 0 ?
                                    <Button onClick={() => props.addToList(`${index}`)}>Add</Button>
                                    :
                                    <FoodListQuantity updateCount={newCount => props.updateCount(foodItm.dbId, newCount)} count={foodItm.quantity} />
                            }
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}