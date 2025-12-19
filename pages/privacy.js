import React from 'react';
import Layout from '../src/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Wakeel.org, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <p className="mb-4">
              Welcome to Wakeel.org! We're really happy you're here. This page is called a "Privacy Policy," and it's basically a promise from us about how we handle your information. Think of it like this: when you visit our website or use our services, you might share some things with us - like your name or email address. We want you to know exactly what we do with that information, how we protect it, and why we need it.
            </p>
            <p className="mb-4">
              We've written this in simple, clear language so everyone can understand it - whether you're a student learning about the law, a professional lawyer, or someone who just wants to know their legal rights. We believe privacy is important, and we want to be completely honest and open with you about it.
            </p>
            <p>
              If anything here is confusing, please reach out to us. We're always happy to explain things better!
            </p>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">What Information Do We Collect?</h2>
            <p className="mb-4">
              Let's talk about what information we collect when you use Wakeel.org. Don't worry - we only collect information that helps us make your experience better and keep our service running smoothly. Here's everything we might collect:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Information You Give Us Directly</h3>
            <p className="mb-4">
              This is information you choose to share with us when you create an account or use our services. Think of it like filling out a form at school or signing up for a club:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Your Name and Contact Details:</strong> When you sign up, we ask for your name and email address so we can send you important updates and help you if you need support. If you're a student, we might also ask which school or university you attend.</li>
              <li><strong>Payment Information:</strong> If you choose a paid plan (like Students, Professionals, or Organizations), we need to collect your payment details. This is just like paying for a subscription to Netflix or Spotify. We use secure payment services to keep this information safe.</li>
              <li><strong>Professional Details:</strong> For lawyers, judges, or legal professionals, you might choose to add information about your practice, bar license number, or areas of expertise. This helps us give you more relevant legal content.</li>
              <li><strong>Your Preferences:</strong> We remember things like your preferred language, whether you like dark mode or light mode, and what type of legal topics interest you most. This way, we can make the website feel personalized for you.</li>
              <li><strong>Messages You Send Us:</strong> When you contact our support team or send us feedback, we keep those messages so we can help you better and improve our service.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Information We Collect Automatically</h3>
            <p className="mb-4">
              Even if you don't type anything, our website collects some information automatically - kind of like how a library keeps track of which books are popular. This helps us understand how people use Wakeel.org and fix problems:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Device and Browser Information:</strong> We can see what kind of device you're using (like iPhone, Android phone, or laptop), what browser you're using (Chrome, Safari, Firefox, etc.), and what screen size you have. This helps us make sure the website works well on your device.</li>
              <li><strong>Your IP Address:</strong> This is like your computer's home address on the internet. It tells us roughly what city or country you're in, which helps us show you relevant local laws and content. We don't use this to track you personally.</li>
              <li><strong>How You Use Our Website:</strong> We see which pages you visit, how long you spend reading them, which buttons you click, and what legal topics you search for. This is super helpful because it tells us what features people love and what needs improvement.</li>
              <li><strong>When You Visit:</strong> We keep track of when you use our service - like whether you prefer morning or evening. This helps us schedule maintenance at times when fewer people are online.</li>
              <li><strong>How You Found Us:</strong> If you clicked a link from Google, Facebook, or another website to get to Wakeel.org, we can see that. It helps us understand which of our marketing efforts are working.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Information From Cookies</h3>
            <p className="mb-4">
              Cookies are small text files that websites store on your device. Think of them like bookmarks or sticky notes that help the website remember you. Here's what our cookies do:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Remember You're Logged In:</strong> So you don't have to type your password every time you visit.</li>
              <li><strong>Save Your Settings:</strong> Like your theme preference (dark or light mode) and language choice.</li>
              <li><strong>Understand Usage Patterns:</strong> Which features are popular and which ones people rarely use.</li>
              <li><strong>Keep You Safe:</strong> Cookies help us detect suspicious activity and keep your account secure.</li>
            </ul>
            <p className="mb-4">
              You can turn off cookies in your browser settings, but this might make some parts of the website not work as well.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Information We DON'T Collect</h3>
            <p className="mb-4">
              It's also important to tell you what we DON'T collect:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>We don't record your passwords (they're encrypted, which means turned into secret code)</li>
              <li>We don't access your camera or microphone</li>
              <li>We don't track your location in real-time (we only see general city/country from IP address)</li>
              <li>We don't collect information from other websites you visit</li>
              <li>We don't sell your personal information to anyone - ever!</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">How Do We Use Your Information?</h2>
            <p className="mb-4">
              Now that you know what information we collect, let's talk about what we actually DO with it. We promise we only use your information in ways that help you and make Wakeel.org better. Here's every way we use your data:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">To Provide Our Service</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Create and Manage Your Account:</strong> When you sign up, we use your email and name to create your personal account. This lets you save your favorite cases, bookmark articles, and track your research history.</li>
              <li><strong>Give You Access to Content:</strong> Depending on your subscription tier (Free, Student, Professional, or Organization), we use your account information to unlock the right features for you. Students get student pricing, professionals get advanced tools, etc.</li>
              <li><strong>Process Your Payments:</strong> If you're on a paid plan, we use your payment information to charge you monthly or yearly (depending on what you chose). We'll always send you a receipt.</li>
              <li><strong>Remember Your Preferences:</strong> We save your settings so every time you log in, you see dark mode (if that's what you like), your preferred language, and your customized dashboard.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">To Communicate With You</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Answer Your Questions:</strong> When you email us with a question or problem, we use your contact information to write back and help you solve it.</li>
              <li><strong>Send Important Updates:</strong> We'll email you about things like changes to our pricing, new features we've added, or if we need to do maintenance on the website. These are emails you actually need to see.</li>
              <li><strong>Send Your Receipts:</strong> After each payment, we email you a receipt for your records. This is especially important if you're a professional who needs to track business expenses.</li>
              <li><strong>Newsletter (Optional):</strong> If you subscribe to our newsletter, we'll send you helpful legal tips, interesting case summaries, and updates about Pakistan's legal system. You can unsubscribe anytime with one click.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">To Improve and Personalize</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Make Wakeel.org Better:</strong> We look at how people use the website to figure out what's working great and what's confusing. For example, if lots of people search for "property law" but can't find good results, we know we need to add more property law content.</li>
              <li><strong>Show You Relevant Content:</strong> If you're a student studying criminal law, we might suggest criminal law cases on your homepage. If you're a family lawyer, we'll highlight family law updates.</li>
              <li><strong>Fix Problems:</strong> When something goes wrong (like a page loading slowly or a search not working), the technical information we collect helps our engineers find and fix the problem quickly.</li>
              <li><strong>Test New Features:</strong> Sometimes we try new features with small groups of users first. The usage data helps us decide if the new feature is good enough to give to everyone.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">To Keep Everything Safe and Legal</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Prevent Fraud:</strong> We watch for suspicious activity, like someone trying to use a stolen credit card or create fake accounts. The information we collect helps us catch bad actors and protect good users like you.</li>
              <li><strong>Protect Accounts:</strong> If someone tries to log into your account from a strange location or device, we might ask for extra verification to make sure it's really you.</li>
              <li><strong>Follow the Law:</strong> Sometimes the law requires us to keep certain records or provide information to authorities (like in police investigations). We only do this when legally required.</li>
              <li><strong>Enforce Our Rules:</strong> If someone is using Wakeel.org to do something harmful or against our Terms of Service, we use account information to stop them and protect other users.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Business Operations</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Understand Our Audience:</strong> We look at overall statistics (like "30% of our users are students" or "most people use Wakeel.org in the evening") to make better business decisions. This is always done with groups of people, never tracking individuals.</li>
              <li><strong>Plan for Growth:</strong> Usage data helps us know when we need to buy more servers, hire more support staff, or expand to new areas.</li>
              <li><strong>Measure Success:</strong> We track whether new features are popular, whether our marketing is working, and whether customers are happy with the service.</li>
            </ul>

            <p className="mt-6 mb-4">
              <strong>Important Promise:</strong> We will NEVER use your information to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Sell it to other companies</li>
              <li>Send you spam or unwanted marketing from other businesses</li>
              <li>Share your legal research with others (your searches and bookmarks are private)</li>
              <li>Discriminate against you based on your data</li>
              <li>Use it for any purpose you haven't agreed to</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">When Do We Share Your Information?</h2>
            <p className="mb-4">
              We know sharing your information can sound scary, so we want to be super clear about when we might share it and why. The short answer is: we share your information as little as possible, and only when necessary. Here are the specific situations:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">With Companies That Help Us Run Wakeel.org</h3>
            <p className="mb-4">
              We can't do everything ourselves, so we work with trusted partner companies that help us run the service. Think of them like teammates who help us do specific jobs:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Payment Processors:</strong> When you pay for a subscription, companies like Stripe or PayPal process your payment. They see your payment information but we make sure they keep it secure and private.</li>
              <li><strong>Email Services:</strong> We use email services to send you messages, newsletters, and receipts. These companies help deliver the emails but can't use your email address for their own purposes.</li>
              <li><strong>Cloud Hosting:</strong> Your account data is stored on secure servers provided by companies like Google Cloud or Amazon Web Services. They store the data but can't look at it or use it.</li>
              <li><strong>Analytics Tools:</strong> We use tools that help us understand how people use the website (like which pages are popular). These tools see usage data but not your personal details like name or email.</li>
              <li><strong>Customer Support Software:</strong> When you contact us for help, we use support software to manage and answer your questions efficiently.</li>
            </ul>
            <p className="mb-4">
              <strong>Important:</strong> All these partner companies sign strict agreements promising to keep your data safe and use it ONLY for helping us run Wakeel.org. They can't sell your data, use it for their own marketing, or share it with anyone else.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">When Required By Law</h3>
            <p className="mb-4">
              Sometimes the law requires us to share information with government authorities or courts:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Legal Orders:</strong> If a Pakistani court orders us to provide information as part of a legal case, we have to comply. We'll always verify the request is legitimate first.</li>
              <li><strong>Police Investigations:</strong> If law enforcement is investigating a serious crime and presents us with a valid legal request, we may need to share relevant account information.</li>
              <li><strong>Protecting Rights:</strong> If we need to defend ourselves in a lawsuit or legal dispute, we might share information with our lawyers.</li>
              <li><strong>Tax and Financial Reporting:</strong> We report financial information to tax authorities as required by Pakistan's tax laws.</li>
            </ul>
            <p className="mb-4">
              We'll only share the minimum information required by law, and we'll notify you when legally permitted to do so.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">If Wakeel.org Is Sold or Merged</h3>
            <p className="mb-4">
              If Wakeel.org is acquired by another company, merges with another company, or sells part of our business, your information would be transferred to the new owners. Here's what that means:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>The new company would have to follow this same Privacy Policy</li>
              <li>We'd notify you before the transfer happens</li>
              <li>You'd have the option to delete your account if you don't want to continue with the new company</li>
              <li>Your subscription and account would continue working the same way</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">With Your Permission</h3>
            <p className="mb-4">
              Sometimes we might ask if we can share your information for specific purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Success Stories:</strong> If you've had a great experience with Wakeel.org and we'd like to feature your story on our website, we'd ask your permission first.</li>
              <li><strong>Research Partnerships:</strong> If we partner with universities or legal organizations for research that could help improve legal education, we might ask if you want to participate.</li>
              <li><strong>Referral Programs:</strong> If you refer a friend to Wakeel.org, we'd ask permission to use your name when contacting them.</li>
            </ul>
            <p className="mb-4">
              We'll always ask clearly and explicitly before sharing your information this way, and you can always say no.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">To Protect Safety and Security</h3>
            <p className="mb-4">
              In rare emergencies, we might share information to protect people:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>If we believe someone is in immediate physical danger</li>
              <li>To prevent fraud or cyber attacks that could harm users</li>
              <li>To stop abuse of our service that violates our Terms of Service</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What We DON'T Share</h3>
            <p className="mb-4">
              Here's what we will NEVER do:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>❌ Sell your personal information to advertisers or data brokers</li>
              <li>❌ Give other companies your email address so they can spam you</li>
              <li>❌ Share your legal research history with anyone (this is completely private)</li>
              <li>❌ Post your personal information publicly</li>
              <li>❌ Share your information with social media companies</li>
              <li>❌ Trade your data with other websites or apps</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">How Do We Keep Your Information Safe?</h2>
            <p className="mb-4">
              Keeping your information secure is one of our top priorities. We use multiple layers of protection - think of it like a house with locks on the doors, an alarm system, and security cameras all working together. Here's everything we do:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Encryption (Secret Codes)</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>HTTPS/SSL Encryption:</strong> When you send information to Wakeel.org (like your password or payment details), it's automatically encrypted. This means it's scrambled into a secret code that only our servers can read. If someone tries to intercept it, all they see is gibberish.</li>
              <li><strong>Password Hashing:</strong> We never store your actual password. Instead, we convert it into a special code (called a "hash"). Even our own engineers can't see your real password. This way, if someone somehow broke into our database, they still couldn't log into your account.</li>
              <li><strong>Encrypted Databases:</strong> All your personal information is stored in encrypted databases. It's like keeping your valuables in a locked safe instead of just sitting on a table.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Access Controls (Who Can See What)</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Limited Access:</strong> Only a small number of authorized Wakeel.org employees can access user data, and only when they need to (like if you ask for help with your account). Everyone else is locked out.</li>
              <li><strong>Two-Factor Authentication:</strong> Our staff members must use extra verification (like a code sent to their phone) to access sensitive systems. One password isn't enough.</li>
              <li><strong>Audit Logs:</strong> We keep detailed records of who accessed what data and when. If anything suspicious happens, we can see it and investigate.</li>
              <li><strong>Background Checks:</strong> All employees who can access user data go through background checks and sign strict confidentiality agreements.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Technical Security Measures</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Firewalls:</strong> We have digital walls that block unauthorized access to our servers. Think of them like security guards that only let approved people through.</li>
              <li><strong>Regular Security Updates:</strong> We constantly update our software to fix any security vulnerabilities as soon as they're discovered.</li>
              <li><strong>Intrusion Detection:</strong> We use automated systems that watch for suspicious activity 24/7. If someone tries to hack into our systems, alarms go off and we investigate immediately.</li>
              <li><strong>DDoS Protection:</strong> We have protection against attacks where bad actors try to overwhelm our servers and take the website offline.</li>
              <li><strong>Secure Backups:</strong> We regularly back up all data to secure locations. If something goes wrong (like a server failure), we can restore everything.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Physical Security</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Secure Data Centers:</strong> Our servers are housed in professional data centers with 24/7 security guards, cameras, locked doors, and strict access controls.</li>
              <li><strong>Redundancy:</strong> We have backup servers in multiple locations. If one fails, others immediately take over so your data stays safe and accessible.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Regular Testing and Monitoring</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Security Audits:</strong> We regularly hire independent security experts to test our systems and find any weaknesses.</li>
              <li><strong>Penetration Testing:</strong> We have ethical hackers try to break into our systems (with permission!) to find and fix vulnerabilities before bad actors can exploit them.</li>
              <li><strong>24/7 Monitoring:</strong> Our security team monitors systems around the clock, looking for any signs of problems or attacks.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What You Can Do to Stay Safe</h3>
            <p className="mb-4">
              Security is a team effort. Here's how you can help protect your own account:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Use a Strong Password:</strong> Choose a password that's at least 8 characters long with a mix of letters, numbers, and symbols. Don't use the same password you use on other websites.</li>
              <li><strong>Don't Share Your Password:</strong> Never give your password to anyone, not even friends or family. Wakeel.org staff will NEVER ask for your password.</li>
              <li><strong>Log Out on Shared Computers:</strong> If you use Wakeel.org on a library or internet café computer, always log out when you're done.</li>
              <li><strong>Watch for Phishing:</strong> If you get a suspicious email claiming to be from Wakeel.org asking for your password or payment details, don't click any links. Contact us directly to verify.</li>
              <li><strong>Keep Your Device Secure:</strong> Use antivirus software and keep your computer or phone's operating system updated.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Being Honest About Risks</h3>
            <p className="mb-4">
              While we do everything possible to protect your information, we have to be honest: no system is 100% perfectly secure. The internet itself has risks:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Hackers are constantly developing new attack methods</li>
              <li>Technology can have unexpected bugs or vulnerabilities</li>
              <li>Human error can sometimes happen</li>
            </ul>
            <p className="mb-4">
              However, we promise to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Use industry-best security practices</li>
              <li>Constantly improve our security measures</li>
              <li>Notify you immediately if we ever detect a data breach</li>
              <li>Take full responsibility and work with you to fix any problems</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Happens If There's a Security Breach?</h3>
            <p className="mb-4">
              If we ever discover that someone has accessed user data without authorization, here's what we'll do:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Immediate Action:</strong> We'll immediately stop the breach and secure our systems.</li>
              <li><strong>Investigation:</strong> We'll investigate exactly what happened and what data was affected.</li>
              <li><strong>Notification:</strong> We'll email you within 72 hours to tell you what happened, what data was involved, and what steps we're taking.</li>
              <li><strong>Support:</strong> We'll provide free support and guidance to help protect your account.</li>
              <li><strong>Prevention:</strong> We'll implement new security measures to make sure the same thing can't happen again.</li>
              <li><strong>Transparency:</strong> We'll post a public notice on our website explaining what happened (without revealing sensitive details).</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">What Are Your Rights? (And How to Use Them)</h2>
            <p className="mb-4">
              This is important: YOUR DATA BELONGS TO YOU, NOT US. We're just keeping it safe and using it to provide you with a service. Because it's yours, you have rights about what happens to it. Here's every right you have and exactly how to use each one:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">1. The Right to Know What We Have (Access)</h3>
            <p className="mb-4">
              You can ask us "What information do you have about me?" and we'll tell you everything:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>What personal data we've collected</li>
              <li>Where we got it from</li>
              <li>What we're using it for</li>
              <li>Who we've shared it with</li>
              <li>How long we plan to keep it</li>
            </ul>
            <p className="mb-4">
              <strong>How to do this:</strong> Log into your account and go to Settings → Privacy → "Download My Data". Or email us at info@wakeel.org with subject "Data Access Request". We'll send you a complete copy of your data within 30 days, usually much sooner.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">2. The Right to Fix Mistakes (Correction)</h3>
            <p className="mb-4">
              If any information we have about you is wrong or out of date, you can tell us to fix it:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Changed your email address? Update it.</li>
              <li>Your name spelling is wrong? Correct it.</li>
              <li>Your professional details need updating? Change them.</li>
            </ul>
            <p className="mb-4">
              <strong>How to do this:</strong> Most information you can edit yourself in Settings → Profile. For things you can't change yourself, email us at info@wakeel.org and we'll fix it within 5 business days.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">3. The Right to Be Forgotten (Deletion)</h3>
            <p className="mb-4">
              You can ask us to delete your personal information and close your account permanently. When you do this:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>We'll delete your name, email, and contact information</li>
              <li>We'll delete your account settings and preferences</li>
              <li>We'll delete your search history and bookmarks</li>
              <li>We'll cancel any active subscriptions (you won't be charged again)</li>
            </ul>
            <p className="mb-4">
              <strong>What we keep (and why):</strong> For legal and security reasons, we might keep:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Payment records (required by tax law for 7 years)</li>
              <li>Records of legal requests or disputes</li>
              <li>Anonymous usage statistics (with all identifying information removed)</li>
            </ul>
            <p className="mb-4">
              <strong>How to do this:</strong> Go to Settings → Account → "Delete My Account" or email info@wakeel.org with subject "Account Deletion Request". We'll process it within 14 days and send you confirmation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">4. The Right to Limit Use (Restriction)</h3>
            <p className="mb-4">
              You can tell us to keep your data but stop using it for certain things. For example:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>"Keep my account but don't send me marketing emails"</li>
              <li>"Don't use my data for personalized recommendations"</li>
              <li>"Stop analyzing my usage patterns"</li>
            </ul>
            <p className="mb-4">
              <strong>How to do this:</strong> Go to Settings → Privacy Preferences and toggle off what you don't want. Or email us at info@wakeel.org to request specific restrictions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">5. The Right to Object (Say No)</h3>
            <p className="mb-4">
              You can object to certain types of data processing:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Marketing:</strong> You can say "don't send me promotional emails" - just click the unsubscribe link in any marketing email or adjust Settings → Communication Preferences.</li>
              <li><strong>Analytics:</strong> You can opt out of usage tracking (though this might make it harder for us to improve the service).</li>
              <li><strong>Automated Decisions:</strong> If we ever use automated systems to make decisions about your account, you can ask for human review.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">6. The Right to Move Your Data (Portability)</h3>
            <p className="mb-4">
              You can request a copy of your data in a common format (like CSV or JSON) that you can take to another service:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Your profile information</li>
              <li>Your saved bookmarks and research history</li>
              <li>Your subscription history</li>
            </ul>
            <p className="mb-4">
              <strong>How to do this:</strong> Go to Settings → Privacy → "Export My Data" and choose your format. Or email info@wakeel.org with subject "Data Portability Request".
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">7. The Right to Withdraw Consent</h3>
            <p className="mb-4">
              If you previously agreed to something (like receiving newsletters or allowing cookies), you can change your mind anytime:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Unsubscribe from newsletters with one click</li>
              <li>Change cookie settings in your browser</li>
              <li>Update communication preferences in Settings</li>
            </ul>
            <p className="mb-4">
              Withdrawing consent won't affect the lawfulness of processing we did before you withdrew it.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">8. The Right to Complain</h3>
            <p className="mb-4">
              If you think we've handled your data incorrectly or violated your privacy rights, you have the right to complain:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>To Us First:</strong> Email info@wakeel.org with subject "Privacy Complaint". We'll investigate and respond within 15 days.</li>
              <li><strong>To Authorities:</strong> You can also file a complaint with Pakistan's data protection authority or other relevant regulatory body.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How Long Do Requests Take?</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Simple Changes:</strong> Profile updates happen instantly</li>
              <li><strong>Data Correction:</strong> 5 business days</li>
              <li><strong>Data Access/Export:</strong> Up to 30 days (usually within 7 days)</li>
              <li><strong>Account Deletion:</strong> Up to 14 days</li>
              <li><strong>Complaint Response:</strong> Within 15 days</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Is There a Cost?</h3>
            <p className="mb-4">
              No! All of these rights are completely free. You can exercise them as many times as you need without any charges.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How to Verify It's Really You</h3>
            <p className="mb-4">
              For security, when you make requests about your data, we need to confirm you're really the account owner. We might ask you to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Log into your account</li>
              <li>Reply from the email address associated with your account</li>
              <li>Provide recent subscription payment information</li>
            </ul>
            <p className="mb-4">
              This protects you from someone else trying to access or delete your data pretending to be you.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">All About Cookies (Those Little Files)</h2>
            <p className="mb-4">
              You've probably heard the word "cookies" when visiting websites and wondered what they really are. They're not the delicious chocolate chip kind! Web cookies are tiny text files that websites save on your computer or phone to remember things about you. Let's explain them properly:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Exactly Are Cookies?</h3>
            <p className="mb-4">
              Imagine you go to a library and the librarian gives you a bookmark with your favorite section marked on it. Next time you visit, you show the bookmark and the librarian immediately knows what you like. Cookies work the same way - they're little bookmarks that help websites remember you.
            </p>
            <p className="mb-4">
              A cookie is a small text file (usually just a few bytes) that contains:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>A unique ID number (like a library card number)</li>
              <li>The website's name (like "wakeel.org")</li>
              <li>Some information about your preferences or session</li>
              <li>An expiration date (when the cookie should be deleted)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Types of Cookies Do We Use?</h3>
            
            <p className="mb-3"><strong>1. Essential Cookies (Absolutely Necessary)</strong></p>
            <p className="mb-4">
              These cookies are required for Wakeel.org to work properly. Without them, you couldn't log in, your shopping cart would empty, and the website would break. Examples:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Session Cookies:</strong> Remember that you're logged in as you move between pages</li>
              <li><strong>Security Cookies:</strong> Protect against hackers and keep your account safe</li>
              <li><strong>Load Balancing:</strong> Make sure you're connected to the fastest server</li>
            </ul>
            <p className="mb-4">
              You can't turn these off, but they only last while you're browsing and disappear when you close your browser.
            </p>

            <p className="mb-3 mt-6"><strong>2. Preference Cookies (Make It Personal)</strong></p>
            <p className="mb-4">
              These remember your choices so you don't have to set them every time:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Dark mode or light mode preference</li>
              <li>Language choice (English/Urdu)</li>
              <li>Font size preference</li>
              <li>Whether you've dismissed certain notifications</li>
            </ul>
            <p className="mb-4">
              If you block these, you can still use Wakeel.org, but you'll have to set your preferences each visit.
            </p>

            <p className="mb-3 mt-6"><strong>3. Analytics Cookies (Help Us Improve)</strong></p>
            <p className="mb-4">
              These help us understand how people use Wakeel.org so we can make it better:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Which pages are most popular</li>
              <li>Where people get confused or stuck</li>
              <li>How long people spend reading different articles</li>
              <li>What devices and browsers people use</li>
            </ul>
            <p className="mb-4">
              We use Google Analytics for this. The information is aggregated (grouped together) and anonymous. You can opt out in Settings → Privacy.
            </p>

            <p className="mb-3 mt-6"><strong>4. Marketing Cookies (Optional)</strong></p>
            <p className="mb-4">
              These track whether you came from an ad and help us measure if our marketing works:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Did you click a Facebook ad to get here?</li>
              <li>Did a friend refer you?</li>
              <li>Which marketing campaigns are successful?</li>
            </ul>
            <p className="mb-4">
              These are completely optional and you can block them without affecting your use of Wakeel.org.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How Long Do Cookies Last?</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser (a few minutes to a few hours)</li>
              <li><strong>Persistent Cookies:</strong> Stay on your device for a set time (usually 30 days to 2 years) to remember your preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Third-Party Cookies</h3>
            <p className="mb-4">
              Sometimes other companies' cookies might be on our website because we use their services:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Google Analytics:</strong> Helps us see website statistics</li>
              <li><strong>Payment Processors:</strong> Stripe or PayPal cookies during checkout</li>
            </ul>
            <p className="mb-4">
              These companies have their own privacy policies that govern how they use cookies.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How to Control Cookies</h3>
            <p className="mb-4">
              You have several options:
            </p>
            
            <p className="mb-3"><strong>Option 1: Cookie Settings on Wakeel.org</strong></p>
            <p className="mb-4">
              When you first visit, you'll see a cookie notice. You can:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject optional cookies (only essential cookies will be used)</li>
              <li>Customize which types you allow</li>
            </ul>
            <p className="mb-4">
              You can change these settings anytime by clicking the cookie icon in the footer.
            </p>

            <p className="mb-3 mt-6"><strong>Option 2: Browser Settings</strong></p>
            <p className="mb-4">
              Every browser lets you control cookies:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
            </ul>
            <p className="mb-4">
              You can block all cookies, allow only first-party cookies, or delete cookies after each session.
            </p>

            <p className="mb-3 mt-6"><strong>Option 3: Opt Out of Analytics</strong></p>
            <p className="mb-4">
              You can install browser extensions like:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Google Analytics Opt-out Browser Add-on</li>
              <li>Privacy Badger</li>
              <li>uBlock Origin</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Happens If You Block Cookies?</h3>
            <p className="mb-4">
              <strong>If you block essential cookies:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>❌ You won't be able to log in</li>
              <li>❌ The website might not work properly</li>
              <li>❌ Some features will be unavailable</li>
            </ul>
            <p className="mb-4">
              <strong>If you block only optional cookies:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>✅ Wakeel.org will work fine</li>
              <li>⚠️ You'll need to set preferences each visit</li>
              <li>⚠️ We won't be able to improve the service based on your usage</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Are Cookies Safe?</h3>
            <p className="mb-4">
              Yes! Cookies themselves can't harm your computer. They can't:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>❌ Run programs or install viruses</li>
              <li>❌ Access files on your computer</li>
              <li>❌ Steal your passwords (we hash them securely)</li>
              <li>❌ See what you're doing on other websites</li>
            </ul>
            <p className="mb-4">
              They're just small text files that store simple information. However, third-party advertising cookies (which we don't use) can track you across websites, which some people find creepy.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Privacy for Young People (Under 18)</h2>
            <p className="mb-4">
              We want to be extra careful about protecting young people's privacy. Here's everything parents, teachers, and young students need to know:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Age Requirements</h3>
            <p className="mb-4">
              To create an account and use Wakeel.org, you need to be:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>18 years or older</strong> to create an account independently</li>
              <li><strong>13-17 years old</strong> with parent or guardian permission and supervision</li>
              <li><strong>Under 13?</strong> We're sorry, but we can't let you create an account yet. However, you can still read our free public content without creating an account!</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Why These Age Limits?</h3>
            <p className="mb-4">
              These aren't random rules - they're based on privacy laws designed to protect children:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>International privacy laws (like COPPA in the US and GDPR in Europe) require special protections for children's data</li>
              <li>Young people might not fully understand privacy implications</li>
              <li>We want parents to be involved in decisions about their children's data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Young Students (13-17 Years Old)</h3>
            <p className="mb-4">
              If you're a student between 13 and 17, here's what you need to know:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Get Permission First:</strong> Talk to your parent or guardian before creating an account. Show them this Privacy Policy so they understand what information we collect.</li>
              <li><strong>Special Student Plan:</strong> We have a student subscription (PKR 199/month or PKR 1,999/year) designed for learners like you.</li>
              <li><strong>Educational Use:</strong> We collect less information from student accounts and don't use it for marketing.</li>
              <li><strong>Parent Controls:</strong> Your parents can contact us anytime to see what information we have, request changes, or delete your account.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Parents and Guardians</h3>
            <p className="mb-4">
              If your child wants to use Wakeel.org for their legal studies or research, here's what we want you to know:
            </p>
            
            <p className="mb-3"><strong>What Information We Collect from Students:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Name and email address (for the account)</li>
              <li>School or university name (optional, helps verify student status)</li>
              <li>Usage data (which pages they visit, what they search for)</li>
              <li>Payment information (if you purchase a student subscription)</li>
            </ul>

            <p className="mb-3 mt-6"><strong>What We DON'T Do with Student Data:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>❌ Sell it to anyone</li>
              <li>❌ Use it for targeted advertising</li>
              <li>❌ Share it with third parties (except necessary service providers)</li>
              <li>❌ Create detailed profiles for marketing purposes</li>
              <li>❌ Track students across other websites</li>
            </ul>

            <p className="mb-3 mt-6"><strong>Your Parental Rights:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Review:</strong> You can ask to see all information we have about your child</li>
              <li><strong>Correct:</strong> You can request corrections to any inaccurate information</li>
              <li><strong>Delete:</strong> You can request we delete your child's account and all associated data</li>
              <li><strong>Control:</strong> You can limit what information we collect or how we use it</li>
              <li><strong>Complain:</strong> If you're unhappy with how we handle your child's data, you can file a complaint</li>
            </ul>

            <p className="mb-3 mt-6"><strong>How to Exercise Parental Rights:</strong></p>
            <p className="mb-4">
              Email us at info@wakeel.org with:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Subject line: "Parental Rights Request"</li>
              <li>Your child's name and account email</li>
              <li>Proof you're the parent/guardian (we may ask for ID to protect your child)</li>
              <li>What you'd like us to do (review, correct, delete, etc.)</li>
            </ul>
            <p className="mb-4">
              We'll respond within 5 business days.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">For Schools and Educational Institutions</h3>
            <p className="mb-4">
              If you're a teacher or school administrator considering Wakeel.org for your students:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Bulk Student Accounts:</strong> We can work with your school to set up supervised student accounts with enhanced privacy protections.</li>
              <li><strong>FERPA Compliance:</strong> If applicable, we comply with the Family Educational Rights and Privacy Act.</li>
              <li><strong>Data Agreements:</strong> We can sign data processing agreements with your institution.</li>
              <li><strong>No Advertising:</strong> Student accounts never see advertisements or marketing.</li>
              <li><strong>Educational Discounts:</strong> Contact us at info@wakeel.org about our Organizations plan for educational institutions.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What If We Discover a Child Under 13?</h3>
            <p className="mb-4">
              If we learn that someone under 13 has created an account without proper parental consent:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>We'll immediately suspend the account</li>
              <li>We'll contact the email address on file to verify age</li>
              <li>If we can't verify proper consent, we'll delete the account and all associated data within 14 days</li>
              <li>We'll notify the parent/guardian if possible</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Tips for Young People Using the Internet</h3>
            <p className="mb-4">
              Whether you're using Wakeel.org or any other website, here are important safety tips:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Talk to Your Parents:</strong> Tell them what websites you use and what you're researching</li>
              <li><strong>Protect Your Password:</strong> Don't share it with friends, even best friends</li>
              <li><strong>Think Before You Share:</strong> Don't post personal information like your home address, phone number, or school location publicly</li>
              <li><strong>Be Skeptical:</strong> If something seems too good to be true (like "free" subscriptions requiring your credit card), tell an adult</li>
              <li><strong>Report Problems:</strong> If anything makes you uncomfortable, tell your parents and contact us immediately</li>
            </ul>

            <p className="mb-4 mt-6">
              <strong>We take child privacy very seriously.</strong> If you're a parent with questions or concerns about your child's privacy on Wakeel.org, please don't hesitate to contact us at info@wakeel.org. We're here to help!
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">How We Handle Changes to This Policy</h2>
            <p className="mb-4">
              Privacy laws change, our services evolve, and sometimes we need to update this Privacy Policy. Here's exactly how we handle changes:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">When We Might Update This Policy</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>New Features:</strong> If we add new services or features that use data differently, we'll update the policy to explain how.</li>
              <li><strong>Legal Changes:</strong> If Pakistan privacy laws change, or international standards evolve, we'll update to stay compliant.</li>
              <li><strong>Improved Clarity:</strong> Sometimes we rewrite sections to make them clearer and easier to understand (like we did here!).</li>
              <li><strong>User Feedback:</strong> If users tell us something is confusing, we'll clarify it.</li>
              <li><strong>Business Changes:</strong> If we merge with another company or change our business model.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">How We'll Tell You About Changes</h3>
            <p className="mb-4">
              We promise to let you know when we make changes:
            </p>
            
            <p className="mb-3"><strong>For Minor Changes (Small Updates):</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>We'll update the "Last Updated" date at the top of this page</li>
              <li>We'll post a brief note on our website homepage</li>
              <li>The changes take effect immediately when posted</li>
            </ul>

            <p className="mb-3 mt-6"><strong>For Major Changes (Important Updates):</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Email Notification:</strong> We'll send you an email at least 30 days before major changes take effect, explaining what's changing and why.</li>
              <li><strong>In-App Notice:</strong> You'll see a prominent notification when you log in, with a summary of key changes.</li>
              <li><strong>Highlight Changes:</strong> We'll show what's new or different (like with highlight marks or a "What's Changed" summary).</li>
              <li><strong>Time to Review:</strong> You'll have at least 30 days to review changes before they take effect.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What Counts as a "Major" Change?</h3>
            <p className="mb-4">
              Major changes that trigger advance notification include:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Collecting new types of sensitive information</li>
              <li>Sharing data with new types of third parties</li>
              <li>Using your data for significantly different purposes</li>
              <li>Reducing your privacy rights or protections</li>
              <li>Changes to how we handle children's data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Your Options When We Make Changes</h3>
            <p className="mb-4">
              When we update this policy, you have choices:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Accept Changes:</strong> By continuing to use Wakeel.org after the new policy takes effect, you're agreeing to the changes. You don't need to do anything.</li>
              <li><strong>Ask Questions:</strong> Email us at info@wakeel.org if anything is unclear or concerning. We're happy to explain.</li>
              <li><strong>Adjust Settings:</strong> You can change your privacy settings to limit data collection or usage.</li>
              <li><strong>Opt Out of Optional Features:</strong> If new features involve optional data processing, you can choose not to participate.</li>
              <li><strong>Delete Your Account:</strong> If you disagree with major changes, you can delete your account before the changes take effect. We'll process all your data under the old policy until deletion is complete.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Viewing Previous Versions</h3>
            <p className="mb-4">
              We keep archived versions of this Privacy Policy so you can see what it said in the past:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Visit wakeel.org/privacy/archive to see previous versions</li>
              <li>Each version shows the date it was effective</li>
              <li>You can compare versions to see exactly what changed</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Our Commitment</h3>
            <p className="mb-4">
              We promise to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Always be transparent about changes</li>
              <li>Never make changes that harm your privacy without clear notice</li>
              <li>Give you enough time to review and respond to major changes</li>
              <li>Answer your questions promptly and honestly</li>
              <li>Keep your data safe during any transition period</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">How to Contact Us (We're Here to Help!)</h2>
            <p className="mb-4">
              We know privacy can be confusing, and legal language can be hard to understand. That's why we're always happy to answer questions, clarify things, or just chat about your concerns. Seriously - we want to hear from you!
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Different Ways to Reach Us</h3>
            
            <p className="mb-3"><strong>Email (Fastest for Most Things):</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>General Privacy Questions:</strong> info@wakeel.org</li>
              <li><strong>Subject Line Examples:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>"Privacy Question About My Data"</li>
                  <li>"Data Access Request"</li>
                  <li>"Account Deletion Request"</li>
                  <li>"Parental Rights Request"</li>
                  <li>"Privacy Complaint"</li>
                </ul>
              </li>
              <li><strong>Response Time:</strong> We respond to privacy inquiries within 48 hours (usually much faster!)</li>
            </ul>

            <p className="mb-3 mt-6"><strong>Website Contact Form:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Visit wakeel.org/contact</li>
              <li>Choose "Privacy & Data Protection" from the topic dropdown</li>
              <li>Fill out the form with your question or concern</li>
              <li>We'll email you back within 2 business days</li>
            </ul>

            <p className="mb-3 mt-6"><strong>Our Location:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>We're based in Lahore, Pakistan</li>
              <li>All data requests are handled by our Lahore team</li>
            </ul>

            <p className="mb-3 mt-6"><strong>Official Website:</strong></p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>https://wakeel.org</li>
              <li>Privacy Policy Updates: https://wakeel.org/privacy</li>
              <li>FAQ About Privacy: https://wakeel.org/faq#privacy</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">What to Include When You Contact Us</h3>
            <p className="mb-4">
              To help us help you faster, please include:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Your Account Email:</strong> So we can look up your account</li>
              <li><strong>Clear Subject Line:</strong> Like "Delete My Data" or "Privacy Question"</li>
              <li><strong>Specific Question:</strong> The more detail, the better we can help</li>
              <li><strong>Any Relevant Details:</strong> Like when the issue started or what page you were on</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Common Reasons People Contact Us</h3>
            <p className="mb-4">
              Here are questions we hear often (and love to answer!):
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li>"Can you explain this section in simpler terms?"</li>
              <li>"How do I download all my data?"</li>
              <li>"I want to delete my account - what happens to my information?"</li>
              <li>"Can I opt out of analytics tracking?"</li>
              <li>"How do you use cookies?"</li>
              <li>"Is my search history private?"</li>
              <li>"My child created an account - what are my rights?"</li>
              <li>"How can I update my privacy settings?"</li>
              <li>"Do you sell my data to other companies?"</li>
              <li>"I got a suspicious email claiming to be from Wakeel.org - is it real?"</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Response Times</h3>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li><strong>Simple Questions:</strong> 24-48 hours</li>
              <li><strong>Data Requests:</strong> 5-30 days (depending on complexity)</li>
              <li><strong>Account Deletion:</strong> Up to 14 days</li>
              <li><strong>Complaints:</strong> Initial response within 48 hours, full resolution within 15 days</li>
              <li><strong>Urgent Security Issues:</strong> Immediate attention (email with subject "URGENT SECURITY")</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">If You're Not Satisfied</h3>
            <p className="mb-4">
              We hope we can resolve any concerns directly. But if you're not satisfied with our response:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-3">
              <li><strong>Escalate Within Wakeel.org:</strong> Ask to speak with our Privacy Officer by emailing info@wakeel.org with subject "Escalate Privacy Issue"</li>
              <li><strong>File a Formal Complaint:</strong> Contact Pakistan's data protection authority or relevant regulatory body</li>
              <li><strong>Seek Legal Advice:</strong> You have the right to consult with a lawyer about privacy concerns</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Security Tip: How to Know It's Really Us</h3>
            <p className="mb-4">
              Scammers sometimes pretend to be companies to steal information. Here's how to verify you're really talking to Wakeel.org:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>✅ Our official email domain is @wakeel.org (not @gmail.com or anything else)</li>
              <li>✅ We'll never ask for your password via email</li>
              <li>✅ We'll never ask for payment information via email</li>
              <li>✅ Our official website is https://wakeel.org (check for HTTPS and correct spelling)</li>
              <li>❌ Be suspicious of emails from similar-looking domains like wakeel.com or wakel.org</li>
            </ul>
            <p className="mb-4">
              If you receive a suspicious email claiming to be from us, forward it to info@wakeel.org and we'll verify if it's legitimate.
            </p>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h4 className="font-bold mb-3 text-foreground">Quick Contact Summary:</h4>
              <p className="mb-2"><strong>Email:</strong> info@wakeel.org</p>
              <p className="mb-2"><strong>Location:</strong> Lahore, Pakistan</p>
              <p className="mb-2"><strong>Website:</strong> https://wakeel.org</p>
              <p className="mb-4"><strong>Response Time:</strong> Within 48 hours for most inquiries</p>
              <p className="text-sm text-muted-foreground">
                We're real people who care about your privacy. Don't hesitate to reach out - no question is too small or too silly. We're here to help make sure you feel safe and informed about how your data is handled!
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 