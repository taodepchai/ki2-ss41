
export default function Bt7() {
  return (
    <div className="p-4">
        <h1>Bt7</h1>
      <div className="w-[550px] flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-32 h-16 bg-purple-500 text-white flex items-center justify-center rounded-lg shadow-md"
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );
}
