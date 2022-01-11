import React from 'react';

export default function Button() {
    return (
        <button
            data-testid="element-button"
            style={{ color: 'rgb(18, 255, 18)', backgroundColor: 'transparent', border: 0, fontFamily: 'Courier', fontSize: '33pt' }}>
            Wake up Neo...
        </button>
    );
};