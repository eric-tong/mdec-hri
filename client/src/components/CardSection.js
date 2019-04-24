import React from 'react';

export default function CardSection({ header, content }) {
    return <div class="section">
        <h2>{header}</h2>
        <p>{content}</p>
    </div>
}