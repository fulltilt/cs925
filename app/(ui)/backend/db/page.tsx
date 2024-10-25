import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function DB() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Integrating a Database Into an Express App</h1>
        <p>
          In the previous module, we were introduced to REST APIs. The problem
          we now have is if we try to add, delete or update data, the data
          isn&apos;t persisted. What we need to alleviate this is to integrate a
          database to our apps. For this example, we will introduce MondoDB as
          our database but any database will do.
        </p>
        <p>
          MongoDB is a popular NoSQL database that is well-suited for handling
          large volumes of unstructured or semi-structured data. Integrating
          MongoDB with an Express app allows you to build scalable and flexible
          backend applications with ease. We&#39;ll walk through setting up an
          Express.js application and connecting it to MongoDB using{" "}
          <strong>Mongoose</strong>, a powerful ODM (Object Data Modeling)
          library for MongoDB and Node.js.
        </p>
        <hr />
        <h2>Prerequisites</h2>
        <p>Before starting, make sure you have:</p>
        <ul>
          <li>
            A <strong>MongoDB Atlas account</strong>. Sign up for free at{" "}
            <a href="https://www.mongodb.com">mongodb.com</a>. If you don&apos;t
            you can follow the next sections instructions.
          </li>
          <li>
            <strong>Node.js</strong> and <strong>npm</strong> installed on your
            machine.
          </li>
        </ul>
        <hr />
        <h2>Creating a MongoDB Atlas Account</h2>
        <ol>
          <li>
            <p>
              <strong>Go to the MongoDB Atlas website</strong>: Visit{" "}
              <a href="https://www.mongodb.com/cloud/atlas">
                https://www.mongodb.com/cloud/atlas
              </a>{" "}
              and click on <strong>&quot;Try Free&quot;</strong> or{" "}
              <strong>&quot;Sign In&quot;</strong> if you already have an
              account.
            </p>
          </li>
          <li>
            <p>
              <strong>Create an account</strong>: Follow the prompts to sign up
              using your email, Google account, or GitHub account.
            </p>
          </li>
        </ol>
        <hr />
        <h2>Setting Up a New Cluster</h2>
        <ol>
          <li>
            <p>
              <strong>Create a New Project</strong>:
            </p>
            <ul>
              <li>
                After logging in, click on{" "}
                <strong>&quot;New Project&quot;</strong> from the MongoDB Atlas
                dashboard.
              </li>
              <li>
                Name your project and click <strong>&quot;Next&quot;</strong>.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Create a Cluster</strong>:
            </p>
            <ul>
              <li>
                Click on <strong>&quot;Build a Cluster&quot;</strong>.
              </li>
              <li>
                Choose a <strong>Cloud Provider</strong> (e.g., AWS, Google
                Cloud, or Azure) and a <strong>Region</strong> close to your
                users for better latency.
              </li>
              <li>
                Select the <strong>Free Tier</strong> (M0) if you want to start
                with a free instance.
              </li>
              <li>
                Click <strong>&quot;Create Cluster&quot;</strong>. It might take
                a few minutes for the cluster to be set up.
              </li>
            </ul>
          </li>
        </ol>
        <hr />
        <h2>Configuring Database Access and IP Whitelist</h2>
        <ol>
          <li>
            <p>
              <strong>Set Up Database Users</strong>:
            </p>
            <ul>
              <li>
                After your cluster is created, click on{" "}
                <strong>&quot;Database Access&quot;</strong> on the left
                sidebar.
              </li>
              <li>
                Click on <strong>&quot;Add New Database User&quot;</strong>.
              </li>
              <li>
                Enter a <strong>username</strong> and <strong>password</strong>.
                Make sure to save these credentials as you’ll need them to
                connect later.
              </li>
              <li>
                Set the user&#39;s <strong>permissions</strong> (e.g.,{" "}
                <strong>Read and Write to any database</strong>).
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Add IP Address to IP Whitelist</strong>:
            </p>
            <ul>
              <li>
                Click on <strong>&quot;Network Access&quot;</strong> on the left
                sidebar.
              </li>
              <li>
                Click <strong>&quot;Add IP Address&quot;</strong>.
              </li>
              <li>
                You can add <strong>0.0.0.0/0</strong> to allow access from
                anywhere (for development purposes) or specify your IP address
                for better security.
              </li>
              <li>
                Click <strong>&quot;Confirm&quot;</strong> to save the changes.
              </li>
            </ul>
          </li>
        </ol>
        <hr />
        <h2>Connecting to the Cluster</h2>
        <ol>
          <li>
            <p>
              <strong>Get the Connection String</strong>:
            </p>
            <ul>
              <li>
                Go to <strong>&quot;Clusters&quot;</strong> in the MongoDB Atlas
                dashboard.
              </li>
              <li>
                Click <strong>&quot;Connect&quot;</strong> next to your cluster.
              </li>
              <li>
                Select <strong>&quot;Connect your application&quot;</strong>.
              </li>
              <li>
                Copy the <strong>connection string</strong> provided. It will
                look something like this:
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>
                Replace <code>&lt;username&gt;</code> and{" "}
                <code>&lt;password&gt;</code>
              </strong>{" "}
              with the database user credentials you created earlier.
            </p>
          </li>
          <li>
            <strong>
              Replace <code>&lt;dbname&gt;</code>
            </strong>{" "}
            with the name of the database you want to use.
          </li>
        </ol>
        <hr />
        <h2>Setting Up the Project</h2>
        <ol>
          <li>
            <p>
              <strong>Create a new project directory</strong> and initialize a
              Node.js application:
            </p>
            <CodeHighlight
              content={`
mkdir express-mongo-app
cd express-mongo-app
npm init -y
`}
              sandboxOption={false}
            />
          </li>
          <li>
            <p>
              <strong>Install Express</strong>:
            </p>
            <CodeHighlight
              content={`
npm install express
`}
              sandboxOption={false}
            />
          </li>
          <li>
            <p>
              <strong>Create a basic Express server</strong>: Create a file
              named <code>server.js</code>:
            </p>
            <CodeHighlight
              content={`
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express MongoDB App!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:$\{PORT}\`);
});
`}
              sandboxOption={false}
            />

            <p>Run the server using:</p>
            <CodeHighlight
              content={`
node server.js
`}
              sandboxOption={false}
            />
            <p>
              Open your browser and navigate to{" "}
              <code>http://localhost:3000</code>. You should see the message
              &quot;Welcome to the Express MongoDB App!&quot;.
            </p>
          </li>
        </ol>
        <hr />
        <h2>Installing Mongoose</h2>
        <p>
          <strong>Mongoose</strong> is an ODM (Object Data Modeling) library for
          MongoDB and Node.js that simplifies working with MongoDB.
        </p>
        <ol>
          <li>
            <strong>Install Mongoose</strong>:
            <CodeHighlight
              content={`
npm install mongoose
`}
              sandboxOption={false}
            />
          </li>
        </ol>
        <hr />
        <h2>Connecting to MongoDB</h2>
        <ol>
          <li>
            <p>
              <strong>Set up a MongoDB connection</strong> using Mongoose.
              Create a new file named <code>config/mongodb.js</code>:
            </p>
            <CodeHighlight
              content={`
const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/expressdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
`}
              sandboxOption={false}
            />
            <p>
              Replace <code>&#39;mongodb://localhost:27017/expressdb&#39;</code>{" "}
              with your MongoDB connection string if you’re using a cloud-based
              MongoDB instance like <strong>MongoDB Atlas</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Update <code>server.js</code> to connect to MongoDB
              </strong>
              :
            </p>
            <CodeHighlight
              content={`
const express = require('express');
const connectMongoDB = require('./config/mongodb');
const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
connectMongoDB();

app.get('/', (req, res) => {
  res.send('Welcome to the Express MongoDB App!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:$\{PORT}\`);
});
`}
              sandboxOption={false}
            />
            <p>
              Now, when you start your server, you should see &quot;Connected to
              MongoDB&quot; in the console if the connection is successful.
            </p>
          </li>
        </ol>
        <hr />
        <h2>Defining Mongoose Schemas and Models</h2>
        <p>
          A <strong>schema</strong> defines the structure of documents within a
          MongoDB collection. A <strong>model</strong> is a wrapper for
          interacting with those documents using Mongoose.
        </p>
        <ol>
          <li>
            <p>
              <strong>Create a user model</strong>: Create a file{" "}
              <code>models/User.js</code>:
            </p>
            <CodeHighlight
              content={`
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema);
`}
              sandboxOption={false}
            />
            <p>
              This schema defines a <code>User</code> model with{" "}
              <code>name</code>, <code>email</code>, and <code>age</code>{" "}
              fields.
            </p>
          </li>
        </ol>
        <hr />
        <h2>Creating API Routes for CRUD Operations</h2>
        <ol>
          <li>
            <p>
              <strong>Create CRUD routes</strong> for managing users. Add the
              following code in <code>server.js</code>:
            </p>
            <CodeHighlight
              content={`
const express = require('express');
const connectMongoDB = require('./config/mongodb');
const User = require('./models/User');
const app = express();
const PORT = 3000;

app.use(express.json());
connectMongoDB();

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:$\{PORT}\`);
});
`}
              sandboxOption={false}
            />
          </li>
        </ol>
        <hr />
        <h2>Testing the API</h2>
        <p>
          Use a tool like <strong>Postman</strong> or <strong>cURL</strong> to
          test the following routes when you have the Express app running:
        </p>
        <ul>
          <li>
            <strong>Create a user</strong> (POST):{" "}
            <code>http://localhost:3000/users</code>
          </li>
          <li>
            <strong>Get all users</strong> (GET):{" "}
            <code>http://localhost:3000/users</code>
          </li>
          <li>
            <strong>Get a user by ID</strong> (GET):{" "}
            <code>http://localhost:3000/users/:id</code>
          </li>
          <li>
            <strong>Update a user by ID</strong> (PUT):{" "}
            <code>http://localhost:3000/users/:id</code>
          </li>
          <li>
            <strong>Delete a user by ID</strong> (DELETE):{" "}
            <code>http://localhost:3000/users/:id</code>
          </li>
        </ul>
        <hr />
        <h2>Best Practices</h2>
        <ol>
          <li>
            <p>
              <strong>Environment Variables</strong>: Use <code>dotenv</code> to
              store your MongoDB connection string in environment variables:
            </p>
            <CodeHighlight
              content={`
npm install dotenv
`}
              sandboxOption={false}
            />
            <p>
              Create a <code>.env</code> file:
            </p>
            <CodeHighlight
              content={`
MONGODB_URI=mongodb://localhost:27017/expressdb
`}
              sandboxOption={false}
            />
            <p>
              Update <code>config/mongodb.js</code>:
            </p>
            <CodeHighlight
              content={`
const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
`}
              sandboxOption={false}
            />
          </li>
          <li>
            <p>
              <strong>Validation</strong>: Use Mongoose validation to ensure
              that data is consistent and meets your application&#39;s
              requirements.
            </p>
          </li>
          <li>
            <p>
              <strong>Error Handling</strong>: Implement proper error handling
              to make debugging easier and to improve the user experience.
            </p>
          </li>
        </ol>
        <hr />
        <h2>9. Conclusion</h2>
        <p>
          With this guide, you have successfully set up an Express.js app
          connected to MongoDB using Mongoose. You learned how to define
          schemas, create models, and build API routes for CRUD operations.
        </p>
      </div>
    </ModuleWrapper>
  );
}
