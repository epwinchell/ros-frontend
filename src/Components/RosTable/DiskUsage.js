import { Tooltip } from '@patternfly/react-core';
import React from 'react';
import { NO_DATA_STATE, NO_DATA_VALUE } from '../../constants';
import './DiskUsage.scss';

export const diskUsageTitle = () =>{
    return (
        <Tooltip content={<span>IOPS</span>}>
            <span>I/O utilization</span>
        </Tooltip>
    );
};

export const DiskUsageData = (data, id, item) => {
    const { state, performance_utilization: performanceUtilization } = item;
    const { io_all: iopsAll } = performanceUtilization;

    return (
        state === NO_DATA_STATE ?
            <span>{ NO_DATA_VALUE }</span> :
            <Tooltip position="right" content={
                <div>
                    <table>
                        <tr>
                            <th>Device name</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td colSpan="100%" className="seperator"></td>
                        </tr>
                        {
                            Object.keys(iopsAll).map((deviceName, index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{deviceName}</td>
                                        <td>{iopsAll[deviceName]}</td>
                                        <td>IOPS</td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                </div>
            }>
                <span>{data}</span>
            </Tooltip>
    );
};
