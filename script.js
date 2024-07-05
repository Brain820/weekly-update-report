document.getElementById('weekly-update-form').addEventListener('submit', function(e) {
    e.preventDefault();

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
