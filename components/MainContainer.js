import Header from "./Header"

export default function MainContainer({ children }) {
  return (
   <>
    <Header/>
    <div>{children}</div>
   </>
  );
}