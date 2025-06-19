import React, { useState } from 'react';
import { Button } from 'antd';
import PermissionCheckboxTree from './components/PermissionCheckboxTree';
import { useLocation, useNavigate } from 'react-router-dom';

const EditGroupRole = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const group_role = location.state.group;
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleSave = () => {
        console.log('Quyền đã chọn:', selectedPermissions);
    };

    return (
        <>
            <button className='btn-primary' onClick={() => navigate(-1)}>Quay lại</button>
            <h2>Phân quyền nhóm {group_role}</h2>
            <PermissionCheckboxTree
                value={selectedPermissions}
                onChange={setSelectedPermissions}
            />
            <Button type="primary" onClick={handleSave} style={{ marginTop: 16 }}>
                Lưu
            </Button>
        </>
    );
};

export default EditGroupRole;
