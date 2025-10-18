// src/pages/Dashboard.jsx
import { supabase } from "../../src/helper/supabaseClient"
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if(error) throw error;
        navigate("/login")
    };

  return (
    <div className="dashboard-page">
      <h1>Dashboard Page, You've signed in!</h1>
        <button 
            className="btn btn-primary" 
            type="submit" 
            onClick={signOut}>
            {" "}
            SignOut
        </button>
    </div>
  );
}
export default Dashboard;
