import Header from "./components/header";
import PageWrapper from "./components/pagewrapper";
import { SideBar } from "./components/sidebar";
import { ThemeProvider } from "./components/theme-provider";
import Routers from "./routers";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <>
        <SideBar />
        <div className="flex flex-col h-full w-full">
          <Header />
          <PageWrapper>
            <Routers />
          </PageWrapper>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
