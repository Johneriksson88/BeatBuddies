# BeatBuddies

![BeatBuddies - Am I Responsive Image](src/assets/readme_images/am_i_responsive.png)

BeatBuddies in an app for sharing music tips with your friends. You can make posts containing a song, image, content and "moods" of your choice. Moods can be whatever the user wants, and are tags for each post that communicates what mood/feeling/genre/general vibe the song has. Posts can be liked and commented so the users can share their feelings, and the users can follow each other to get a custom feed.

The project is a part of the [Code Institute Full Stack Developer Program](https://codeinstitute.net/se/full-stack-software-development-diploma/) and is my fifth and last "portfolio project", with a specialization on advanced front end.

The main goal of the project was to create a front end and a back end part and then successfully connect the two.

<u>Links</u>

The live deployed app: https://beatbuddies.herokuapp.com/

The front end repository: https://github.com/Johneriksson88/BeatBuddies

The live deployed API: https://beatbuddies-api-a72df4dfc93e.herokuapp.com/ (looks best with a browser Json formatter)

The back end repository: https://github.com/Johneriksson88/bb-api

## Table of Contents

- [BeatBuddies](#beatbuddies)
- [UX and UI](#ux-and-ui)
  - [Site Owner Goals](#site-owner-goals)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
- [Design](#design)
  - [Imagery](#imagery)
    - [Logo](#logo)
    - [Icons](#icons)
  - [Colours](#colours)
  - [Fonts](#fonts)
  - [Favicon](#favicon)
- [Database Models](#database-models)
- [Features](#features)
  - [Navigation](#navigation)
  - [Home page](#home-page)
  - [Feed page](#feed-page)
  - [Liked page](#liked-page)
  - [Post page](#post-page)
  - [Moods page](#moods-page)
  - [Mood page](#mood-page)
  - [Sign out](#sign-out)
  - [Profile page](#profile-page)
- [Components](#components)
  - [Asset](#asset)
  - [Avatar](#avatar)
  - [MoreDropDown](#moredropdown)
  - [NavBar](#navbar)
  - [NotFound](#notfound)
  - [Comment](#comment)
  - [Post](#post)
  - [Profile](#profile)
  - [PopularProfiles](#popularprofiles)
- [Forms](#forms)
  - [Create post](#create-post)
  - [Sign up](#sign-up)
  - [Sign in](#sign-in)
  - [Create mood](#create-mood)
- [Features Left to Implement](#features-left-to-implement)
- [Technology](#technology)
  - [Programming languages](#programming-languages)
  - [Frameworks](#frameworks)
  - [Libraries](#libraries)
  - [Web services](#web-services)
- [Deployment](#deployment)
  - [Deployment problems](#deployment-problems)
- [Testing](#testing)
  - [HTML and CSS](#html-and-css)
  - [HTML Validator Problems](#html-validator-problems)
  - [JavaScript](#javascript)
  - [Python](#python)
  - [Manual Testing](#manual-testing)
  - [Lighthouse Testing](#lighthouse-testing)
- [Bugs](#bugs)
- [Credits](#credits)
  - [Images & Icons](#images--icons)
  - [Content](#content)
  - [Honorable mentions](#honorable-mentions)
- [My thoughts](#my-thoughts)

#

## UX and UI

### Site Owner Goals

The website was developed to ensure the main goals of the site was met:

- Create posts
- Like and comment each others posts
- Specify the moods of your post
- Get custom content feed from liked or followed users
- Create your own moods
- Basic functionality like sign up/sign in
- Responsive design so it presents well on all devices

#

### User Stories

Agile development practices such as user stories were managed by using GitHub's "Issues" tab in the GitHub repository.

The GitHub project can be found [here](https://github.com/users/Johneriksson88/projects/6).
The Issues page can be found [here](https://github.com/Johneriksson88/BeatBuddies/issues).

1. **Navigation** - As a user I can view a navbar from every page so that I can navigate easily between pages.

2. **Routing** - As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.

3. **Authentication - Sign up** - As a user I can create a new account so that I can access all the features for signed up users.

4. **Authentication - Sign in** - As a user I can sign in to the app so that I can access functionality for logged in users.

5. **Authentication - Logged in Status** - As a user I can tell if I am logged in or not so that I can log in if I need to.

6. **Authentication - Refreshing access tokens** - As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.

7. **Navigation: Conditional rendering** - As a logged out user I can see sign in and sign up options so that I can sign in/sign up.

8. **Avatar** - As a user I can view user's avatars so that I can easily identify users of the application.

9. **Create posts** - As a logged in user I can create posts so that I can share my images with the world.

10. **View a post** - As a user I can view the details of a single post so that I can learn more about it.

11. **Like a post** - As a logged in user I can like a post so that I can show my support for the posts that interest me.

12. **View most recent posts** - As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content.

13. **Search posts** - As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.

14. **View liked posts** - As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most.

15. **View posts of followed users** - As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about.

16. **Infinite scroll** - As a user I can keep scrolling through the posts on the site, that are loaded for me automatically so that I don't have to click on "next page" etc.

17. **Post page** - As a user I can view the posts page so that I can read the comments about the post.

18. **Edit post** - As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created.

19. **Create a comment** - As a logged in user I can add comments to a post so that I can share my thoughts about the post.

20. **Comment date** - As a user I can see how long ago a comment was made so that I know how old a comment is.

21. **View comments** - As a user I can read comments on posts so that I can read what other users think about the posts.

22. **Delete comments** - As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.

23. **Edit a comment** - As an owner of a comment I can edit my comment so that I can fix or update my existing comment.

24. **Profile page** - As a user I can view other users profiles so that I can see their posts and learn more about them.

25. **Most followed profiles** - As a user I can see a list of the most followed profiles so that I can see which profiles are popular.

26. **User profile** - As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.

27. **Follow/Unfollow a user** - As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed.

28. **View all posts by a specific user** - As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.

29. **Edit profile** - As a logged in user I can edit my profile so that I can change my profile picture and bio.

30. **Update username and password** - As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.

31. **Create moods** - As a user I can create new moods so that I can connect my posts to my own moods.

32. **Connect moods to a post** - As a user I can assign moods to my posts so that I can connect my posts to feelings.

33. **View moods** - As a user I can view all moods so that I can see what moods are available.

34. **View specific mood** - As a user I can view an individual mood so that I can see what posts are related to that mood.

#

## Wireframes

The wireframes were created using [visily.com](https://app.visily.ai/)

I created wireframes for the pages that differs the most. For example, the different feed pages (home, feed and liked), as well as the sign in and sign up pages, essentially looked the same and hence didn't need separate wireframes.
The goal of the wireframes was to get an idea of the layout of the different pages and partly of the content (navlink items etc.).

### Home page

![Home page wireframe](src/assets/readme_images/beatbuddies_home_page.png)

### Moods page

![Moods page wireframe](src/assets/readme_images/beatbuddies_moods_page.png)

### Mood page

![Mood page wireframe](src/assets/readme_images/beatbuddies_mood_page.png)

### Profile page

![Profile page wireframe](src/assets/readme_images/beatbuddies_profile_page.png)

### Sign in page
![Sign in page wireframe](src/assets/readme_images/beatbuddies_sign_in.png)

## Design

## Imagery

### Logo

The logo was created through AI at [looka.com](https://looka.com/). As I don't have any design experience, nor the software, I opted to try out one of the many different AI services that can generate logos based on specific input. I found the icon of the heart with soundwaves going through it very representing of the purpose of BeatBuddies: sharing music with friends. Of course the heart representing friendship and the soundwaves the music. The brand text was slightly modified to have bold and italic capital letters to make it a bit more interesting.

### Icons

All the navigation links has corresponding icons to make them more comprehensive, as well as more available for people with reading disabilities.

The like and comment buttons for the posts are solely represented by icons, this being standard nowadays for social media apps.

#

## Colours

The colour scheme of the app is very simple. I didn't want any vibrant backround colors to take away from the posts, which are the main content of the app. So I chose a white backround for the navigation and a slightly off white for the backround of the main container, to have it a bit separated from the navigation.
There are some elements of pink (logo, buttons, active effects and mood tags on posts) to get some colour into the app as a whole, to make it a bit more interesting for the eye. The pink is the brand colour of BeatBuddies so using pink here and there reinforces the brand.

To pick matching and accessible colors i used the

#

## Fonts

The font mainly used in the app is [DM Sans](https://fonts.google.com/specimen/DM+Sans/) from Google Fonts.
It was chosen for it's simple but modern look.

From the [about page](https://fonts.google.com/specimen/DM+Sans/about) of DM Sans:

> DM Sans is a low-contrast geometric sans serif design, intended for use at smaller text sizes.
>
> DM Sans supports a Latin Extended glyph set, enabling typesetting for English and other Western European languages. It was designed by Colophon Foundry (UK), that started from the Latin portion of ITF Poppins, by Jonny Pinhorn.
>
> In May 2023 DM Sans is updated, expanding the coverage of the weight range to Thin & ExtraBlack (100–1000 weight range) along with a new optical size axis.

The brand name in the logo has the font [Raleway](https://fonts.google.com/specimen/Raleway). Raleway is a display font which means it's intended for larger sizes, hence I found it fitting for the brand name which is larger than all other text on the app.

From the [about page](https://fonts.google.com/specimen/Raleway/about) of Raleway:

> Raleway is an elegant sans-serif typeface family. Initially designed by Matt McInerney as a single thin weight, it was expanded into a 9 weight family by Pablo Impallari and Rodrigo Fuenzalida in 2012 and iKerned by Igino Marini. A thorough review and italic was added in 2016.
>
> It is a display face and the download features both old style and lining numerals, standard and discretionary ligatures, a pretty complete set of diacritics, as well as a stylistic alternate inspired by more geometric sans-serif typefaces than its neo-grotesque inspired default character set.
>
> It also has a sister family, Raleway Dots.
>
> More information can be found at theleagueofmoveabletype.com and impallari.com

#

## Favicon

The favicon is the same icon as in the logo, only a smaller size.

![favicon]()

#

## Database Models

For the backend part of BeatBuddies I used the [Django REST framework](https://www.django-rest-framework.org/). I first created the models, and then the serializers and views.
The database schema were planned out in [dbdesigner.net](https://www.dbdesigner.net/). DBDesigner is an intuitive browser-based tool to create database schemas.

All models and their respective fields can be seen below:

![database schema](/src/assets/readme_images/beatbuddies_db_schema.png)

### User model

The User model takes advantage of the inbuilt User model of Django REST, hence it can not be found in the API directory. It consists of many optional fields, but for this app I am only using the username and password fields.

### Profiles model

The Profiles model contains the information presented on the profile page. It connects to the User model through a one-to-one relationship.

### Posts model

The Posts model contains all the information presented in the Post component, which is used on multiple pages. It connects to the Moods model through a many-to-many relationship (one post can have several moods and one mood can be in several posts) and to the User, Comments and Like models through a one-to-one relationship respectively.

### Moods model

The Moods model contains all the different moods created by the users. The moods are displayed on posts that contains them, as well as on the moods and mood page. It connects to the User model through a one-to-one field and to the Posts model through a many-to-many relationship (explained in the Posts model above).

### Likes model

The Likes model holds the likes created by users. It connects to the Posts and User models through one-to-one relationships respectively.

### Comments model

The Comments model holds all the comments displayed under the individual posts on the post page. It connects to the Posts and User models through one-to-one relationships respectively.

### Followers model

The followers model holds all the links between the users following each other. This was the model that was the hardest for me to get my head around. Basically, the owner field holds the user following another user, and the followed field holds the user that is being followed. Both through one-to-one fields.

## Features

### Logo

The logo is described [here](#logo).

### Navigation

<u>Navigation while not logged in:</u>

![navigation logged out](src/assets/readme_images/nav_logged_out.png)

<u>Navigation while logged in:</u>

![navigation logged in](src/assets/readme_images/nav_logged_in.png)

- To the left is the logo with the brand name, and when logged in also the "New post" button. This is for the user to quickly be able to find the button to make a new post.
- To the right are all the other navigation links, along with corresponding icons to make them more visible and quickly understandable, especially for people with reading disabilities.
- The whole navigation bar is conditionally rendered depending on if the user is logged in or not.
- On smaller screens the brand name disappears and only the logo is showed.
- The navigation is based on the bootstrap component NavBar.
- The pages the navigation links point to are explained respectively below.

### Home page

- The home page is the first page that is shown to a user, regardless of being logged in or not.
- It contains of a feed of the Post component, showing posts nested in an infinite scroll component, meaning that if the user scrolls down 10 posts, 10 more posts will load below. This is a fancy alternative to pagination, and prevents the user from having to click to see more posts. It is also good for performance since it does not fetch all the posts at once, only 10 at a time.

- The home page shows all posts sorted by newest first.

### Feed page

- The feed page is just like the Home page, but the selection of posts are filtered by only showing posts from users that the logged in user is following.

### Liked page

- Just as above, but the liked page only shows posts from users that the logged in user has liked.

### Post page

- The post page shows an individual post, while adding the comment field below it.

### Moods page

- The moods page shows all the moods in individual buttons. The moods are clickable to get to the individual mood page.
- To the right is a button for creating a new mood.

### Mood page

- The mood page shows an individual mood, the number of posts it is related to in a header.
- Underneith the header the posts related to the mood are shown.

### Sign out

- The sign out link in the navigation directly signs out the user and redirects them to the home page.

### Profile page

- The profile page has a header containing the users name, profile picture, number of posts, number of followers and the number of users the profile owner is following.
- To the right of the username are a "three dots" icon, that shows a menu for editing profile, changing username and changing password.
- Under the header the posts of the profile owner are shown.

## Components

The BeatBuddies app contains several components. The use of components in React is a very clever way of having to write less code and keep the app more consistent. A component can be reused anywhere it's needed. For example the Post component is the most reused one being used in five pages!
The components also help separate code to get a more comprehensive division of code in the different files.
Although there is a folder called "components" in the src directory, these are not the only components. For example the Post component can be found in pages/posts/Post.js.

### Asset

- The Asset component is a good example of a dynamic reusable component. It takes three different props (spinner, src, message) and for example displays the loading spinner icon if passed the "spinner" prop, or an image if passed the "src" prop.

- It is used almost everywhere where an API call is made and is shown to the user to indicate that the information is being loaded.

### Avatar

- The Avatar component is used everywhere a profile picture is shown, for example along with the usernames in the PopularProfiles component.

- The image size can be passed as a prop, making it usable in all formats.

### MoreDropDown

- The MoreDropDown component is used for the "three dots" icon on the profile page to show the dropdown menu for editing user information". It is also used in the [Comment](#comment) and [Post](#post) components.

### NavBar

- The NavBar component is always shown on the top of the page. More info on it [here](#navigation)

### NotFound

- The NotFound component is shown every time a user tries to visit a page that does not exist.

### Comment

- The comment component is used for every single comment under a post. It shows information about the comment, link to the commenter and a dropdown menu to edit or remove the comment.

### Post

- The Post component is shown on the home, feed, liked, mood and profile pages. It is used to display the posts.
- It uses the bootstrap component Card to nicely organize and display the information.
- On the top part are the posters username, date of the creation of the post and the songs artist and song name, separated by a dash ("-"). The combined artist and song names are displayed in a link that points to the "link" field in the [Posts model](#posts-model).
- In the middle the image for the post is shown.
- Underneith the image are the post title, content, moods and buttons for commenting and liking.
- Clicking on the image takes the user to the individual post page where they can comment.

### Profile

- The Profile component is used in the [PopularProfiles](#popularprofiles) component to show the most popular profiles.

### PopularProfiles

- The Popular profiles component is show in a right column on every page that displays posts and the individual mood page.
- It takes the props "profile", "mobile", and "imageSize" for it to show the most popular profiles conditionally. If the mobile prop is passed only the 4 most popular profiles are displayed.

## Forms

All forms are validated via the back-end, except for the select box in the post create form.

### Create post

- Clicking on the "New post" button in the navigation takes the user to the create post form.
- Here the user can enter all the data for the post.
- Almost all data is validated against the API, and errors are sent back and displayed to the user.
- The one exeption to the above is the validation of the mood select box. This box utilizes the library "react-select" which allowed me to have a nice looking select box with abilities to remove selected moods. An interesting problem about the select box can be found under [bugs](#bugs).

### Sign up

- The sign up form takes a username, password and confirm password.
- It can be reached from the navigation when no user is logged in.

### Sign in

- The sign in form can be reached from the navigation when no user is logged in.
- It takes a username and password.

### Create mood

- The create mood form can be reached from the moods page.
- It only has one input which is the mood name.
- I wanted to give the users freedom to come up with any mood they want, so there is no particular validation of this field except that it can't be empty.

## Features Left to Implement

- Search moods
- Create mood directly in the create post form
- Sucess messages, i.e. "Post successfully created!"
- Popular moods component
- Reposting of others posts
- Autocomplete of adding songs through i.e. the Spotify or YouTube API. This would also automatically fill the "link" field of the post.

#

## Technology

This section covers all technology components and choices.

### Programming languages

- [JavaScript](https://www.javascript.com/)
  - One of the core programming languages of the web.
- [HTML5](https://www.w3schools.com/html/)
  - Standard markup language for Web pages.
- [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)
  - Reacts clever way of writing JavaScript code combined with HTML.
- [CSS 3](https://www.w3schools.com/css/default.asp)
  - custom styling.
- [Python](https://www.python.org/)
  - an interpreted, high-level, and general-purpose programming language.

### Frameworks

- [React JS 11.2.7](https://react.dev/)
  - Main framework for creating the front end
- [Bootstrap 4.6.0](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
  - to style the content.
- [React Bootstrap 1.6.3](https://www.npmjs.com/package/react-bootstrap)
  - to optimize bootstrap usage with react.
- [Django REST 3.14.0](https://www.django-rest-framework.org/)
  - a powerful Python based framework for creating APIs.

### Libraries

- [Axios 0.21.4](https://axios-http.com/docs/intro)
  - to communicate with the API.
- [React-Select 5.7.3](https://react-select.com/home)
  - mood select box in post create form
- [Eslint for React](https://www.npmjs.com/package/eslint-plugin-react?activeTab=readme)
  - linter for maintaining code standard

### Web services

- [GitHub](https://github.com/)
  - version control and hosting during development.
- [GitPod](https://gitpod.io/)
  - in-browser editor.
- [Code Institute GitPod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template)
  - the template i started my project with.
- [Cloudinary](https://cloudinary.com/)
  - a cloud storage service that i used for image storage.
- [Heroku](https://heroku.com/)
  - for deployment and hosting.
- [Visily](https://www.visily.ai/)
  - to create the wireframes.
- [DB Designer](https://www.dbdesigner.net/)
  - to create the database schema.
- [ElephantSQL](https://www.elephantsql.com/)
  - database hosting. 
- [Am i responsive?](https://ui.dev/amiresponsive)
  - image of app on different screen sizes
- [Venngage](https://venngage.com/)
  - accessible color palette


#

## Deployment

### Front end

These steps were followed to deploy the front end React app:

1. Login or Sign up to Heroku
2. Create new app
3. Name accordingly
4. Go into app and find the deploy tab
5. Link to Github under deployment method
6. Search for your repo in Github and link
7. Scroll down and hit deploy
8. Open app and confirm you can view the app

### Back end

These steps were followed to deploy the back end Django REST API:

<u>In the project</u>

1. Install gunicorn and django-cors-headers in the terminal:
   ```
   pip3 install gunicorn django-cors-headers
   ```
2. Update the requirements.txt-file:
   ```
   pip freeze --local > requirements.txt
   ```
3. Create a Procfile in the root directory and add these commands:
   ```
   release: python manage.py makemigrations && python manage.py migrate
   web: gunicorn drf_api.wsgi
   ```
4. Add the "ALLOWED_HOSTS" variable in settings.py:
   ```
   ALLOWED_HOSTS = ['localhost', '<your_app_name>.herokuapp.com']
   ```
5. Add corsheaders to INSTALLED_APPS:

   ```
   INSTALLED_APPS = [
   ...
   'dj_rest_auth.registration',
   'corsheaders',
   ...
   ]
   ```

6. Add corsheaders middleware to the TOP of the MIDDLEWARE:
   ```
     MIDDLEWARE = [
     'corsheaders.middleware.CorsMiddleware',
     ...
       ]
   ```
7. Under the MIDDLEWARE list, set the ALLOWED_ORIGINS for the network requests made to the server:
   ```
   if 'CLIENT_ORIGIN' in os.environ:
    CORS_ALLOWED_ORIGINS = [
        os.environ.get('CLIENT_ORIGIN')
    ]
   else:
    CORS_ALLOWED_ORIGIN_REGEXES = [
        r"^https://.*\.gitpod\.io$",
    ]
   ```
8. Enable sending cookies in cross-origin requests so that users can get authentication functionality:

   ```
   else:
    CORS_ALLOWED_ORIGIN_REGEXES = [
        r"^https://.*\.gitpod\.io$",
    ]

   CORS_ALLOW_CREDENTIALS = True
   ```

9. To be able to have the front end app and the API deployed to different platforms, set the JWT_AUTH_SAMESITE attribute to 'None'. Without this the cookies would be blocked:
   ```
   JWT_AUTH_COOKIE = 'my-app-auth'
   JWT_AUTH_REFRESH_COOKE = 'my-refresh-token'
   JWT_AUTH_SAMESITE = 'None'
   ```
10. Again, make sure the requirements.txt-file is up to date:
    ```
    pip freeze --local > requirements.txt
    ```

<u>In Heroku</u>

1. Follow steps as presented in the deployment of the [front end](#front-end) above, up to step 6
2. Add all necessary config vars:
   ```
   SECRET_KEY = [your-django-secret-key]
   CLOUDINARY_URL = [your-cloudinary-url]
   DATABASE_URL = [your-database-url]
   DISABLE_COLLECTSTATIC = 1
   ALLOWED_HOST = [your-deployed-api-url]
   CLIENT_ORIGIN = [your-deployed-front-end-url]
   ```
3. Go to the Deploy tab, scroll down and hit deploy
4. Click the "Open app" button on the top and make sure the app is working

#

## Testing

### Code validation

The font end code (JSX, Javascript) has been validated through production via the eslint-react plugin and formatted by the prettier extention. All errors and warnings were adressed as they came.

The back end code (Python) has been validated in the same way as the front end above, but with the autopep8 plugin for Python.

### CSS validation

The [W3C CSS Validator Service] was used to validate the project's custom CSS files to ensure there were no syntax errors.

| File | Result |
|---|---|
| Asset.module.css | PASS :white_check_mark: |
| Button.module.css| PASS :white_check_mark: |
| Comment.module.css | PASS :white_check_mark: |
| CommentCreateEditForm.module.css | PASS :white_check_mark: |
| MoodCreateForm.module.css | PASS :white_check_mark: |
| MoodsPage.module.css | PASS :white_check_mark: |
| MoreDropdown.module.css | PASS :white_check_mark: |
| NavBar.module.css | PASS :white_check_mark: |
| NotFound.module.css | PASS :white_check_mark: |
| Post.module.css | PASS :white_check_mark: |
| PostCreateEditForm.module.css | PASS :white_check_mark: |
| PostsPage.module.css | PASS :white_check_mark: |
| Profile.module.css | PASS :white_check_mark: |
| ProfilePage.module.css | PASS :white_check_mark: |
| ProfilePicture.module.css | PASS :white_check_mark: |
| SignInUpForm.module.css | PASS :white_check_mark: |


## **Manual Testing**

The site was tested manually across a range of devices to ensure all links and styling work correctly and to ensure responsiveness. All features on the page were tested, especially the form validation, to ensure user feedback worked properly and no faulty inputs could be made.

Testing was carried out on multiple browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, Safari and Opera. Testing was carried out on an Apple iPhone 12, Apple iPhone 13, Huawei P20, iPad Mini and Windows 10 Desktops.

## User Story Testing

These tests were continuously carried out during development, and on the finished deployed app which are the results below.

In addition to the test detailed below, all site URLs were tested to ensure they took users to the correct page.

### Navigation

#### User Story [#1](https://github.com/Johneriksson88/BeatBuddies/issues/1) | [#2](https://github.com/Johneriksson88/BeatBuddies/issues/2) | [#7](https://github.com/Johneriksson88/BeatBuddies/issues/7)

| Test # | User story | Test | Result |
|---|---|---|---|
| 1 | As a **user** I can **view a navbar from every page** so that **I can navigate easily between pages**. | Visit every single page to make sure the navbar is there | PASS :white_check_mark: |
| 2 | As a **user** I can **navigate through pages quickly** so that **I can view content seamlessly without page refresh**. | Visit all links to verify they direct users to their intended resources without the page reloading | PASS :white_check_mark: |
| 3 | As a **logged out user** I can **see sign in and sign up options** so that **I can sign in/sign up** | Visit the app as a signed out user to make sure only the Home, Sign in and Sign Up links are in the navbar | PASS :white_check_mark: |

### Authentication

#### User Story [#3](https://github.com/Johneriksson88/BeatBuddies/issues/3) | [#4](https://github.com/Johneriksson88/BeatBuddies/issues/4) | [#5](https://github.com/Johneriksson88/BeatBuddies/issues/5) | [#6](https://github.com/Johneriksson88/BeatBuddies/issues/6)


| Test # | User story | Test | Result |
|---|---|---|---|
| 4 | As a **user** I can **create a new account** so that **I can access all the features for signed up users** | <ul><li>Create new account and login</li><li>Try to create account with already taken username, blank username, and not matching passwords to ensure validation messages show</li></ul> | PASS |
| 5 | As a **user** I can **sign in to the app** so that **I can access functionality for logged in users** | Login and ensure I'm redirected to home page and navbar has additional links | PASS :white_check_mark: |
| 6 | As a **user** I can **tell if I am logged in or not** so that **I can log in if I need to** | <ul><li>Visit the page as a logged out user and ensure there is a log in button in navbar</li><li>Log in and ensure the profile and log out links are there instead</li></ul> | PASS :white_check_mark: |
| 7 | As a **user** I can **maintain my logged-in status until I choose to log out** so that **my user experience is not compromised** | Stay logged in for 12 hours and ensure I'm not being logged out (Jason Web Tokens are set up to make sure I'm not getting logged out) | PASS :white_check_mark: |

### Adding And Liking Posts

#### User Story [#9](https://github.com/Johneriksson88/BeatBuddies/issues/9) | [#10](https://github.com/Johneriksson88/BeatBuddies/issues/10) | [#18](https://github.com/Johneriksson88/BeatBuddies/issues/11)

<ul><li></li><li></li></ul>

| Test # | User story | Test | Result |
|---|---|---|---|
| 8 | As a **logged in user** I can **create posts** so that **I can share songs with the world** | Create a post and ensure it shows up on top of the home feed or profile page | PASS :white_check_mark: |
| 9 | As a **user** I can **view the details of a single post** so that **I can learn more about it** | A post shows owner, date, artist/song, image, title, content, moods, number of likes and comments | PASS :white_check_mark: |
| 10 | As a **logged in user** I can **like a post** so that **I can show my support for the posts that interest me** | <ul><li>Click like on a post and ensure the likes count go up by 1 and the post appears on the liked pag</li><li>Try to like my own post to ensure the alert message saying "You cannot like your own posts" shows</li></ul> | PASS :white_check_mark: |

### The Posts Page

#### User Story [#12](https://github.com/Johneriksson88/BeatBuddies/issues/12) | [#13](https://github.com/Johneriksson88/BeatBuddies/issues/13) | [#14](https://github.com/Johneriksson88/BeatBuddies/issues/14) | [#15](https://github.com/Johneriksson88/BeatBuddies/issues/15) | [#16](https://github.com/Johneriksson88/BeatBuddies/issues/16)

| Test # | User story | Test | Result |
|---|---|---|---|
| 11 | As a **user** I can **view all the most recent posts, ordered by most recently created first** so that **I am up to date with the newest content** | Visit home feed and ensure posts are displayed in descending order of creation date. | PASS :white_check_mark: |
| 12 | As a **user**, I can **search for posts with keywords**, so that **I can find the posts and user profiles I am most interested in** | Enter any search word on home feed and ensure either the username, title, artist or song matches the search word  | PASS :white_check_mark: |
| 13 | As a **logged in user** I can **view the posts I liked** so that **I can find the posts I enjoy the most** | Visit the liked page and ensure the posts shown there correspond to the ones I've liked | PASS :white_check_mark: |
| 14 | As a **logged in user** I can **view content filtered by users I follow** so that **I can keep up to date with what they are posting about** |  Visit feed page and ensure the posts are from users I've followed | PASS :white_check_mark: |
| 15 | As a **user** I can **keep scrolling through the posts on the site** so that **I don't have to click on "next page" etc** | Ensure there are more than 10 total posts, scroll down to the 10th and, after a loading spinner shows, more posts appear under the first 10 | PASS :white_check_mark: |

### The Post Page

#### User Story [#17](https://github.com/Johneriksson88/BeatBuddies/issues/17) | [#18](https://github.com/Johneriksson88/BeatBuddies/issues/18) | [#19](https://github.com/Johneriksson88/BeatBuddies/issues/19) | [#20](https://github.com/Johneriksson88/BeatBuddies/issues/20) | [#21](https://github.com/Johneriksson88/BeatBuddies/issues/21) | [#22](https://github.com/Johneriksson88/BeatBuddies/issues/22) [#23](https://github.com/Johneriksson88/BeatBuddies/issues/23)

| Test # | User story | Test | Result |
|---|---|---|---|
| 16 | As a **user** I can **view the posts page** so that **I can read the comments about the post** | Click on a post and ensure the comments are shown below | PASS :white_check_mark: |
| 17 | As a **post owner** I can **edit my post title and description** so that **I can make corrections or update my post after it was created** | Go to one of my own posts, click the menu, press edit, edit the post and ensure the changes are shown in the updated post | PASS :white_check_mark: |
| 18 | As a **logged in user** I can **add comments to a post** so that **I can share my thoughts about the post** | Go to any post, comment and ensure the comment shows under the post | PASS :white_check_mark: |
| 19 | As a **user** I can **see how long ago a comment was made** so that **I know how old a comment is** | Go to any post with comments and ensure there is a datestamp on each comment | PASS :white_check_mark: |
| 20 | As a **user** I can **read comments on posts** so that **I can read what other users think about the posts** | Go to any post with comments and ensure the comments are shown below the post | PASS :white_check_mark: |
| 21 | As an **owner of a comment** I can **delete my comment** so that **I can control removal of my comment from the application** | Go to one of my own comments, delete the comment and ensure it is gone from the comment section | PASS :white_check_mark: |
| 22 | As an **owner of a comment** I can **edit my comment** so that **I can fix or update my existing comment** | Go to one of my own comments, edit it and ensure the changed comment is shown in the comment section | PASS :white_check_mark: |

### The Profile Page

#### User Story [#24](https://github.com/Johneriksson88/BeatBuddies/issues/24) | [#25](https://github.com/Johneriksson88/BeatBuddies/issues/25) | [#26](https://github.com/Johneriksson88/BeatBuddies/issues/26) | [#27](https://github.com/Johneriksson88/BeatBuddies/issues/27) | [#28](https://github.com/Johneriksson88/BeatBuddies/issues/28) | [#29](https://github.com/Johneriksson88/BeatBuddies/issues/29) [#30](https://github.com/Johneriksson88/BeatBuddies/issues/30)

- .
- .
- .
- .
- .
- As a **logged in user** I can **edit my profile** so that **I can change my profile picture and bio**.
- As a **logged in user** I can **update my username and password** so that **I can change my display name and keep my profile secure**.

| Test # | User story | Test | Result |
|---|---|---|---|
| 23 | As a **user** I can **view other users profiles** so that **I can see their posts and learn more about them** | Go to any profile and ensure the correct content is displayed | PASS :white_check_mark: |
| 24 | As a **user** I can **see a list of the most followed profiles** so that **I can see which profiles are popular** | Go to the home page and ensure the popular profiles are shown on the right (top on mobile) | PASS :white_check_mark: |
| 25 | As a **user** I can **view statistics about a specific user: bio, number of posts, follows and users followed** so that **I can learn more about them** | Go to any profile and ensure the username, avatar, number of posts, followed and followers count and bio text are displayed | PASS :white_check_mark: |
| 26 | As a **logged in user** I can **follow and unfollow other users** so that **I can see and remove posts by specific users in my posts feed** | Follow a user from the profile page or popular profiles section and ensure their posts are shown in your feed page and that the following count on your profile goes up by 1 | PASS :white_check_mark: |
| 27 | As a **user** I can **view all the posts by a specific user** so that **I can catch up on their latest posts, or decide I want to follow them** | All posts created by the user are displayed on the "Posts" page. | PASS :white_check_mark: |
| 28 | Click on the "Edit Profile" button.(DOTS) and update the profile picture and bio. | The updated profile picture and bio are displayed on the user profile page after clicking on the "Save" button | PASS :white_check_mark: |
| 29 | Click on the "Edit" button.(DOTS) "Change Username" and "Change Password. | The updated username and password are displayed on the account settings page after clicking on the "Save" button and the login is successful with the updated credentials. | PASS :white_check_mark: |
## **Lighthouse Testing**

![Lighthouse Test Result Image](main/static/readme/lighthouse_summary.png)

A test was ran using Lighthouse within Google Chrome to verify performance and accessibility standards were met and to ensure best practices were followed.

The following steps were done to improve the score on the Lighthouse test:

- Contrasting text and background colors were altered until complying with AAA-standars, with help from Google Dev Tools for maximum readability.
- Images were compressed by using [TinyPNG](https://tinypng.com/).
- The 'loading = "lazy"' attribute was added to all images, to get them to load when they are scrolled down to, instead of them all loading when the page initially loads.
- Add alt text to all images and aria-labels to all links.

The full report can be viewed [here](main/static/readme/lighthouse_expanded.pdf).

#

## **Wave Testing**

![Wave Test Result Image](main/static/readme/wave_test.png)

A further test was ran using the Web Accessibility Evaluation Tool (WAVE) to ensure no errors were returned and to verify that no constrast issues existed on the site. This was an important step to ensure that users with disabilities were not negatively impacted by the design of the site and that the relevant standards have been met.

- The contrast warning seemed to be a bug in the validator, since i could not find the element where the warning occurred.
- The Alerts related to the hierarchy of the header elements not appearing in falling order. I decided to ignore these alerts since i was happy with how the headings visually represented their respective elements.

#

## Bugs

### CSRF verification failed

An error that contiuously popped up during development was this:

```
Forbidden (403) CSRF verification failed. Request aborted.
```

Django requires CSRF-tokens (Cross Site Request Forgery) in their forms as a security measure to safely handle requests. Read more on CSRF [here](https://docs.djangoproject.com/en/4.1/ref/csrf/).
In the django settings.py-file you need to explicitly state trusted origins for unsafe requests (e.g POST).
In local development my URL changed day by day (e.g. https://8000-johneriksson88-ekorren-us6khvjs3ar.ws-eu83.gitpod.io/), and when testing my forms and submitting, I was presented with the error above. I soon learned that i had to change the CSRF_TRUSTED_ORIGINS settings variable as my URL changed.

### Database server bugs

The database is hosted by [ElephantSQL](https://customer.elephantsql.com/). Towards the projects end i started getting this error:

```
OperationalError at /login/
connection to server at "mouse.db.elephantsql.com" (13.49.141.18), port 5432 failed: FATAL:  too many connections for role "database_name"
```

After some googling i learned that the free plan on ElephanSQL is to have a maximum of 5 open connections at the same time on their free plan. Looking at the [Django documentation](https://docs.djangoproject.com/en/2.1/ref/databases/#persistent-connections) on persistent connections i learned that i could time out the connections after a set amount of time.
I added the CONN_MAX_AGE setting to the database settings in setting.py like this:

```
DATABASES = {
    'default': {
        'HOST': dj_database_url.parse(os.environ.get('DATABASE_URL')),
        'CONN_MAX_AGE': 0
    }
}

```

Setting CONN_MAX_AGE to 0 terminates the connections immediately, since there is no reason to keep them open after a request. This seems to have fixed the problem.

In the future I am likely to change the database host to a paid service. This is a decision that the site owner will have to take.

### Email SMTP server bugs

When sending an email, either via the contact form on the landing page or making/deleting and order, I sometimes got the following error:

```
Error: SMTP Sender Refused
(530, b'5.7.0 Authentication Required)
```

After googling the error this seemed to be caused on the server side of the [Mailtrap](https://mailtrap.io/) SMTP server i use. I have not found the exact cause of this bug since i can't reproduce it. I found that going into Mailtrap and resetting the credentials for the API made the error go away. I will put a pin in this error since I feel that I have no control over it and that it may come back. Changing to another SMTP service could solve the problem.

In the future, I will change the email settings from the test server to a paid SMTP server plan that can send emails to other recipients than the test server. This is a decision that is on the site owners table, and I am waiting to implement it as soon as i get a go ahead from them.

## Credits

### Images & Icons

[FOTOGRID](https://www.shutterstock.com/sv/g/fotogri)

- The four images on the product cards

#

[r.classen](https://www.shutterstock.com/sv/g/rclassenlayouts)

- Hero image

#

[Fontawesome](https://fontawesome.com/icons)

- All icons apart from the acorn and the four icons in the "Why us" section

#

[Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect)

- Acorn in logo, flaticon and footer

#

[Freepik](https://www.flaticon.com/authors/freepik)

- Calendar icon
- Unloading truck icon
- Open lock icon

#

[Good Ware](https://www.flaticon.com/authors/good-ware)

- Security camera icon

### Content

**Text**

- All text was written by me, John Eriksson, with inspiration and information from the original [Magasinet Ekorren website](https://www.forraduppsala.se/).

#

[Google maps](https://www.google.com/maps)

- Embedded map

**Log in page and register page**

- The design was derived from Youtuber [Dennis Ivy](https://www.youtube.com/c/DennisIvy?app=desktop)s tutorial on [Django user registration](https://www.youtube.com/watch?v=tUqUdu0Sjyc&t=694s&ab_channel=DennisIvy).

**Cookie alert**

- The cookie alert was derived from GitHub user [Wruczek](https://github.com/Wruczek/)s [Bootstrap Cookie Alert](https://github.com/Wruczek/Bootstrap-Cookie-Alert/).

#

### Honorable mentions

- [Dennis Ivys](https://www.youtube.com/c/DennisIvy?app=desktop) Youtube series on Django helped immensely with different aspects of Django.
- [Code Institutes](https://codeinstitute.net/se/full-stack-software-development-diploma/) courses were crucial in introducing me to all involved programming concepts used in this project. Their Tutor Support team also helped me countless times when I felt i had nowhere to go.
- [Code With Steins](https://www.youtube.com/@CodeWithStein) Youtube channel helped me further my Django abilities, especially with the send_mail functions.
- [Stack Overflow](https://stackoverflow.com/) is a forum for all things programming and I cant count how many threads I've browsed as soon as an error, bug or other question has come up.
- [Django forum](https://forum.djangoproject.com/) is another great source for chasing down bugs or errors while exploring Django.
- [The original Magasinet Ekorren website](https://www.forraduppsala.se/) was the source for most of the content, information about storage units, prices etc. The website is in Swedish.
- My lovely wife Helena, for giving me pep talks and taking care of our two young boys while I was hammering away on the computer.

## My thoughts

As this was my first time working with Django, the whole project was a learning process. There are some parts that I could improve on, and I'm sure I will in the future as I finish the course. The nature of having a deadline between home and work life put time constraints on the project that i simply couldn't control. I am happy with the result and it works as intended.

Working with Django is for me a double edged sword. I love the "batteries included" part of Django, which keeps me from having to "invent the wheel" over and over again. For example the User model together with the auth library for log in, registration etc. was a breeze to work with.
On the other hand, I feel that there's so much happening under the hood that I have no idea how they work. It's almost like magic. For example, the database felt like some kind of mystical being just existing and working in the background. It wasn't until i had some problems with it I had to dive in under the hood to see what was happening.

To summarize, Django is a very handy tool for quickly creating fully working applications, but many of aspects of it are kind of out of the developers control. That said, I can't imagine doing the same project without a framework like Django.
