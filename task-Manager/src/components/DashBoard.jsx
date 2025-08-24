import React from 'react'
import './dashBoard.css'
import Timeline from './Timeline'
import DonutChart from './Donutchart'

function DashBoard() {
  return (
    <div className='task-planner'>
        <nav className="title-profile">
            <h1>Task Manager</h1>
            <div className="profile">
                <img src="" alt="" />
                <p>Name</p>
            </div>
        </nav>
        <div className="project-details">
            <div className="task-timeline">
                <h2>Task Timeline</h2>
                <Timeline />    
            </div>
            <div className="project-chart">
                <h2>Donut Chart</h2>
                <DonutChart completed={7} incomplete={3} />
            </div>
            <div className="project-info">
                <h2>Project Details</h2>
                <div className="task-table">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Project Name</th>
                                <th>Status</th>
                                <th>Progress</th>
                                <th>Price</th>
                                <th>Views</th>
                                <th>Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
