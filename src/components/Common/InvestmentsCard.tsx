import React from 'react';
import Image from 'next/image';
import styles from './reliance-industries.module.css';

interface RelianceIndustriesProps {
  equity: string;
}

const RelianceIndustries: React.FC<RelianceIndustriesProps> = ({ equity }) => {
  return (
    <div className={`${styles.container} p-4 bg-gray-200 rounded-md`}>
      <h3 className="text-lg font-medium">Reliance Industries</h3>
      <p className="text-base mt-1">{equity} Equity</p>
    </div>
  );
};

export default RelianceIndustries;