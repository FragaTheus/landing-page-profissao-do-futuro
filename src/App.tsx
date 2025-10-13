import { PayContextProvider } from "./contexts/payment/ToPaymentContext";
import { ResContextProvider } from "./contexts/responsive-context/ResponsiveContext";
import { PageLayout } from "./layouts/page-layout/PageLayout";

function App() {
  return (
    <PayContextProvider>
    <ResContextProvider>
      <PageLayout />
    </ResContextProvider>
    </PayContextProvider>
  );
}

export default App;
