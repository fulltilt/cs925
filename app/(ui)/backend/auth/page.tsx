import CodeHighlight from "@/app/components/CodeHighlight";

export default function Auth() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Authentication and Authorization</h1>
      <p>
        In modern web applications, <strong>authentication</strong> and{" "}
        <strong>authorization</strong> are essential concepts for managing user
        access and securing resources. Although they are often used together,
        they serve distinct purposes:
      </p>
      <ul>
        <li>
          <strong>Authentication</strong>: Verifies the identity of a user. It
          answers the question, &quot;Who are you?&quot;
        </li>
        <li>
          <strong>Authorization</strong>: Determines what an authenticated user
          is allowed to do. It answers the question, &quot;What can you
          do?&quot;
        </li>
      </ul>
      <p>
        In this guide, we will explore the concepts of authentication and
        authorization, the various methods and strategies for implementing them,
        and best practices to secure your applications.
      </p>
      <hr />
      <h3>What is Authentication?</h3>
      <p>
        <strong>Authentication</strong> is the process of verifying that someone
        is who they claim to be. It ensures that users can access the
        application with valid credentials, such as a username and password.
        Common methods of authentication include:
      </p>
      <ul>
        <li>
          <strong>Username and Password</strong>: The most traditional method
          where a user provides a username and password.
        </li>
        <li>
          <strong>Multi-Factor Authentication (MFA)</strong>: Requires
          additional verification methods, such as a code sent to a phone or a
          biometric scan, to enhance security.
        </li>
        <li>
          <strong>OAuth</strong>: A protocol for authorization but can be used
          to authenticate users by using third-party providers like Google or
          Facebook.
        </li>
        <li>
          <strong>Biometric Authentication</strong>: Uses physical
          characteristics like fingerprints or facial recognition.
        </li>
      </ul>
      <h3>What is Authorization?</h3>
      <p>
        <strong>Authorization</strong> determines what an authenticated user is
        allowed to do within an application. It controls access to resources
        based on roles, permissions, or attributes. For example:
      </p>
      <ul>
        <li>
          <strong>User Roles</strong>: Admin, editor, viewer, etc., where each
          role has specific permissions.
        </li>
        <li>
          <strong>Resource-Based Access</strong>: Allowing access to specific
          resources or data (e.g., a user can access their own data but not
          others).
        </li>
        <li>
          <strong>Action-Based Permissions</strong>: Controlling what actions a
          user can perform, such as reading, writing, or deleting a resource.
        </li>
      </ul>
      <h3>Types of Authentication</h3>
      <h4>
        1. <strong>Password-Based Authentication</strong>
      </h4>
      <ul>
        <li>
          <strong>Description</strong>: Users authenticate by providing a
          username and password.
        </li>
        <li>
          <strong>Pros</strong>: Simple to implement and understand.
        </li>
        <li>
          <strong>Cons</strong>: Vulnerable to brute-force attacks and phishing
          if not properly secured.
        </li>
      </ul>
      <h4>
        2. <strong>Token-Based Authentication</strong>
      </h4>
      <ul>
        <li>
          <strong>Description</strong>: Users authenticate with credentials and
          receive a token, often a JWT (JSON Web Token), which is used for
          subsequent requests.
        </li>
        <li>
          <strong>Pros</strong>: Stateless, scalable, and allows Single Sign-On
          (SSO).
        </li>
        <li>
          <strong>Cons</strong>: Tokens need to be securely stored, usually in
          HTTP-only cookies or local storage.
        </li>
      </ul>
      <h4>
        3. <strong>OAuth2 and OpenID Connect</strong>
      </h4>
      <ul>
        <li>
          <strong>Description</strong>: OAuth2 is an authorization protocol that
          allows third-party applications to access user resources. OpenID
          Connect extends OAuth2 to provide authentication.
        </li>
        <li>
          <strong>Pros</strong>: Standardized, used for social login with
          providers like Google, Facebook, and GitHub.
        </li>
        <li>
          <strong>Cons</strong>: Can be complex to implement, especially with
          multiple providers.
        </li>
      </ul>
      <h4>
        4. <strong>Multi-Factor Authentication (MFA)</strong>
      </h4>
      <ul>
        <li>
          <strong>Description</strong>: Requires users to provide two or more
          verification methods.
        </li>
        <li>
          <strong>Pros</strong>: Greatly enhances security.
        </li>
        <li>
          <strong>Cons</strong>: Adds friction to the user experience.
        </li>
      </ul>
      <h3>Implementing Authentication</h3>
      <h4>
        1.{" "}
        <strong>
          Username and Password Authentication with Express and Node.js
        </strong>
      </h4>
      <p>
        Example of setting up basic authentication using bcrypt for password
        hashing:
      </p>
      <CodeHighlight
        content={`
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

let users = [];

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid credentials');
  }
  res.send('Login successful');
});

app.listen(3000, () => console.log('Server running on port 3000'));
`}
        sandboxOption={false}
      />
      <p>
        This example uses bcrypt to hash passwords securely before storing them.
      </p>
      <h3>Authorization Methods</h3>
      <p>Authorization can be implemented using various methods:</p>
      <h4>
        1. <strong>Role-Based Access Control (RBAC)</strong>
      </h4>
      <ul>
        <li>
          Users are assigned roles, and each role has specific permissions.
        </li>
        <li>
          Common in applications where different user roles need different
          levels of access.
        </li>
      </ul>
      <h4>
        2. <strong>Attribute-Based Access Control (ABAC)</strong>
      </h4>
      <ul>
        <li>
          Access is granted based on user attributes like age, department, or
          location.
        </li>
        <li>Offers more granular control compared to RBAC.</li>
      </ul>
      <h4>
        3. <strong>Access Control Lists (ACLs)</strong>
      </h4>
      <ul>
        <li>Associates permissions with resources and users.</li>
        <li>
          Can be used to define which users have access to specific resources.
        </li>
      </ul>
      <h3>Implementing Role-Based Access Control (RBAC)</h3>
      <p>Example of implementing RBAC in an Express app:</p>
      <CodeHighlight
        content={`
const roles = {
  admin: ['read', 'write', 'delete'],
  user: ['read']
};

const checkPermission = (role, action) => (req, res, next) => {
  if (!roles[role] || !roles[role].includes(action)) {
    return res.status(403).send('Forbidden');
  }
  next();
};

// Route protected by RBAC
app.get('/admin', checkPermission('admin', 'read'), (req, res) => {
  res.send('Welcome, admin!');
});
`}
        sandboxOption={false}
      />
      <p>
        This middleware checks if a user’s role has the permission to perform a
        specific action.
      </p>
      <h3>Using OAuth2 and OpenID Connect</h3>
      <p>
        OAuth2 allows users to grant third-party applications access to their
        resources without sharing credentials. OpenID Connect is built on top of
        OAuth2 for authentication.
      </p>
      <h4>Example Flow:</h4>
      <ol>
        <li>User clicks a &quot;Login with Google&quot; button.</li>
        <li>The user is redirected to Google&#39;s authorization page.</li>
        <li>Google asks the user to grant access.</li>
        <li>
          Upon granting access, Google sends an authorization code back to your
          server.
        </li>
        <li>
          Your server exchanges the code for an access token and, optionally, an
          ID token (for user information).
        </li>
      </ol>
      <p>
        Libraries like <code>passport</code> (for Node.js) and{" "}
        <code>next-auth</code> (for Next.js) make this process easier.
      </p>
      <h3>JSON Web Tokens (JWTs)</h3>
      <p>
        <strong>JSON Web Tokens (JWTs)</strong> are used for securely
        transmitting information between parties as a JSON object. They are
        often used for authentication and session management.
      </p>
      <h4>Example of Generating a JWT:</h4>
      <CodeHighlight
        content={`
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});
`}
        sandboxOption={false}
      />
      <h4>Example of Verifying a JWT:</h4>
      <CodeHighlight
        content={`
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = decoded;
    next();
  });
};
`}
        sandboxOption={false}
      />
      <h3>Best Practices for Authentication and Authorization</h3>
      <ol>
        <li>
          <strong>Hash Passwords</strong>: Always hash passwords using a strong
          hashing algorithm like bcrypt before storing them.
        </li>
        <li>
          <strong>Use HTTPS</strong>: Ensure all communication between clients
          and the server is encrypted.
        </li>
        <li>
          <strong>Store Tokens Securely</strong>: Store JWTs in HTTP-only
          cookies to prevent XSS attacks.
        </li>
        <li>
          <strong>Implement MFA</strong>: Multi-Factor Authentication
          significantly improves security.
        </li>
        <li>
          <strong>Rate Limiting</strong>: Implement rate limiting to prevent
          brute-force attacks.
        </li>
        <li>
          <strong>Secure JWTs</strong>: Use strong secrets for signing JWTs and
          keep them short-lived to minimize risks.
        </li>
        <li>
          <strong>Log User Activities</strong>: Monitor login attempts and
          failed access attempts for suspicious activity.
        </li>
      </ol>
      <h3>Conclusion</h3>
      <p>
        Authentication and authorization are critical to ensuring that only
        legitimate users can access and perform actions in your application.
        Understanding the difference between these concepts and implementing
        them using best practices can greatly enhance the security of your web
        applications. By using tools like JWTs, OAuth2, and well-structured
        RBAC, you can build robust and secure APIs that safeguard sensitive data
        and maintain user privacy.
      </p>
      <p>
        Mastering these techniques will empower you to build scalable and secure
        applications, ensuring a better experience for your users.
      </p>
    </div>
  );
}
