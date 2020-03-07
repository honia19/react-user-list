import MainComponent from '../MainComponent.jsx';

describe('MainComponent create snapshot', () => {
    it('MainComponent snapshot should render correctly', () => {
        const сomponent = shallow(
            <MainComponent/>
        );
        expect(сomponent).matchSnapshot();
    });
});