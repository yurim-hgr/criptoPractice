import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Insert from "./pages/Insert";
import PassageOpen from "./pages/PassageOpen";

function Router2() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/type1"   >
                <PassageOpen />
            </Route>
            <Route path="/type2" >
                <Insert />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Router2;