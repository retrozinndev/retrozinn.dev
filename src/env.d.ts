/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [string]: HTMLElement;
        }
    }
}
