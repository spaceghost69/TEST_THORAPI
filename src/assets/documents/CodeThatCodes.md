Open in app

Write

John McMahon
Code that Codes: the Pros and Cons of Code Generation
Letting computers do the dirty work

John McMahon
BigDecimal
John McMahon
Published in
BigDecimal
·
6 min read
·
Mar 4, 2019


Connecting Everything to Everything is Just the Beginning…
The Current State of Code Generation
The current state (Spring 2019) of code generation is that it is everywhere.
Today, code generation happens at every layer of the software stack, including Java libraries such as swagger CodeGen, the latest crop of cross-compilers/transpilers like Babel for JavaScript apps, and full-stack generators such as Peragon Games ThorAPI(tm) which combine both. (Full disclosure I am the developer of ThorAPI.)
The explosion in the sheer number of REST apis has resulted in a bevy of API client generators for any number of programming languages and environments being developed during the past decade.
Like some kind of vast digital Turducken, REST APIs and their generated clients are seemingly capable of connecting anything to anything.
So let’s take a look at the Turkeys, Ducks, and Chickens involved in the code generation menagerie…
Code Rewriting
One extensive form of automated coding is Code Rewriting — used to convert one language version syntax to another, and sometimes to another language entirely.
For example languages such as Scala essentially rewrite your code into Java-compatible code under the hood.
The famously odd Project Lombok basically rewrites your Java code as you type, generating phantom methods so you can focus on greatness.
And as any good JavaScript dev can attest “transpilers” like Babel rewrite your advanced ES2017 into dumbed down 10 year old browser-compatible JavaScript so you can write modern code without worrying how the browsers will behave.
Letting computers do the dirty work?? Sweet!
Template-Based Generation
The React ecosystem has been especially active in creating template-based application frameworks including React’s “create-react-app” CLI command.
Other template-based code generation is rampant throughout the software industry. HTML templating and popular new static site generators all leverage template parsing typically using the popular mustache or handlebars template engines.
On the server template engines such as Velocity as well as server-based implementations of mustache and handlebars spit out pre-rendered source files such as HTML and increasingly JavaScript.
Runtime Dynamic Code
Templating is not the only approach to code generation.
Running code can be “self-aware” via introspection such as with languages like Java and the Java Reflection API and Ruby Metaprogramming the options to build truly dynamic applications really expand once your code becomes self-aware.
At Peragon Games we used Java to build the ThorAPI generator engine which meant we were able to use the convenient JavaPoet library to dynamically construct Java class files including functionality that is dynamically synthesized during runtime. Interestingly, these classes can be compiled in memory and loaded by the classloader without ever being written to disk.
And they say that Java is not a dynamic language!
This type of Dynamically generated code is exciting because not only does it save us time and money in developing in writing code manually, but it provides an opportunity to create responsive behavior in our application at runtime without human intervention — and potentially based upon AI decisioning — making our apps and digital experiences more engaging and useful than ever.
But Generated Code Sucks!
Sadly, the history of the Software industry is littered with examples of code generators, code-free development tools, WYSIWYG front end generators and haunted by the general horrors of cryptic source code spit out by venerable platforms that never seem to die ( I am looking at you DreamWeaver Ultradev or should I say Drumbeat 2000?!).

