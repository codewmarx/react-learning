import { Welcome } from './Welcome';
import { Button } from './Button';
import { Hello } from './Hello';
import { HelloWithoutJsx } from './Hello';
import { UserProfile } from './UserProfile';
import { Contact } from './ContactForm';
import { CandidateProfile } from './CandidateProfile';
import { StyledForm } from './StyledForm';

function App() {
  return (
    <div>
      <CandidateProfile/>
      <StyledForm/>
      <Contact/>
      <UserProfile/>
      <Hello/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App;
