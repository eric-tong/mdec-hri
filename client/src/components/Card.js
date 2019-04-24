import React from 'react';
import CardSection from './CardSection';

export default function OverviewCard() {
    return <div class="overview">
        <h1>Overview</h1>
        <CardSection header="Drones deployed" content="3" />
        <CardSection header="Connected devices" content="24" />
        <CardSection header="Data responses" content="36" />
    </div>;
}