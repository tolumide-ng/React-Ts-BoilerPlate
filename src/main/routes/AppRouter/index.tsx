import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import "./index.css";

const AppRouter = withRouter(() => {
    return (
        <div className="appwide">
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route path="/" exact>
                                <LandingPage />
                            </Route>
                            <Route path="/shbkdjf">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
});

export default AppRouter;
