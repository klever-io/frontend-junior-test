import MainContainer from "../components/MainContainer";
import '../styles/global.css';

export default function MyApp({ Component, pageProps}) {
  return (
    <MainContainer>
      <Component {...pageProps}/>
    </MainContainer>
  );
}
