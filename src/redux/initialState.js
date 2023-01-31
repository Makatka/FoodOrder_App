const initialState = {
  meals: [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      imageUrl: 'https://i.postimg.cc/CLCcwXYj/meal-1.jpg',
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      imageUrl: 'https://i.postimg.cc/VvfdnJrs/meal-2.jpg'
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      imageUrl: 'https://i.postimg.cc/RhhvvKJt/meal-3.jpg'
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      imageUrl: 'https://i.postimg.cc/yxg2fPSL/meal-4.jpg'
    },
    {
      id: 'm5',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      imageUrl: 'https://i.postimg.cc/jjkbZCFd/meal-5.jpg'
    },
    {
      id: 'm6',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      imageUrl: 'https://i.postimg.cc/yxg2fPSL/meal-4.jpg'
    },

  ],
  cart: {
    items: [],
    totalAmount: 0,
    order: {
      orderItems: [],
      orderDetails: {}
    }

  }

}


export default initialState