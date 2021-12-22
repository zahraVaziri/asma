import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LayoutProvider } from "./component/context/LayoutContext";
import Layout from "./component/layout/Layout";
import Main from "./component/Main/Main";
import About from "./component/pages/About/About";
import Contact from "./component/pages/Contact/Cantact";
import DataList from "./component/pages/datalist/DataList";
import newList from "./component/pages/datalist/newsList";
import Register from "./component/pages/Register/Register";

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <LayoutProvider>
        <Route path='/' render={() =>
        <Layout>
          <Switch>
            <Route path={'/about'} component={About}/>
            <Route path={'/Register'} component={Register}/>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/contact'} component={Contact}/>
            <Route path={'/detail/:id'} component={DataList}/>
            <Route path={'/detailnew/:id'} component={newList}/>
          </Switch>
        </Layout>
        }/>
      
      </LayoutProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
