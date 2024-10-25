import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function SettingUpDomain() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Registering a Domain</h1>
        <p>
          Once you deploy your website online, you'll want to give it a domain
          name that's easy to type and will make it easy for your users to find
          you. There are many domain name registrars suchs as Squarespace,
          GoDaddy or AWS but for this tutorial we will go through how to
          register a domain on Cloudflare. <strong>Cloudflare</strong> is a
          popular service for domain registration, DNS management, and enhancing
          website performance through CDN (Content Delivery Network) and
          security services. In this tutorial, we&#39;ll go over the steps to{" "}
          <strong>register a domain</strong> on Cloudflare.
        </p>
        <hr />
        <h2>What You Need Before You Start</h2>
        <ul>
          <li>
            <strong>Cloudflare Account</strong>: If you don&#39;t have an
            account, create one at{" "}
            <a href="https://www.cloudflare.com">https://www.cloudflare.com</a>.
          </li>
          <li>
            <strong>A Domain Name</strong>: If you want to register a new domain
            or transfer an existing domain to Cloudflare, make sure you have
            access to your current domain registrar (if applicable).
          </li>
        </ul>
        <hr />
        <h2>2. Registering a Domain on Cloudflare</h2>
        <h3>Step 1: Log in to Cloudflare</h3>
        <ol>
          <li>
            Go to{" "}
            <a href="https://www.cloudflare.com">https://www.cloudflare.com</a>.
          </li>
          <li>
            Log in using your <strong>Cloudflare account</strong> credentials.
          </li>
        </ol>
        <h3>Step 2: Navigate to Domain Registration</h3>
        <ol>
          <li>
            After logging in, go to the <strong>Cloudflare Dashboard</strong>.
          </li>
          <li>
            Click on <strong>Registrar</strong> in the top navigation bar or
            find it in the menu on the left.
          </li>
        </ol>
        <h3>Step 3: Search for a Domain</h3>
        <ol>
          <li>
            Click <strong>Register a New Domain</strong>.
          </li>
          <li>
            Enter the domain name you wish to register in the{" "}
            <strong>domain search bar</strong>.
          </li>
          <li>
            Click <strong>Search</strong> to check if the domain is available.
          </li>
        </ol>
        <h3>Step 4: Select Your Domain</h3>
        <ol>
          <li>
            If your domain is available, you will see a list of available
            domains and their prices.
          </li>
          <li>
            Select the domain you wish to purchase and click{" "}
            <strong>Add to Cart</strong>.
          </li>
        </ol>
        <h3>Step 5: Proceed to Checkout</h3>
        <ol>
          <li>
            Click <strong>Proceed to Checkout</strong>.
          </li>
          <li>
            Fill in the required information, including{" "}
            <strong>contact details</strong> for domain registration.
          </li>
          <li>
            Select the <strong>registration duration</strong> (1 year, 2 years,
            etc.).
          </li>
          <li>
            Enter your <strong>payment information</strong> and complete the
            purchase.
          </li>
        </ol>
        <p>
          Cloudflare will automatically set up your domain using
          Cloudflare&#39;s <strong>DNS</strong>.
        </p>
        <hr />
        <h2>3. Setting Up DNS Records</h2>
        <p>
          Once you&apos;ve registered your domain, it&apos;s time to configure
          your <strong>DNS settings</strong>:
        </p>
        <ol>
          <li>
            Go to your <strong>Cloudflare Dashboard</strong>.
          </li>
          <li>Select your new domain from the list of domains.</li>
          <li>
            Go to the <strong>DNS</strong> tab.
          </li>
        </ol>
        <p>You can add various DNS records depending on your needs:</p>
        <ul>
          <li>
            <strong>A Record</strong>: Points your domain to an IP address.
          </li>
          <li>
            <strong>CNAME Record</strong>: Redirects one domain to another
            domain.
          </li>
          <li>
            <strong>MX Record</strong>: Sets up email servers for your domain.
          </li>
        </ul>
        <p>
          For example, if you have a website hosted on a server with the IP{" "}
          <code>123.123.123.123</code>, you would add an{" "}
          <strong>A Record</strong> like this:
        </p>
        <ul>
          <li>
            <strong>Type</strong>: <code>A</code>
          </li>
          <li>
            <strong>Name</strong>: <code>@</code> (represents the root domain)
          </li>
          <li>
            <strong>IPv4 Address</strong>: <code>123.123.123.123</code>
          </li>
          <li>
            <strong>TTL</strong>: Auto
          </li>
          <li>
            <strong>Proxy status</strong>: Enable to take advantage of
            Cloudflare&#39;s CDN (recommended).
          </li>
        </ul>
        <hr />
        <h2>4. Configuring SSL/TLS</h2>
        <p>
          To ensure your domain is secure, set up <strong>SSL/TLS</strong>:
        </p>
        <ol>
          <li>
            Go to the <strong>SSL/TLS</strong> tab in your Cloudflare dashboard.
          </li>
          <li>
            Select the <strong>SSL/TLS Mode</strong>:
            <ul>
              <li>
                <strong>Flexible</strong>: Encrypts traffic between Cloudflare
                and visitors but not between Cloudflare and your server.
              </li>
              <li>
                <strong>Full</strong>: Encrypts traffic between Cloudflare and
                your server, but your server does not need a valid SSL
                certificate.
              </li>
              <li>
                <strong>Full (strict)</strong>: Encrypts traffic between
                Cloudflare and your server, and your server must have a valid
                SSL certificate.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          For the best security, use <strong>Full (strict)</strong> if your
          server has a valid SSL certificate.
        </p>
        <hr />
        <h2>5. Testing Your Domain</h2>
        <p>
          After setting up your domain on Cloudflare, you should test it to make
          sure everything is working properly:
        </p>
        <ol>
          <li>
            <strong>Wait for DNS Propagation</strong>: It might take a few
            minutes to a few hours for DNS changes to propagate across the
            internet.
          </li>
          <li>
            Visit your domain in a web browser (e.g.,{" "}
            <code>https://yourdomain.com</code>).
          </li>
          <li>
            Check if the domain resolves correctly and if the SSL certificate is
            active (you should see a padlock icon in the address bar).
          </li>
          <li>
            Use tools like{" "}
            <a href="https://dnschecker.org">https://dnschecker.org</a> to
            verify that your DNS records have propagated.
          </li>
        </ol>
        <hr />
        <h2>6. Conclusion</h2>
        <p>
          With these steps, you&apos;ve successfully registered a domain on
          Cloudflare and configured it for use with DNS and SSL/TLS. Using
          Cloudflare&#39;s services provides benefits like improved performance,
          enhanced security, and easier management of your domain&#39;s DNS
          settings.
        </p>
        <p>
          Cloudflare also offers many advanced features like{" "}
          <strong>DDoS protection</strong>, <strong>Page Rules</strong>, and{" "}
          <strong>caching</strong> that can further optimize your website&apos;s
          performance. You can explore these options from the{" "}
          <strong>Dashboard</strong> after setting up your domain.
        </p>
      </div>
    </ModuleWrapper>
  );
}
