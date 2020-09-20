<h3> :postbox: Box Model</h3>

Each HTML element is treated is a box (as if there is a boundary around them). These boxes sit next to each other or stack on top of one another depending on the properties we give them.
When applying CSS to the box model it consists of margins, borders, padding and the actual content itself which you can modify in four different directions (top, bottom, left and right).

This picture below illustrates the box model:<br><br>
![Border Box Image](public/img//border-box.jpg?raw=true "Border Box")

Explanation of the different parts of the box model:
<ul>
<li>Content - The content (and HTML element) of the box, where text and images appear.</li>
<li>Padding - Clears an area around the content. The padding is transparent.</li>
<li>Border - A border that goes around the padding and content.</li>
<li>Margin - Clears an area outside the border. The margin is transparent.</li>
</ul><br>
Using CSS, we can style our elements (each treated as a box) to respond to all kinds of devices and layouts. Their positions, sizing and space can respect each other which is very useful.

<h3>:pager: Javascript Is Fun!</h3>

In the directory src there will be a file called sales.js (src/sales.js).

In that file is an array of objects. There are functions related to that array which can be used to get different information from it. I have put plenty of comments explaining what information I am looking to get and step by step on how the functions work.

There are also four working tests for these functions ((src/tests/sales.test.js).
These tests can be run with:
```
npm test a
```

<h3>:chart_with_upwards_trend: Dashboard UI</h3>

You can view a dashboard UI design I have made by cloning this repository.

After you clone this repository, please follow these instructions on your terminal:

```
cd 2020-17-09
npm install
npm run start
```
This runs this app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


