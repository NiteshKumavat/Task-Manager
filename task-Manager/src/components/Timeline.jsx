import { useState } from "react";
import React from "react";
import './timeline.css'

const Timeline = () => {
    const [tasks, setTasks] = useState([
        { id: 1, project: 'Video UI design', days: [0, 1, 1, 1, 0] },
        { id: 2, project: 'Placele dog design', days: [0, 0, 1, 1, 1] },
        { id: 3, project: 'Adline panel design', days: [1, 1, 0, 0, 0] },
        { id: 4, project: 'Cooking & Development', days: [0, 0, 0, 1, 1] },
        { id: 5, project: 'Presentation and publish', days: [1, 0, 0, 0, 1] }
    ]);

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    return (
        <div className="container">
            
            <div className="timeline-container">
                <div className="timeline">
                    <div className="header-cell">Projects</div>
                    {weekdays.map((day, index) => (
                        <div key={index} className="day-cell">{day}</div>
                    ))}
                    
                    {tasks.map((task, index) => (
                        <React.Fragment key={task.id}>
                            <div className="project-cell">{task.project}</div>
                            {task.days.map((day, dayIndex) => (
                                <div key={dayIndex} className="task-cell">
                                    {day ? <div className={`task task-${index % 5}`}>{task.project.split(' ')[0]}</div> : null}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                    
                    <div className="divider"></div>
                    
                    <div className="project-cell">Online user guide & print points</div>
                    <div className="task-cell"><div className="milestone">M</div></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    
                    <div className="project-cell">Convert confidence to Design – Task Reviewing</div>
                    <div className="empty-cell"></div>
                    <div className="task-cell"><div className="milestone">M</div></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    
                    <div className="project-cell">Refine, use more & save items</div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="task-cell"><div className="milestone">M</div></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    
                    <div className="project-cell">Prefix or publish</div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="task-cell"><div className="milestone">M</div></div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;