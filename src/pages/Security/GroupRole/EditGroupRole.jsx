import React, { useState } from 'react';
import { Button } from 'antd';
import PermissionCheckboxTree from './components/PermissionCheckboxTree';
import { useNavigate } from 'react-router-dom';

const EditGroupRole = () => {
    const navigate = useNavigate();
    const [selectedPermissions, setSelectedPermissions] = useState([
        'user', 'user-bill', 'files'
    ]);

    const handleSave = () => {
        console.log('Quyền đã chọn:', selectedPermissions);
        // Gửi API lưu quyền cho group
    };

    return (
        <>
            <button className='btn-primary' onClick={() => navigate(-1)}>Quay lại</button>
            <h2>Phân quyền nhóm</h2>
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
