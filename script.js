// Quiz data - Windows 11 Questions
const quizData = [
    {
        question: "1. Windows 11 is developed by:",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        correct: 1
    },
    {
        question: "2. Windows 11 was officially released in:",
        options: ["2018", "2020", "2021", "2022"],
        correct: 2
    },
    {
        question: "3. The default position of the Taskbar in Windows 11 is:",
        options: ["Left", "Right", "Top", "Center"],
        correct: 3
    },
    {
        question: "4. Which version of Windows directly preceded Windows 11?",
        options: ["Windows 7", "Windows 8.1", "Windows 10", "Windows Vista"],
        correct: 2
    },
    {
        question: "5. The minimum RAM requirement for Windows 11 is:",
        options: ["2 GB", "4 GB", "6 GB", "8 GB"],
        correct: 1
    },
    {
        question: "6. Which of the following is a new feature introduced in Windows 11?",
        options: ["Aero Peek", "Snap Layouts", "Cortana", "Classic Start Menu"],
        correct: 1
    },
    {
        question: "7. The Start Menu in Windows 11 is:",
        options: ["Left-aligned by default", "Center-aligned by default", "Hidden by default", "Removed completely"],
        correct: 1
    },
    {
        question: "8. Which of the following hardware is mandatory for Windows 11 installation?",
        options: ["HDD", "TPM 2.0", "2nd Gen i3 Processor", "Optical Drive"],
        correct: 1
    },
    {
        question: "9. The virtual desktop feature in Windows 11 is used to:",
        options: ["Create backup copies", "Manage multiple desktop environments", "Change wallpaper automatically", "Access BIOS"],
        correct: 1
    },
    {
        question: "10. Which shortcut opens Task Manager in Windows 11?",
        options: ["Ctrl + Shift + Esc", "Ctrl + Alt + T", "Alt + F4", "Ctrl + Alt + Del"],
        correct: 0
    },
    {
        question: "11. The file management utility in Windows 11 is:",
        options: ["Windows Media Player", "File Explorer", "Control Panel", "Task Manager"],
        correct: 1
    },
    {
        question: "12. Windows 11 supports which of the following store apps by default?",
        options: ["Google Play Store", "Apple App Store", "Microsoft Store", "None"],
        correct: 2
    },
    {
        question: "13. The feature that allows you to run Android apps in Windows 11 is:",
        options: ["Windows Sandbox", "Windows Subsystem for Android", "Hyper-V", "WSL"],
        correct: 1
    },
    {
        question: "14. The Widgets feature in Windows 11 provides:",
        options: ["Hardware monitoring", "Personalized news and weather updates", "System restore options", "File encryption"],
        correct: 1
    },
    {
        question: "15. Which of the following can be used to search applications or files in Windows 11?",
        options: ["Settings app", "Search bar in Taskbar", "File Explorer only", "Run command"],
        correct: 1
    },
    {
        question: "16.The default browser in Windows 11 is:",
        options: ["Chrome", "Internet Explorer", "Microsoft Edge (Chromium-based)", "Firefox"],
        correct: 2
    },
    {
        question: "17. The Snap Assist feature helps:",
        options: ["Share files over the network", "Arrange windows neatly on screen", "Install drivers automatically", "Manage system updates"],
        correct: 1
    },
    {
        question: "18. Which shortcut locks your Windows 11 computer?",
        options: ["Ctrl + L", "Win + L", "Alt + L", "Shift + L"],
        correct: 1
    },
    {
        question: "19. Windows 11 supports which file systems?",
        options: ["FAT32 and NTFS", "HFS+ and EXT4", "FAT12 only", "APFS"],
        correct: 0
    },
    {
        question: "20. The Action Center in Windows 11 has been replaced by:",
        options: ["Notification Panel", "Quick Settings and Notification Center", "Control Panel", "Task Scheduler"],
        correct: 1
    },
    {
        question: "21.To rename a file in Windows 11, the shortcut key is:",
        options: ["F2", "Ctrl + R", "Alt + N", "Shift + R"],
        correct: 0
    },
    {
        question: "22. Which edition of Windows 11 is mainly for business environments?",
        options: ["Windows 11 Home", "Windows 11 Pro", "Windows 11 Student", "Windows 11 Core"],
        correct: 1
    },
    {
        question: "23. Which of the following is used for voice control in Windows 11?",
        options: ["Alexa", "Cortana", "Siri", "Bixby"],
        correct: 1
    },
    {
        question: "24. The Settings app in Windows 11 replaces:",
        options: ["BIOS", "Control Panel (partially)", "Registry Editor", "CMD"],
        correct: 1
    },
    {
        question: "25. The Windows Hello feature is used for:",
        options: ["System backup", "Biometric authentication", "File encryption", "Driver installation"],
        correct: 1
    },
    {
        question: "26. Which of the following allows you to manage startup applications in Windows 11?",
        options: ["File Explorer","Task Manager","Registry Editor","Settings > Apps > Startup"],
        correct: 3
    },
    {
        question: "27. The shortcut to open Settings quickly in Windows 11 is:",
        options: ["Ctrl + S","Win + I","Alt + S","Ctrl + Alt + I"],
        correct: 1
    },
    {
        question: "28. Which component in Windows 11 displays quick-access icons like Wi-Fi, battery, and volume?",
        options: ["Action Center","Taskbar corner overflow","Notification Area (System Tray)","Start Menu"],
        correct: 2
    },
    {
        question: "29. The Snap Groups feature is used for:",
        options: ["Creating user accounts","Saving arranged window layouts","Grouping files in folders","Combining network devices"],
        correct: 1
    },
    {
        question: "30. Windows 11 allows installing Android apps via:",
        options: ["Google Play Store","Microsoft Store + Amazon Appstore","Windows Defender","None of these"],
        correct: 1
    },
    {
        question: "31. The Windows Security app mainly protects against:",
        options: ["Piracy","Malware and viruses","RAM overflow","Data compression"],
        correct: 1
    },
    {
        question: "32. The Device Manager utility is used to:",
        options: ["Manage system updates","Control hardware devices and drivers","Customize themes","Encrypt files"],
        correct: 1
    },
    {
        question: "33. The shortcut Win + E opens:",
        options: ["Settings","File Explorer","Task Manager","Control Panel"],
        correct: 1
    },
    {
        question: "34. Windows 11 supports running Linux commands through:",
        options: ["PowerShell","CMD","Windows Subsystem for Linux (WSL)","Git Bash only"],
        correct: 2
    },
    {
        question: "35. Which folder stores temporary files created by programs?",
        options: ["Program Files","Temp","System32","AppData\\Roaming"],
        correct: 1
    },
    {
        question: "36. Which Windows 11 feature creates and manages restore points?",
        options: ["Task Scheduler","System Protection (System Restore)","File History","Disk Cleanup"],
        correct: 1
    },
    {
        question: "37. The BitLocker feature provides:",
        options: ["File compression","Disk encryption","Performance tuning","Power management"],
        correct: 1
    },
    {
        question: "38. The Clipboard History feature can be opened with shortcut:",
        options: ["Ctrl + C","Win + V","Alt + V","Win + C"],
        correct: 1
    },
    {
        question: "39. Which Windows 11 feature allows secure online login using Microsoft Account?",
        options: ["Windows Defender","Windows Hello","OneDrive Sign-in","Smart Login"],
        correct: 1
    },
    {
        question: "40. The Windows Update option is found under which Settings category?",
        options: ["System","Privacy & Security","Windows Update","Network & Internet"],
        correct: 2
    },
    {
        question: "41. Which key combination minimizes all open windows?",
        options: ["Win + M","Alt + M","Ctrl + M","Shift + M"],
        correct: 0
    },
    {
        question: "42. The Disk Cleanup utility is used to:",
        options: ["Format drives","Delete temporary and junk files","Defragment drives","Backup system"],
        correct: 1
    },
    {
        question: "43. Which tool checks disk errors in Windows 11?",
        options: ["Disk Cleanup","Check Disk (chkdsk)","Disk Management","Format Tool"],
        correct: 1
    },
    {
        question: "44. The Run dialog box can be opened using:",
        options: ["Win + R","Win + Alt + R","Ctrl + R","Alt + R"],
        correct: 0
    },
    {
        question: "45. The Power Options are available in:",
        options: ["File Explorer","Settings > System > Power & Battery","Microsoft Store","Task Manager"],
        correct: 1
    },
    {
        question: "46. Windows 11 offers dark and light modes under:",
        options: ["Personalization > Colors","Accessibility","Display Settings","System Preferences"],
        correct: 0
    },
    {
        question: "47. Task View in Windows 11 shows:",
        options: ["Installed apps","Open windows and virtual desktops","Storage devices","Recycle Bin"],
        correct: 1
    },
    {
        question: "48. The Recycle Bin stores deleted files until:",
        options: ["System restart","Manual emptying or automatic cleanup","Shutdown","Update"],
        correct: 1
    },
    {
        question: "49. Which shortcut opens Quick Settings?",
        options: ["Win + A","Win + N","Win + S","Win + Q"],
        correct: 0
    },
    {
        question: "50. Widgets in Windows 11 can be opened with:",
        options: ["Win + W","Win + E","Win + N","Win + Shift + W"],
        correct: 0
    },
    {
        question: "51. Windows 11 supports DirectStorage, which improves:",
        options: ["Game loading times","File copy speed","Printer performance","Internet speed"],
        correct: 0
    },
    {
        question: "52. Dynamic Refresh Rate (DRR) in Windows 11 helps:",
        options: ["Improve graphics performance and battery life","Increase volume","Reduce storage usage","Enable multi-user access"],
        correct: 0
    },
    {
        question: "53. The Windows Terminal application combines:",
        options: ["Only CMD","PowerShell, CMD, and WSL","Only PowerShell","BIOS access"],
        correct: 1
    },
    {
        question: "54. Virtual Desktops are created via:",
        options: ["File Explorer","Task View button","Control Panel","Command Prompt"],
        correct: 1
    },
    {
        question: "55. The OneDrive feature is used for:",
        options: ["Hardware management","Cloud storage and backup","Malware protection","Software installation"],
        correct: 1
    },
    {
        question: "56. The default file manager in Windows 11 is called:",
        options: ["File Manager","File Explorer","My Documents","Folder Viewer"],
        correct: 1
    },
    {
        question: "57. The Quick Access section of File Explorer shows:",
        options: ["System files","Frequently used and recent files/folders","Hidden files","Downloads only"],
        correct: 1
    },
    {
        question: "58. Hidden files in File Explorer can be viewed by enabling:",
        options: ["Layout > Show > Hidden Items","Folder Properties","Right-click and Refresh","None"],
        correct: 0
    },
    {
        question: "59. Windows Update Service ensures:",
        options: ["Timely OS and security updates","Deletion of old files","Removal of viruses","Defragmentation of drives"],
        correct: 0
    },
    {
        question: "60. The Registry Editor stores:",
        options: ["System configuration and user settings","Multimedia files","Temporary internet files","BIOS data"],
        correct: 0
    },
     {
        question: "61. The User Account Control (UAC) feature in Windows 11 is designed to:",
        options: ["Prevent unauthorized changes to the system", "Improve gaming performance", "Manage display brightness", "Update Windows automatically"],
        correct: 0
    },
    {
        question: "62. The Control Panel option 'Programs and Features' is used to:",
        options: ["View network connections", "Uninstall or modify installed programs", "Create user accounts", "Backup data"],
        correct: 1
    },
    {
        question: "63. The Run command used to open Device Manager is:",
        options: ["devmgmt.msc", "diskmgmt.msc", "compmgmt.msc", "taskmgr"],
        correct: 0
    },
    {
        question: "64. The Command Prompt shortcut key from Start Menu is:",
        options: ["Ctrl + Shift + Enter", "Ctrl + Alt + Enter", "Shift + Enter", "Ctrl + Enter"],
        correct: 0
    },
    {
        question: "65. Windows 11 uses which file system for internal drives?",
        options: ["FAT16", "NTFS", "exFAT", "EXT4"],
        correct: 1
    },
    {
        question: "66. The Network & Internet settings help manage:",
        options: ["Wi-Fi, Ethernet, VPN, and Mobile Hotspot", "Audio devices", "Battery settings", "Desktop wallpapers"],
        correct: 0
    },
    {
        question: "67. The Windows Defender Firewall protects your PC from:",
        options: ["Network-based attacks", "Hardware failure", "Data compression", "Overheating"],
        correct: 0
    },
    {
        question: "68. Which Windows tool is used to schedule automatic tasks?",
        options: ["Disk Cleanup", "Task Scheduler", "System Restore", "File History"],
        correct: 1
    },
    {
        question: "69. The System Information tool command is:",
        options: ["msinfo32", "sysinfo", "info.exe", "systemrun"],
        correct: 0
    },
    {
        question: "70. To open the Registry Editor, you use the Run command:",
        options: ["regedit", "regmgr", "registry", "regman"],
        correct: 0
    },
    {
        question: "71. Windows 11's Accessibility (Ease of Access) includes:",
        options: ["Narrator, Magnifier, High contrast, Speech recognition", "Only screen reader", "Only keyboard shortcuts", "None"],
        correct: 0
    },
    {
        question: "72. The Narrator tool helps users by:",
        options: ["Reading on-screen text aloud", "Increasing brightness", "Updating drivers", "Checking storage"],
        correct: 0
    },
    {
        question: "73. The Magnifier feature allows:",
        options: ["Enlarging screen content for visibility", "Zooming in photos only", "Increasing font size permanently", "None"],
        correct: 0
    },
    {
        question: "74. The Sticky Keys feature is used for:",
        options: ["Accessibility for users with limited mobility", "Keeping apps open", "Preventing system crash", "Taskbar pinning"],
        correct: 0
    },
    {
        question: "75. The Windows Security Center shows protection status of:",
        options: ["Virus & Threat Protection, Firewall, Device Security, Account Protection", "Only antivirus", "Only updates", "Only files"],
        correct: 0
    },
    {
        question: "76. The BitLocker option is available in which edition of Windows 11?",
        options: ["Home", "Pro and Enterprise", "Student", "Core"],
        correct: 1
    },
    {
        question: "77. The Windows Defender Offline Scan is used to:",
        options: ["Detect malware before Windows starts", "Delete temporary files", "Clean cache", "Update drivers"],
        correct: 0
    },
    {
        question: "78. File History automatically backs up:",
        options: ["Personal files in libraries, desktop, favorites", "Entire hard drive", "Program Files", "BIOS settings"],
        correct: 0
    },
    {
        question: "79. To check IP configuration, the Run command is:",
        options: ["ipconfig", "netstat", "ping", "tracert"],
        correct: 0
    },
    {
        question: "80. Windows Backup and Restore (Legacy) uses which file extension for backups?",
        options: [".zip", ".vhd", ".bak", ".iso"],
        correct: 1
    },
    {
        question: "81. The Task Manager 'Performance' tab shows:",
        options: ["CPU, Memory, Disk, Network usage", "Installed Apps", "Battery status", "Color theme"],
        correct: 0
    },
    {
        question: "82. The Startup Impact column in Task Manager shows:",
        options: ["Effect of an app on system boot time", "Storage size", "Network speed", "None"],
        correct: 0
    },
    {
        question: "83. The Services tab in Task Manager displays:",
        options: ["Running Windows services", "Installed apps", "Game settings", "Wallpapers"],
        correct: 0
    },
    {
        question: "84. The Event Viewer tool is used to:",
        options: ["Check logs and troubleshoot system issues", "Watch videos", "Backup files", "Test audio"],
        correct: 0
    },
    {
        question: "85. Which Windows tool helps defragment hard drives?",
        options: ["Optimize Drives", "Disk Cleanup", "File History", "Device Manager"],
        correct: 0
    },
    {
        question: "86. The Snipping Tool is used for:",
        options: ["Capturing screenshots", "Editing text", "Deleting files", "Playing music"],
        correct: 0
    },
    {
        question: "87. The Power Toys utility provides:",
        options: ["Advanced productivity tools like FancyZones, PowerRename", "Gaming support", "Hardware drivers", "Backup solutions"],
        correct: 0
    },
    {
        question: "88. The Windows Insider Program allows users to:",
        options: ["Test pre-release versions of Windows", "Join Microsoft Teams", "Upgrade automatically to Pro", "Access BIOS"],
        correct: 0
    },
    {
        question: "89. Windows 11's Cloud Clipboard synchronizes:",
        options: ["Clipboard items across devices using Microsoft Account", "Temporary files", "Recycle Bin", "Desktop themes"],
        correct: 0
    },
    {
        question: "90. Dynamic Lock locks your PC when:",
        options: ["Your paired Bluetooth device goes out of range", "You press Alt + L", "Battery low", "Network disconnects"],
        correct: 0
    },
    {
        question: "91. The Focus Assist feature helps:",
        options: ["Reduce notifications during specific times or tasks", "Increase performance", "Change brightness", "Save battery"],
        correct: 0
    },
    {
        question: "92. Storage Sense automatically:",
        options: ["Frees space by deleting temporary files", "Installs drivers", "Formats drives", "Manages users"],
        correct: 0
    },
    {
        question: "93. Windows Update for Business provides:",
        options: ["Centralized update management for enterprises", "Personal themes", "Power settings", "Keyboard layouts"],
        correct: 0
    },
    {
        question: "94. Windows Sandbox feature provides:",
        options: ["Temporary isolated environment to run untrusted apps", "Disk backup", "Network control", "User account creation"],
        correct: 0
    },
    {
        question: "95. The Hyper-V feature in Windows 11 is used for:",
        options: ["Creating and running virtual machines", "Increasing network speed", "Power management", "Driver updates"],
        correct: 0
    },
    {
        question: "96. The TPM 2.0 requirement ensures:",
        options: ["Hardware-based security features", "Higher performance", "Audio enhancement", "Better graphics"],
        correct: 0
    },
    {
        question: "97. Secure Boot ensures:",
        options: ["Only trusted OS components load at startup", "Faster boot speed", "Cooling management", "App compatibility"],
        correct: 0
    },
    {
        question: "98. The Windows Hello PIN is stored:",
        options: ["Locally on the device in secure hardware", "In Microsoft cloud", "In OneDrive", "In password manager"],
        correct: 0
    },
    {
        question: "99. The OneDrive Personal Vault provides:",
        options: ["Extra security with two-factor authentication for files", "Extra storage space", "Public sharing", "System backup"],
        correct: 0
    },
    {
        question: "100. The File Compression feature allows:",
        options: ["Reducing file size to save disk space", "Copying files", "Encrypting folders", "Formatting drive"],
        correct: 0
    },
    {
        question: "101. To quickly open Quick Link Menu, press:",
        options: ["Win + X", "Win + Z", "Win + C", "Win + N"],
        correct: 0
    },
    {
        question: "102. The Quick Link Menu provides shortcuts to:",
        options: ["Device Manager, Disk Management, Task Manager, etc.", "Wallpapers", "Accessibility options", "Cloud apps"],
        correct: 0
    },
    {
        question: "103. Battery Saver mode helps:",
        options: ["Extend battery life by limiting background activities", "Boost CPU speed", "Increase brightness", "Disable sleep mode"],
        correct: 0
    },
    {
        question: "104. The Windows Mobility Center is used to manage:",
        options: ["Battery, display brightness, and presentation settings (mainly for laptops)", "Printers", "File sharing", "Virtual machines"],
        correct: 0
    },
    {
        question: "105. Disk Management can be accessed via:",
        options: ["diskmgmt.msc", "devmgmt.msc", "compmgmt.msc", "sysedit"],
        correct: 0
    },
    {
        question: "106. The Computer Management console combines:",
        options: ["Task Scheduler, Event Viewer, Device Manager, Disk Management", "Only Task Manager", "Only Control Panel", "Power Options"],
        correct: 0
    },
    {
        question: "107. The Services.msc command is used to:",
        options: ["Manage Windows services", "View startup apps", "Delete temporary files", "Install drivers"],
        correct: 0
    },
    {
        question: "108. The Command Prompt command to list all running tasks is:",
        options: ["tasklist", "taskrun", "listtasks", "showapps"],
        correct: 0
    },
    {
        question: "109. The ping command is used to:",
        options: ["Test network connectivity", "Check disk errors", "Install updates", "View user accounts"],
        correct: 0
    },
    {
        question: "110. The tracert command:",
        options: ["Traces route packets take to a network destination", "Tracks file movement", "Checks disk speed", "Monitors RAM"],
        correct: 0
    },
    {
        question: "111. The netstat command displays:",
        options: ["Active network connections and ports", "File extensions", "CPU usage", "Installed drivers"],
        correct: 0
    },
    {
        question: "112. PowerShell is mainly used for:",
        options: ["Task automation and configuration management", "Gaming", "Photo editing", "Audio mixing"],
        correct: 0
    },
    {
        question: "113. The Windows Package Manager (winget) is used to:",
        options: ["Install, update, and uninstall apps via command line", "Compress files", "Create shortcuts", "Change themes"],
        correct: 0
    },
    {
        question: "114. The System Restore utility helps to:",
        options: ["Revert system files and settings to previous state", "Recover deleted files", "Uninstall programs", "Reset passwords"],
        correct: 0
    },
    {
        question: "115. The Reset this PC option is found under:",
        options: ["Settings > System > Recovery", "Control Panel > Programs", "File Explorer > This PC", "Network & Sharing Center"],
        correct: 0
    },
    {
        question: "116. The Recovery Drive can be created using:",
        options: ["Recovery Drive Tool in Control Panel", "Windows Store", "Command Prompt", "Task Manager"],
        correct: 0
    },
    {
        question: "117. The Safe Mode starts Windows with:",
        options: ["Minimal drivers and services for troubleshooting", "Full graphics", "Gaming mode", "Developer features"],
        correct: 0
    },
    {
        question: "118. To open Safe Mode, you can use:",
        options: ["Shift + Restart → Advanced Options", "Ctrl + Alt + Del", "F10", "Win + X"],
        correct: 0
    },
    {
        question: "119. The Blue Screen of Death (BSOD) usually indicates:",
        options: ["Critical system error or hardware failure", "Display update", "Low battery", "Screen brightness issue"],
        correct: 0
    },
    {
        question: "120. The System Configuration (msconfig) tool is used to:",
        options: ["Manage startup items and boot options", "Install apps", "Check Wi-Fi signal", "Monitor storage"],
        correct: 0
    },
    {
        question: "121. A local user account in Windows 11 is:",
        options: ["Connected to Microsoft cloud services", "Only available on that PC and not synced online", "Used for domain login only", "Same as administrator account"],
        correct: 1
    },
    {
        question: "122. To add a new user account you go to:",
        options: ["Control Panel > Network Settings", "Settings > Accounts > Family & other users", "System Properties", "File Explorer > Users Folder"],
        correct: 1
    },
    {
        question: "123. An Administrator account can:",
        options: ["Install apps and change system settings", "Access other users' data always", "Delete system files only", "Restrict network access"],
        correct: 0
    },
    {
        question: "124. To switch between user accounts quickly:",
        options: ["Alt + Tab", "Ctrl + Alt + Del → Switch user", "Win + D", "Ctrl + S"],
        correct: 1
    },
    {
        question: "125. The Microsoft Store in Windows 11 offers:",
        options: ["Apps, games, movies, and themes", "Only system updates", "Antivirus only", "BIOS updates"],
        correct: 0
    },
    {
        question: "126. Paid content from Microsoft Store requires:",
        options: ["Offline license", "Microsoft Account and payment method", "TPM chip", "BitLocker"],
        correct: 1
    },
    {
        question: "127. To pin an app to the Taskbar, you:",
        options: ["Drag it onto the Taskbar or right-click > Pin to taskbar", "Copy it to System32", "Open it with PowerShell", "Use Win + T"],
        correct: 0
    },
    {
        question: "128. To unpin an app from the Taskbar:",
        options: ["Delete the shortcut", "Right-click > Unpin from taskbar", "Restart PC", "Press Win + U"],
        correct: 1
    },
    {
        question: "129. You can change the Taskbar alignment to left from:",
        options: ["Taskbar Settings > Taskbar behaviors", "Control Panel > Display", "File Explorer", "Run command"],
        correct: 0
    },
    {
        question: "130. The Desktop background can be changed through:",
        options: ["Personalization > Background", "System > Display", "Control Panel > Hardware", "Accessibility"],
        correct: 0
    },
    {
        question: "131. To change the accent color:",
        options: ["Personalization > Colors", "System > Sound", "Network & Internet", "Control Panel > Security"],
        correct: 0
    },
    {
        question: "132. The Lock Screen image can be set from:",
        options: ["Personalization > Lock screen", "System > Display", "Accessibility", "Power Options"],
        correct: 0
    },
    {
        question: "133. Themes in Windows 11 combine:",
        options: ["Wallpaper, accent color, sounds, and cursor style", "Only wallpaper", "Fonts only", "Security settings"],
        correct: 0
    },
    {
        question: "134. To adjust display resolution:",
        options: ["Settings > System > Display", "Control Panel > Fonts", "Device Manager", "Microsoft Store"],
        correct: 0
    },
    {
        question: "135. To arrange open windows side by side, use:",
        options: ["Snap Layouts or Win + Arrow keys", "Ctrl + Alt + Del", "Task Manager", "Alt + Enter"],
        correct: 0
    },
    {
        question: "136. Alt + Tab is used to:",
        options: ["Switch between open apps", "Open Settings", "Lock computer", "Show desktop"],
        correct: 0
    },
    {
        question: "137. Win + D shortcut does:",
        options: ["Shows or hides the desktop", "Deletes files", "Opens Downloads", "Displays date/time"],
        correct: 0
    },
    {
        question: "138. Win + Tab opens:",
        options: ["Task View", "Settings", "File Explorer", "Start Menu"],
        correct: 0
    },
    {
        question: "139. Alt + F4 closes:",
        options: ["The current window or shuts down from desktop", "Task Manager", "Clipboard", "Lock screen"],
        correct: 0
    },
    {
        question: "140. Win + R opens which dialog?",
        options: ["Run", "Rename", "Refresh", "Restart"],
        correct: 0
    },
    {
        question: "141. Ctrl + Shift + Esc opens:",
        options: ["Task Manager directly", "Settings", "File Explorer", "Power Options"],
        correct: 0
    },
    {
        question: "142. Win + L performs:",
        options: ["Locks the computer", "Logs off completely", "Opens Settings", "Starts search"],
        correct: 0
    },
    {
        question: "143. Win + Shift + S is used for:",
        options: ["Taking a snip (screenshot selection)", "Shutting down", "Switching users", "Screen rotation"],
        correct: 0
    },
    {
        question: "144. To open Clipboard History, press:",
        options: ["Win + V", "Ctrl + V", "Alt + V", "Win + C"],
        correct: 0
    },
    {
        question: "145. Win + E opens:",
        options: ["File Explorer", "Edge browser", "Excel", "Email"],
        correct: 0
    },
    {
        question: "146. Win + I opens:",
        options: ["Settings", "Internet Explorer", "Icons Panel", "Info menu"],
        correct: 0
    },
    {
        question: "147. To quickly open Notification Center:",
        options: ["Win + N", "Win + A", "Alt + N", "Ctrl + N"],
        correct: 0
    },
    {
        question: "148. The Windows Key + P shortcut is used for:",
        options: ["Project (display mode selection)", "Printing", "Pause music", "Power options"],
        correct: 0
    },
    {
        question: "149. Win + Spacebar switches:",
        options: ["Input language or keyboard layout", "Desktop background", "Virtual desktop", "Brightness"],
        correct: 0
    },
    {
        question: "150. To open System Properties window quickly:",
        options: ["Win + Pause/Break", "Alt + Pause", "Ctrl + Break", "Win + Enter"],
        correct: 0
    }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizCompleted = false;

// DOM elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const finalScoreElement = document.getElementById('final-score');
const maxScoreElement = document.getElementById('max-score');
const scorePercentageElement = document.getElementById('score-percentage');
const scoreMessageElement = document.getElementById('score-message');
const quizSummaryElement = document.getElementById('quiz-summary');
const restartBtn = document.getElementById('restart-btn');

// Initialize quiz
function initQuiz() {
    totalQuestionsElement.textContent = quizData.length;
    maxScoreElement.textContent = quizData.length;
    userAnswers = new Array(quizData.length).fill(null);
    loadQuestion();
    updateProgress();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    updateButtons();
}

// Select an option
function selectOption(optionIndex) {
    if (quizCompleted) return;
    
    // Remove previous selection
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add selection to clicked option
    options[optionIndex].classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Update score if this is the correct answer
    if (optionIndex === quizData[currentQuestion].correct) {
        if (!userAnswers[currentQuestion] || userAnswers[currentQuestion] !== optionIndex) {
            score++;
            scoreElement.textContent = score;
        }
    }
}

// Update navigation buttons
function updateButtons() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressElement.style.width = progress + '%';
}

