# Quickstart - Using Profile control features

This document provides information on how to use Profile control features from the UI. 

Using the Profile control  solution, one can add and delete profiles from the Database using RPS microservices through Web console.

## Profile control

On loading the profile control in the web console, one will see the list of profiles avaialbale in the database in a tabular format as below

<div align="center">
	<img src="assets/images/profileHome.png"  width="600" height="auto"/> 
</div>


### Create profile

A button 'new' is provided to add a new profile to the database.


<div align="center">
	<img src="assets/images/profileCreate.png"  width="600" height="auto"/> 
</div>


On click of 'new' button a flyout with a form to enter the profile details will open and one can enter the details and click the create button to save the profile in database.

<div align="center">
	<img src="assets/images/profileCreateFlyout.png"  width="600" height="auto"/> 
</div>


#### Input field validations

Listed below are the validations against the mandatory fields for the create profile form

| Field Name | Validation  |
|--|--|
|Profile Name  | Should be unique, can contain alphanumeric, special characters |
|Generate Random AMT Password | checkbox, by default checked 
| AMT password | Should be between 8 and 32 in length and must have at least one lowercase, one uppercase alphabets, one numeric digit and one special character
|Generate Random MEBX Password | checkbox, by default checked
| MEBX password | Should be between 8 and 32 in length and must have at least one lowercase, one uppercase alphabets, one numeric digit and one special character
|Random AMT Password Length| Number, should be between 8 and 32|
|Random MEBX Password Length| Number, should be between 8 and 32|
|Static IP| checkbox for controlling the Network configuration dropdown. If checked, network config scripts with static IP will be displayed in the Network configuration dropdown|
|Network Configuration| Optional field, Conatains the Network config scripts listed as a dropdown based on Static IP checkbox|
|CIRA configuration script| Optional field, Contains all the CIRA configuration scripts available listed as a dropdown. Will be hidden if Static IP is checked |
|Activation |  A dropdown Specifies about activation/control mode (CCM or ACM) |


On successful insertion of profile a success message will be shown  on the page as shown below and newly added profile will be shown in the profile list.

<div align="center">
	<img src="assets/images/profileCreateSuccess.png"  width="600" height="auto"/> 
</div>


in case there is a profile already exists with the same name as the one we are creating, an error will be shown on the UI as below

<div align="center">
	<img src="assets/images/profileCreateDuplicate.png"  width="600" height="auto"/> 
</div>

### Create new Network config script

A 'New Network' link is provided on the create profile flyout to create a new Network config script if one does not want to use the existing Network config scripts

<div align="center">
	<img src="assets/images/profileCreateNetworkLink.PNG"  width="600" height="auto"/> 
</div>

On click of 'New Network' link a popup form will be shown and one can enter the details and create a new Network config script.

<div align="center">
	<img src="assets/images/profileCreateNetworkPopup.PNG"  width="600" height="auto"/> 
</div>

### Create new CIRA config script

A 'New CIRA' link is provided on the create profile flyout to create a new CIRA config script if one does not want to use the existing CIRA config scripts

<div align="center">
	<img src="assets/images/newCiraLink.PNG"  width="600" height="auto"/> 
</div>

On click of 'New CIRA' link a popup form will be shown and one can enter the details and create a new CIRA config script.

<div align="center">
	<img src="assets/images/profileCreateNewCiraConfig.PNG"  width="600" height="auto"/> 
</div>

### Delete profile

Upon selecting any profile by clicking on the checkbox against the profile details row, a 'delete' button is shown on the header of profile control.

<div align="center">
	<img src="assets/images/profileDelete.PNG"  width="600" height="auto"/> 
</div>


On click of delete button a popup will be shown asking for confirmation to delete the profile as shown below.

<div align="center">
	<img src="assets/images/profileDeleteConfirm.PNG"  width="600" height="auto"/> 
</div>


On clicking confirm[green tick] popup will disappear and success message to indicate successful deletion of profile is shown on the page and profile list gets refreshed.

<div align="center">
	<img src="assets/images/profileDeleteSuccess.png"  width="600" height="auto"/> 
</div>

### Edit Profile
 
Upon selecting any profile by clicking on the checkbox against the profile details row, an 'Edit' button is shown on the header of profile control.

<div align="center">
	<img src="assets/images/profileEdit.png"  width="600" height="auto"/> 
</div>

On click of 'Edit' button selected profile details will be populated on the form as shown.

<div align="center">
	<img src="assets/images/profileEditFlyout.png"  width="600" height="auto"/> 
</div>

After editing the details, on clicking the Save button the profile details will get updated on the grid and success message will be shown.

<div align="center">
	<img src="assets/images/profileEditSuccess.png"  width="600" height="auto"/> 
</div>

