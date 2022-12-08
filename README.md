

<h1 align="center">
   <a href="https://github.com/aglsoftgithub/snowtime" target="_blank" align="center">
      SnowTime v1.0.0
   </a>
</h1>
<p align="center">Simple code to add snowflakes on a website</p>

![SnowTime Demo Image](https://github.com/aglsoftgithub/snowtime/blob/master/demo.png)

![GitHub](https://img.shields.io/github/license/themeselection/sneat-html-admin-template-free)

## Introduction 🚀

SnowTime is just a full CSS and JavaScript that allows you to add snowflakes on your website. That's all :-)

[View Demo](https://aglsofthostingwebserver.on.drv.tw/sites/snowtime/)

## Installation ⚒️

1. Download the code on [GitHub Repository](https://github.com/aglsoftgithub/snowtime) .
2. Import corresponding CSS and JS Code on your own project

```html
<!-- import css -->
<link rel="stylesheet" href="<your_path_to_css>/snow.css"/>

<!-- import js -->
<script type="text/javascript" src="<your_path_to_css>/snow.js"></script>
```

3. Add an empty div or section with 'snow' as id inside body tag just before another html code

```html
<!-- Section where snowflakes will start to form -->
<div id="snow"></div>

<!-- The rest of the html code -->
```

5. Adjust the default configuration of snowtime as you wish in the first lines of the _snow.js_ file.
```js
// quantity of snowflakes to display
let nb_snowflakes = 140;
```

6. To define a different style for the snowflakes, you have to write your own css style with the snowflake class
```css
/* your custom css file */

.snowflake{
	/* your custom css style here... */
}
```

7. You can also turn the snowmaking process on and off using the toggle_snow function
```html
<button type="button" onclick="toggle_snow()">Turn On/Off</button>
```

## Documentation 📜

Not available yet.

## Browser Support 🖥️

At present, we officially aim to support versions of these following browsers:

- Chrome (latest)
- FireFox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)

## Support 👨‍💻

We use GitHub issues as support tickets to manage Item support.

1. In order to raise the GitHub issue, you must have a github account.

## License ©

- Copyright © [AGLSoft](https://bit.ly/3SKkfA2)
- Licensed under [MIT](https://github.com/themeselection/sneat-html-admin-template-free/blob/master/LICENSE.md)

## Contributing 🦸

Contribution are always welcome and recommended! Here is how:

- Fork the repository ([here is the guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)).
- Clone to your machine `git clone https://github.com/YOUR_USERNAME/REPO_URL` Make your changes
- Create a pull request

### Contribution Requirements 🧰

- Contributions are only accepted through Github pull requests.
- Finally, contributed code must work in all supported browsers.

## Creators 😇

- [Adrien Guy Lagrange (AGLSoft)](https://bit.ly/3SKkfA2)

## Changelog 📆

Please refer to the our [CHANGELOG](#) file. We will add a detailed release notes to each new release.

## Social Media 🌍

- Telegram : [https://t.me/aglsoftchannel](https://t.me/aglsoftchannel)
- YouTube : [https://www.youtube.com/@aglsoftofficiel](https://www.youtube.com/@aglsoftofficiel)
