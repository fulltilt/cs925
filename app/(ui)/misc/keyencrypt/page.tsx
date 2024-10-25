import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function KeyEncryption() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Public-Private Key Encryption</h1>
        <p>
          <strong>Public-Private Key Encryption</strong>, also known as{" "}
          <strong>asymmetric encryption</strong>, is a type of encryption that
          uses a pair of keys for secure communication: a{" "}
          <strong>public key</strong> and a <strong>private key</strong>. This
          guide will walk you through the basic concepts of how this encryption
          method works, its use cases, and why it is critical for modern
          security.
        </p>
        <hr />
        <h2>What is Public-Private Key Encryption?</h2>
        <p>
          Public-Private Key Encryption, also known as{" "}
          <strong>asymmetric encryption</strong>, is an encryption technique
          that uses two distinct keys:
        </p>
        <ul>
          <li>
            <strong>Public Key</strong>: Can be shared freely with anyone. It is
            used to encrypt data.
          </li>
          <li>
            <strong>Private Key</strong>: Must be kept secret by the owner. It
            is used to decrypt data that was encrypted with the corresponding
            public key.
          </li>
        </ul>
        <p>
          This two-key mechanism enables secure communication, even if the
          public key is known to others, as only the holder of the corresponding
          private key can decrypt the messages.
        </p>
        <hr />
        <h2>How Does It Work?</h2>
        <h3>Generating Key Pairs</h3>
        <ul>
          <li>
            A pair of keys (public and private) is generated using cryptographic
            algorithms like <strong>RSA</strong> (Rivest-Shamir-Adleman),{" "}
            <strong>ECC</strong> (Elliptic Curve Cryptography), or{" "}
            <strong>DSA</strong> (Digital Signature Algorithm).
          </li>
          <li>
            The <strong>public key</strong> is shared with others, while the{" "}
            <strong>private key</strong> is kept secret.
          </li>
        </ul>
        <h3>Encrypting with a Public Key</h3>
        <ol>
          <li>
            <strong>Data Encryption</strong>: The sender encrypts a message
            using the recipient&#39;s <strong>public key</strong>.
          </li>
          <li>
            <strong>Secure Transmission</strong>: The encrypted data is sent
            over the network.
          </li>
        </ol>
        <h3>Decrypting with a Private Key</h3>
        <ol>
          <li>
            <strong>Data Decryption</strong>: The recipient decrypts the
            received data using their <strong>private key</strong>.
          </li>
          <li>
            <strong>Access to Plaintext</strong>: Only the person with the
            private key can read the original message, even if the encrypted
            message was intercepted during transmission.
          </li>
        </ol>
        <h3>Example of the Process</h3>
        <ol>
          <li>Alice wants to send a secret message to Bob.</li>
          <li>Bob gives Alice his public key.</li>
          <li>Alice uses Bob&apos;s public key to encrypt the message.</li>
          <li>Bob uses his private key to decrypt the message and read it.</li>
        </ol>
        <hr />
        <h2>3. Symmetric vs. Asymmetric Encryption</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Symmetric Encryption</TableHead>
              <TableHead>Asymmetric Encryption</TableHead>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>
                <strong>Key Type</strong>
              </TableCell>
              <TableCell>
                Single key for both encryption and decryption
              </TableCell>
              <TableCell>Public and private key pair</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Speed</strong>
              </TableCell>
              <TableCell>Faster due to simpler algorithms</TableCell>
              <TableCell>Slower due to complex math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Use Cases</strong>
              </TableCell>
              <TableCell>Data encryption (e.g., AES)</TableCell>
              <TableCell>Key exchange, digital signatures</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Key Sharing</strong>
              </TableCell>
              <TableCell>Requires secure key exchange</TableCell>
              <TableCell>Public key can be shared openly</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <ul>
          <li>
            <strong>Symmetric encryption</strong> uses a single key for both
            encryption and decryption, making it faster but requiring a secure
            method to share the key.
          </li>
          <li>
            <strong>Asymmetric encryption</strong> uses a pair of keys, allowing
            secure communication without needing to share a secret key.
          </li>
        </ul>
        <p>
          Asymmetric encryption is often used in conjunction with symmetric
          encryption in real-world scenarios, where asymmetric encryption is
          used to exchange keys securely, and symmetric encryption is used for
          faster data encryption.
        </p>
        <hr />
        <h2>Common Use Cases</h2>
        <h3>HTTPS and SSL/TLS</h3>
        <ul>
          <li>
            <strong>SSL/TLS certificates</strong> use public-private key
            encryption to establish a secure connection between web servers and
            browsers.
          </li>
          <li>
            When you see &quot;https://&quot; in a website URL, it means SSL/TLS
            is being used, ensuring that any data exchanged between you and the
            website is encrypted.
          </li>
        </ul>
        <h3>Digital Signatures</h3>
        <ul>
          <li>
            A <strong>digital signature</strong> ensures that a message or
            document is genuine and has not been altered.
          </li>
          <li>
            The sender signs a message with their private key, and the recipient
            can verify it with the sender&apos;s public key.
          </li>
          <li>
            This guarantees both the authenticity of the sender and the
            integrity of the message.
          </li>
        </ul>
        <h3>Secure Email</h3>
        <ul>
          <li>
            <strong>PGP (Pretty Good Privacy)</strong> is a protocol for sending
            encrypted emails.
          </li>
          <li>
            It uses public-private key pairs to encrypt and decrypt emails,
            ensuring that only the intended recipient can read the message.
          </li>
        </ul>
        <hr />
        <h2>Examples of Public-Private Key Encryption</h2>
        <h3>
          Example in JavaScript Using <code>crypto</code> Module (Node.js)
        </h3>
        <p>
          Below is a basic example using Node.js to generate keys, encrypt a
          message, and then decrypt it:
        </p>
        <CodeHighlight
          content={`
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

// Generate a public-private key pair
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// Original message
const message = "Hello, world!";

// Encrypt the message using the public key
const encryptedMessage = publicEncrypt(publicKey, Buffer.from(message));
console.log("Encrypted message:", encryptedMessage.toString('base64'));

// Decrypt the message using the private key
const decryptedMessage = privateDecrypt(privateKey, encryptedMessage);
console.log("Decrypted message:", decryptedMessage.toString());
`}
          sandboxOption={false}
        />
        <h3>Example of Public Key (PEM Format)</h3>
        <CodeHighlight
          content={`
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnZsp...
-----END PUBLIC KEY-----
`}
          sandboxOption={false}
        />
        <h3>Example of Private Key (PEM Format)</h3>
        <CodeHighlight
          content={`
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...
-----END PRIVATE KEY-----
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Key Management and Security Best Practices</h2>
        <ul>
          <li>
            <strong>Keep Private Keys Secure</strong>: Store private keys in
            secure environments like hardware security modules (HSMs) or
            encrypted key vaults.
          </li>
          <li>
            <strong>Rotate Keys Periodically</strong>: To maintain security,
            generate new keys and replace old ones periodically.
          </li>
          <li>
            <strong>Use Strong Key Lengths</strong>: Use a minimum of 2048-bit
            keys for RSA or 256-bit keys for ECC to ensure strong encryption.
          </li>
          <li>
            <strong>Restrict Access</strong>: Ensure that access to private keys
            is limited to only those who absolutely need it.
          </li>
          <li>
            <strong>Backup Keys</strong>: Securely back up private keys to
            prevent data loss.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          Public-private key encryption is a fundamental technology that
          underpins the security of online communications, ensuring
          confidentiality, integrity, and authenticity. Understanding how it
          works allows you to implement secure data transmission in your
          applications and ensure that sensitive information is protected. While
          asymmetric encryption is more complex than symmetric encryption, its
          ability to securely exchange information over open networks makes it
          an essential tool for modern security practices.
        </p>
      </div>
    </ModuleWrapper>
  );
}
