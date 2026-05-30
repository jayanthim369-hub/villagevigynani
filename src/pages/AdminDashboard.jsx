import React from 'react';
import PageShell from './PageShell';

const rows = [
  ['Arduino Foundations', 'Course', 'Approved'],
  ['ESP8266 Weather Station', 'Video', 'Pending'],
  ['Robotics Lab', 'Course', 'Approved'],
];

const AdminDashboard = () => (
  <PageShell title="Admin Dashboard" eyebrow="Operations" description="Review content status and platform activity.">
    <div className="glass-card" style={{ padding: '24px' }}>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead><tr><th>Title</th><th>Type</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map(([title, type, status]) => (
              <tr key={title}>
                <td>{title}</td>
                <td>{type}</td>
                <td><span className={`badge ${status === 'Approved' ? 'badge-approved' : 'badge-pending'}`}>{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </PageShell>
);

export default AdminDashboard;
