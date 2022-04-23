import React, { Component, ErrorInfo, ReactNode } from "react";
import { NotFoundPage } from "../NotFoundPage";
import "./index.css";

interface IState {
    hasError: boolean;
}

interface IProps {
    children: ReactNode;
}

export class ErrorBoundary extends Component<IProps, IState> {
    public state: IState = { hasError: false };

    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.state = { hasError: false };
        console.log("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <NotFoundPage />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
