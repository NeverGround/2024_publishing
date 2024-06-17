import SNSLogin from "./sns/SNSLogin";
import { FaApple, FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <SNSLogin
        SNSTextP={{ sns: "Apple" }}
        SNSIconP={{ Icon: FaApple }}
        SNSColorP="Apple"
      />
      <SNSLogin
        SNSTextP={{ sns: "Facebook" }}
        SNSIconP={{ Icon: FaFacebook }}
        SNSColorP="FaceBook"
      />
    </div>
  );
}

export default App;
