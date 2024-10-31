// Home Page
import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import Footer from "../components/sections/Footer";
//import { montsy} from "./fonts/fonts";


export default function Home() {
  return (
    <div className={`bg-color-two flex flex-col`}>
      <Header />
       <Main />
      <Footer />
    </div>
  );
}
