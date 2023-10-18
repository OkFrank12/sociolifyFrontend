import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const persistor = persistStore(store);
  const Client = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={Client}>
            <RouterProvider router={MainRouter} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
