export default function App() {
  return (
    <>
      <div className="m-[8px]">
        <div className="bg-pink-500">Header</div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">Side bar</div>
          <div className="col-span-8">Main</div>
        </div>
      </div>
    </>
  );
}
