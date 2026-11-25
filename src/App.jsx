import { Welcome } from './Welcome';
import { Button } from './Button';
import { Hello } from './Hello';
import { HelloWithoutJsx } from './Hello';
import { UserProfile } from './UserProfile';
import { Contact } from './ContactForm';


function App() {
  return (
    <div>
      <Contact/>
      <UserProfile/>
      <Hello/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App;
