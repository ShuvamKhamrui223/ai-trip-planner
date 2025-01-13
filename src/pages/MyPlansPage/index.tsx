// import { useEffect, useState } from "react";
import Container from "../../Container";
// import { useAuthContext } from "../../contexts/AuthContext";
// import { getTripsByEmail } from "../../utils/firebase.utils";
// type storedPlansType = {
//   created_at: string;
//   emailId: string;
//   generated_responses: string;
// };

const MyPlansPage = () => {
  // const [storedPlans, setStoredPlans] = useState<storedPlansType[]>([]);

  // const { user } = useAuthContext();
//   useEffect(() => {
//     if (user?.email) {
//       const result=getTripsByEmail(user.email)
//       console.log(result)
//     // setStoredPlans(result);
//   }
// }, [user]);
// console.log(storedPlans);
  return (
    <Container>
      <h2 className="">your plans</h2>
    </Container>
  );
};

export default MyPlansPage;
