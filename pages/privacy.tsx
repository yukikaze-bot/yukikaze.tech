import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const PrivacyPage: NextPage = () => (
    <>
        <NextSeo title="Privacy Policy" />

        <section className="paper-container">
            <div className="ribbon"></div>
            <div className="paper">
                <div className="markdown-jekyll">
                    <h1>Our Privacy Policy</h1>
                    <hr />
                    <p>Last updated at: July 07 2021</p>
                    <hr />
                    <p>
                        Owner Email: <a href="mailto:contact@yukikaze.tech">contact@yukikaze.tech</a>
                    </p>
                    <hr />
                    <h2>Information that we collect</h2>
                    <ul>
                        <li>User IDs</li>
                        <li>OAuth Tokens</li>
                        <li>OAuth Refresh Tokens</li>
                        <li>Guild IDs</li>
                        <li>Tag Contents</li>
                        <li>Cookies</li>
                    </ul>
                    <hr />
                    <h2>How that information is used</h2>
                    <ul>
                        <li>User IDs are used for the dashboard</li>
                        <li>OAuth tokens are used to get data about the user from Discord</li>
                        <li>OAuth refresh tokens are used to refresh your OAuth token</li>
                        <li>Guild IDs are used to store data about the guild&#39;s preferences (e.g. languages)</li>
                        <li>
                            Tag contents are used for our <code>tag</code> command
                        </li>
                        <li>Cookies are used in this website to improve your experience</li>
                    </ul>
                    <hr />
                    <h2>People under 13 years old</h2>
                    <p>
                        Our Services are for users age 13 and over and we do not knowingly collect personal information
                        from children under the age of 13. If you are a parent or guardian of a child under the age of
                        13 and believe he or she has disclosed personal information to us please contact us at
                        <a href="mailto:contact@yukikaze.tech">contact@yukikaze.tech</a>. Note: In some countries, the
                        age of digital consent is older than 13. If you are in those countries, you must be at least
                        that age to use the Services.
                    </p>
                    <hr />
                    <h2>Links to other sites</h2>
                    <p>
                        This Privacy Policy applies only to the Services. The Services may contain links to other web
                        sites not operated or controlled by us (the “Third Party Sites”). The policies and procedures we
                        described here do not apply to the Third Party Sites. The links from the Services do not imply
                        that we endorse or have reviewed the Third Party Sites. We suggest contacting those sites
                        directly for information on their privacy policies.
                    </p>
                    <hr />
                    <h2>Security</h2>
                    <p>
                        We take reasonable steps to protect the information provided via the Services from loss, misuse,
                        and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email
                        transmission is ever fully secure or error free. In particular, email sent to or from the
                        Services may not be secure. Therefore, you should take special care in deciding what information
                        you send to us via email. Please keep this in mind when disclosing any information via the
                        Internet.
                    </p>
                    <hr />
                    <h2>Changes to the privacy policy</h2>
                    <p>
                        We reserve the right to update or modify this Privacy Policy at any time and from time to time
                        without prior notice. Please review this policy periodically, and especially before you provide
                        any information. This Privacy Policy was last updated on the date indicated above. Your
                        continued use of the Services after any changes or revisions to this Privacy Policy shall
                        indicate your agreement with the terms of such revised Privacy Policy.
                    </p>
                    <hr />
                    <h2>Data deletion</h2>
                    <p>
                        If you want to delete your stored data, just contact us at{' '}
                        <a href="mailto:contact@yukikaze.tech">contact@yukikaze.tech</a>.
                    </p>
                    <hr />
                    <h2>Contacting us</h2>
                    <p>
                        Please also feel free to contact us if you have any questions about this Privacy Policy or the
                        information practices of the Services. You may contact us as follows:{' '}
                        <a href="mailto:contact@yukikaze.tech">contact@yukikaze.tech</a>.
                    </p>
                </div>
            </div>
        </section>
    </>
);

export default PrivacyPage;
