# Web Construction
## 1. Vitepress Configuration
After installing Vitepress. VitePress provides a configuration file located at `docs/.vitepress/config.js`. This file allows us to customize various settings of website, such as the title, description, theme, navigation, and more. To construct the frame of website, Home and Course are the two main pages. For the Course Page, week 1 to week 10 themes are listed in the sidebar.

![p1](/images/image1.png)
## 2. Customize Main Page 
By default, the main page of your website is the index.md file located in the docs folder. If it doesn't exist, simply create a new file named index.md inside the docs folder. I structured my main page using standard Markdown syntax.And I also customize the top of the main page with a hero header.In addition, I linked Resrathgate Page and Github Page in the main page. An anitaion was added in the background.
![p2](/images/image2.png)
The index md file is shown below.
![p3](/images/image3.png)
```bash
layout: home
hero:
  name: Welcome to
  text: Yanbing's Project
  image:
    src: /images/animation.gif
    alt: 动态演示
    width: 300
  tagline: Multimodal Haptic Interaction Oral Pad
  actions:
    - theme: brand
      text: About me
      link: https://www.researchgate.net/profile/Yanbing-Wang-17
    - theme: alt
      text: Read in GitHub
      link: https://github.com/UNNC-Fab/2025-1-YANBING

```
## 3. Preview the Web page
Once I have written content for the main page, run the VitePress development server to preview it:npm run dev. Then thie will launch a local development server, where I can see my main page in action.
![p4](/images/image4.png)

```bash
npm run docs:build
npm run docs:preview
```

## 4. Push the Page to Github
 After constructing the website, I will use Git to track project files and then pushing them to a GitHub repository.
 ![p5](/images/image5.png)
 The code was shown below.

 ```bash
 `git add --all`
 `git commit -m`
 `git push origin main`
 ```

## 5. Preview the Page on Github
Then the Page can be read by Github Pages
 ![p6](/images/image6.png)