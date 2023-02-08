const initialState = {
  meals: [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      imageUrl: 'https://i.postimg.cc/CLCcwXYj/meal-1.jpg',
      tags: ['vegetarian', 'rabaty', 'lunch']
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      imageUrl: 'https://i.postimg.cc/VvfdnJrs/meal-2.jpg',
      tags: ['na ciepło', 'lunch', 'danie mięsne'],
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      imageUrl: 'https://i.postimg.cc/RhhvvKJt/meal-3.jpg',
      tags: ['na ciepło', 'rabaty', 'lunch', 'danie mięsne'],
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      imageUrl: 'https://i.postimg.cc/yxg2fPSL/meal-4.jpg',
      tags: ['vegetarian', 'light', 'lunch', 'danie dnia'],
    },
    {
      id: 'm5',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      imageUrl: 'https://i.postimg.cc/jjkbZCFd/meal-5.jpg',
      tags: ['danie mięsne', 'rabaty', 'kolacja', 'na imprezę', 'najcześciej zamawiane'],
    },
    {
      id: 'm6',
      name: 'Red Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      imageUrl: 'https://i.postimg.cc/yxg2fPSL/meal-4.jpg',
      tags: ['vegetarian', 'rabaty', 'lunch', 'light'],
    },

  ],
  cart: {
    items: [],
    totalAmount: 0,
    order: {
      orderItems: [],
      orderDetails: {}
    }

  },
  searchString: ''
}


export default initialState