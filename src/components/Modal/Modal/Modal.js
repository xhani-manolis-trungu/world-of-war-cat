import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import ReactPortal from '../ReactPortals';
import './modalStyles.scss';

function Modal({ children, isOpen, handleClose }) {
	const nodeRef = useRef(null);
	
	useEffect(() => {
		let count = 0;
		console.log(`use effect in Modal is called ${count = count + 1} times`);
		const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [handleClose]);


	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<CSSTransition
				in={isOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames="modal"
				nodeRef={nodeRef}
			>
				<div className="modal" ref={nodeRef}>
					<button
						className="close-btn"
						onClick={() => handleClose()}>
						Close
					</button>
					<div className="modal-content">
						<div className="parent">
							<div className="div1">
									<img
										className="modal-image"
										src={children.image}
										alt="cat"
									/>
							</div>
							<div className="div2">{children.name}</div>
							<div className="div3">Test</div>
							<div className="div4">Test role</div>
						</div>
					</div>
					<div className="modal-footer">
						<button className="close-btn">Share</button>
					</div>
				</div>
			</CSSTransition>
		</ReactPortal>
	);
}

export default Modal;