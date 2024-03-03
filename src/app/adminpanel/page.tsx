import React from 'react';

type Props = {
    children: React.ReactNode;
};
const AdminPanel = (props: Props) => {

    return (
        <>
            <h4>Admin panel</h4>
            <h5>Information about our users:</h5>
        </>
    );
};

export default AdminPanel;