import "../globals.css";

export default function RootLayout1({ children }) {
  return (
    <>
      <div className="bg-teal-700">Header</div>
      {children}
      <div className="bg-amber-700">Footer</div>
    </>
  );
}
