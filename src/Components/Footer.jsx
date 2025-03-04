const FooterLinks = ({ title, links }) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="font-semibold mb-3 text-lg text-white">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-yellow-400 transition">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  const socialIcons = ["Facebook.png", "Youtube.png", "IN.png", "Insta.png", "X.png"];
  return (
    <div className="text-center md:text-left">
      <h3 className="font-semibold mb-3 text-lg text-white">Social</h3>
      <ul className="flex justify-center md:justify-start space-x-4">
        {socialIcons.map((icon, index) => (
          <a href="#" key={index} className="transition transform hover:scale-110">
            <img src={icon} alt="" className="w-6 h-6 sm:w-5 sm:h-5 invert" />
          </a>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 px-6 md:px-16">
      
      {/* Main Header */}
      <h1 className="flex justify-center items-center font-extrabold text-3xl md:text-[50px] lg:text-[115px] text-amber-500 sm:text-4xl lg-text-xl lg:font-light whitespace-nowrap">
  Let’s work together.
</h1>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-10 mt-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Have a project in mind?</h2>
        <img src="Arrow.png" alt="" className="w-10 md:w-auto" />
        <h2 className="text-3xl md:text-5xl text-white">Let’s Connect</h2>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-small mt-12 sm:text-xl">
        <FooterLinks title="Company" links={["Our Work", "ROI Calculator", "Get Free Audit", "Instant Checkout Link Generator"]} />
        <FooterLinks title="Services" links={["Shopify Advisory / Enablement", "Subscription Tech", "AI & Workflow Automation", "Technical Partner to the C-Suite", "Strategic Roadmapping"]} />
        <FooterLinks title="Others" links={["Pricing", "Insights", "Contact", "Reviews"]} />
        <FooterLinks title="Specialisms" links={["DTC", "Shopify", "Subscription"]} />
        <FooterLinks title="Legal" links={["Privacy Policy", "Terms & Conditions"]} />
        <SocialLinks />
      </div>

      {/* Bottom Spacing */}
      <div className="mt-10" />
    </div>
  );
};

export default Footer;
