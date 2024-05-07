import React from "react"
import './simpleErrorPopupStyle.scss';

export const SimpleErrorPopup = (props) => {
    const {
        isPopupOpen,
        onClose,
        onOk=onClose,
        headerText='Hello!',
        messageText='This is a popup message',
        buttonText='Okey dokey!',
    } = props;

    return (
        <React.Fragment>
            {isPopupOpen &&
                <div className={"popup"}>
                    <button type="button"
                            className={"popup-dismiss"}
                            onClick={onClose}
                    >
                        ×
                    </button>
                    <div className={"popup-header"}>
                        <div className={"popup-content"}>
                            <span className={"popup-title"}>
                                {headerText}
                            </span>
                            <p className={"popup-message"}>
                                {messageText}
                            </p>
                        </div>
                        <div className={"popup-actions"}>
                            <button type="button"
                                    className={"popup-ok"}
                                    onClick={onOk}>
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};