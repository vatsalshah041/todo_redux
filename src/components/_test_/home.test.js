import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";
import { Provider } from 'react-redux';
import store from '../redux/store'; 
test('should render home component',()=>{
    render(
    <Provider store={store}>
    <Home></Home>
    </Provider>
    );
    const homeelement=screen.getByTestId('home-1');
    expect(homeelement).toBeInTheDocument();
})