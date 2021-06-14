import Header from "./Header";
import Navbar from "./Navbar";
import StateProps from "./StateProps";
// const Navbar = () => {
//   return (
//     <navbar>
//       <h3>navbar</h3>
//     </navbar>
//   );
// };

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <StateProps />

      <h2>Hello World</h2>
    </div>
  );
}

export default App;
