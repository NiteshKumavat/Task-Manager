import React from 'react'
import './project_detail.css'
function ProjectDetail() {
    const data = [
        { task: 'Design UI', status: 'Completed', created_at: '2023-01-01', start_at: '2023-01-01', deadline : '2023-01-05' },
        { task: 'Develop Backend', status: 'In Progress', created_at: '2023-01-02', start_at: '2023-01-02', deadline : '2023-01-06' },
        { task: 'Testing', status: 'Pending', created_at: '2023-01-03', start_at: '2023-01-03', deadline : '2023-01-07' },
        { task: 'Deployment', status: 'Pending', created_at: '2023-01-04', start_at: '2023-01-04', deadline : '2023-01-08' }
    ]
  return (
    <div id="project-detail">
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Start At</th>
                    <th>Deadline</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.task}</td>
                        <td className={
                            item.status === "Completed" ? "status-completed" :
                            item.status === "In Progress" ? "status-progress" :
                            "status-pending"
                        }>
                            {item.status}
                        </td>
                        <td>{item.created_at}</td>
                        <td>{item.start_at}</td>
                        <td>{item.deadline}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProjectDetail