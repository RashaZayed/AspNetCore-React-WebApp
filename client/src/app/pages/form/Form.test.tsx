import React from 'react';
import Form from './Form';
import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure } from 'enzyme';

configure({ adapter: new Adapter() });



describe('<Form />', () => {

    //test rendering without crashing
    it('renders without crashing', () => {
        shallow(<Form />);
    });

    //test initial state
    it('Form inputs with initial state', () => {
        const wrapper = shallow(<Form />);
        const text = wrapper.find('[data-testid="nameValue"]').text();
        expect(text).toEqual('');

        const textAddressLine1 = wrapper.find('[data-testid="address1Value"]').text();
        expect(textAddressLine1).toEqual('');

        const textAddressLine2 = wrapper.find('[data-testid="address2Value"]').text();
        expect(textAddressLine2).toEqual('');

        const textCity = wrapper.find('[data-testid="cityValue"]').text();
        expect(textCity).toEqual('');

        const textState = wrapper.find('[data-testid="stateValue"]').text();
        expect(textState).toEqual('');

        const textZip= wrapper.find('[data-testid="zipValue"]').text();
        expect(textZip).toEqual('');

        const textCountry = wrapper.find('[data-testid="countryValue"]').text();
        expect(textCountry).toEqual('');

    });

   

    it('testing form', () => {
        let wrapper;
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState")
        useStateSpy.mockImplementation((init) => [init, setState]);
    
        beforeEach(() => {
            wrapper = Enzyme.shallow(<Form />).get(0);
        });
    
        afterEach(() => {
            jest.clearAllMocks();
    });
});
    it("Should capture title correctly onChange", () => {
    const wrapper = shallow(<Form />);
        
    const setState = jest.fn();
    const title = wrapper.find("input").at(0);
    title.instance().value = "Test";
    title.simulate("change");
    expect(setState).toHaveBeenCalledWith("Test");
});

   
    it("Should capture content correctly onChange", () => {
        const wrapper = Enzyme.shallow(<Form />);
        const setState = jest.fn();
        const content = wrapper.find("input").at(1);
        content.instance().value = "Testing";
        content.simulate("change");
        expect(setState).toHaveBeenCalledWith("Testing");
    });
});

