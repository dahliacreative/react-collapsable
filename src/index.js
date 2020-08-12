import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Collapsable = ({
    isOpen,
    minAnimationDuration,
    maxAnimationDuration,
    speedDivider,
    easing,
    children,
    keepChildrenOnClose
}) => {
    const content = useRef()
    const [state, setState] = useState({
        height: isOpen ? 'auto' : 0,
        speed: 0
    })

    const [keepChildren, toggleChildren] = useState(isOpen)

    const handleClose = () => {
        if (!isOpen) {
            content.current.style.visibility = 'hidden'

            if (!keepChildrenOnClose) {
                // remove child
                toggleChildren(false)
            }
        }
    }

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
            content.current.style.visibility = 'visible'
            toggleChildren(true)
            setState({
                ...state,
                height: contentHeight,
                speed: animation
            })
        } else {
            setState({
                ...state,
                height: 0
            })
        }
    }, [
        isOpen,
        minAnimationDuration,
        maxAnimationDuration,
        speedDivider,
        keepChildren
    ])

    return (
        <div
            style={{
                overflow: 'hidden',
                height: state.height,
                transition: `height ${state.speed}s ${easing}`
            }}
            onTransitionEnd={handleClose}>
            <div ref={content} style={{ overflow: 'auto' }}>
                {keepChildren && children}
            </div>
        </div>
    )
}

Collapsable.propTypes = {
    isOpen: PropTypes.bool,
    minAnimationDuration: PropTypes.number,
    maxAnimationDuration: PropTypes.number,
    speedDivider: PropTypes.number,
    easing: PropTypes.string,
    keepChildrenOnClose: PropTypes.bool
}

Collapsable.defaultProps = {
    isOpen: false,
    minAnimationDuration: 0.3,
    maxAnimationDuration: 1,
    speedDivider: 1000,
    easing: 'ease-in-out'
}

export default Collapsable
