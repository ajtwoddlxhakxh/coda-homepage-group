import SubProject from "./sub_project";
import CreateBy from "./CreateBy";
import Navbar from "./Navbar";
import Sub_main from "./Sub_main";
import Sub_recruitment from "./Sub_recruitment";

function App() {
  const developer = [
    { name: "유하선", part: "BACK-END" },
    { name: "유도현", part: "BACK-END" },
    { name: "권영은", part: "FRONT-END" },
    { name: "남태현", part: "FRONT-END" },
  ]; /*Create By 명단*/
  return (
    <div className="App">
      <CreateBy items={developer} specialName={"leader"} />

      <SubProject />
      <Sub_main />
      <Sub_recruitment />
      {/* Navbar 컴포넌트 추가 */}
      <Navbar />
    </div>
  );
}

export default App;
