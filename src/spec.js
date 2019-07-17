import React from 'react'
import { mount } from 'enzyme'
import Collapsable from '.'

const defineScrollHeight = height => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        get: function() {
            return height
        }
    })
}

defineScrollHeight(500)

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

    it('Opens', done => {
        const component = mount(
            <Collapsable>
                <h1>My Title</h1>
            </Collapsable>
        )
        component.setProps({ isOpen: true })
        setTimeout(() => {
            expect(component).toMatchSnapshot()
            done()
        }, 500)
    })

    it('Closes', done => {
        const component = mount(
            <Collapsable isOpen>
                <h1>My Title</h1>
            </Collapsable>
        )
        component.setProps({ isOpen: false })
        setTimeout(() => {
            expect(component).toMatchSnapshot()
            done()
        }, 500)
    })

    it('Respects maxAnimationDuration', done => {
        defineScrollHeight(2000)
        const component = mount(
            <Collapsable>
                <h1>My Title</h1>
            </Collapsable>
        )
        component.setProps({ isOpen: true })
        setTimeout(() => {
            expect(component).toMatchSnapshot()
            done()
        }, 1000)
    })

    it('Respects minAnimationDuration', done => {
        defineScrollHeight(100)
        const component = mount(
            <Collapsable>
                <h1>My Title</h1>
            </Collapsable>
        )
        component.setProps({ isOpen: true })
        setTimeout(() => {
            expect(component).toMatchSnapshot()
            done()
        }, 300)
    })
})
