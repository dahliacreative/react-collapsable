import React from 'react'
import Collapsable from '.'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

storiesOf('Collapsable', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Collapsable
            isOpen={boolean('isOpen', false)}
            minAnimationDuration={number('minAnimationDuration', 0.3)}
            maxAnimationDuration={number('maxAnimationDuration', 1)}
            speedDivider={number('speedDivider', 1000)}>
            <h1>This is a title</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
            </p>
            <img src="http://placehold.it/500" alt="" />
        </Collapsable>
    ))
