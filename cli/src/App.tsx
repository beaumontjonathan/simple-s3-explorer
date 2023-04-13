import Routes from './routes/Routes.js';
import { PagesProvider } from './navigator.js';
import { ProfileProvider } from './profile.js';

export default function App() {
  return (
    <PagesProvider>
      <ProfileProvider>
        <Routes />
      </ProfileProvider>
    </PagesProvider>
  );
}
