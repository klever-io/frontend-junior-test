import Head from 'next/head'
import TokensList from '../components/TokensList';

export default function HomePage() {
  return (
    <div>
        <Head>
          <title>Paulo Guilherme</title>
          {/* V--- colocar a logo da klever aqui ---V */}
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <main>
          <TokensList/>
        </main>
    </div>
  );
}
