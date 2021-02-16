import { AriaAttributes, DOMAttributes } from "react";

declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        tabIndex?: number;
        suggested?: string;
    }
}
