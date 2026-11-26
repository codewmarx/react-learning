import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello } from "./Hello";
import { HelloWithoutJsx } from "./Hello";
import { UserProfile } from "./UserProfile";
import { Contact } from "./ContactForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { StyledForm } from "./StyledForm";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";

function App() {
  return (
    <div>
      <UserCard id={10} age={22} email="garado602@gmail.com" address="Canada" />

      <Greeting message="Greetings" name="Wanda" />
      <Greeting name="Dr. Strange" />
      <Greeting message="Good Day" />
      <Greeting />

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
