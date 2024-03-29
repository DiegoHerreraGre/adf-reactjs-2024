import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Books from "../components/Books";
import Home from "../components/Home";
import Cart from "../components/Cart";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Books">
                <Books/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Cart">
                <Cart/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews