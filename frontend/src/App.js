import { useMemo, useState } from "react";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import Orb from "./components/orb/Orb";
import { MainLayout } from "./styles/Layouts";

function App() {
  const [active, setActive] = useState(1)

  // const global = useGlobalContext()
  // console.log(global);

  // const displayData = () => {
  //   switch(active){
  //     case 1:
  //       return <Dashboard />
  //     case 2:
  //       return <Dashboard />
  //     case 3:
  //       return <Income />
  //     case 4: 
  //       return <Expenses />
  //     default: 
  //       return <Dashboard />
  //   }
  // }

  // to stop from reloading when we clicked any icons
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        {/* <main> */}
        {/* {displayData()} */}
        {/* </main> */}
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background: #00c6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #0072ff,
    #00c6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #0072ff,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
