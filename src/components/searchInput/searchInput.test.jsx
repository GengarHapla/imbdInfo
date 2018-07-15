import React from "react";
import searchInput from "./searchInput";

describe('SearchInput component', () => {
    it('renders correctly', () => {
        expect(<searchInput/>).toMatchSnapshot();
    })
})