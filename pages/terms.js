import React from 'react';
import Layout from '../src/components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our platform and services.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <p className="mb-4">
              Welcome! Before you start using Wakeel.org, we need to go over some important rules and agreements. This document is called "Terms of Service," and it's basically a contract between you and us. We know legal documents can be boring and confusing, so we've written this in simple, clear language that anyone can understand - whether you're 18 or 80, a law student or a Supreme Court judge!
            </p>
            <p className="mb-4">
              Think of these Terms like the rules at a library or the agreement you make when renting an apartment. They explain what Wakeel.org promises to give you, what we expect from you in return, and what happens if things go wrong. We've tried to make everything fair and reasonable.
            </p>
            <p className="mb-4">
              <strong>Here's the most important part:</strong> By creating an account or using Wakeel.org, you're agreeing to follow these Terms. If you don't agree with something here, please don't use our service - and feel free to contact us at support@wakeel.org to discuss your concerns.
            </p>
            <p>
              Please read everything carefully. If anything is confusing, we're always happy to explain it better!
            </p>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">1. Accepting These Terms (The Agreement)</h2>
            <p className="mb-4">
              When you use Wakeel.org, you're entering into a legal agreement with us. Here's exactly what that means:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How You Agree to These Terms</h3>
            <p className="mb-4">
              You automatically agree to these Terms when you:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Create an Account:</strong> When you click "Sign Up" and fill out the registration form, you're saying "Yes, I agree to these Terms."</li>
              <li><strong>Use Our Services:</strong> Even if you don't have an account, browsing our public content or using our tools means you agree to follow these rules.</li>
              <li><strong>Subscribe to a Plan:</strong> Choosing a Free, Student, Professional, or Organization plan means you agree to the specific terms for that subscription tier.</li>
              <li><strong>Continue Using After Updates:</strong> If we update these Terms and you keep using Wakeel.org after the changes take effect, you're agreeing to the new version.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What If You Don't Agree?</h3>
            <p className="mb-4">
              If you don't agree with these Terms (or any part of them), you have two options:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Don't Use Wakeel.org:</strong> We'll be sad to see you go, but we understand these Terms might not work for everyone.</li>
              <li><strong>Contact Us:</strong> Email support@wakeel.org to discuss specific concerns. Sometimes we can work things out or provide clarification.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Age and Capacity Requirements</h3>
            <p className="mb-4">
              To agree to these Terms and use Wakeel.org, you must:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Be At Least 18 Years Old:</strong> If you're 18 or older, you can create an account independently.</li>
              <li><strong>Ages 13-17:</strong> You need permission from a parent or guardian, and they should review these Terms with you.</li>
              <li><strong>Under 13:</strong> Sorry, you can't create an account yet. You can still read our free public content without signing up!</li>
              <li><strong>Have Legal Capacity:</strong> You must be legally able to enter into binding contracts under the laws of your country.</li>
              <li><strong>Not Be Banned:</strong> If we've previously terminated your account for violating these Terms, you can't create a new one.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Organizations and Businesses</h3>
            <p className="mb-4">
              If you're creating an account on behalf of a company, law firm, or organization:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>You confirm you have the authority to bind that organization to these Terms</li>
              <li>"You" in these Terms refers to both you personally AND the organization</li>
              <li>The organization is responsible for all activity on accounts it creates</li>
              <li>You should get proper approval from your organization before committing them</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Other Agreements That Apply</h3>
            <p className="mb-4">
              These Terms work together with our other policies:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Privacy Policy:</strong> Explains how we handle your personal information (available at wakeel.org/privacy)</li>
              <li><strong>Cookie Policy:</strong> Details about cookies and tracking (covered in our Privacy Policy)</li>
              <li><strong>Acceptable Use Policy:</strong> Rules about what you can and can't do on Wakeel.org (Section 5 below)</li>
              <li><strong>Subscription-Specific Terms:</strong> Additional rules for paid plans (Section 4 below)</li>
            </ul>
            <p className="mb-4">
              All of these together form the complete agreement between you and Wakeel.org. They're all important!
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What This Agreement Covers</h3>
            <p className="mb-4">
              These Terms apply to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>The Wakeel.org website (wakeel.org and all subdomains)</li>
              <li>All features, tools, and content we provide</li>
              <li>Any mobile apps we might release in the future</li>
              <li>Communications from us (emails, newsletters, etc.)</li>
              <li>Customer support and help services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Language and Translation</h3>
            <p className="mb-4">
              These Terms are written in English. We may provide translations in Urdu or other languages to help users understand better, but if there's ever a conflict between the English version and a translation, the English version is the official one that counts legally.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">2. What We Offer (Services Description)</h2>
            <p className="mb-4">
              Let's talk about what Wakeel.org actually is and what we provide. Understanding this helps you know what to expect from us:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Our Mission</h3>
            <p className="mb-4">
              Wakeel.org is a comprehensive legal research platform designed to make legal knowledge accessible to everyone in Pakistan's legal ecosystem - from ordinary citizens trying to understand their rights, to students learning about law, to professional lawyers and judges conducting research.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What's Included in Our Services</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Legal Research Tools:</strong> Search and browse Pakistani case law, statutes, regulations, and legal precedents. Think of it like Google, but specifically for legal content.</li>
              <li><strong>Case Summaries:</strong> Easy-to-understand summaries of important court decisions, written in plain language.</li>
              <li><strong>Legal Guides and Articles:</strong> Educational content explaining different areas of law (criminal law, family law, property law, etc.) in simple terms.</li>
              <li><strong>Document Resources:</strong> Templates, forms, and examples of legal documents.</li>
              <li><strong>News and Updates:</strong> Latest developments in Pakistani law, new court decisions, and legislative changes.</li>
              <li><strong>User Accounts:</strong> Personal profiles where you can save favorite cases, bookmark articles, and track your research history.</li>
              <li><strong>Subscription Tiers:</strong> Different access levels (Free, Student, Professional, Organization) with varying features and content depth.</li>
              <li><strong>Search and Filtering:</strong> Advanced tools to find exactly what you're looking for quickly.</li>
              <li><strong>Customer Support:</strong> Help from our team when you have questions or technical issues.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Who Can Use Wakeel.org</h3>
            <p className="mb-4">
              We've designed our platform for different types of users:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Individuals/Laypeople:</strong> Regular people who need to understand legal issues affecting their lives (tenant rights, employment law, family matters, etc.)</li>
              <li><strong>Students:</strong> Law students, undergraduate students, or anyone studying Pakistan's legal system</li>
              <li><strong>Lawyers and Advocates:</strong> Legal professionals conducting case research and staying updated on new developments</li>
              <li><strong>Judges and Magistrates:</strong> Judicial officers researching precedents and legal principles</li>
              <li><strong>Legal Researchers:</strong> Academics, scholars, and analysts studying Pakistani law</li>
              <li><strong>Organizations:</strong> Law firms, legal aid societies, NGOs, government departments, and corporate legal teams</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Important Limitations (What We're NOT)</h3>
            <p className="mb-4">
              It's crucial to understand what Wakeel.org does NOT provide:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>❌ Not Legal Advice:</strong> We provide information and research tools, but we DON'T give personalized legal advice. If you need advice about your specific situation, consult a qualified lawyer.</li>
              <li><strong>❌ Not Lawyer Substitutes:</strong> Using Wakeel.org doesn't replace hiring a lawyer when you need one. Think of us as a helpful resource, not a replacement for professional legal representation.</li>
              <li><strong>❌ Not Official Legal Records:</strong> While we strive for accuracy, our content isn't official government documentation. For official court records, contact the relevant court directly.</li>
              <li><strong>❌ Not Guarantees:</strong> We don't guarantee any specific outcome in your legal matters. The law is complex and every situation is different.</li>
              <li><strong>❌ Not Attorney-Client Relationship:</strong> Using Wakeel.org doesn't create a lawyer-client relationship between you and us or anyone else.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How We Can Change Our Services</h3>
            <p className="mb-4">
              Technology and law are always evolving, so we need flexibility to improve and adapt:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Adding Features:</strong> We might add new tools, content types, or capabilities. Usually these make the service better!</li>
              <li><strong>Removing Features:</strong> If a feature isn't popular or becomes too expensive to maintain, we might remove it. We'll give notice when possible.</li>
              <li><strong>Modifying Features:</strong> We might change how existing features work to improve them or fix problems.</li>
              <li><strong>Temporary Suspensions:</strong> We might need to take the service offline temporarily for maintenance, upgrades, or emergency fixes.</li>
              <li><strong>Pricing Changes:</strong> We might adjust subscription prices (covered more in Section 4).</li>
            </ul>
            <p className="mb-4">
              <strong>Important Promise:</strong> For major changes that significantly affect paid subscribers (like removing key features), we'll:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Give you at least 30 days advance notice</li>
              <li>Explain what's changing and why</li>
              <li>Offer alternatives when possible</li>
              <li>Allow you to cancel your subscription if you're unhappy with the changes</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Service Availability</h3>
            <p className="mb-4">
              We work hard to keep Wakeel.org running smoothly 24/7, but we can't guarantee 100% uptime:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Scheduled Maintenance:</strong> Sometimes we need to take the site offline briefly for updates. We'll announce this in advance when possible and try to do it during low-traffic hours (like late at night).</li>
              <li><strong>Unexpected Outages:</strong> Technical problems, internet issues, or server failures might cause the site to go down unexpectedly. We'll work to fix these as quickly as possible.</li>
              <li><strong>Force Majeure:</strong> Events beyond our control (natural disasters, war, government actions, massive cyber attacks) might prevent us from providing the service. We're not responsible for these.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Geographic Availability</h3>
            <p className="mb-4">
              Wakeel.org is primarily designed for users in Pakistan and focuses on Pakistani law. However:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Anyone worldwide can access our platform</li>
              <li>Content and features may not be relevant or available in all countries</li>
              <li>You're responsible for following your local laws when using our service</li>
              <li>Some features might work differently or be unavailable outside Pakistan</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Content Accuracy Disclaimer</h3>
            <p className="mb-4">
              We work hard to ensure our legal content is accurate and up-to-date, but:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>Laws change frequently - a statute that was valid yesterday might be amended today</li>
              <li>Court decisions are constantly being published</li>
              <li>Legal interpretation evolves over time</li>
              <li>We might make mistakes (we're human!)</li>
            </ul>
            <p className="mb-4">
              <strong>You should always:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Verify important information from multiple sources</li>
              <li>Check the date of any content to ensure it's current</li>
              <li>Consult a qualified lawyer for advice on important matters</li>
              <li>Report errors to us at support@wakeel.org so we can fix them</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Beta Features and Experiments</h3>
            <p className="mb-4">
              Sometimes we'll test new features before fully launching them:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>These will be clearly marked as "Beta," "Experimental," or "Preview"</li>
              <li>They might not work perfectly and could change or disappear</li>
              <li>By using them, you help us test and improve</li>
              <li>We appreciate feedback about beta features!</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">3. Creating and Managing Your Account</h2>
            <p className="mb-4">
              To access many of Wakeel.org's features, you'll need to create an account. Here's everything you need to know about accounts:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Creating an Account</h3>
            <p className="mb-4">
              When you sign up, we'll ask you for some basic information:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Required Information:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Your name (first and last)</li>
                  <li>A valid email address</li>
                  <li>A secure password</li>
                  <li>Confirmation that you're 18+ (or have parental permission if 13-17)</li>
                </ul>
              </li>
              <li><strong>Optional Information:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Professional details (if you're a lawyer or legal professional)</li>
                  <li>School/university name (for student accounts)</li>
                  <li>Organization name (for organizational accounts)</li>
                  <li>Areas of legal interest</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Your Responsibilities</h3>
            <p className="mb-4">
              When creating and using your account, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Provide Accurate Information:</strong> Everything you tell us must be true and current. Don't use a fake name or someone else's email address. If your information changes (like you get a new email), update your account.</li>
              <li><strong>Keep Your Password Secret:</strong> Your password is like the key to your house - don't give it to anyone! Not friends, not family, not even Wakeel.org staff (we'll never ask for it).</li>
              <li><strong>Choose a Strong Password:</strong> Use at least 8 characters with a mix of letters, numbers, and symbols. Don't use obvious passwords like "password123" or your birthday.</li>
              <li><strong>Use Your Own Account:</strong> Each person needs their own account. Don't share accounts with others or let others use yours.</li>
              <li><strong>One Account Per Person:</strong> Don't create multiple accounts for yourself (unless you have a legitimate business reason and we've approved it).</li>
              <li><strong>Keep Your Email Accessible:</strong> We send important updates and password reset links to your email, so make sure you can access it.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Account Security - Your Job and Ours</h3>
            <p className="mb-4">
              <strong>You're responsible for:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>All activity that happens on your account (even if someone else uses it)</li>
              <li>Keeping your password secure and changing it if you think it's compromised</li>
              <li>Logging out when using shared computers (libraries, internet cafés, etc.)</li>
              <li>Telling us immediately if you notice unauthorized access to your account</li>
              <li>Any purchases or subscriptions made using your account</li>
            </ul>
            <p className="mb-4">
              <strong>We're responsible for:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Protecting your data with encryption and security measures (see our Privacy Policy)</li>
              <li>Monitoring for suspicious activity on our platform</li>
              <li>Investigating and responding to security incidents</li>
              <li>Providing you with tools to secure your account (password requirements, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">If Your Account Is Compromised</h3>
            <p className="mb-4">
              If you think someone has accessed your account without permission:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Step 1:</strong> Change your password immediately (if you still can)</li>
              <li><strong>Step 2:</strong> Email us at support@wakeel.org with subject "Account Compromised"</li>
              <li><strong>Step 3:</strong> Check your email for any password reset emails you didn't request</li>
              <li><strong>Step 4:</strong> Review your account activity to see what the intruder might have accessed</li>
              <li><strong>Step 5:</strong> If you used the same password on other websites, change those too</li>
            </ul>
            <p className="mb-4">
              We'll investigate and help secure your account, but you may be responsible for any activity that occurred before you notified us.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Updating Your Information</h3>
            <p className="mb-4">
              You can update most of your account information anytime:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Go to Settings → Profile to edit your name, professional details, preferences</li>
              <li>Go to Settings → Account to change your email address or password</li>
              <li>Go to Settings → Subscription to manage your subscription tier</li>
              <li>For things you can't change yourself, email support@wakeel.org</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Closing Your Account</h3>
            <p className="mb-4">
              You can delete your account at any time:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>How:</strong> Go to Settings → Account → "Delete My Account" or email support@wakeel.org</li>
              <li><strong>What Happens:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Your account will be permanently disabled</li>
                  <li>You'll lose access to all saved content, bookmarks, and research history</li>
                  <li>Active subscriptions will be cancelled (no refunds for remaining time)</li>
                  <li>Your personal information will be deleted (per our Privacy Policy)</li>
                </ul>
              </li>
              <li><strong>What We Keep:</strong> For legal and security reasons, we may retain:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Payment transaction records (required by tax law)</li>
                  <li>Records of Terms violations or legal disputes</li>
                  <li>Anonymized usage statistics (with all identifying information removed)</li>
                </ul>
              </li>
              <li><strong>Timing:</strong> Account deletion is usually complete within 14 days</li>
              <li><strong>No Turning Back:</strong> Once deleted, we can't recover your account or data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">When We Might Suspend or Terminate Your Account</h3>
            <p className="mb-4">
              We really don't want to do this, but we may suspend or terminate your account if:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>You Violate These Terms:</strong> If you break the rules (like using Wakeel.org for illegal purposes or harassing other users)</li>
              <li><strong>Payment Issues:</strong> If your payment fails repeatedly or we detect fraud</li>
              <li><strong>Security Threats:</strong> If your account is being used to attack our systems or other users</li>
              <li><strong>Legal Requirements:</strong> If we're ordered by a court or required by law to close your account</li>
              <li><strong>Impersonation or Fraud:</strong> If you're pretending to be someone else or using fake information</li>
              <li><strong>Abuse of Service:</strong> If you're using automated tools to scrape our content or overload our servers</li>
            </ul>
            <p className="mb-4">
              <strong>What We'll Do:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Try to warn you first and give you a chance to fix the problem (unless it's a severe violation)</li>
              <li>Explain why we're taking action</li>
              <li>Give you a chance to appeal (email support@wakeel.org with subject "Account Termination Appeal")</li>
              <li>Refund any unused portion of your subscription (at our discretion, depending on circumstances)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Inactive Accounts</h3>
            <p className="mb-4">
              If you don't use your account for a very long time:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Free Accounts:</strong> After 2 years of inactivity, we may delete the account after emailing you a warning</li>
              <li><strong>Paid Accounts:</strong> We'll keep your account active as long as your subscription is current</li>
              <li><strong>Reactivation:</strong> Before deletion, you can reactivate by simply logging in</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">4. User Roles and Subscription-Based Access</h2>
            <p className="mb-4">
              Wakeel.org implements a comprehensive role-based access control system where your subscription tier determines what features, content, and tools you can access. Understanding these user roles and their permissions is crucial to getting the most out of our platform.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Role-Based Access Control System</h3>
            <p className="mb-4">
              We use a tiered permission system where each user role has specific access rights:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Role Assignment:</strong> Your role is automatically assigned based on your active subscription plan</li>
              <li><strong>Dynamic Permissions:</strong> Upgrading or downgrading your subscription immediately changes your access level</li>
              <li><strong>Access Restrictions:</strong> Attempting to access features above your role level will prompt an upgrade notification</li>
              <li><strong>Role Verification:</strong> Certain roles (Student, Professional) may require verification of eligibility</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Detailed Subscription Tiers and Access Levels</h3>
            <p className="mb-4">
              We offer four subscription levels, each designed for different types of users:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Free Tier (PKR 0):</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>No cost at all - perfect for trying out Wakeel.org</li>
                  <li>Access to basic legal articles and guides</li>
                  <li>Limited search results</li>
                  <li>Public case summaries</li>
                  <li>No credit card required</li>
                </ul>
              </li>
              <li><strong>Student Tier:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>PKR 199 per month OR PKR 1,999 per year (save 17% with yearly!)</li>
                  <li>For students learning about Pakistani law</li>
                  <li>Expanded access to cases and legal resources</li>
                  <li>Advanced search capabilities</li>
                  <li>Save and bookmark unlimited content</li>
                  <li>May require student verification (student ID or university email)</li>
                </ul>
              </li>
              <li><strong>Professional Tier:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>PKR 4,999 per month OR PKR 49,999 per year (save 17% with yearly!)</li>
                  <li>For lawyers, advocates, and legal professionals</li>
                  <li>Full access to entire legal database</li>
                  <li>Priority customer support</li>
                  <li>Advanced research tools and analytics</li>
                  <li>Citation management features</li>
                  <li>Early access to new features</li>
                </ul>
              </li>
              <li><strong>Organization Tier:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Starting from PKR 9,999+ (custom pricing based on your needs)</li>
                  <li>For law firms, legal departments, NGOs, and institutions</li>
                  <li>Multiple user accounts under one organization</li>
                  <li>Team collaboration features</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations and training</li>
                  <li>Volume discounts for larger teams</li>
                  <li>Contact us for a custom quote</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How Billing Works</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Billing in Advance:</strong> When you subscribe, you pay for the upcoming month or year before it starts. It's like paying rent at the beginning of the month.</li>
              <li><strong>Choose Monthly or Yearly:</strong> Monthly subscriptions bill every month on the same date you signed up. Yearly subscriptions bill once per year on your anniversary date.</li>
              <li><strong>Yearly Savings:</strong> Annual plans are cheaper overall - you save 17% compared to paying monthly for a whole year. (For example, Professional monthly is PKR 4,999 × 12 months = PKR 59,988/year, but yearly is only PKR 49,999!)</li>
              <li><strong>First Payment:</strong> When you first subscribe, you're charged immediately. Your subscription starts right away.</li>
              <li><strong>Receipt Emails:</strong> After each payment, we email you a receipt for your records.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Automatic Renewal (What You Need to Know)</h3>
            <p className="mb-4">
              To make sure your access doesn't get interrupted, subscriptions automatically renew unless you cancel:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>How It Works:</strong> A few days before your subscription ends, we automatically charge your payment method for the next period (month or year).</li>
              <li><strong>Renewal Notice:</strong> We'll email you about 7 days before renewal to remind you and give you a chance to cancel if you want.</li>
              <li><strong>Same Price:</strong> You'll be charged the same rate UNLESS we've announced a price change (see \"Price Changes\" below).</li>
              <li><strong>Failed Payment:</strong> If your payment fails (expired card, insufficient funds, etc.), we'll:\n                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Email you immediately to update your payment method</li>
                  <li>Try charging again after a few days</li>
                  <li>Give you a grace period (usually 7-14 days) to fix it</li>
                  <li>Downgrade you to Free tier if payment still fails after grace period</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Cancelling Your Subscription</h3>
            <p className="mb-4">
              You can cancel anytime - no questions asked, no cancellation fees:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>How to Cancel:</strong> Go to Settings → Subscription → \"Cancel Subscription\" and follow the prompts. Or email support@wakeel.org with subject \"Cancel Subscription\".</li>
              <li><strong>When It Takes Effect:</strong> Your cancellation takes effect at the END of your current billing period. So if you paid for a month/year, you get to use that full time you paid for.</li>
              <li><strong>Example:</strong> You subscribe on January 1st for PKR 4,999/month. On January 15th you decide to cancel. You'll still have full access until January 31st (end of the month you paid for). On February 1st, you'll be downgraded to Free tier.</li>
              <li><strong>Reactivating:</strong> If you cancel but change your mind later, you can resubscribe anytime. We'll be happy to have you back!</li>
              <li><strong>No Partial Refunds:</strong> Cancelling doesn't give you a refund for the unused time in your current period (see \"Refund Policy\" below for exceptions).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Payment Methods</h3>
            <p className="mb-4">
              We accept several payment methods:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Credit cards (Visa, Mastercard, American Express)</li>
              <li>Debit cards</li>
              <li>Online banking/bank transfers (for Organizations)</li>
              <li>Payment processors like Stripe or PayPal</li>
              <li>Mobile wallets (JazzCash, Easypaisa - where available)</li>
            </ul>
            <p className="mb-4">
              <strong>Important:</strong> We don't store your full credit card information on our servers. Payment processing is handled securely by third-party payment processors who are certified and compliant with international security standards.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">In-App Purchases and Subscriptions via Apple App Store (iOS)</h3>
            <p className="mb-4">
              If you purchase or subscribe to Wakeel.org through our iOS app on the Apple App Store, the following additional terms apply:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Apple ID Billing:</strong> Payment will be charged to your Apple ID account at confirmation of purchase. All billing for App Store subscriptions is processed by Apple — not directly by Wakeel.org.</li>
              <li><strong>Automatic Renewal:</strong> Your subscription automatically renews unless auto-renewal is turned off at least 24 hours before the end of the current billing period. Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period, at the rate confirmed at the time of purchase.</li>
              <li><strong>Managing or Cancelling Your Subscription:</strong> You can manage your subscription and turn off auto-renewal at any time through: <strong>iPhone/iPad Settings → [Your Name] → Subscriptions</strong>, or via the <strong>App Store → Your Account → Subscriptions</strong>. Cancelling through Wakeel.org's website or support email does not cancel an App Store subscription — you must cancel directly through Apple.</li>
              <li><strong>Refunds:</strong> All refunds for App Store purchases are handled exclusively by Apple. Wakeel.org cannot process refunds for subscriptions purchased through the App Store. To request a refund, visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="underline">reportaproblem.apple.com</a> or contact Apple Support directly.</li>
              <li><strong>Price Changes:</strong> If subscription pricing changes, Apple will notify you before the new price takes effect and will require your consent to continue the subscription at the updated rate.</li>
              <li><strong>Free Trials:</strong> If a free trial is offered through the App Store, any unused portion of the free trial period will be forfeited upon purchase of a subscription.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Taxes</h3>
            <p className="mb-4">
              Prices shown include applicable Pakistani taxes (like sales tax or GST). If tax rates change, prices may adjust accordingly. Organizations might receive tax invoices for accounting purposes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Refund Policy</h3>
            <p className="mb-4">
              Generally, subscription fees are non-refundable, but there are exceptions:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>No Refunds For:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Cancellations in the middle of a billing period</li>
                  <li>Changing your mind after subscribing</li>
                  <li>Not using the service (you still had access to it)</li>
                  <li>Forgetting to cancel before renewal</li>
                </ul>
              </li>
              <li><strong>Possible Refunds For:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Duplicate charges (we accidentally charged you twice)</li>
                  <li>Unauthorized charges (someone used your card without permission)</li>
                  <li>Service was completely unavailable for extended period</li>
                  <li>Billing errors on our part</li>
                  <li>Required by Pakistani consumer protection law</li>
                </ul>
              </li>
              <li><strong>Money-Back Guarantee (First-Time Users):</strong> If you're a first-time paid subscriber and you're not satisfied within the first 7 days, email us at support@wakeel.org and we'll consider a full refund. Be honest about why you're unhappy - your feedback helps us improve!</li>
              <li><strong>How to Request Refund:</strong> Email support@wakeel.org with subject \"Refund Request\" and explain the situation. We'll review within 3-5 business days. Approved refunds typically process within 7-10 business days.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Price Changes</h3>
            <p className="mb-4">
              Sometimes we need to adjust our pricing:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>When Prices Might Change:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Adding significant new features or content</li>
                  <li>Rising operating costs (servers, staff, etc.)</li>
                  <li>Inflation or currency fluctuations</li>
                  <li>Competitive market adjustments</li>
                </ul>
              </li>
              <li><strong>Notice Period:</strong> We'll give you at least 30 days notice before any price increase takes effect.</li>
              <li><strong>How We'll Notify You:</strong> Email announcement, in-app notification, and notice on our website.</li>
              <li><strong>Grandfathering (Sometimes):</strong> For loyal long-term subscribers, we might offer to keep your current rate for a while even after prices increase. We can't promise this, but we appreciate your support!</li>
              <li><strong>Your Options:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Continue at the new price (your subscription auto-renews at the new rate)</li>
                  <li>Lock in current rate by switching to annual plan before increase</li>
                  <li>Downgrade to a cheaper tier</li>
                  <li>Cancel before the increase takes effect</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Promotional Offers and Discounts</h3>
            <p className="mb-4">
              Sometimes we run special promotions:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Promotional rates are usually for the first billing period only (then regular price)</li>
              <li>Discounts can't be combined unless we specifically say so</li>
              <li>Promo codes have expiration dates and specific terms</li>
              <li>We can end promotions at any time</li>
              <li>Refunds don't apply to promotional rates</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Upgrading or Downgrading</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Upgrading:</strong> If you upgrade (like Student to Professional), you're charged the prorated difference immediately, and your features unlock right away.</li>
              <li><strong>Downgrading:</strong> If you downgrade, the change takes effect at your next billing date. You keep your current tier benefits until then.</li>
              <li><strong>Free to Paid:</strong> Starting a paid subscription from Free tier works like any new subscription (charged immediately, access granted right away).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Organizations: Custom Billing</h3>
            <p className="mb-4">
              Organization plans can have custom terms:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Annual contracts with bulk discounts</li>
              <li>Invoice-based billing instead of credit card</li>
              <li>Purchase orders accepted</li>
              <li>Net-30 or Net-60 payment terms (for established organizations)</li>
              <li>Custom payment schedules</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Late Payments and Service Suspension</h3>
            <p className="mb-4">
              If payment fails and isn't fixed during the grace period:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Your account downgrades to Free tier (you don't lose your data, just access to premium features)</li>
              <li>You can reactivate anytime by updating payment method</li>
              <li>If you owe money for Organization plans, we may pursue collection</li>
            </ul>
          </section>

          <section className="mb-12">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">5. AI-Powered Features — How They Work, Limitations, and Your Responsibilities</h2>
  <p className="mb-4">
    Wakeel.org is not a simple search engine. It uses artificial intelligence to read, understand, and respond to your legal questions. This section explains exactly how our AI works, what it can and cannot do, which third-party AI providers are involved, and the rules around using these features. Please read this carefully — AI in legal research is powerful but has real limitations you must understand.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How Our AI Actually Works</h3>
  <p className="mb-4">
    When you ask a legal question on Wakeel.org, here is what happens behind the scenes:
  </p>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li><strong>Step 1 — Understanding Your Question:</strong> Your query is converted into a mathematical representation (called an "embedding") using OpenAI's technology. This allows the system to understand the meaning of your question, not just the keywords.</li>
    <li><strong>Step 2 — Searching Our Legal Database:</strong> The system searches our database of Pakistani legal documents — court judgments, statutes, regulations, and legal precedents — using a combination of keyword search and meaning-based search to find the most relevant sections.</li>
    <li><strong>Step 3 — Selecting the Best Results:</strong> The top matching passages are ranked and re-evaluated so only the most relevant legal content forms the basis of your answer.</li>
    <li><strong>Step 4 — Generating Your Response:</strong> The selected legal passages are passed to an AI language model which reads them and generates a clear, structured response. The AI provider used depends on your subscription tier:
    </li>
  </ul>
  <p className="mb-4">
    <strong>The most important point:</strong> Our AI only reads and responds based on legal documents in our own database. It does not use general internet knowledge, its own broad training data, or any information from outside our curated Pakistani legal document collection.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Our AI Can Do</h3>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li>Search and retrieve relevant Pakistani case law, statutes, and legal precedents from our database</li>
    <li>Summarise complex legal judgments in plain language</li>
    <li>Explain legal concepts and principles found within our document collection</li>
    <li>Help you understand what a specific law or court decision says</li>
    <li>Identify relevant legal provisions for a research topic</li>
    <li>Provide structured responses grounded in actual Pakistani legal documents</li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Critical Limitations — What Our AI Cannot Do</h3>
  <p className="mb-4">
    This is the most important part of this section:
  </p>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li><strong>❌ Cannot Give Legal Advice:</strong> Our AI provides legal information and research assistance only. It does not give personalised legal advice for your specific situation. No AI response on Wakeel.org constitutes legal advice or creates any attorney-client relationship.</li>
    <li><strong>❌ Cannot Know What Is Not In Our Database:</strong> If a law was amended, a new judgment was delivered, or a regulation changed after our last database update, our AI will not know about it. Always verify time-sensitive legal information against official sources.</li>
    <li><strong>❌ Cannot Guarantee Accuracy:</strong> AI systems can produce responses that sound confident but contain errors — a phenomenon known as "hallucination." Even with our retrieval-grounded approach, errors are possible. Never rely solely on AI responses for important legal decisions.</li>
    <li><strong>❌ Cannot Replace a Qualified Lawyer:</strong> For any matter with real legal consequences — a court case, a contract, a criminal charge, a property dispute — consult a qualified and licensed lawyer. AI is a research tool, not a legal representative.</li>
    <li><strong>❌ Limited to Pakistani Law:</strong> Our database covers Pakistani law only. Questions about foreign jurisdictions, international treaties not applicable in Pakistan, or laws of other countries cannot be answered accurately.</li>
    <li><strong>❌ Cannot Access Real-Time Information:</strong> Our AI does not browse the internet and has no access to live legal databases, today's news, or real-time court records.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">AI Accuracy Warning</h3>
  <p className="mb-4">
    All AI systems, including ours, can occasionally produce inaccurate, incomplete, or misleading responses. In legal research this carries serious risk. You must:
  </p>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li>Always verify AI-generated legal information against the original source documents cited in the response</li>
    <li>Never submit AI-generated content to a court, tribunal, or official body without independent verification by a qualified lawyer</li>
    <li>Treat AI responses as a starting point for research, not a final authoritative answer</li>
    <li>Report any inaccurate responses to support@wakeel.org — this helps us improve the system for all users</li>
  </ul>
  <p className="mb-4">
    <strong>Wakeel.org accepts no liability for decisions made based solely on AI-generated responses.</strong> See Section 11 (Limitation of Liability) for the full legal disclaimer.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">AI Third-Party Providers</h3>
  <p className="mb-4">
    To deliver AI responses, your query is processed by the following third-party AI providers depending on your subscription tier:
  </p>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li><strong>OpenAI:</strong> Your query text is sent to OpenAI's API to generate an embedding used for legal document search.</li>
    <li><strong>Anthropic — Claude:</strong> Your query and the top relevant legal document passages are sent to Anthropic's Claude API to generate your response.</li>
    <li><strong>Google — Gemini:</strong> Your query and the top relevant legal document passages are sent to Google's Gemini API to generate your response.</li>
  </ul>
  <p className="mb-4">
    Your personal identifying information — name, email, payment details, account ID — is never sent to any of these providers. Only your query text and retrieved legal document passages are transmitted. See our Privacy Policy at wakeel.org/privacy for complete details.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Acceptable Use of AI Features</h3>
  <p className="mb-4">
    When using Wakeel.org's AI features, you agree not to:
  </p>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li>Attempt to manipulate, jailbreak, or circumvent the AI's behaviour or safety guardrails</li>
    <li>Submit queries designed to extract outputs that could facilitate illegal activity</li>
    <li>Present AI-generated legal content in official proceedings as verified legal authority without independent review by a qualified lawyer</li>
    <li>Systematically extract or scrape AI responses to build competing products or datasets</li>
    <li>Submit fabricated legal scenarios intended to manipulate AI outputs</li>
    <li>Attempt to reverse-engineer our legal database structure or AI pipeline</li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">No Liability for AI-Generated Responses</h3>
  <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
    <li>Wakeel.org does not warrant that AI-generated responses are accurate, complete, or current</li>
    <li>Wakeel.org is not liable for any loss, damage, or legal consequence arising from reliance on AI-generated content</li>
    <li>AI responses do not constitute legal advice and must not be treated as such</li>
    <li>You use AI features entirely at your own risk and are solely responsible for independently verifying all AI-generated legal information before acting on it</li>
  </ul>
</section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">6. User Conduct</h2>
            <p>
              When using our Services, you agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Violate any applicable law, regulation, or these Terms</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Upload, transmit, or distribute any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to any portion of the Services or any systems or networks connected to the Services</li>
              <li>Use the Services for any illegal purpose or in any manner that could damage, disable, overburden, or impair the functioning of the Services</li>
              <li>Use any automated means to access the Services or collect any information from the Services</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">7. Intellectual Property Rights</h2>
            <p>
              The Services and their original content, features, and functionality are owned by Wakeel.org and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="mt-4">
              You may not copy, modify, create derivative works from, publicly display, publicly perform, republish, download, or distribute any portion of the Services without our prior written consent. This includes any text, graphics, logos, images, audio, video, software, code, and other materials contained on the Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">8. User Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through the Services ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works from, distribute, publicly display, and publicly perform your User Content in connection with providing and improving the Services.
            </p>
            <p className="mt-4">
              You represent and warrant that: (i) you own the User Content or have the right to use and license it to us, and (ii) the User Content does not violate the rights of any third party, including intellectual property rights and rights of privacy or publicity.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">9. Confidentiality and Data Security</h2>
            <p>
              We take appropriate measures to protect the confidentiality and security of any information you provide to us. However, you acknowledge that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
            <p className="mt-4">
              For more information on how we collect, use, and protect your data, please refer to our Privacy Policy.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WAKEEL.ORG AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AND SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III) ANY CONTENT OBTAINED FROM THE SERVICES; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">12. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Wakeel.org and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">13. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Lahore, Pakistan for the resolution of any disputes arising out of or relating to these Terms or the Services.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time at our sole discretion. The most current version will be posted on our website with the "Last Updated" date at the top. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> support@wakeel.org</p>
              <p><strong>Location:</strong> Lahore, Pakistan</p>
              <p><strong>Website:</strong> https://wakeel.org</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 