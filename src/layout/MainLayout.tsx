import { Header } from "../components";
import { Home, Summary } from "../pages";


export const MainLayout = (props: any) => {

  return (
    <>
      <Header />

      <Home />

      <Summary />

    </>
  );
 
}
