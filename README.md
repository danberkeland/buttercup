# How to Use Buttercupadmin

# Settings

## Ingredients

All ingredients, recipe components, paper products, office supplies, etc. can be catalogued here.  

First, locations are created (i.e. = `pantry`, `lower back shelf`, `sandwich prep`, or wherever ingredients are stored).

Then ingredients are added to that location.  Each ingredient should have a unique and specific name.  Once the ingredient is added, it will show `incomplete` in parantheses next to it's name.  To remove this, expand the ingredient tab and complete the necessary information.

### `Par`
Enter the base amount of product.  This is your 100% amount that should be reached when the product is restocked.  It could simply be 100, which will be taken as a percentage, or it could be specific to a number of bags, cans, or boxes.  It's up to you.  As long as it is a real number and the meaning is understood.

### `Trigger`
This number triggers an action.  When your ingredient amount hits this number, an action that you specify will appear on the list that you specify.  For example, if your par for bags of flour is 10, and your inventory reaches 3, an action to `buy` may appear on your `Costco` list.

ATTENTION:  For products that are simply brought back to par at regular intervals regardless of `trigger` amount, set `trigger` equal to `par`.  For example, if the par for bags of flour is 10, and more flour is bought each week to bring that number back to 10, set `par` and `trigger` to 10 to ensure that flour always ends up on order list.



## Lists

All ingredients should be linked to an action that is taken once the amount of that ingredient has dipped beneath a 'trigger' amount.  There are currently 5 different lists that contain these actions.  [Add/Edit Lists](https://buttercupadmin/ListSettings).

### `Baker`

The Baker list contains actions

