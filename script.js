document.getElementById('weekly-update-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission
    const data = {
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        weekEnding: document.getElementById('week-ending').value,
        task1: document.getElementById('task1').value,
        task2: document.getElementById('task2').value,
        task3: document.getElementById('task3').value,
        skill: document.getElementById('skill').value,
        training: document.getElementById('training').value,
        learnings: document.getElementById('learnings').value,
        challenge1: document.getElementById('challenge1').value,
        solution1: document.getElementById('solution1').value,
        issues: document.getElementById('issues').value,
        nextTask1: document.getElementById('next-task1').value,
        nextTask2: document.getElementById('next-task2').value,
        nextTask3: document.getElementById('next-task3').value,
        feedback: document.getElementById('feedback').value,
        suggestions: document.getElementById('suggestions').value,
        notes: document.getElementById('notes').value,
    };
    console.log('Form Data Submitted:', data);
    // Code to send data to SharePoint/Excel Online using Microsoft Graph API
});

document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const filterName = document.getElementById('filter-name').value;
    const filterDate = document.getElementById('filter-date').value;

    // Fetch data and apply filters
    // Example: Filter rows where 'Name' matches filterName and 'Week Ending' matches filterDate

    const filteredData = [
        // Mock filtered data
        {
            name: 'John Doe',
            position: 'Intern',
            weekEnding: '2023-07-10',
            task1: 'Task A',
            task2: 'Task B',
            task3: 'Task C',
            skill: 'New Skill',
            training: 'Training 1',
            learnings: 'Learning 1',
            challenge1: 'Challenge 1',
            solution1: 'Solution 1',
            issues: 'Issue 1',
            nextTask1: 'Next Task A',
            nextTask2: 'Next Task B',
            nextTask3: 'Next Task C',
            feedback: 'Feedback 1',
            suggestions: 'Suggestion 1',
            notes: 'Note 1',
        }
    ];

    let resultsHTML = '';
    filteredData.forEach(data => {
        resultsHTML += `
            <div class="report">
                <h3>${data.name} (${data.position}) - Week Ending: ${data.weekEnding}</h3>
                <p><strong>Tasks:</strong> ${data.task1}, ${data.task2}, ${data.task3}</p>
                <p><strong>Skill/Knowledge Acquired:</strong> ${data.skill}</p>
                <p><strong>Training/Workshop/Course Attended:</strong> ${data.training}</p>
                <p><strong>Key Learnings:</strong> ${data.learnings}</p>
                <p><strong>Challenges and Solutions:</strong> ${data.challenge1} - ${data.solution1}</p>
                <p><strong>Ongoing Issues:</strong> ${data.issues}</p>
                <p><strong>Next Week’s Plan:</strong> ${data.nextTask1}, ${data.nextTask2}, ${data.nextTask3}</p>
                <p><strong>Feedback:</strong> ${data.feedback}</p>
                <p><strong>Suggestions:</strong> ${data.suggestions}</p>
                <p><strong>Additional Notes:</strong> ${data.notes}</p>
            </div>
        `;
    });

    document.getElementById('filtered-results').innerHTML = resultsHTML;
});
