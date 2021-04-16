import React from 'react';

function Experience() {
    return (
        <div>
            <h1 style={{ color: '#FFF' }}>Naeem Ahmed</h1>
            <p style={{ color: '#FFF' }}>Work on following projects</p>
            <ul>
                <a href="http://naeemexpensetracker.surge.sh/" style={{ color: '#FFF' }}>
                    <li >Expense Tracker</li>
                </a>
                <a href="http://naeemcovid19tracker.surge.sh/" style={{ color: '#FFF' }}>
                    <li >Covid19 Tracker</li>
                </a>
                <a href="http://naeemshoestore.surge.sh/" style={{ color: '#FFF' }}>
                    <li >Shoe Store</li>
                </a>
                <a href="http://naeemredqueen.surge.sh/" style={{ color: '#FFF' }}>
                    <li >Red Queen</li>
                </a>
            </ul>
        </div>
    )
}

export default Experience;