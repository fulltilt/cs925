import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function JWT() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h2>Guide on JSON Web Tokens (JWT)</h2>
        <p>
          <strong>JSON Web Tokens (JWT)</strong> are a compact and secure way of
          representing claims or data between two parties, often used for{" "}
          <strong>authentication</strong> and <strong>authorization</strong> in
          web applications. They allow you to verify the identity of users and
          securely exchange information between client and server.
        </p>
        <hr />
        <h2>What is a JWT?</h2>
        <p>
          A <strong>JWT (JSON Web Token)</strong> is a string that securely
          represents a set of information (claims) between two parties. It is
          digitally signed, so that the recipient can verify its authenticity.
          JWTs are commonly used for <strong>stateless authentication</strong>,
          where a server does not store any session information but relies on
          the validity of the token provided by the client.
        </p>
        <p>
          A typical JWT might look like this (yes, they're long and you'll have
          to scroll to see the whole thing):
        </p>
        <CodeHighlight
          content={`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvbiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`}
          sandboxOption={false}
        />
        <hr />
        <h2>How Does a JWT Work?</h2>
        <h3>Structure of a JWT</h3>
        <p>
          A JWT consists of three parts, separated by dots (<code>.</code>):
        </p>
        <ol>
          <li>
            <strong>Header</strong>: Contains metadata about the token, such as
            the type of token (<code>JWT</code>) and the signing algorithm
            (e.g., <code>HS256</code>).
          </li>
          <li>
            <strong>Payload</strong>: Contains the claims, which are the data
            being exchanged (e.g., user information, permissions). This data is
            encoded but not encrypted, so sensitive information should not be
            stored here.
          </li>
          <li>
            <strong>Signature</strong>: Verifies that the sender of the JWT is
            who it says it is and ensures that the token has not been altered.
          </li>
        </ol>
        <p>Example JWT:</p>
        <CodeHighlight
          content={`
HEADER.PAYLOAD.SIGNATURE
`}
          sandboxOption={false}
        />
        <h3>JWT Signing</h3>
        <ul>
          <li>
            JWTs are signed using an <strong>algorithm</strong> like{" "}
            <code>HMAC SHA256</code> or <code>RSA</code>.
          </li>
          <li>
            The server generates the token using a <strong>secret</strong> (in{" "}
            <code>HS256</code>) or a <strong>private key</strong> (in{" "}
            <code>RS256</code>).
          </li>
          <li>
            The client can verify the token using the <strong>secret</strong>{" "}
            (for <code>HS256</code>) or the <strong>public key</strong> (for{" "}
            <code>RS256</code>).
          </li>
        </ul>
        <p>
          This signature is what makes the token tamper-proof. If anyone tries
          to change the data in the payload, the signature will no longer match,
          and the token will be rejected during verification.
        </p>
        <hr />
        <h2>JWT Use Cases</h2>
        <ul>
          <li>
            <strong>Authentication</strong>: JWTs are commonly used in user
            login systems. Once a user logs in, the server issues a token to the
            client. The client sends this token with every subsequent request,
            and the server verifies the token to authenticate the user.
          </li>
          <li>
            <strong>Authorization</strong>: JWTs can contain user roles and
            permissions, making it easier for servers to determine what
            resources a user can access.
          </li>
          <li>
            <strong>Data Exchange</strong>: JWTs can be used to securely
            transfer data between parties, ensuring that the data has not been
            tampered with.
          </li>
        </ul>
        <hr />
        <h2>How to Create a JWT</h2>
        <p>
          Let&apos;s create a JWT using Node.js and the{" "}
          <code>jsonwebtoken</code> library.
        </p>
        <h3>
          Step 1: Install <code>jsonwebtoken</code>
        </h3>
        <CodeHighlight
          content={`
npm install jsonwebtoken
`}
          sandboxOption={false}
        />
        <h3>Step 2: Generate a JWT</h3>
        <CodeHighlight
          content={`
const jwt = require('jsonwebtoken');

const user = {
  id: 1,
  username: 'johndoe',
  role: 'user'
};

// Secret key for signing the JWT
const secret = 'your-256-bit-secret';

// Create a JWT
const token = jwt.sign(user, secret, { expiresIn: '1h' });

console.log('Generated JWT:', token);
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            The <code>sign()</code> method generates a JWT using the provided
            payload (user data) and a secret key.
          </li>
          <li>
            The <code>expiresIn</code> option sets the token expiration time
            (e.g., 1 hour).
          </li>
        </ul>
        <hr />
        <h2>How to Verify a JWT</h2>
        <CodeHighlight
          content={`
const token = 'your-jwt-token';

jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error('Invalid token:', err.message);
    return;
  }
  console.log('Decoded JWT:', decoded);
});
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            The <code>verify()</code> method checks the validity of the token
            using the same secret that was used to sign it.
          </li>
          <li>
            If the token is valid, it returns the decoded payload. If not, it
            returns an error.
          </li>
        </ul>
        <hr />
        <h2>Pros and Cons of JWT</h2>
        <h3>Pros</h3>
        <ul>
          <li>
            <strong>Stateless</strong>: JWTs are stateless, meaning the server
            does not need to store session data.
          </li>
          <li>
            <strong>Compact</strong>: JWTs are compact and can be easily
            transmitted over HTTP headers, making them ideal for RESTful APIs.
          </li>
          <li>
            <strong>Self-contained</strong>: All the information required to
            verify the token is contained within the token itself.
          </li>
        </ul>
        <h3>Cons</h3>
        <ul>
          <li>
            <strong>Size</strong>: Because JWTs contain all their claims, they
            can become large, especially when encoded as a base64 string.
          </li>
          <li>
            <strong>Security Risks</strong>: Since JWTs store data in a
            base64-encoded form, sensitive data should not be included in the
            payload, as it can be easily decoded.
          </li>
          <li>
            <strong>Cannot Be Revoked</strong>: Once a JWT is issued, it is
            difficult to revoke until it expires, which can be problematic if a
            token is compromised.
          </li>
        </ul>
        <hr />
        <h2>Best Practices for Using JWT</h2>
        <ul>
          <li>
            <strong>Use HTTPS</strong>: Always use HTTPS to transmit JWTs to
            prevent interception by attackers.
          </li>
          <li>
            <strong>Store JWTs Securely</strong>: Store JWTs in{" "}
            <code>localStorage</code> or <code>sessionStorage</code>, but be
            cautious of XSS attacks. Alternatively, use HTTP-only cookies.
          </li>
          <li>
            <strong>Set Expiration Times</strong>: Use <code>expiresIn</code> to
            set short-lived JWTs and refresh tokens for longer sessions.
          </li>
          <li>
            <strong>Do Not Store Sensitive Data</strong>: Avoid storing
            sensitive user data like passwords or personally identifiable
            information (PII) in the JWT payload.
          </li>
          <li>
            <strong>Rotate Secrets</strong>: Periodically rotate the secret keys
            used to sign JWTs to improve security.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          JWTs are a powerful tool for secure data exchange, authentication, and
          authorization in modern web applications. They enable stateless
          communication between clients and servers, making them a popular
          choice for RESTful APIs and Single Page Applications (SPAs). While
          they offer many benefits, it&apos;s crucial to follow best practices
          to ensure the security and integrity of your tokens.
        </p>
        <p>
          With a solid understanding of JWTs, you can enhance the security of
          your applications and provide a seamless user experience.
        </p>
      </div>
    </ModuleWrapper>
  );
}
