import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Collapsable = ({
    isOpen,
    minAnimationDuration,
    maxAnimationDuration,
    speedDivider,
    children
}) => {
    const content = useRef()
    const [height, setHeight] = useState(isOpen ? 'auto' : 0)
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
        if (isOpen) {
            const contentHeight = content.current.scrollHeight
            const time = contentHeight / speedDivider
            const animation =
                time < minAnimationDuration
                    ? minAnimationDuration
                    : time > maxAnimationDuration
                    ? maxAnimationDuration
                    : time
            setHeight(contentHeight)
            setSpeed(animation)
        } else {
            setHeight(0)
        }
    }, [
        isOpen,
        minAnimationDuration,
        maxAnimationDuration,
        speedDivider,
        children
    ])

    return (
        <div
            style={{
                overflow: 'hidden',
                height: height,
                transition: `height ${speed}s`
            }}>
            <div ref={content}>{children}</div>
        </div>
    )
}

Collapsable.propTypes = {
    isOpen: PropTypes.bool,
    minAnimationDuration: PropTypes.number,
    maxAnimationDuration: PropTypes.number,
    speedDivider: PropTypes.number
}

Collapsable.defaultProps = {
    isOpen: false,
    minAnimationDuration: 0.3,
    maxAnimationDuration: 1,
    speedDivider: 1000
}

export default Collapsable
