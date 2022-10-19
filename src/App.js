import RegistrationForm from "./components/RegistrationForm";
import UserProfileForm from "./components/UserProfileForm";
function App() {
  return (
    <div className="container">
<div className="row">
    <div className="col-6">
        <RegistrationForm/>
    </div>
    <div className="col-6">
        <UserProfileForm/>
    </div>
</div>

    </div>


  );
}

export default App;
