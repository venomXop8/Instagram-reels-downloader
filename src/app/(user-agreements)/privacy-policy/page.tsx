const PrivacyPolicyPage = () => {
  return (
    <div className="my-4 flex flex-col rounded-lg border p-8">
      <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>

      <section className="text-sm">
        <h2 className="mb-2 text-xl font-semibold">1. Introduction</h2>
        <p className="mb-2">
          <span className="font-semibold">1.1.</span> This Privacy Policy
          (Policy) informs users that the website
          <span className="text-gray-900 dark:text-gray-500">
            {" "}
            (https://irotechlab-reel-downloader.vercel.app/)
          </span>{" "}
          does not collect, store, or process any personal information. By using
          the Website or Service, you acknowledge that no personal information
          is being collected or stored.
        </p>
        <p className="mb-2">
          <span className="font-semibold">1.2.</span> Please note that this
          Policy is provided in compliance with legal requirements, even though
          the Website or Service does not collect or store any personal
          information.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          2. Third-Party Advertising and Analytics
        </h2>
        <p className="mb-2">
          <span className="font-semibold">2.1.</span> We use third-party
          advertising services, such as Google AdSense, to serve advertisements
          on the Website. These third parties may use cookies, web beacons, and
          other tracking technologies to collect information about your use of
          the Website and other websites, including your IP address, browser
          type, internet service provider, referring/exit pages, and date/time
          stamp. For more information, please visit
          <a
            target="_blank"
            href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            privacypolicies.com{" "}
          </a>
          and
          <a
            target="_blank"
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            termsfeed.com{" "}
          </a>
          .
        </p>
        <p className="mb-2">
          <span className="font-semibold">2.2.</span> You may opt-out of
          personalized advertising by visiting
          <a
            target="_blank"
            href="https://adssettings.google.com/authenticated"
            className="text-blue-600 hover:underline"
          >
            {" "}
            Ads Settings{" "}
          </a>
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          3. Changes to the Privacy Policy
        </h2>
        <p className="mb-2">
          <span className="font-semibold">3.1.</span> We reserve the right to
          update, modify, or replace any part of the Policy at any time by
          posting the updated Policy on the Website. Your continued use of the
          Website or Service after the effective date of the updated Policy
          constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">4. Contact Information</h2>
        <p className="mb-2">
          <span className="font-semibold">4.1.</span> If you have any questions
          or concerns about this Policy, please contact the Website owner at{" "}
          <span className="italic"><a
            target="_blank"
            href="https://t.me/ironmanhindigaming"
            className="text-blue-600 hover:underline"
          >
            {" "}
            telegram{" "}
          </a></span>.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          5. Acceptance of Privacy Policy
        </h2>
        <p>
          By accessing or using the Website or Service, you acknowledge that you
          have read, understood, and agree to be bound by the terms and
          conditions of this Policy.
        </p>
      </section>

      
    </div>
  );
};

export default PrivacyPolicyPage;
