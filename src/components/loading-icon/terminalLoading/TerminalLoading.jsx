import React from 'react';
import './TerminalLoadingStyle.scss';

export const TerminalLoading = (props) => {
    const { isOpen, contentText = 'Loading...', headerText='status' } = props;

    return (
        <React.Fragment>
            { isOpen &&
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">{headerText}</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">{contentText}</div>
            </div>
            }
        </React.Fragment>
    );
};