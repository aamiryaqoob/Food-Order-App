export default function MealItem({ meal }) {
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="Meal Image" />
            <div className="meal-item-title">
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
            </div>
            <p>{meal.price}</p>
        </article>
    </li>
}