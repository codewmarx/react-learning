import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello } from "./Hello";
import { HelloWithoutJsx } from "./Hello";
import { UserProfile } from "./UserProfile";
import { Contact } from "./ContactForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { StyledForm } from "./StyledForm";

function App() {
  return (
    <div>
      <Welcome name="Dr.Doom" status="Angry" />
      <Welcome name="Thor" status="Anxious" />

      <Product
        productName="Iphone 2026"
        price={100000}
        Available={false}
        categories={["Gaming", "Social Media", "Streaming"]}
      />

      <CandidateProfile />
      <StyledForm />
      <Contact />
      <UserProfile />
      <Hello />
      <Button />
    </div>
  );
}

export default App;
