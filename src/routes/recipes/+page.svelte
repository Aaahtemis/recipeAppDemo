<script>
    import RecipeTable from '$lib/components/Recipe-Table.svelte'
    let {data} = $props();
    console.log(data.recipes);
</script>


<RecipeTable recipes={data.recipes}/>