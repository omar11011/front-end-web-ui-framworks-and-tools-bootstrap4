# Proyect

This project is part of the development of the four tasks of the *Front-End Web UI Frameworks and Tools: Bootstrap 4* course taught by*The Hong Kong University of Science and Technology*. In this project we develop a web page from scratch using Bootstrap components, we also learn about Node.js and a bit of Git and CSS preprocessors.

View the web page by clicking [here](https://bootstrap4-hong-kong.herokuapp.com/).

## Assignment 1

### Task 1

In this task you will be updating the aboutus.html page to make use of the Bootstrap classes and components:

1. Update the page to make use of the Bootstrap CSS classes.
2. Update the page to also use your custom styles defined in your styles.css file, an
3. Update the page to make use of all the Bootstrap JS components.

### Task 2

In this task you will be adding appropriate formatting to the web page contents using container, row and column classes using the Bootstrap grid so that the web page is formatted to look like the figure given below. 

1. The "About Us" title should stretch the entire width of the row. 
2. The "Our History" part should occupy only half the width of the row for small to extra large screens, leaving space on the right side for more content to be added later. The content should be stacked for extra small screens.
3. The "Corporate Leadership" section should stretch the entire width of the row.

![](https://bootstrap4-hong-kong.herokuapp.com/img/full_screen_assingment1.png)

### Task 3

In this task you will use some responsive utilities provided by Bootstrap to hide some of the content only for extra small screens. You will make use of the d-none and d-sm-block CSS classes provided by Bootstrap. To understand how to use these classes, please read the documentation here (in particular see how the combination of classes shown here enables you to hide the content for xs screen sizes) to learn how to apply the d-none and d-sm-block classes. This will get you into the habit of consulting the Bootstrap documentation whenever you need to learn more about the various components and classes of Bootstrap. You should apply the classes so that the ```<p>``` elements containing the detailed descriptions of the corporate leadership is hidden only for extra small screens. Thus, your page should look like the figure below on extra small screens.

![](https://bootstrap4-hong-kong.herokuapp.com/img/movil_screen_assignment1.png)

## Assignment 2

### Task 1

In this task you will be adding another content row to the page. The content row should contain the following:

1. You should create a reservation form for the user to reserve a table. The reservation form should contain a field using radio that enables the users to specify the number of guests (1-6).
2. The form should contain fields to specify the date and time of the reservation. The fields should contain appropriate placeholder information to identify the purpose of the fields.
3. The form should contain a button named Reserve to initiate reservation of the table.
4. The form should be enclosed inside a card with the heading "Reserve a Table". The card should occupy 8 columns and centred in the row for small to extra-large screens. For extra-small screens, the card should span the entire row.

### Task 2

In this task you will be formatting the content in the second row of the page. The formatting should result in the following:

1. Format the content of the second column with the media class together with the media object class. Use the buffet.png image file provided for you in the img folder. The image should displayed to the right of the content description. See figure below.
2. Add a badge with the word “NEW” to the content as shown in the figure below.

### Task 3

In this task you will be adding a block-sized button to the Jumbotron to the right of the restaurant logo:

1. The block-level button and the restaurant logo should share the right six columns of the row. The restaurant name and description can now be reduced to occupy the left six columns. Use the small button (btn-sm).
2. Clicking on the button should take you down to the form for reserving a table.

![](https://bootstrap4-hong-kong.herokuapp.com/img/full_screen_assignment2.png)

![](https://bootstrap4-hong-kong.herokuapp.com/img/movil_screen_assignment2.png)

## Assignment 3

### Task 1

In this task you will move the table reservation form from the last content row into a modal. You should also remove the last content row.

1. The form should be completely shifted to a modal.
2. Add a Cancel button in the form that will dismiss the modal when clicked.
3. The modal header should contain a X button to dismiss the modal.

### Task 2

In this task you will be adding a radio button group to the form to allow the selection of the smoking/non-smoking section of the restaurant.

1. The radio button group should start out with the non-smoking section selected by default.
2. The row containing the button group will have the label Section displayed preceding it in the form.

Note: Read Bootstrap Buttons Checkbox/Radio for more information on how to design checkbox/radio buttons.

### Task 3

In this task you will be updating the Reserve Table button in the Jumbotron:

1. Remove the tooltip from the button. This is to facilitate the button to be used to trigger the modal containing the table reservation form in the later tasks. A single button can support only one Javascript plugin via the data-* attributes. Make sure to remove the JavaScript script at the bottom of the page. Also remove the corresponding JavaScript code for the tooltip from the bottom of the page.
2. You will update the Reserve Table button to show the modal containing the table reservation form when the button is clicked.

At the end of this assignment, your index.html file should look like this:

![](https://bootstrap4-hong-kong.herokuapp.com/img/screen_assignment3.png)