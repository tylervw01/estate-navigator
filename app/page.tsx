import estate from "./data/valdevie.json";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{estate.estate}</h1>
      <h2 className="mt-4 text-lg font-semibold">Streets</h2>
      <ul className="list-disc pl-6">
        {estate.streets.map((s, i) => (
          <li key={i}>{s.name}</li>
        ))}
      </ul>
      <h2 className="mt-4 text-lg font-semibold">Landmarks</h2>
      <ul className="list-disc pl-6">
        {estate.landmarks.map((l, i) => (
          <li key={i}>{l.name} ({l.type})</li>
        ))}
      </ul>
    </div>
  );
}
