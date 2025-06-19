import { Table } from 'antd';
import React, { } from 'react';

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const sampleData = [
    {
        group_name: 'superadmin',
        permissions: '512',
        members: '2',
        level: '100',
        descriptions: 'Super Admin'
    },
    {
        group_name: 'admin',
        permissions: '256',
        members: '7',
        level: '80',
        descriptions: 'Admin'
    },
    {
        group_name: 'ctv',
        permissions: '32',
        members: '1024',
        level: '10',
        descriptions: 'Cong Tac Vien'
    },
    {
        group_name: 'lgh_team',
        permissions: '128',
        members: '12',
        level: '30',
        descriptions: 'Team Loi Giai Hay'
    }
];

const GroupRole = () => {
    const navigate = useNavigate();
    const column = [
        {
            title: 'Group',
            dataIndex: 'group_name',
            align: 'center',
        },
        {
            title: 'Permissions',
            dataIndex: 'permissions',
            align: 'center',
        },
        {
            title: 'Members',
            dataIndex: 'members',
            align: 'center',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            align: 'center',
        },
        {
            title: 'Description',
            dataIndex: 'descriptions',
            align: 'center',
        },
        {
            title: 'Action',
            align: 'center',
            render: (_, record) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                        <CiEdit style={{ fontSize: '20px' }} onClick={() => navigate('edit', { state: { group: record.group_name } })} />
                        <MdDelete style={{ fontSize: '20px' }} />
                    </div>
                )
            }
        }
    ]
    return (
        <>
            <h2>List Group Role</h2>
            <Table dataSource={sampleData} columns={column} style={{ border: '1px solid gray', padding: '10px', borderRadius: '10px' }} />
        </>
    );
}

export default GroupRole;