Drumbeat 2000 was bought by Adobe and lived on folded into Dreamweaver (amazingly info on “DB2K” does not seem to be in Wikipedia)
Who wants to work on code that was spit out by a machine when it is full of obscure techniques and mangled variable names? The generated code of yore was just demoralizing and sad, and just nothing you would want to build upon.
Luckily, times have changed
in 2019 tools and software development best practices have evolved to the point where humans and the machine can truly meet in the middle. Code generators such as APIcur.io, ThorAPI, and Microsoft PowerApps have evolved to overcome the limitations of the past while combining the best of all code generation techniques into a modern development tool.
The Pros of Code Generation
No hand-coding = less errors
Massive time savings possible implementing larger and more complex schemas
Fast go-to-market turnaround for simple apps and PoCs
Stable underlying architecture means less time wasted
CI/CD friendly, Code generation can be added as a step to any CI pipeline or dev workflow
End-to-end generation eliminates errors when dealing with multiple source files and file types
New functionality can be rolled into the underlying templates to implement across large codebases in a single build
But this is not to say that code generation does not have downsides…
The Cons of Code Generation
Not all applications will benefit from code generation
Code generation can be more inflexible vs. hand-selecting each code library, pattern, and coding style
Changes to the underlying templates will be rolled out to all generated files, so changes must be highly compatible and tested thoroughly
Generated code must be carefully isolated in the codebase from developer code — the risk of overwriting developer code exists and regeneration should be possible without impacting any existing code
Code generation involves some increased complexity — for example, to really understand and work with generators you need to understand what is being generated and why — on top of the normal issues of your codebase
The mental paradigm of writing code that writes other code can get squirrelly especially when writing apps that generate other apps
LCDP and Pushing Innovation to the Edge
LCDP (Low Code Development Platforms) are gaining traction as the latest incarnation of “code free development” and the new way to bridge the power-user / jr. developer gap.
As the demand for new functionality and systems grows, developers are stretched thin, and many users are stuck with over-loading Excel spreadsheets, or are simply going without software functionality they need due to expensive and scarce developer resources at every level.
Consumer SaaS solutions are there for many one-off tasks, but a hodge-podge of random web apps and services is not a reliable foundation for many needs.
And on the other end, hugely expensive Enterprise systems are simply not an option for many organizations.
In addition to saving cost on development, empowering “citizen developers” to build their own solutions when appropriate is a major driver of the LCDP value proposition.
Code generators are squarely in the middle of the solution domain.
Generating End-to-End with OpenAPI and ThorAPI
ThorAPI take a holistic approach to code generation — based upon OpenAPI/Swagger schemas.
Development starts at the beginning with an emphasis on designing a great API using OpenAPI/Swagger.
This design discipline then allows you to generate a robust stack with predictable behavior and extend it precisely with any custom logic and front end design from there.
To achieve this level of flexibility, ThorAPI uses 3 code generation steps with 3 different implementations.
The multiple generation techniques are used by the 3 main components of the system: Swagger CodeGen, MyBatis Generated DAOs and Mappings, and for the upcoming ThorAPI PRO, ReactJS front end generation.
Mustache is used by both the Swagger CodeGen and the ThorAPI React code to generate React content from Mustache template files.
Mustache
JavaPoet
Swagger CodeGen
MyBatis Generator
The advantage of our this approach is it is pluggable and allows us to generate both on the fly, and prior to compilation.
By generating quality source code, in developer-friendly format, modern code generators force multiply the efficiency of full stack developers while providing a modern highly scalable and robust baseline codebase.
About the Author
John McMahon is the CEO of Peragon Games INC, the founder of Extentech Inc and previously the developer of devleoper tools such as ThorAPI, Sheetster, OpenXLS, ExtenXLS, as well as countless software projects for Enterprises and Startups as a consulting software engineer over the years.
You can reach out to John on Twitter, Instagram, and LinkedIn.

JavaScript
Java
Coding
Automation

John McMahon
BigDecimal
Written by John McMahon
669 Followers
·
Editor for 
BigDecimal
Musician, Entrepreneur, Engineer, Dad Exploring the intersection of art, technology, and humanity watching the sunset of the Anthropocene.
Edit profile
More from John McMahon and BigDecimal
How We May Just Survive the Coming 2020s Technology Crisis
John McMahon
John McMahon
in
BigDecimal
How We May Just Survive the Coming 2020s Technology Crisis
I love technology. But I am worried we have already lost control.
Apr 4, 2022
325


The Easy VPN Guide
John McMahon
John McMahon
in
BigDecimal
The Easy VPN Guide
Without too much tech jargon, I will show you how to avoid giving hackers a front-row seat to your life.
Jan 7, 2019
226


The War for Control of the Mobile Web is About to Heat Up
John McMahon
John McMahon
The War for Control of the Mobile Web is About to Heat Up
Design Matters
Jul 24, 2015
86


See all from John McMahon
See all from BigDecimal
