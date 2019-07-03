import React from 'react'
import { mount } from 'enzyme'
import Collapsable from '.'

describe('<Collapsable/>', () => {
    it('Renders without crashing', () => {
        const component = mount(
            <Collapsable>
                <h1>My Title</h1>
            </Collapsable>
        )
        expect(component).toMatchSnapshot()
    })

    it('Renders open by default', () => {
        const component = mount(
            <Collapsable isOpen>
                <h1>My Title</h1>
            </Collapsable>
        )
        expect(component).toMatchSnapshot()
    })
})
