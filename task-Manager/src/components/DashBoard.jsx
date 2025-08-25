import React from 'react'
import './dashBoard.css'
import Timeline from './Timeline'
import DonutChart from './Donutchart'
import ProjectDetail from './project_details'
import Calendar from './Calendar'

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
                    <ProjectDetail />
                </div>
            </div>
            <div className="project-calendar">
                <h2>Calendar</h2>
                <Calendar />
            </div>
        </div>
    </div>
  )
}

export default DashBoard
