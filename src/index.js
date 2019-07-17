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
    const [state, setState] = useState({
        height: isOpen ? 'auto' : 0,
        speed: 0
    })

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
            setTimeout(() => {
                content.current.style.visibility = 'hidden'
            }, state.speed * speedDivider)
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
                height: state.height,
                transition: `height ${state.speed}s`
            }}>
            <div ref={content} style={{ overflow: 'auto' }}>
                {children}
            </div>
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
