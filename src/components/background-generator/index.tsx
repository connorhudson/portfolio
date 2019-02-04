import { Component, h } from "preact";
import * as patterns from '../../style/patterns.css'
import * as style from './style.css';

export default class BackgroundGenerator extends Component {
    private _shapeContent: JSX.Element[] = []
    public componentWillMount() {
        // a. pick shapes (or init 3 standard shapes)
        // b. for each shape:
            // 1. pick random pattern (set css class?)
            // 2. set random x/y transform (within window bounds)
            // 3. set random size
            // 4. set random rotation
        const triangle = <div className={`${style.shape} ${style.triangle}`} style={{}}/>
        const square = <div className={`${style.shape} ${style.square} crosshatch`} style={{}}/>
        const circle = <div className={`${style.shape} ${style.circle}`} style={{}}/>

        this._shapeContent = [
            triangle,
            square,
            circle
        ]

        this._shapeContent.map((shape: JSX.Element) => {
            const side = (Math.random() * 200) + 50
            shape.attributes.style.height = side
            shape.attributes.style.width = side
            shape.attributes.style.transform = `rotate(${Math.random()*360}deg)`
            shape.attributes.style.top = `${Math.random()*100}%`
            shape.attributes.style.left = `${Math.random()*100}%`
        })
    }

    public render() {
        return (
            <div class={style.backgroundGenerator}>
                {this._shapeContent}
            </div>
        )
    }
}