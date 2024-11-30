index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Grouping by Priority</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .board {
            display: flex;
            gap: 20px;
            padding: 20px;
        }
        .column {
            background: #fff;
            border-radius: 8px;
            padding: 15px;
            width: 200px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .column h3 {
            margin-top: 0;
            font-size: 18px;
            color: #333;
        }
        .task {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
        }
        .task p {
            margin: 0;
            font-size: 14px;
        }
        .task span {
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; padding: 10px; background: #333; color: #fff;">Grouping by Priority</h1>
    <div class="board">
        <div class="column">
            <h3>No Priority 2</h3>
            <div class="task">
              <B>CAM-2</B>
                <p>Implement Email Notification System </p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-3</B>
                <p>Optimize Database Queries for Performance</p>
                <span>Feature Request</span>
            </div>
        </div>
        <div class="column">
            <h3>Urgent 2</h3>
            <div class="task">
               <B>CAM-4</B>
                <p>Add Multi-Language Support</p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-11</B>
                <p>Conduct Security Vulnerability Assessment</p>
                <span>Feature Request</span>
            </div>
        </div>
        <div class="column">
            <h3>High 3</h3>
            <div class="task">
               <B>CAM-6</B>
                <p>Enhance Search Functionality</p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-8</B>
                <p>Create Onboarding Tutorial for New Users</p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-1</B>
                <p>Update User Profile Page UI</p>
                <span>Feature Request</span>
            </div>
        </div>
        <div class="column">
            <h3>Medium 2</h3>
            <div class="task">
               <B>CAM-7</B>
                <p>Integrate Third-Party Payment Gateway</p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-9</B>
                <p>Implement Role-Based Access Control (RBAC)</p>
                <span>Feature Request</span>
            </div>
        </div>
        <div class="column">
            <h3>Low 2</h3>
            <div class="task">
               <B>CAM-10</B>
                <p>Upgrade Server Infrastructure</p>
                <span>Feature Request</span>
            </div>
            <div class="task">
               <B>CAM-5</B>
                <p>Add Multi-Language Support - Enable within the...</p>
                <span>Feature Request</span>
            </div>
        </div>
    </div>
</body>
</html>

