import React from 'react';

const UpdateDisaster = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Update Disaster</h2>
            <form style={styles.form}>
                <div>
                    <label style={styles.label}>Disaster Name:</label>
                    <input type="text" placeholder="Enter disaster name" style={styles.input} />
                </div>
                <div>
                    <label style={styles.label}>Description:</label>
                    <textarea placeholder="Enter disaster description" style={styles.input}></textarea>
                </div>
                <div>
                    <label style={styles.label}>Date:</label>
                    <input type="date" style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Update</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
    },
    label: {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        color: '#333',
    },
    button: {
        padding: '12px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        transition: 'background-color 0.3s',
    }
};

export default UpdateDisaster;
