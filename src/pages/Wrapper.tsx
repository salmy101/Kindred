import { useEffect, useState } from "react";
import type { ReactNode } from "react";
// import { supabase } from "@/helper/supabaseClient" // <-- THE FIX
import { supabase } from "../../src/helper/supabaseClient"
import { Navigate } from "react-router-dom";

// 1. Define the props type for the Wrapper component
// The children prop should be of type ReactNode (which covers JSX, strings, arrays, etc.)
interface WrapperProps {
  children: ReactNode; 
}

// 2. Add the type definition to the functional component
// Use React.FC<WrapperProps> or explicitly define the prop type in the argument
function Wrapper({ children }: WrapperProps) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session }
            } = await supabase.auth.getSession(); 
            
            // !!session is correct: it converts the session object (or null) to true or false.
            setAuthenticated(!!session);
            setLoading(false); // no longer waiting for supabase response
        };
        getSession(); // call the function
    }, []);

    if (loading) { // conditional to check if we retrieve session data
        return <div>Loading....</div>;
    } 
    
    // Now that loading is false, check authentication
    if (authenticated) {
        // If authenticated, return children (the protected route content)
        return <>{children}</>;
    }
    
    // If not authenticated (and not loading), redirect to login
    return <Navigate to="/login" />;
}

export default Wrapper;