import logo from './logo.svg';
import './App.css';

const customStyle = {
  color: ""
};

var greetings = () => {
const time = new Date().getHours();
let greet =""



if (time <12) {
  greet = "Good morning";
  customStyle.color = "green";
}
else if ( time <18 ){
  greet = " Good Afternoon!";
  customStyle.color = "orange"
}
else {
  greet = "Good night!";
  customStyle.color = "red"
}

return greet
};
function App() {
  return (
    <div>
     <h1 style={customStyle}> {greetings()}!</h1>
    </div>
  );
}

export default App;
