class Meal { 
    constructor(
        id, 
        CategoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGluttenFree, 
        isVegan, 
        isLactoseFree
        ) {
            this.id = id,
            this.CategoryIds = CategoryIds,
            this.title = title,
            this.affordability = affordability,
            this.complexity = complexity,
            this.imageUrl = imageUrl,
            this.duration = duration,
            this.ingredients = ingredients,
            this.steps = steps,
            this.isGluttenFree = isGluttenFree,
            this.isVegan = isVegan,
            this.isLactoseFree = isLactoseFree
        }
}

export default Meal;