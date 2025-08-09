import { ResContextProvider } from "./contexts/responsive-context/ResponsiveContext";
import { PageLayout } from "./layouts/page-layout/PageLayout";

function App() {
  return (
    <ResContextProvider>
      <PageLayout />
    </ResContextProvider>
  );
}

export default App;
