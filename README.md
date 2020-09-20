<h1> :postbox: Box Model</h1>

Each HTML element is treated is a box (as if there is a boundary around them). These boxes sit next to each other or stack on top of one another depending on the properties we give them.
When applying CSS to the box model it consists of margins, borders, padding and the actual content itself which you can modify in four different directions (top, bottom, left and right).

This picture below illustrates the box model:<br><br>

![Border Box Image](public/img//border-box.jpg?raw=true "Border Box")

<h2>Explanation of the different parts of the box model</h2>
<ul>
<li>Content - The content (and HTML element) of the box, where text and images appear.</li>
<li>Padding - Clears an area around the content. The padding is transparent.</li>
<li>Border - A border that goes around the padding and content.</li>
<li>Margin - Clears an area outside the border. The margin is transparent.</li>
</ul><br>
Using CSS, we can style our elements (each treated as a box) to respond to all kinds of devices and layouts. Their positions, sizing and space can respect each other which is very useful.

<h1>:pager: Javascript is Fun!</h1>

In the directory src there will be a file called sales.js which can be viewed at <a href="https://github.com/matthew-devonport/2020-17-09/blob/master/src/sales/sales.js">src/sales/sales.js<a>

In that file is an array of objects. There are functions related to that array which can be used to get different information from it. I have put plenty of comments explaining what information I am looking to get and step by step on how the functions work.



<h2>Testing</h2>
There are also four working tests for these functions which can be viewed at <a href="https://github.com/matthew-devonport/2020-17-09/blob/master/src/sales/sales.js">src/tests/sales.test.js<a><br>

After cloing this repository and installing dependencies, these tests can be run with:

```
npm test a
```
<br>
<h1>:chart_with_upwards_trend: Dashboard UI</h1>

<h2>Is this application live?</h2>

You can view a dashboard UI design app which is live at: [https://matthew-devonport-dashboard.netlify.app/](https://matthew-devonport-dashboard.netlify.app/)

This app has a functional side navigation pop up, although a snapshot of design can be seen below:<br><br>

![Dashboard image](public/img/dashboard.jpg?raw=true "Dashboard Image")

<h2>Why did I go for this design?</h2>

I decided to go for a design like this due to being able to scale to mobile devices well also. Using the pop up to control the sidebar is what's key to making this design effective. A great blueprint to create an effective dashboard. I was inspired heavily from the model of the ClickUp app and sidebar functionality. The colour scheme works well and the font is very easy to read. I used the css styling of grid to give the layout of the design and then some javascript to call the pop up which happens with an onclick event in mobile/tablet devices 780px in viewport and under. As stated above, the app is live and can be seen/used on the link above on mobile devices.

The gif below shows a brief demonstration of the pop up working in production:

![Dashboard Gif](https://media.giphy.com/media/Sz5N8dGGJAbYMVRAvw/giphy.gif)

<h2>How does that popup work?</h2>

To create the pop up I created a popUpBox component which has properties to use from the sideNav component. These are the abilites to get content from the sidenav content and display it as well as also having the ability to call upon state to be showing its content or not. Onclick events are the triggers to changing state which initially has the popup showing as false. Clicking the '+' button changes state to become true, which pops up sideNav component (which is set seperately to the main sideNav component content) on the UI. The event is then triggered back to false on the popUpBox component when hitting the 'x' button.
<br><br>
The code and commenting on how each part of the code works is available to view on these pages below:
<ul>
  <li><a href="https://github.com/matthew-devonport/2020-17-09/blob/master/src/Sidenav.jsx" target="_blank">sideNav</a></li>
 <li><a href="https://github.com/matthew-devonport/2020-17-09/blob/master/src/PopUpBox.js" target="_blank">PopUpBox</a></li>
</ul>

Thank you for taking the time to read and engage with this page. Have a great day! :smile:
