import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
        <Header/>

        <main className="max-w-screen-1xl mx-auto">
          {/* Banner */}
          <Banner/>
        </main>
      {/* ---- ---- */}
    </div>
  );
}
