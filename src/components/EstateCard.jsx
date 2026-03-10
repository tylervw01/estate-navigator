export default function EstateCard({ name }) {
  return (
    <div className="border p-6 rounded shadow hover:bg-gray-100 cursor-pointer">
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
}
