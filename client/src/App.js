import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Menu,NavBar} from './components/index';
import {Home,Video,SignIn} from './pages/index';
import styled from 'styled-components';
import {VideoContext,RandomContext,TrendsContext,SubContext,SigninContext,SearchContext,SignUpContext} from './AppContext.js'

const Container = styled.div`
display:flex;

`;

const Main = styled.div`
flex:7;
background-color: #181818;
color:white;
`
const Wrapper = styled.div`
padding: 0px 7px;
`;
function App() {
  return (
   <Container>
      <BrowserRouter>
      
          <Routes> 
          <Route path='/'>
            <Route index element={<RandomContext />}/>
            <Route path='trends' element={<TrendsContext/>}/>
            <Route path='subscriptions' element={<SubContext/>}/>
            <Route path='search' element={<SearchContext/>}/>
            <Route
                    path="/signin"
                    element={ <SigninContext />}
                  />
                    <Route
                    path="/signup"
                    element={ <SignUpContext />}
                  />
            <Route path="video">
              <Route path=':id' element={<VideoContext/>}>
              </Route>
            </Route>
          </Route>
          </Routes>
        
      </BrowserRouter>
    </Container>
  );
}

export default App;
