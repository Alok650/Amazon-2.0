import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductFeed from "../components/Productfeed"
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div className = 'bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
        <Header/>

        <main className="max-w-screen-2xl mx-auto">
          {/* Banner */}
          <Banner/>
          {/* Productfeed */}
          <ProductFeed products = { products }/>
        </main>
        <Footer />
      {/* ---- ---- */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(" https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

//API ENDPOINT https://fakestoreapi.com/products