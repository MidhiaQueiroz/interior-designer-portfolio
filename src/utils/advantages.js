import React from 'react';
import { CiCalculator2 } from 'react-icons/ci';
import { GiLightBulb } from 'react-icons/gi';
import { LuHeartHandshake } from 'react-icons/lu';

const advantages = [
    {
        id: 0,
        icon: <GiLightBulb className="advantage-icon" />,
        title: 'CREATIVITY',
        description:
            'I try to approach each project with creativity, so as to transform ordinary spaces into works of art. The projects are full of unusual elements and unconventional ideas. Creativity allows me to create interiors that are functional and aesthetic at the same time.'
    },
    {
        id: 1,
        icon: <CiCalculator2 className="advantage-icon" />,
        title: 'SCRUPULOUSESS',
        description:
            'My work is my business card, so every detail matters. We diligently plan, design and implement so that each interior reflects not only beauty, but also functionality. We make sure that the materials are carefully selected and the workmanship meets the highest standards.'
    },
    {
        id: 2,
        icon: <LuHeartHandshake className="advantage-icon" />,
        title: 'COMMUNICATION',
        description:
            'I	appreciate	good communication. I listen carefully to your dreams, needs and concerns to create a project that perfectly reflects your vision. Thanks to open and transparent communication, I am able to cooperate effectively and adjust the approach to your expectations.'
    }
];

export default advantages;
