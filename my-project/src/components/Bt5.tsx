
export default function Bt5() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Bt5</h1>
      <div className="rounded-3xl w-[200px] h-[200px] bg-blue-500 relative">
        <p>Relative parent</p>
        <div className="absolute rounded-3xl bottom-0 right-0 bg-white p-1">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
