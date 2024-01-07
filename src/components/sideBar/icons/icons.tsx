import React from 'react';

import ClassesIconSvg from 'public/icons/pagesIcons/ClassesIcon.svg';
import ExamIconSvg from 'public/icons/pagesIcons/ExamIcon.svg';
import StaticsIconSvg from 'public/icons/pagesIcons/StaticsIcon.svg';
import RecommandationIconSvg from 'public/icons/pagesIcons/RecommandationIcon.svg';
import CalendarIconSvg from 'public/icons/pagesIcons/CalendarIcon.svg';

interface ClassesIconProps {
    fill: string;
}

const ClassesIcon: React.FC<ClassesIconProps> = ({ fill }) =>
    <ClassesIconSvg fill={fill} />


const ExamIcon: React.FC<ClassesIconProps> = ({ fill }) =>
    <ExamIconSvg fill={fill} />


const StaticsIcon: React.FC<ClassesIconProps> = ({ fill }) =>
    <StaticsIconSvg fill={fill} />


const RecommandationIcon: React.FC<ClassesIconProps> = ({ fill }) =>
    <RecommandationIconSvg fill={fill} />


const CalendarIcon: React.FC<ClassesIconProps> = ({ fill }) =>
    <CalendarIconSvg fill={fill} />

export { ClassesIcon, ExamIcon, StaticsIcon, RecommandationIcon, CalendarIcon };
