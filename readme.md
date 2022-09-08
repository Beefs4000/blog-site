<div id="top"></div>

<h3 align="center">Blog-Site</h3>
<div>
  <p align="center">
    In this project I was tasked with making a simple blogging website. Where users can log in, browse through various posts, select and see comments, edit and add their own. I used Node.js and Express.js to create RESTful API's. Our template engine was Handlebars with some bulma for the UI. To store the data I used MySQL and Sequelize. For basic authentication we used express-session.
    <br />
    <a href="https://github.com/Beefs4000/blog-site"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://blog-site-beefs4000.herokuapp.com/">View Demo</a>
    ·
    </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### Built With

* [Node.js](https://nodejs.org/en/)
* [bulma](https://bulma.io/)
* [express.js](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Express-Session](https://www.npmjs.com/package/express-session)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:Beefs4000/blog-site.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Create the database by logging in to your MySQL using the intergrated terminal
   ```sh
   mysql -u root -p
   source schema.sql
   ```   
4. Run seed using using intergrated terminal
   ```sh
   npm run seed
   ```
5. create .env file and populate with your credentials
   ```sh
   DB_NAME='tech_blog_db'
   DB_PASSWORD='add password'
   DB_USER='add username'
   ```
6. Run app using intergrated terminal
   ```sh
   npm run start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Justin Dennis   [<img src="https://github.com/gauravghongde/social-icons/blob/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/PNG/White/Twitter_white.png" width="18">][5] [<img src="https://github.com/gauravghongde/social-icons/blob/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/PNG/White/Outlook_white.png" width="18">][6] [<img src="https://github.com/gauravghongde/social-icons/blob/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/PNG/White/Github_white.png" width="18">][7] [<img src="https://github.com/gauravghongde/social-icons/blob/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/PNG/White/LinkedIN_white.png" width="18">][8]


[5]: https://twitter.com/Justo_Tron
[6]: mailto:justin.dennis@hotmail.com
[7]: https://github.com/Beefs4000
[8]: https://www.linkedin.com/in/justin-dennis-853568114/ 



<p align="right">(<a href="#top">back to top</a>)</p>
