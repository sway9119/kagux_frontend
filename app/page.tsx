import { getAllFurnitures } from "@/api";

export default async function Home() {
  const furnitures = await getAllFurnitures();
  console.log(furnitures);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700  -mt-32">
        Nextjs 13 Todo App
      </h1>
      <ul className="space-y-3">
        {furnitures.map((furniture) => (
          <li
            key={furniture.id}
            className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
          >
            <span>{furniture.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
