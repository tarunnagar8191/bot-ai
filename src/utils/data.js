const data = {
  "What's the difference between GET and POST requests?":
    "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL.",
  "Can you explain RESTful APIs?":
    "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol.",
  "What is a Promise in JavaScript?":
    "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient.",
  "How do you handle errors in async/await?":
    "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block.",
  "What is the virtual DOM?":
    "The virtual DOM is a concept used in web development, primarily with libraries like React. It's a lightweight copy of the real DOM, allowing for efficient updates and rendering of the UI by minimizing direct manipulations of the DOM.",
  "Can you describe how CORS works?":
    "CORS, or Cross-Origin Resource Sharing, is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. It involves the server setting specific headers that allow for these cross-origin requests.",
  "What are microservices?":
    "Microservices are a architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. They allow for scalable, flexible, and independent development and deployment of application components.",
  "Explain the concept of state management in React.":
    "State management in React involves tracking changes to the state (data) of components. This can be done using React's own state management capabilities or through external libraries like Redux, to manage state across multiple components.",
  "What is a JWT and how is it used?":
    "JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties. It's used in authentication and information exchange, allowing servers to verify and trust the data in the token.",
  "How do you optimize website performance?":
    "Website performance can be optimized through various methods, including minimizing HTTP requests, optimizing file sizes and formats, using content delivery networks, caching, and streamlining code (HTML, CSS, JavaScript).",
  "What is Docker and how is it used?":
    "Docker is a platform that enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.",
  "Explain the MVC architecture.":
    "The MVC (Model-View-Controller) architecture is a design pattern used in software development to separate the internal representations of information from the ways that information is presented to and accepted from the user.",
  "What is GraphQL?":
    "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It provides a more efficient, powerful, and flexible alternative to REST.",
  "How do you manage state in a Redux application?":
    "In a Redux application, state is managed through a single immutable state tree, called the store. Actions are dispatched to describe what happened, and reducers specify how the state changes in response to these actions.",
  "What are hooks in React?":
    "Hooks are functions that let you “hook into” React state and lifecycle features from function components. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.",
  "Explain serverless architecture.":
    "Serverless architecture is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Applications are broken down into individual functions that can be invoked and scaled independently.",
  "What is a websocket?":
    "WebSockets provide a bidirectional, full-duplex communication channel that operates over a single, long-lived connection. They enable real-time data flow between clients and servers, ideal for web applications requiring constant data exchange.",
  "How do you ensure code quality?":
    "Ensuring code quality involves practices like regular code reviews, unit and integration testing, adhering to coding standards, and using static code analysis tools to detect potential issues early.",
  "What is continuous integration and continuous deployment (CI/CD)?":
    "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. CI refers to the automated testing of the application with each code change, while CD automates the delivery of applications to selected infrastructure environments.",
  "What are Progressive Web Apps (PWAs)?":
    "Progressive Web Apps (PWAs) are web applications that use modern web capabilities to provide a user experience similar to that of mobile apps. They aim to combine the benefits of the web and mobile apps, working offline, fast loading times, and access to device features.",
  "Explain the concept of dependency injection.":
    "Dependency injection is a design pattern in which an object receives other objects that it depends on, called dependencies. Instead of creating them inside the object, they are passed in as parameters, making the code more modular, testable, and maintainable.",
  "What is TypeScript and why use it?":
    "TypeScript is a superset of JavaScript that adds static types to the language. Using TypeScript helps catch errors early through its type-checking feature, and makes the codebase more readable and maintainable.",
  "How do you manage application secrets?":
    "Application secrets, like API keys and passwords, should be managed securely using environment variables or secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault to keep them out of the source code.",
  "What is NoSQL and when would you use it?":
    "NoSQL databases are non-relational databases designed for large-scale data storage and for massively-parallel, high-performance data processing across a large number of commodity servers. They are used when dealing with large volumes of unstructured data, where the scalability and performance requirements exceed the capabilities of traditional relational databases.",
  "Explain how you would use Docker in your development workflow.":
    "Docker can be used in development to create a consistent environment that mirrors production, ensuring that applications run the same, regardless of where they are deployed. It simplifies the management of dependencies and makes it easy to test and deploy applications in isolated containers.",
  "What are environmental variables and why are they important?":
    "Environmental variables are key-value pairs in the operating system used to store data that varies between environments, such as API keys, database passwords, and file paths. They are important for security and configurability, allowing applications to run differently in development, testing, and production environments without code changes.",
  "What's the importance of responsive design?":
    "Responsive design is crucial in web development to ensure that websites and applications look and function well on a variety of devices and screen sizes. It improves user experience, accessibility, and SEO.",
  "How do you handle database migrations?":
    "Database migrations are handled by defining changes to the database schema in code. Tools like Liquibase or Flyway can manage and apply these migrations consistently across environments, ensuring the database schema is always in sync with the application's requirements.",
  "What is the significance of Git in development?":
    "Git is vital for version control, allowing developers to track and manage changes to code over time. It facilitates collaboration, code review, and managing merges, making it easier to maintain the integrity of the codebase while working in teams.",
  "How can I improve the security of my web application?":
    "Improving web application security involves implementing HTTPS, sanitizing user input to prevent SQL injection and XSS attacks, using secure cookies, managing user permissions wisely, and keeping software up to date to protect against known vulnerabilities.",
  "What is the purpose of API testing?":
    "API testing focuses on verifying that APIs work as expected, perform efficiently, and are secure from external threats. It helps ensure that the interaction between different software components is error-free.",
  "Can you explain the Agile development methodology?":
    "Agile is a development methodology that focuses on iterative development, where requirements and solutions evolve through collaborative effort. It promotes flexible responses to change, frequent delivery of products, and a high level of communication among team members and stakeholders.",
  "What are the key principles of object-oriented programming?":
    "The key principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism. These principles help organize code and make it more reusable, scalable, and manageable.",
  "What are design patterns and why are they useful?":
    "Design patterns are standardized solutions to common problems in software design. They provide a template for how to solve a problem that can be used in many different situations, promoting code reuse and making the design more robust and easier to maintain.",
  "How do you approach debugging in your projects?":
    "Debugging involves systematically identifying and removing errors from code. The approach includes using debugging tools, thoroughly testing code, reviewing logs, understanding the system's flow, and sometimes, rubber-duck debugging, where you explain your code line by line to an inanimate object.",
  "What is A/B testing?":
    "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. It involves showing the two versions to different segments of users and analyzing the results to see which version achieves a higher conversion rate or better user engagement.",
  "Explain the concept of continuous learning in software development.":
    "Continuous learning in software development refers to the ongoing process of acquiring new knowledge and skills. It includes staying up-to-date with new technologies, frameworks, and industry best practices through resources like online courses, books, conferences, and active participation in the developer community.",
};

export default data;
