## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Docker
- Install docker https://docs.docker.com/desktop/

- Build image: `docker build . -t flag-app`

- Run container: `docker run -p 3000:3000 flag-app` . project will run at localhost:3000

Demo:

### Result

#### Review 
[Click here to visit](https://focused-kirch-63d582.netlify.app)


## 1 What benefits does it provide?

`Easy access to all components`
With Storybook, you can access each and every component and browse through all of its states without having to worry about business logic and ticking all the boxes you would normally have to in an actual app.
`Ease of sharing and reusing components, stories`	
Since you can reach all of them so easily, each component and story can be easily reused across the entire software project by any developer who works on it, ensuring consistent design and UX in the process. 
`Increased chance of catching all edge cases` 
##### (edge cases are bugs that are uncommon for users to encounter)
You can render components in states that can’t always be easily triggered in the app, improving testing for edge cases. Storybook UI development is extremely efficient in the long-term.
`Highly improved communication between developers and designers..`
Storybook application can be easily shared with and commented on by designers so that they can add their input regarding the implementation of the designs. There is no need for a separate tool for this purpose. The same goes for project managers.
`As well as clients`
Another group that can use this feature are clients. Storybook makes it easy to show pieces of the software in order to keep the client in the loop. Even small pieces of UI can be shared and made available for feedback, preventing longer periods without any deliverables.
`Improved code quality`
As you write your components in isolation, without regards to business logic, you can potentially put a greater emphasis on code quality and reusability, which can have a positive impact on your entire team and organization.
`Smart debugging`
Since all states can be viewed easily, it’s much easier to notice how changes to the appearance and behavior of one state can influence others, improving the prevention of UI bugs and regressions.
`Better documentations`
With Storybook addons, you can document your entire component library as you go or save use cases as stories in JavaScript.

## 2. What problems does it solve?
 
There are various problems that Storybook can solve from small frontend projects to frontend-heavy projects.  
First of all, It is essential for the client to ensure consistent, self-aware design across all the UIs, on top of great UX and performance. With the appearance of Storybook, the customer can keep track of even small pieces of UI and they can provide feedback to the development team as soon as they find anything irrational or illogical. 
In addition, the project is not a one time deal, which means that scalability of all the user interfaces, as well as the ease in taking over the project by new people while keeping the quality intact, is one of the top requirements. For this problem, Storybook can solve it straightforwardly. 
Thirdly, with Storybook, a development team can simultaneously collaborate on the growth of the components in an app-like environment which do not need to deal with all the business logic. 
Additionally, they can try all the states of a single component without having to trigger them by running the whole application each time and improves testing capability as well. 
Finally, it also greatly promotes one of the biggest selling points of components in the first place – code reusability.


## 3. Can you provide any real-life examples where you experienced similar problems in some earlier development project?

There is `StyleGuiDist` that is similar with Story-book.
I have used it for some previous projects that I do not have to use React toolkits UIs component like MUI ( MAterial UI components), or Materialize or React-Boostrap or Ant design or Charka on Web application projects, and also REACT-NATIVE-MAPS or NativeBase for Mobile app projects.\, because of the demanding of projects.

For that reason, I have to make/create manually components for those projects.
But in one project, there are about 2-6 frontend developers who involved, and some components made by us is quite difficult to understand how to use those, like props or methods.
Of course, we can ask directly because we work in one team, but we met some problems when refactoring some projects with "manual" components( made by us ^^).

Moreover, the best power of React is "reuse". Yes, I have made some components or also some hook components to reuse in next projects. And `styleGuiDist` help us to solve those problems, but it is not friendly like Story-book, I think.

Featuremore, we can use story-book with MUI/Charka or any toolkit UI component library for customing components.
So , for developer, it helps to understand to use.

For client, I had 1 experience in previous project. We developed that project and that project was done more 50%, and customer wanted to change layout because they did not like the style. At that time, we used MUI, and after BA( Bussiness Analysists) discussing with customer, they liked the style of Ant design. So we learnt from that problem, and `StyleGuiDist` started to use. So customer can see and had some feedback with individually component used in project, in the initialized time.
