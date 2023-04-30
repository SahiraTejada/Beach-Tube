import {BrowserRouter,Routes,Route} from 'react-router-dom';
import styled from 'styled-components';
import {VideoPage,RandomPage,TrendsPage,SubPage,SigninPage,SearchPage,SignUpPage} from './Pages.js'
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
display:flex;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
   <Container>
      <BrowserRouter>
      
          <Routes> 
          <Route path='/'>
            <Route index element={<RandomPage />}/>
            <Route path='trends' element={<TrendsPage/>}/>
            <Route path='subscriptions' element={<SubPage/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route
                    path="/signin"
                    element={ <SigninPage />}
                  />
                    <Route
                    path="/signup"
                    element={ <SignUpPage />}
                  />
            <Route path="video">
              <Route path=':id' element={<VideoPage/>}>
              </Route>
            </Route>
          </Route>
          </Routes>
        
      </BrowserRouter>
    </Container>
  );
}

export default App;
