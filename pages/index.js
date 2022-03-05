import Head from "next/head";
import Feed from "../components/feed";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}
