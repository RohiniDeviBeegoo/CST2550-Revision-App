// Format: [week, question, CORRECT answer, wrong, wrong, wrong]  (options are shuffled in the app)
const Q=[
    [1,"Which best defines software engineering?","The systematic application of engineering approaches to software development",
        "Writing code as fast as possible","Testing software after it is released","Managing a team of programmers"],

    [1,"Software engineering addresses which part of the software lifecycle?","Development, operation and maintenance","Only coding",
        "Only design and testing","Only deployment"],

    [1,"Which is NOT a stated reason why software engineering is important?",
        "It removes the need for testing","It builds reliable, maintainable and scalable systems","It reduces costs by minimising errors",
        "It helps address complexity and evolving requirements"],

    [1,"A car dashboard that shows only speed and fuel level (hiding engine complexity) illustrates:",
        "Abstraction","Encapsulation","Modularity","Inheritance"],

    [1,"Which is a benefit of modularity?","It facilitates parallel development by teams working on different modules",
        "It guarantees bug-free code","It hides all data from other classes","It removes the need for classes"],

    [1,"Encapsulation enables which relationship between components?","Loose coupling","Tight coupling","Circular dependency",
        "Hard-coded dependency"],

    [1,"How does abstraction differ from encapsulation?",
        "Abstraction hides unnecessary details to simplify; encapsulation restricts access to internals",
        "Abstraction restricts access to data; encapsulation hides complexity","They are the same thing",
        "Abstraction divides a system into modules; encapsulation creates objects"],

    [1,"In OOP, a class is to an object as:","A blueprint is to an instance","An instance is to a blueprint","A method is to a property",
        "A module is to a system"],

    [1,"Overriding methods is an example of which OOP mechanism?","Inheritance and polymorphism","Encapsulation only","Garbage collection",
        "Type inference"],

    [1,"How does type safety reduce runtime errors?","By catching issues during compilation","By ignoring type mismatches",
        "By converting all types to strings","By running the garbage collector more often"],

    [1,"List<T> is an example of which C# type-safety feature?","Generic types","Type inference","Strong type checking","Disposal patterns"],

    [1,"What is the IDisposable interface used for?","Deterministic cleanup of unmanaged resources (e.g. database connections)",
        "Automatic type conversion","Enabling generics","Compiling IL to machine code"],

    [1,"What does garbage collection do?","Automatically reclaims unused objects, reducing memory leaks","Deletes source files",
        "Compiles code at runtime","Checks types during compilation"],

    [1,"Which is the execution engine of .NET, providing memory management, exception handling and security?","Common Language Runtime (CLR)",
        "Base Class Library (BCL)","IntelliSense","Solution Explorer"],

    [1,"JIT compilation converts:","IL to machine code at runtime","C# source to IL at design time","Machine code to IL","SQL to C#"],

    [1,"Which is NOT a capability of the Base Class Library?","Converting IL to machine code","File I/O operations",
        "String handling and regular expressions","Data manipulation such as sorting and searching"],

    [1,"What does .NET language independence allow?","Components in different languages (e.g. C# and F#) to interoperate",
        "Only C# to be used","Code to run without a runtime","Languages to skip compilation"],

    [1,"Which Visual Studio feature gives real-time code suggestions and error detection?","IntelliSense","Solution Explorer",
        "Output Window","Properties Window"],

    [1,"Which Visual Studio window shows build and runtime logs?","Output Window","Solution Explorer","Properties Window","Error Window"],

    [1,"What project type is created for the first Hello World program?","Console App (.NET Core)","Web API","Class Library","Windows Service"],

    [1,"What is the assessment weighting for this module?","Online test 50%, group coursework 50%","Online test 30%, coursework 70%",
        "Online test 100%","Online test 25%, coursework 75%"],

    [1,"Which question types appear in the online test?","Multiple choice, short answer and matching","Essay only","Coding only","Oral questions"],

    [1,"In the group coursework, who submits and how are marks given?","Only the group leader submits; individual marks",
        "Any member submits; one shared mark","Every member submits; one shared mark","Only the group leader submits; one shared mark"],

    [1,"Which counts as plagiarism/collusion according to the slides?","Using AI-aided technologies like ChatGPT",
        "Referencing code found online","Asking the lecturer in office hours","Discussing coursework drafts with staff before submission"],

    [1,"How do you request an extension for a valid reason?","Apply through UniHelp with evidence; academic staff do not decide",
        "Email the lecturer, who decides","Submit late without notice","Ask your group leader"],

    [2,"Which command copies an existing repository to your machine?","git clone <repository-url>","git init","git fetch",
        "git remote add origin"],

    [2,"What do git config user.name and git config user.email do?","Sets the user information attached to your commits",
        "Creates a remote link","Stages all files","Pushes to origin"],

    [2,"Which command stages ALL changed files?","git add .","git commit -m \"msg\"","git push","git merge"],

    [2,"Which command records staged changes in the repository?","git commit -m \"Commit message\"","git add","git config","git fetch"],

    [2,"Which command links a local repo to a remote repository?","git remote add origin <repository-url>","git remote push","git clone origin",
        "git config remote"],

    [2,"Which command downloads remote updates AND merges them into your branch?","git pull","git fetch","git push","git checkout"],

    [2,"Which command switches to an existing branch?","git checkout <branch-name>","git branch <branch-name>","git merge <branch-name>",
        "git init <branch-name>"],

    [2,"When is a fast-forward merge used?","When no divergence exists","When there are merge conflicts",
        "When two branches both changed the same file","When using pull requests"],

    [2,"How do you resolve a merge conflict?","Edit the file, then git add and git commit","git push --force",
        "Delete the branch","git init"],

    [2,"What is the FIRST step in the Azure DevOps pull request workflow?","Push changes to a feature branch","Complete the PR",
        "Add reviewers","Merge into main"],

    [2,"Which actions can reviewers take on a pull request?","Comment, suggest changes, or approve","Delete the PR","Initialise the repository",
        "Create branch policies"],

    [2,"What is Agile?","A mindset delivering value incrementally through collaboration and adaptability","A linear sequential development model",
        "A set of fixed documentation templates","A testing tool"],

    [2,"Agile prioritises ______ over contract negotiation.","Customer collaboration","Contract negotiation","Comprehensive documentation",
        "Following a fixed plan"],

    [2,"Which are listed as challenges of traditional models?","Rigid processes, delayed feedback and slow delivery","Fast feedback and delivery",
        "Continuous improvement","Iterative sprints"],

    [2,"Which describes the Waterfall model?","Linear and sequential with limited flexibility","Incremental and iterative","Flexible and adaptive",
        "Based on daily standups"],

    [2,"Who ensures adherence to Scrum practices and removes impediments?","Scrum Master","Product Owner","Development Team","Stakeholder"],

    [2,"Which is NOT a Scrum event?","Sprint Backlog","Sprint Planning","Sprint Retrospective","Daily Standup"],

    [2,"Which Scrum artifact is the sum of all completed product backlog items during a sprint?","Increment","Product Backlog","Sprint Backlog",
        "Burn-down chart"],

    [2,"Selected tasks for the current sprint form the:","Sprint Backlog","Product Backlog","Increment","Velocity"],

    [2,"What comes immediately after the Sprint Review?","Sprint Retrospective","Sprint Planning","Daily Standup","Deployment"],

    [2,"Which metric tracks work completed vs remaining during a sprint?","Burn-down chart","Velocity","Cycle time","Increment"],

    [2,"Which Azure DevOps feature automates builds and deployments?","Azure Pipelines","Azure Boards","Azure Repos","Azure Artifacts"],

    [2,"In Azure Pipelines (CI), what do build triggers and YAML do?","Build triggers build on changes; YAML defines pipeline steps",
        "Triggers use SQL; steps use JSON","Triggers run only manually; YAML stores code","Triggers merge branches; YAML defines tables"],

    [2,"Which Azure Repos feature enforces standards on branches?","Branch policies","Kanban boards","Build triggers","Velocity charts"],

    [2,"Which team models did Spotify's Agile transformation introduce?","Squads and Tribes","Waterfall teams","Sprints and Kanban",
        "Product Owners and Scrum Masters"],

    [2,"How does DevOps differ from Agile?","DevOps emphasises automation, integration and delivery","DevOps replaces Agile",
        "DevOps focuses only on requirements","DevOps avoids automation"],

    [2,"Which SDLC phase follows Design and Architecture?","Implementation","Testing","Deployment","Requirements Analysis"],

    [2,"Who are stakeholders?","Individuals or groups impacted by the project (end-users, sponsors, regulators)","Only the developers",
        "Only the testers","Only the Scrum team"],

    [2,"Which is NOT a requirements gathering technique?","Unit testing","Workshops and brainstorming","Observation and prototyping",
        "Use cases and user stories"],

    [2,"\"The system should respond within 2 seconds\" is which type of requirement?","Non-functional requirement","Functional requirement",
        "User story","Use case"],

    [2,"Which key documents capture requirements?","FRS and NFR","SRS and API","DDL and DML","PR and CI"],

    [2,"Which are the SDLC system design principles?","Modularity, Scalability, Maintainability","Velocity, Burn-down, Cycle time",
        "Unit, Integration, System","Abstraction, Encapsulation, Inheritance"],

    [2,"What is component design?","Breaking the system into independent modules with defined roles and interactions","Designing database tables",
        "Writing test cases","Creating a Sprint Backlog"],

    [2,"Which is an implementation best practice?","Following coding standards (consistent indentation, meaningful names)",
        "Avoiding version control","Skipping code reviews","Writing only comments"],

    [2,"Why do teams run code reviews?","Catch bugs early, share knowledge, improve code quality","Replace testing","Speed up deployment only",
        "Reduce stakeholder numbers"],

    [2,"Which testing type tests individual components?","Unit testing","System testing","Integration testing","Acceptance review"],

    [3,"Which describes a fixed-size array in C#?","Fixed size after initialisation, all elements of the same type","They resize automatically",
        "Each element points to the next","They are indexed from 1"],

    [3,"When should you use a fixed-size array?","When the number of elements is predetermined","When size changes frequently",
        "When inserting at arbitrary positions often","When elements have different types"],

    [3,"Which is an array of arrays where each sub-array can have a different size?","A jagged array","A 2D array","A List<T>","A LinkedList"],

    [3,"What is the trade-off between 2D arrays and jagged arrays?",
        "2D arrays: contiguous memory, faster access; jagged arrays: flexible but extra reference memory",
        "Jagged arrays: contiguous memory, faster access","2D arrays: different sub-array sizes","They are identical in memory layout"],

    [3,"Which method adjusts the size of an array?","Array.Resize(ref array, newSize)","Array.IndexOf()","Array.Copy()","Array.Sort()"],

    [3,"Which method finds the index of a value in an array?","Array.IndexOf","Array.Copy","Array.Sort","Array.Resize"],

    [3,"What is List<T>?","A dynamic array that resizes automatically as elements are added or removed","A fixed-size array of generics",
        "A node-based structure","A hash-based collection"],

    [3,"When a List<T> exceeds capacity, what happens to its internal array?","Its internal array size doubles","It grows by one element",
        "It throws an exception","It converts to a LinkedList"],

    [3,"What is a LinkedList?","A node-based structure with references to next/previous nodes","A contiguous block of memory",
        "An array of arrays","A fixed-size table"],

    [3,"What is the main advantage of a LinkedList over List<T>?","Efficient insertion/deletion since only node references change",
        "Fast random access by index","Contiguous memory layout","Automatic resizing by doubling"],

    [4,"What does a hash function do?","Converts a key into a fixed-size integer (hash code)","Encrypts a key","Sorts keys alphabetically",
        "Deletes duplicate keys"],

    [4,"Which are the required properties of a good hash function?","Deterministic, uniform, efficient","Random, unique, slow",
        "Deterministic, sorted, reversible","Random, uniform, efficient"],

    [4,"Which collision resolution method stores colliding keys in a linked list at the same slot?","Separate chaining","Linear probing",
        "Quadratic probing","Rehashing"],

    [4,"Which method finds the next available slot when a collision occurs?","Open addressing","Separate chaining","Load factor","Rehashing"],

    [4,"What is the load factor of a hash table?","Ratio of stored elements to the number of slots","Number of slots / stored elements",
        "Number of collisions / number of keys","Size of the largest chain"],

    [4,"What happens when the load factor exceeds a threshold?","Rehash into a larger table","Switch to a LinkedList",
        "Delete the oldest entries","Change the hash function to random"],

    [4,"What is the target average-case time complexity for hash table insertion, deletion and search?","O(1)","O(n)","O(log n)","O(n log n)"],

    [4,"In a graph, what are vertices and edges?","Vertices are nodes (entities); edges are the connections between them",
        "Vertices are connections; edges are entities","Both are entities","Vertices are weights; edges are nodes"],

    [4,"Which graph type has edges with a direction (e.g. one-way streets)?","A directed graph","A weighted graph",
        "An undirected graph","A hash graph"],
        
    [4,"Which graph has edges carrying costs or distances?","Weighted","Directed","Undirected","Cyclic"],

    [4,"Which algorithm explores as far as possible along each branch before backtracking?","Depth-First Search",
        "Breadth-First Search","Dijkstra's algorithm","Topological sort"],

    [4,"Which algorithm explores all vertices at the current depth level before going deeper?","Breadth-First Search",
        "Depth-First Search","Dijkstra's algorithm","Cycle detection"],

    [4,"What does Dijkstra's algorithm do?","Finds the shortest path from a source to all other vertices in a weighted graph",
        "Sorts vertices topologically","Detects cycles","Traverses level by level"],

    [5,"Which is a unique identifier for a record in a table?","Primary key","Foreign key","Index","Constraint"],

    [5,"What is a foreign key?","A field that references the primary key in another table","A unique identifier of its own table",
        "An index on the table","A copy of the table"],

    [5,"Students enrolling in many Courses, and Courses having many Students, is which relationship type?","Many-to-many","One-to-one",
        "One-to-many","Zero-to-one"],

    [5,"What is the purpose of normalisation?","To reduce redundancy and improve data integrity","To speed up network traffic",
        "To encrypt data","To duplicate data for backup"],

    [5,"Which normal form eliminates duplicate columns and creates separate tables for related data?","1NF","2NF","3NF","BCNF"],

    [5,"Which normal form ensures all non-key attributes depend on the WHOLE primary key?","2NF","1NF","3NF","DDL"],

    [5,"In an ER diagram, \"Name\" and \"Age\" of a Student are examples of:","Attribute","Entity","Relationship","Schema"],

    [5,"What is a database schema?","The logical structure of a database: tables, fields, data types, constraints",
        "A visual diagram of entities","A search method","A user permission"],

    [5,"Which index sorts and stores the rows physically in the table?","Clustered index","Non-clustered index","Foreign key",
        "Primary key constraint"],

    [5,"How do clustered and non-clustered indexes differ?","Clustered: sorts rows physically; non-clustered: separate structure pointing to data",
        "Clustered: separate structure; non-clustered: sorts rows physically","Both store rows physically","Neither improves performance"],

    [5,"CREATE TABLE belongs to which SQL category?","DDL (Data Definition Language)","DML (Data Manipulation Language)",
        "DCL (Data Control Language)","DQL"],

    [5,"INSERT INTO Students (StudentID, Name, Age) VALUES (1, 'John Doe', 22); belongs to:","DML","DDL","DCL","ER"],

    [5,"Which category controls access to data (e.g. GRANT)?","DCL","DDL","DML","JOIN"],

    [5,"Which query retrieves Name and Age of students older than 18?","SELECT Name, Age FROM Students WHERE Age > 18;",
        "UPDATE Students SET Age > 18;","DELETE Name, Age FROM Students;","INSERT Name, Age FROM Students WHERE Age > 18;"],

    [5,"Which statement changes Alice's age to 21?","UPDATE Students SET Age = 21 WHERE Name = 'Alice';","INSERT Students SET Age = 21;",
        "SELECT Age = 21 FROM Students;","DELETE Students SET Age = 21;"],

    [5,"Which statement removes records from a table?","DELETE","INSERT","UPDATE","SELECT"],

    [5,"Which join returns all matching and non-matching rows from BOTH tables?","FULL OUTER JOIN","INNER JOIN","RIGHT JOIN","LEFT JOIN"],

    [5,"Which join returns ONLY rows with matches in both tables?","INNER JOIN","LEFT JOIN","FULL OUTER JOIN","RIGHT JOIN"],

    [5,"What does the WHERE clause do?","Specifies conditions to filter data","Joins tables","Creates indexes","Defines table structure"],

    [6,"What is a connection string?","A string defining how an application connects to a database","A SQL query that creates tables",
        "A pooled connection","An EF Core migration"],

    [6,"What does connection pooling do?","Reusing existing connections to optimise performance","Closing all connections after each query",
        "Encrypting connection strings","Caching query results offline"],

    [6,"What is the purpose of transaction handling in ADO.NET?","Ensures data integrity across multiple operations",
        "Speeds up connection opening","Generates classes from the database","Maps relationships between entities"],

    [6,"In the ADO.NET transaction example, what is called in the catch block?","transaction.Rollback()","transaction.Commit()",
        "conn.Open()","context.SaveChanges()"],

    [6,"Which architecture keeps the connection open during operations?","Connected architecture","Disconnected architecture",
        "Code-First","Database-First"],

    [6,"Which architecture uses DataSet or DataTable to work with data offline?","Disconnected architecture","Connected architecture",
        "Connection pooling","Transaction handling"],

    [6,"Which is an ADO.NET best practice?","Use 'using' statements to manage resources","Hardcode the connection string",
        "Never close connections","Open a new connection per query without pooling"],

    [6,"What are the three steps of EF Core Code-First?","Entity class design, relationships mapping, migrations management",
        "Scaffold, connect, query","Pooling, transactions, disposal","SELECT, INSERT, DELETE"],

    [6,"Which commands create a migration and apply it to the database?","dotnet ef migrations add InitialCreate, then dotnet ef database update",
        "dotnet ef dbcontext scaffold","dotnet ef connection open","dotnet ef sql run"],

    [6,"Which approach generates C# classes and context from an existing database schema?","Database-First (Scaffold-DbContext)",
        "Code-First","ADO.NET disconnected mode","LINQ"],

    [6,"Which approach is ideal for greenfield projects?","Code-First","Database-First","Disconnected architecture","Raw ADO.NET"],

    [6,"Which is LINQ METHOD syntax for students older than 18?","context.Students.Where(s => s.Age > 18).ToList();",
        "from s in context.Students where s.Age > 18 select s;","SELECT * FROM Students WHERE Age > 18;","context.Students.Add(s);"],

    [6,"Which is a LINQ to Entities performance tip?","Use AsNoTracking() for read-only queries","Use ToList() everywhere",
        "Open a new connection per query","Disable pooling"]
];