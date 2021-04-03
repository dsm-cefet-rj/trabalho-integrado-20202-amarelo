import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlatePage from "../components/pages/PlatePage";
import Login from "../components/pages/Login";
import UserRegister from "../components/pages/UserRegister";
import ElementsPage from "../components/pages/ElementsPage";

export default function Rotas(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={ElementsPage}/>
                <Route path="/index" component={ElementsPage}/>
                <Route path="/meus-pratos" component={PlatePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/registrar" component={UserRegister}/>
            </Switch>
        </Router>
    )
}