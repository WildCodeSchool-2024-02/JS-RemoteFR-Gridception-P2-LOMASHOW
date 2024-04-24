import { useState } from "react";
import PropTypes from "prop-types";

export default function Swipeable({ children, onSwipeLeft, onSwipeRight }) {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const minSwipeDistance = 50;

  function onTouchStart(e) {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndY(null);
    setTouchStartY(e.targetTouches[0].clientY);
  }

  function onTouchMove(e) {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  }

  function swipeHorizontal() {
    const xDistance = touchStartX - touchEndX;
    const yDistance = touchStartY - touchEndY;
    if (Math.abs(yDistance) >= Math.abs(xDistance)) {
      return;
    }

    const isLeftSwipe = xDistance > minSwipeDistance;
    const isRightSwipe = xDistance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }

    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  }

  function onTouchEnd() {
    if (touchStartX && touchEndX) swipeHorizontal();
  }

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}

Swipeable.propTypes = {
  children: PropTypes.element.isRequired,
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired,
};
