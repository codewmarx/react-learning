import { Welcome } from './Welcome';
import { Button } from './Button';
import { Hello } from './Hello';
import { HelloWithoutJsx } from './Hello';
import { UserProfile } from './UserProfile';

function App() {
  return (
    <div>
      <UserProfile/>
      <Hello/>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App;
