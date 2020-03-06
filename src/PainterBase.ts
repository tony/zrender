import Storage from './Storage';

interface PainterOption {
    width?: number | string  // Can be 10 / 10px / auto
    height?: number | string
}

export class PainterBase {

    type: string

    root: HTMLElement

    constructor(dom: HTMLElement,
        storage: Storage,
        opts: PainterOption,
        id: number
    ) {

    }

    getType: () => string

    resize: (width?: number | string, height?: number | string) => void
    refresh: () => void
    clear: () => void

    getViewportRoot: () => HTMLElement
    getViewportRootOffset: () => {offsetLeft: number, offsetTop: number}

    getWidth: () => number
    getHeight: () => number

    dispose: () => void
}