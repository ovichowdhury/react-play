import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route, Link, Redirect } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            This is Dashboard
            <BrowserRouter>
                <switch>
                    <Route path="/dashboard/todo">
                        <Todo />
                    </Route>
                    <Route path="/dashboard/notification">
                        <Notification />
                    </Route>
                </switch>

                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard/todo">Todo</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/notification">Notification</Link>
                        </li>
                        
                    </ul>
                </nav>
            </BrowserRouter>
        </div>
    )
}

function Todo() {
    return (
        <div>
            todo Page !
        </div>
    )
}



function Notification() {
    return (
        <div>
            Notification Page !
        </div>
    )
}

export default Dashboard;