<H2>Google Apps Script Email Reader</H2>
<a href="https://script.google.com/home/projects/1imrKjSpl8-6Jj63XaDRFo6oXFBfNrNLYmFzAOHJsWmMpqYtjBQPzao20/edit">Scripts Editor</a>
<a href="https://script.google.com/a/macros/nsuok.edu/s/AKfycbz9rd7u7nP30dLFl9SUtA079HRTdTqlhNL8lmy7Qajv3AK-WbdiGffuC7Fs7J6NtgzTSg/exec">Email and Roster Manager</a>
</p>
This Google Apps Script project is a web application that reads emails and writes important information into specific Google Spreadsheets. The user can select a target spreadsheet from a dropdown list in the web app.
</p>
</p>
<strong>How it Works</strong></p>
The application consists of three main parts:</P>

<ul><strong>index.html</strong>: This is the user interface of the web app. It contains a dropdown list for selecting a target Google Spreadsheet and a button to authorize the app.
</p>
<strong>EmailReader.gs</strong>: This script handles the authorization process, reads emails from a specific Gmail account, extracts important information from the emails, and writes this information into the selected Google Spreadsheet.</p>
<strong>UserInfoProcessor.gs</strong>: This script processes the body of the emails and extracts user information based on predefined patterns.</ul>
</p>
</p>

<strong>Setup and Usage</strong>
</p>

To set up and run the application, follow these steps:
<ol>
1. Create a new Google Apps Script project: Go to Google Apps Script and create a new project. </p>
2. Copy the scripts: Copy the contents of index.html, EmailReader.gs, and UserInfoProcessor.gs into the corresponding files in your Apps Script project. </p>
3. Set up OAuth2: The script uses OAuth2 for authorization. You’ll need to set up an OAuth2 client ID and secret in the Google Cloud Console and add them to the script. </p>
4. Deploy as a web app: In the Apps Script editor, click on “Publish” > “Deploy as web app”. Choose the project version and set the access level to “Anyone, even anonymous”. Click “Update” to deploy the app. </p>
5. Run the app: Open the web app URL in your browser. Select a spreadsheet from the dropdown list and click “Authorize” to start processing emails. </p>
<strong>Please note that the script is set up to read emails from a specific Gmail account and search for emails with the subject containing the word “ordered”. You may need to modify the script to suit your specific needs. </strong>
</ol>
</p>
</p>
<strong>Customization</strong></p>
You can customize the script to suit your needs. You can modify the regular expressions in UserInfoProcessor.gs to extract different information from the emails. You can also add more options to the dropdown list in index.html to target different spreadsheets.</p>
<strong>Limitations</strong></p>
The script is subject to the limitations and quotas of Google Apps Script, such as the maximum execution time and the rate limits for reading emails and writing to spreadsheets.
</p></p>
<strong>Troubleshooting</strong></p>
If you encounter issues while running the script, check the logs in the Apps Script editor for error messages. Make sure that the script has the necessary permissions to access your Gmail account and the target spreadsheet.
</p></p>
<strong>Contributing</strong></p>
Contributions to improve the script are welcome. Please feel free to submit issues and pull requests.
</p></p>
<strong>License</strong></p>
This project is licensed under the MIT License. See the LICENSE file for details.



