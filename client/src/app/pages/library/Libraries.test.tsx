import React from 'react';
import Libraries from './Libraries';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';


configure({ adapter: new Adapter() });

//check the component rendering 
describe('<Libraries />', () => {
    it('renders without crashing', () => {
        shallow(<Libraries />);
    });

    //check displaying one list
    it(' displaying one list', () => {
        const wrapper = shallow(<Libraries/>);
        const text = wrapper.find('[data-testid="list"]')
        expect(text.length).toEqual(1);
    });
});
