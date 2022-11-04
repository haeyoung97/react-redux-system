import React from "react";
import { Provider } from "react-redux";
import Root from "./pages/Root";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
