//Creating Objects as Dummy Data
const recipe = [
  {

    id: 1,
    upvotes: 70,
    downvotes: 7,
    recipeName: 'Frit',
    ingridents: 'yam, oil, salts',
    body: "Peel your tuber of yam then slice it into pieces. Wash your yam and salt it then heat the oil at a medium heat in it put the yam. Wait for the yam to get done. Its ok if its golden but don't let it burn",
    reviews:
      [
        {
          reviewerName: 'Ugochukwu',
          review: 'Hello, am so into this meal',
        }],

  },
  {
    id: 2,
    upvotes: 77,
    downvotes: 17,
    recipeName: 'Lamb Sauce',
    ingridents: 'Garden egg, salmons, greens,  oil, champagne',
    body: "Boil your lamb meat,add greens in the process of it's boiling and add some tea-spoons of salt ,then dice some salmons with oil",
    reviews:
      [
        {
          reviewerName: 'Ugochukwu',
          review: 'An awesome meal indeed',
        }],
  },

];

export default recipe;
