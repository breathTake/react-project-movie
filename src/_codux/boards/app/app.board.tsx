import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 1054,
        windowHeight: 839,
        windowWidth: 1598,
        canvasWidth: 1440,
    },
});
