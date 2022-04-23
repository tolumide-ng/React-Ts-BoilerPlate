import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
// import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { setDropDownAction } from "../../store/modules/dropDown/actions";
import { RootState } from "../../store/modules/types";
import "./index.css";

const AppRouter = () => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: RootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            {/* <Route path="/" /> */}
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default AppRouter;
