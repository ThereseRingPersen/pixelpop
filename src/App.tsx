import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProviderWrapper } from "./providers/ThemeContext";
import JoyOrderDashboardTemplate from "./pages/OrdersTemplate";
import { CssBaseline } from "@mui/joy";
import MyProfile from "./pages/MyProfileTemplate";

function App() {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Router>
        <div style={{ padding: 20 }}>
          <Routes>
            <Route path="/orders" element={<JoyOrderDashboardTemplate />} />
            <Route path="/profile" element={<MyProfile/>}/>
          </Routes>
        </div>
          </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
