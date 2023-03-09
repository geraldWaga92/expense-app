import styled from "styled-components";
import Orb from "./components/orb/Orb";
import { MainLayout } from "./styles/Layouts";

function App() {
  return (
    <AppStyled>
      <Orb />

      <MainLayout />

    </AppStyled>
  );
}

// background: #fc00ff;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// background-image: url(${props => props.bg});
//   position: relative;
const AppStyled = styled.div`
  height: 100vh;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
