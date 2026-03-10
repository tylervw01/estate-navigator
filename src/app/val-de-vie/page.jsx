// src/app/val-de-vie/page.jsx
export default function ValDeViePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Val De Vie Estate</h1>

      <section className="mt-6 border p-4 rounded">
        <h2 className="text-lg font-semibold">Map</h2>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <span>Map Placeholder</span>
        </div>
      </section>

      <section className="mt-6 border p-4 rounded">
        <h2 className="text-lg font-semibold">Notes</h2>
        <textarea
          className="w-full border rounded p-2"
          placeholder="Add route notes..."
        />
      </section>
    </div>
  );
}
