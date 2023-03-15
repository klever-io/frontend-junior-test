import Header from "./sections/Header"

export default function MainContainer({ children }) {
  return (
   <>
    <Header/>
    <div>{children}</div>
   </>
  );
}