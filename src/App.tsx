import { Routes, Route } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Layout } from "./components/layout/layout"
import { DietPage } from "./pages/diet";
import firebaseApp from './config/firebaseApp';
import { MeditationPage } from "./pages/meditation";
import { GoalSettingsPage } from "./pages/goalSettings";
import { AuthPage } from "./pages/auth";

const auth = getAuth(firebaseApp);

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <AuthPage />
  }  
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DietPage user={user} />} />
        <Route path="/meditation" element={<MeditationPage user={user} />} />
        <Route path="/goal-settings" element={<GoalSettingsPage user={user} />} />
      </Routes>
    </Layout>
  )
}

export default App
