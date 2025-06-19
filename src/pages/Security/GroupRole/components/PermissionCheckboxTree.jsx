// PermissionCheckboxTree.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Checkbox, Card, Divider } from 'antd';
import routes from '../../../../config/routes';

const extractPermissionTree = (routes) => {
    const dfs = (items) =>
        items
            .filter(item => item.key_permissions)
            .map(item => ({
                key: item.key_permissions,
                label: item.label || item.path || item.key,
                hidden: item.hidden || false,
                children: item.children ? dfs(item.children) : undefined,
            }));
    return dfs(routes);
};

const findParentMap = (tree, parent = null, map = {}) => {
    for (const node of tree) {
        if (node.children) {
            node.children.forEach(child => {
                map[child.key] = node.key;
                findParentMap([child], node, map);
            });
        }
    }
    return map;
};

const PermissionCheckboxTree = ({ value = [], onChange }) => {
    const permissionTree = useMemo(() => extractPermissionTree(routes), []);
    const parentMap = useMemo(() => findParentMap(permissionTree), [permissionTree]);
    const [checked, setChecked] = useState(value);

    useEffect(() => {
        setChecked(value);
    }, [value]);

    const updateParentState = (updated) => {
        const newChecked = new Set(updated);
        const recurse = (key) => {
            const parent = parentMap[key];
            if (!parent) return;
            const siblings = Object.entries(parentMap)
                .filter(([_, p]) => p === parent)
                .map(([k]) => k);
            const allSiblingsChecked = siblings.every(k => newChecked.has(k));
            if (allSiblingsChecked) {
                newChecked.add(parent);
                recurse(parent);
            } else {
                newChecked.delete(parent);
            }
        };
        updated.forEach(recurse);
        return Array.from(newChecked);
    };

    const checkNode = (node, isChecked, list = []) => {
        list.push(node.key);
        if (node.children) {
            node.children.forEach(child => checkNode(child, isChecked, list));
        }
        return list;
    };

    const handleCheck = (node, isChecked) => {
        const keysToUpdate = checkNode(node, isChecked);
        let newChecked = new Set(checked);
        keysToUpdate.forEach(k => {
            if (isChecked) newChecked.add(k);
            else newChecked.delete(k);
        });
        const finalChecked = updateParentState(Array.from(newChecked));
        setChecked(finalChecked);
        onChange?.(finalChecked);
    };

    const renderTree = (nodes, depth = 0) =>
        nodes.map((node) => (
            <div
                key={node.key}
                style={{
                    marginLeft: depth * 20,
                    padding: '8px 12px',
                    borderRadius: 8,
                    transition: 'background 0.2s',
                    cursor: 'pointer',
                    userSelect: 'none',
                    backgroundColor: checked.includes(node.key) ? '#f0f5ff' : 'transparent',
                    fontWeight: node.children ? 600 : 400,
                    fontSize: 14,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e6f7ff';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = checked.includes(node.key)
                        ? '#f0f5ff'
                        : 'transparent';
                }}
            >
                <Checkbox
                    checked={checked.includes(node.key)}
                    onChange={(e) => handleCheck(node, e.target.checked)}
                >
                    <span style={node.hidden ? { color: '#999' } : {}}>
                        {node.label}
                        {node.hidden && <span style={{ marginLeft: 4, fontStyle: 'italic' }}>[Route Ẩn]</span>}
                    </span>
                </Checkbox>

                {node.children && (
                    <div style={{ marginTop: 4 }}>{renderTree(node.children, depth + 1)}</div>
                )}
            </div>
        ));


    return (
        <Card title="Danh sách quyền truy cập" variant={false}>
            {renderTree(permissionTree)}
            <Divider style={{ margin: '16px 0 0' }} />
        </Card>
    );

};

export default PermissionCheckboxTree;
