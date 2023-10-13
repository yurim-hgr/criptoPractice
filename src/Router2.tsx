import { BrowserRouter, Switch, Route } from "react-router-dom";
import First from "./pages/First";
import PassageInsert from "./pages/PassageInsert";

function Router2() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/:type">
                <PassageInsert />
            </Route>
            <Route path="/">
                <First />
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Router2;