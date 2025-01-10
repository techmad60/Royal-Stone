// Home Page
import Footer from "../components/Sections_temp/Footer";
import Header from "../components/Sections_temp/Header";
import Main from "../components/Sections_temp/Main";
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
