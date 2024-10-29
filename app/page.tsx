// Home Page

import Header from "../components/sections/Header";
// import Main from "../components/sections/Main";
// import Footer from "../components/sections/Footer";
import { montsy } from "./fonts/fonts";

export default function Home() {
  return (
    <div className={`${montsy.className} bg-color-two`}>
      <Header />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}
