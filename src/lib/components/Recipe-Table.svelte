<script>
    let {recipies} = $props();
</script>

<table>
    <thead>
        <tr>
            <td>Recipe Name</td>
            <td>Make Time</td>
            <td>Difficulty</td>
            <td>Servings</td>
            <td>Cuisine</td>
            <td>Calories</td>
        </tr>
    </thead>
    <tbody>
        {#each recipe in recipies.recipies}
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</td>
                <td>{recipe.difficulty}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.caloriesPerServing}</td>
            </tr>
        {/each}
    </tbody>
</table>

