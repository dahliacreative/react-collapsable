import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Collapsible = ({
  isOpen,
  minAnimationDuration,
  maxAnimationDuration,
  speedDivider,
  easing,
  children,
  keepChildrenOnClose,
  ...restProps
}) => {
  const content = useRef();
  const [state, setState] = useState({
    height: isOpen ? 'auto' : 0,
    speed: 0,
  });

  const [effectiveChildren, setChildren] = useState(children);

  const handleClose = () => {
    if (!isOpen) {
      content.current.style.visibility = 'hidden';

      if (!keepChildrenOnClose) {
        // remove child
        setChildren(null);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      const contentHeight = content.current.scrollHeight;
      const time = contentHeight / speedDivider;
      const animation =
        time < minAnimationDuration
          ? minAnimationDuration
          : time > maxAnimationDuration
          ? maxAnimationDuration
          : time;
      content.current.style.visibility = 'visible';
      setChildren(children);
      setState({
        ...state,
        height: contentHeight,
        speed: animation,
      });
    } else {
      setState({
        ...state,
        height: 0,
      });
    }
  }, [
    isOpen,
    minAnimationDuration,
    maxAnimationDuration,
    speedDivider,
    children,
    effectiveChildren,
  ]);

  return (
    <div
      {...restProps}
      style={{
        overflow: 'hidden',
        height: state.height,
        transition: `height ${state.speed}s ${easing}`,
      }}
      onTransitionEnd={handleClose}
    >
      <div ref={content} style={{ overflow: 'auto' }}>
        {effectiveChildren}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  isOpen: PropTypes.bool,
  minAnimationDuration: PropTypes.number,
  maxAnimationDuration: PropTypes.number,
  speedDivider: PropTypes.number,
  easing: PropTypes.string,
  keepChildrenOnClose: PropTypes.bool,
};

Collapsible.defaultProps = {
  isOpen: false,
  minAnimationDuration: 0.3,
  maxAnimationDuration: 1,
  speedDivider: 1000,
  easing: 'ease-in-out',
};

export default Collapsible;
