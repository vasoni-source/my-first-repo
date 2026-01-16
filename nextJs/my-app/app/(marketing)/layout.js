import "../globals.css";


export default function RootLayout2({ children }) {
  return (
    
      <
      >
     <div className="bg-blue-700">Header</div>
        {children}
        <div className="bg-orange-700">Footer</div>

      </>
    
  );
}