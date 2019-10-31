import React from "react"
import {BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom"

export default function Menu() {
    return (
        <Router>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/course">Cource</Link></li>
            <li><Link to="/contact">Link</Link></li>
            <li><Link to="/topics">Topics</Link></li>
        </ul>
        <Switch>
            <Route path="/about">
                <About />
                </Route>
                <Route path="/course">
                <Course />
                </Route>
                <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/topics">
                <Topics />
            </Route>
        </Switch>
        </Router>
    )
}
function About() {
    return <h2>About page</h2>
}

function Course() {
    return <h2>Course page</h2>
}

function Contact() {
    return <h2>Contact</h2>
}
function Topics() {
    let match = useRouteMatch();

    return (
        <div>
        <h2>Topics</h2>

        <ul>
        <li>
        <Link to={`${match.url}/components`}>Components</Link>
    </li>
    <li>
    <Link to={`${match.url}/props-v-state`}>
    Props v. State
    </Link>
    </li>
    </ul>

    {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
<Switch>
    <Route path={`${match.path}/:topicId`}>
<Topic />
    </Route>
    <Route path={match.path}>
<h3>Please select a topic.</h3>
    </Route>
    </Switch>
    </div>
    )
}
function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