// Go to next question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

// Go to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Submit quiz
function submitQuiz() {
    quizCompleted = true;
    showResults();
}

// Show results
function showResults() {
    // Calculate final score
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            finalScore++;
        }
    });
    
    // Hide quiz container and show results
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Update final score display
    finalScoreElement.textContent = finalScore;
    const percentage = Math.round((finalScore / quizData.length) * 100);
    scorePercentageElement.textContent = percentage + '%';
    
    // Show score message
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! You have excellent knowledge!';
        messageClass = 'excellent';
    } else if (percentage >= 70) {
        message = 'Great job! You have good knowledge!';
        messageClass = 'good';
    } else if (percentage >= 50) {
        message = 'Not bad! Keep learning to improve!';
        messageClass = 'average';
    } else {
        message = 'Keep studying! You can do better next time!';
        messageClass = 'poor';
    }
    
    scoreMessageElement.textContent = message;
    scoreMessageElement.className = 'score-message ' + messageClass;
    
    // Show quiz summary
    showQuizSummary();
}

// Show quiz summary
function showQuizSummary() {
    let summaryHTML = '<h4>Quiz Summary</h4>';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        summaryHTML += `
            <div class="summary-item">
                <span>Question ${index + 1}:</span>
                <span class="${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
            </div>
        `;
    });
    
    quizSummaryElement.innerHTML = summaryHTML;
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    quizCompleted = false;
    
    scoreElement.textContent = score;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    initQuiz();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizCompleted) return;
    
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            if (currentQuestion < quizData.length - 1) {
                nextQuestion();
            } else {
                submitQuiz();
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            e.preventDefault();
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex >= 0 && optionIndex < 4) {
                selectOption(optionIndex);
            }
            break;
    }
});

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);
