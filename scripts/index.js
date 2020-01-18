import Highway from '@dogstudio/highway';
import Fade from './trans';


const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});