import Link from "next/link";

const StoryCard = ({ food }) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">

            <img
                src={food.image}
                alt={food.name}
                className="h-52 w-full object-cover"
            />

            <div className="p-5">

                <p className="text-sm text-orange-500">
                    {food.category}
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-800">
                    {food.name}
                </h2>

                <p className="mt-2 text-gray-500">
                    {food.description}
                </p>

                <p className="mt-3 font-semibold text-gray-700">
                    ৳{food.price}
                </p>

                <Link
                    href={`/stories/${food.id}`}
                    className="mt-4 inline-block rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
};

export default StoryCard;