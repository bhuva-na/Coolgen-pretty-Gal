import Head from "next/head";
import Homelayout from "./Homelayout";
import ProductList from "@/components/ProductList";
import Footer from "@/components/footer";
import Header from "./header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pretty Gal - Fall & Winter Collection</title>
        <meta
          name="description"
          content="Shop the latest Fall & Winter collection at Pretty Gal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* Header Section */}
      
      <Homelayout />
      <ProductList />
      <Footer />
    </>
  );
}
