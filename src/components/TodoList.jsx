
import React, { useState } from 'react'

export default function TodoList() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])

    const handleSubmit = () => {
        setJobs(prev => [...prev, job])
        setJob('')
    }
    return (
        <div>
            <input type="text" value={job} onChange={e => setJob(e.target.value)} />
            <button onClick={handleSubmit}>add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

