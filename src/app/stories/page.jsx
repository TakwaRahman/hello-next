import StoryCard from '@/Component/StoryCard';
import Title from '@/Component/Title';
import React from 'react';

const Stories = () => {


    const foods = [
        {
            id: 1,
            name: "Classic Beef Burger",
            category: "Burger",
            price: 250,
            rating: 4.8,
            restaurant: "Burger House",
            image: "/images/burger.jpg",
            description: "Juicy beef patty with cheese, lettuce and special sauce.",
            available: true,
        },
        {
            id: 2,
            name: "Chicken Pizza",
            category: "Pizza",
            price: 450,
            rating: 4.6,
            restaurant: "Pizza Town",
            image: "/images/pizza.jpg",
            description: "Delicious chicken pizza with mozzarella cheese and fresh toppings.",
            available: true,
        },
        {
            id: 3,
            name: "Chicken Biryani",
            category: "Biryani",
            price: 220,
            rating: 4.9,
            restaurant: "Dhaka Biryani",
            image: "/images/biryani.jpg",
            description: "Traditional Bangladeshi chicken biryani with aromatic rice.",
            available: true,
        },
        {
            id: 4,
            name: "Chicken Chow Mein",
            category: "Noodles",
            price: 180,
            rating: 4.5,
            restaurant: "Chinese Corner",
            image: "/images/noodles.jpg",
            description: "Stir-fried noodles with chicken and fresh vegetables.",
            available: false,
        },
        {
            id: 5,
            name: "Chocolate Cake",
            category: "Dessert",
            price: 150,
            rating: 4.7,
            restaurant: "Sweet Treats",
            image: "/images/cake.jpg",
            description: "Soft chocolate cake covered with rich chocolate cream.",
            available: true,
        },
        {
            id: 6,
            name: "Chicken Fried Rice",
            category: "Rice",
            price: 200,
            rating: 4.4,
            restaurant: "Food Palace",
            image: "/images/fried-rice.jpg",
            description: "Fried rice cooked with chicken, eggs and vegetables.",
            available: true,
        },
        {
            id: 7,
            name: "French Fries",
            category: "Fast Food",
            price: 120,
            rating: 4.3,
            restaurant: "Burger House",
            image: "/images/fries.jpg",
            description: "Crispy golden fries served with special sauce.",
            available: true,
        },
        {
            id: 8,
            name: "Chicken Sandwich",
            category: "Sandwich",
            price: 190,
            rating: 4.5,
            restaurant: "Snack Point",
            image: "/images/sandwich.jpg",
            description: "Grilled chicken sandwich with lettuce, cheese and sauce.",
            available: true,
        },
    ];

    return (
        <div className=''>
            <Title className="text-6xl bg-linear-60 from-sky-50 to-sky-200 p-3 text-black rounded-xl">Welcome to Stories Page</Title>

            <div>
                {
                    foods.map(food=><StoryCard key={food.id} food={food}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Stories;