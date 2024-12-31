'use client';
import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressDemo = ({ progressVal }) => {
    return (
        <div className="flex flex-col items-center">
            <Progress.Root
                className="relative overflow-hidden bg-[#8f8080] rounded-full w-[85%] h-[16px] lg:h-[25px] my-auto"
                style={{
                    transform: 'translateZ(0)',
                }}
                value={progressVal}
            >
                <Progress.Indicator
                    className={`bg-[#d6aa9d] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
                    style={{ transform: `translateX(-${100 - progressVal}%)` }}
                />
            </Progress.Root>
            {/* Percentage Labels */}
            <div className="flex justify-between w-[85%] mt-2 text-sm text-gray-700 font-bold">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
            </div>
        </div>
    );
};

export default ProgressDemo;
