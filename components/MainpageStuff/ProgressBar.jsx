'use client'
import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressDemo = ({ progressVal }) => {
    return (
        <Progress.Root
            className="relative overflow-hidden bg-[#8f8080] rounded-full mx-auto w-[85%] h-[16px] lg:h-[25px] my-auto"
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
    );
};

export default ProgressDemo;