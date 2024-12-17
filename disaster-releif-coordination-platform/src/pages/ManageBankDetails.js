import React from 'react';

const ManageBankDetails = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Manage Bank Details</h2>
            <p>Here you can manage the bank details for donations.</p>
            {/* Display bank details management options here */}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default ManageBankDetails;
