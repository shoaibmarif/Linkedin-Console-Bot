# LinkedIn Invitation Withdraw Automation Script

This repository contains a JavaScript script that automates the process of withdrawing sent invitations on LinkedIn. The script iteratively clicks the "Withdraw" button for each pending connection request and confirms the action, navigating through pages until all requests are processed.

## How to Use

Follow these steps to use this script:

1. **Go to Your LinkedIn Connections Page**:
   - Log in to your LinkedIn account.
   - Navigate to the `My Network` tab at the top of the LinkedIn homepage.

2. **Access the Manage Invitations Page**:
   - In the `Grow` section on the left side, find the **Manage** option and click it.
   - This will open the **Manage Invitations** page.

3. **Switch to the Sent Invitations Tab**:
   - On the Manage Invitations page, click the **Sent** tab to view all the invitations you have sent.

4. **Open Browser Developer Tools**:
   - Right-click anywhere on the page and select **Inspect** (or press `Ctrl+Shift+I` on Windows or `Cmd+Option+I` on Mac).
   - Go to the **Console** tab in the Developer Tools.

5. **Paste and Run the Script**:
   - Copy the script from this repository.
   - Paste it into the console and press `Enter` to run the script.

6. **Let the Script Run**:
   - The script will start automating the withdrawal of invitations. It will:
     - Click the "Withdraw" button for each pending request.
     - Confirm the withdrawal action.
     - Navigate to the next page until all requests are withdrawn.
   - The console will display the progress, including the number of invitations withdrawn.

## Important Notes
- **Use this script responsibly**: Automating actions on LinkedIn may violate their terms of service. Use this script at your own discretion.
- **Adjust Timing**: If you encounter issues with the timing (e.g., elements loading too slowly), you may need to adjust the `setTimeout` values in the script.
- **Test First**: It’s a good idea to test the script with a small number of invitations before running it on a larger batch.

## Disclaimer
This script is for educational purposes only. The author is not responsible for any misuse or violation of LinkedIn’s terms of service.
