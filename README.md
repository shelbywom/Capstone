<H2>Google Apps Script Email Reader</H2>
<a href="https://script.google.com/home/projects/1imrKjSpl8-6Jj63XaDRFo6oXFBfNrNLYmFzAOHJsWmMpqYtjBQPzao20/edit" target="_blank">Scripts Editor</a>
<a href="https://script.google.com/a/macros/nsuok.edu/s/AKfycbxGoFvSvxE4Nk7om89ty4eppj6FEy3QMSY4sGNZ8WCQSCVmXxpuUV2_aroMBSXtNHEvmA/exec" target="_blank">Email and Roster Manager</a>
</p>
This Google Apps Script project is a web application that reads emails and writes important information into specific Google Spreadsheets. The user can select a target spreadsheet from a dropdown list in the web app.
</p>
</p>
<strong>How it Works</strong></p>
The application is designed to automate large quantities of emails and parse them for relevant data. Afterward, the program will place the relevant data in a target google spreadsheet of choice.</p>
The application consists of three main parts:</P>

<ul><strong>index.html</strong>: This is the user interface of the web app. It contains a dropdown list for selecting a target Google Spreadsheet and a button to authorize the app.
</p>
<strong>EmailReader.gs</strong>: This script handles the authorization process, reads emails from a specific Gmail account, extracts important information from the emails, and writes this information into the selected Google Spreadsheet.</p>
<strong>UserInfoProcessor.gs</strong>: This script processes the body of the emails and extracts user information based on predefined patterns.</ul>
</p>
</p>

<strong>Setup and Usage</strong>
</p>

To set up and run the application, follow these steps: (As it currently stands, only NSU users have access to the scripts)
<ol>
1. Open the Hyperlink to "Scripts Editor" </p>
2. Navigate to the index.html script in the editor and locate the container titled "Select Spreadsheet". </p>
3. Your target spreadsheets must be included as option values for each spreadsheet. You can find the IDs of spreadsheets in the spreadsheet URL between d/ and /edit. Add the Target spreadsheets to the program.</p>
4. Deploy as a web app: In the Apps Script editor, click on “Deploy” > “New Deployment”. Add a description and execute as "user accessing the web app". Allow access to "Anyone within NSU". Click “Deploy” to deploy the app. </p>
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
<strong>Support</strong></p>
For further support, email me at womack03@nsuok.edu</p>
<strong>Contributing</strong></p>
Contributions to improve the script are welcome. Please feel free to submit issues and pull requests.
</p></p>
<strong>License</strong></p>
This project is licensed under the MIT License. See the LICENSE file for details.



