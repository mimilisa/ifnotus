import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactPlayer from "react-player";
import InstagramEmbed from 'react-instagram-embed';

import './App.css';
import './css/style.css';
import './css/responsive.css';
import './css/magnific-popup.css';
import './css/emergency.css';

import {FaFacebookF} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {AiTwotonePhone} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {GiFist} from  'react-icons/gi';


export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/bail">
            <Bail />
          </Route>
          <Route path="/Revisiting anti-Black racism">
            <Anti />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/Jamaica deportations exemplify gentrification and racialization of UK citizenship">
            <Jamaica />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return(      <div className="App">
      <header>
            <div id="hero-container" class="bee">
                <div class="overlay"></div>
                <div id="site-title">
                    <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                    <i id="fist"> <GiFist/></i>
                </div>
                <nav>
                    <ul>
                    <li><Link to="/articles">ARTICLES</Link></li>
                    <li><Link to="/resources">RESOURCES</Link></li>
                    <li><Link to="/articles">PETITIONS</Link></li>
                    </ul>
                </nav>
            </div>
    	</header>
  <div id ="intro">
          <h1><i>MISSION</i></h1>

          <p><i>If Not Us</i> is a Vancouver-based startup devoted to social equality, environmental justice, and mental health. We provide free access to original journalism and online resources focused on educating those looking to become more involved in their communities and supporting those already campaigning for equitable reform. We aim to provide information relevant to all our readers and viewers. Please check back regularly as articles and resources are constantly being expanded and updated, and feel free to get in touch at ifnotusinfo@gmail.com if you have any suggestions for how we can improve our service.</p>
  	<p>We acknowledge that some of the content on our site may be disturbing to certain readers and viewers. Unfortunately, this is a direct reflection of the society we live in. At If Not Us, we don’t believe in pacifying uncomfortable stories; it is only with open and informed dialogue that progress comes. </p>
  <p>	The disturbing nature of many current social issues is also why we decided to commit a section of our site to mental health resources. If you’re struggling with depression, anxiety, burnout, PTSD, panic, hopelessness, sleeping disorders, or any other mental illness, please take a look at the ‘MENTAL HEALTH’ menu tab for information on both in-person and online help. If you’re currently in crisis, dial 811 from anywhere in Canada to speak to a healthcare professional. If you or someone else is in immediate danger, call 911 and ask for EMS.
   </p>
   </div>
          <div id="recent">
          <h1 id="recentarticles"><i>TOP ARTICLES</i></h1>

          </div>
    <div id="flex">
    <blockquote id ="b"></blockquote>
    <blockquote><h2><i><Link to ="/Revisiting anti-Black racism">Revisiting anti-Black racism</Link></i></h2> <p id="byB"> <i>By Bryn Evans</i></p>
  	Amid the public outrage following the recent murders of George Floyd, Breonna Taylor,
    and Ahmaud Arbery in the United States, there seems to be the implicit but dangerously
    pervasive notion that the current white supremacy, police brutality, and selective denial
    of Constitutional rights represents a crisis—an exceptional and unprecedented travesty.
    “This is only happening because of Trump” and “If only we had Obama again” are common sentiments
    thrown around by those too privileged to acknowledge the constancy and the universality of racial
    injustice in today’s world.
    <p id="reading"><b><Link to ="/Revisiting anti-Black racism">CONTINUE READING</Link></b></p></blockquote></div>

    <div id="flex">
    <blockquote id ="b2"></blockquote>
    <blockquote> <h2><i><Link to="/bail">Why the United States needs to bail on cash bail</Link></i></h2><p id="byB2"><i>By Bryn Evans</i></p>
    In 2010, Kalief Browder, then sixteen years old, was accused of stealing a backpack and granted
    US$3000 bail. Unable to pay, he was detained in New York’s infamous Rikers Island jail for three years
    awaiting trial, before charges were ultimately dismissed. In 2015, Browder committed suicide.

    <p id="continue"><b><Link to="/bail">CONTINUE READING</Link></b></p></blockquote>
    </div>
    <blockquote id="org"><h1 id="more"><Link to="/articles" name ="TOP">MORE ARTICLES</Link></h1></blockquote>


  <div id="column">

  <div id="change">
  <blockquote id="pen">
  <h1 id="sign"><i>PETITIONS</i></h1>
</blockquote>
  <blockquote><h2 id="top"><a href ="https://www.change.org/"><b>Change.org:</b></a></h2>
  <p><a href="https://www.change.org/p/justin-trudeau-canada-needs-to-step-up-for-mental-health?source_location=discover_feed"><b><li>Canada Needs to Step Up For Mental Health</li></b></a></p></blockquote>
  <blockquote><p><a href="https://www.change.org/p/superior-courts-of-quebec-and-canada-mandatory-body-cameras-for-montreal-police?pt=AVBldGl0aW9uABvDWAEAAAAAXuVXFKD3Xo8yM2I0NWE5NA%3D%3D&source_location=topic_page"><b>Mandatory Body Cameras For Montreal Police</b></a> - Shaun Penzo started this petition to Superior courts of Quebec and Canada .</p><p><i>"This petition has been created to bring transparency to citizens , law enforcement and the courts onto the conduct of police conduct and brutality. An overwhelming need for the Montreal Police department, Rcmp , S.Q , any and all Policing agencies conducting services within the Quebec territory , to have mandatory body cameras . As well to induct into Law , "That all on duty officers require these functioning mandatory body cameras in order to to perform their duties as an officer of the law" . In other words , no camera , no public interaction."</i></p></blockquote>
  <blockquote id="org"><h1 id="org2">MORE PETITIONS</h1></blockquote>
  </div>

  <div id="fund">
  <blockquote id="hand">
  <h1 id="sign"><i>FUNDRAISERS</i></h1>
  </blockquote>
  <blockquote><h2 id="top"><a href ="https://www.change.org/"><b>GoFundMe</b></a></h2>
  <p><a href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor"><b>Justice for Breonna Taylor</b></a> - Bianca Austin is organizing this fundraiser.</p> <p><i>"The community has been reaching out in support of Bree’s family and wanting to donate to the cause. First off, we are SO THANKFUL for EVERYONE standing up for justice and saying her name! We’re not stopping until we truly get justice! All of you are such a blessing! It’s amazing!"</i></p></blockquote>
  <blockquote><p><a href="https://www.gofundme.com/f/a-fund-for-blackled-mental-health-supports"><b> A Fund for Balck-led Mental Health Supports</b></a> - Healing Collective and 4 others are organizing this fundraiser.</p>
  <p>The Black Mental Health Matters Fund.</p>
  <p><i>"We are all racist. Because of the pervasiveness of systemic, explicit and implicit racism, we all have a duty to end it and help those most impacted heal.
  It is not enough to “not be racist,” we have to be actively anti-racist by striving to rededicate ourselves, love our neighbours, and become the change we wish to see.
  This fund is a place for non-Black people to tangibly put their outrage, sadness, shock, fear, anger and solidarity into action to actively support Black-led healing from the impacts of white supremacy through mental health supports for Black people."
  </i></p></blockquote>
  <blockquote><p><a href="https://www.gofundme.com/f/support-for-family-of-chantel-moore"><b>Support for family of Chantel Moore</b></a> - Brenda Sayers is organizing this fundraiser on behalf of Anna Masso.</p><p><i>"In the early morning hours of Thursday June 4th 2020 Chantel Moore (Martin) was shot and killed by the city police in Edmundston, New Brunswick. This fundraiser has been created and circulated with the permission of the Martin family."</i></p></blockquote>
  <blockquote id="org"><h1 id="org2">MORE FUNDRAISERS</h1></blockquote>
  </div>

  <div id="change">
  <blockquote id="heart">
  <h1 id="sign"><i>DONATIONS</i></h1>
  </blockquote>
  <blockquote><h2 id="top"><a href="https://secure.unicef.ca/page/31858/donate/1?ea.tracking.id=20DIAQ01OTE&recurring=N&gclid=Cj0KCQjwuJz3BRDTARIsAMg-HxWznfC-QwFx5iUOPJVzXW7GqaBuw59eG1AWHQxYKLErZLUacqcT3JoaAmX2EALw_wcB"><b>UNICEF</b></a></h2> <p><i>Donate to UNICEF to help children in crisis</i></p>
  <p><i>"A gift to UNICEF will provide children with the opportunity to survive and thrive. UNICEF works directly with partners and governments in over 190 countries. We build infrastructure, we provide essential services and we work tirelessly to provide every child an opportunity to survive."</i></p></blockquote>

  <blockquote><h2 id="top"><a href="www.facebook.com"><b>Canadian Red Cross</b></a></h2>
  <p><i>"Money donated to the Canadian Red Cross Fund is used to support the entire organization as this allows flexibility for the funds raised to be used wherever the current need is greatest.
         At home and around the world, the red cross is a sign of hope for people who have lost everything. Whether responding to the COVID-19 pandemic, providing disaster relief and recovery to those in Canada and abroad or helping other vulnerable people through our programs and services, your gift allows us to deliver help to where it is needed most."
  </i></p></blockquote>

  <blockquote><p><a href="https://www.gofundme.com/f/support-for-family-of-chantel-moore"><b>Support for family of Chantel Moore</b></a> - Brenda Sayers is organizing this fundraiser on behalf of Anna Masso.</p><p><i>"In the early morning hours of Thursday June 4th 2020 Chantel Moore (Martin) was shot and killed by the city police in Edmundston, New Brunswick. This fundraiser has been created and circulated with the permission of the Martin family."</i></p></blockquote>
  <blockquote id="org"><h1 id="org2">MORE DONATIONS</h1></blockquote>
  </div>
  </div>


  <div id ="media"><h1 id ="media2">WHAT'S HAPPENING ON SOCIAL MEDIA:</h1></div>

  <div class="instagram">
  <InstagramEmbed url="https://www.instagram.com/p/CBQXzVChLLO/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  <InstagramEmbed url="https://www.instagram.com/p/CBDzOP_JzeY/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  <InstagramEmbed url="https://www.instagram.com/p/CA8xhfHprsv/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  </div>

  <div id="video">
  <InstagramEmbed url="https://www.instagram.com/tv/CAyfFnaJbyL/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  <InstagramEmbed url="https://www.instagram.com/p/CBM2RsNgiAz/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  <InstagramEmbed url="https://www.instagram.com/p/CBcfhuMn1ER/" maxWidth={320} hideCaption={true} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess ={()=> {}} onAfterRender={()=>{}} onFailure ={ ()=>{}}/>
  </div>

  <div class ="youtube">
  <h2> Youtube will donate to #BlackLivesMatter for you:</h2>
    <ReactPlayer url="https://www.youtube.com/watch?v=WKo8OrBdLz8"/>
  </div>
  	<footer>
    <span id="contact">GET IN TOUCH</span>

  	    <div id="phone-and-email">

  	            <a href="mailto:dbi.evans@gmail.com" id ="email"><MdEmail/></a>
  	            <a href="tel:+1-778-223-8647" id ="phone"><AiTwotonePhone/></a>

                <a href="https://www.facebook.com/lisa.t.degraaf" id ="fb">
                    <span class="sr-only"><FaFacebookF/></span>
                </a>

                <a href="https://twitter.com/queenscomputing" id ="insta">
                    <span class="sr-only"><GrInstagram/></span>
                </a>
  	    </div>
          <div id="copyright">&copy; 2020 LISA BRYN. All Rights Reserved.</div>
  	</footer>

  </div>

  );
}



function Bail() {
return(
  <div id="full"><header>
        <div id="hero-container" class="bee">
            <div class="overlay"></div>
            <div id="site-title">
                <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                <i id="fist"> <GiFist/></i>
            </div>
            <nav>
                <ul>
                <li><Link to="/articles">ARTICLES</Link></li>
                <li><Link to="/resources">RESOURCES</Link></li>
                <li><Link to="/articles">PETITIONS</Link></li>
                </ul>
            </nav>
        </div>
  </header>

          <blockquote id="bail">
          <blockquote id="jail"></blockquote>
          <h1 id="jail2"><i>Why The United States Needs To Bail On Money Bail</i></h1>
          <h2 id="date">December 6, 2019</h2>
          <h2 id ="by"><i>By Bryn Evans</i></h2>
          <p id="top">In 2010, Kalief Browder, a 16 year-old Black teenager, was accused of stealing a backpack and granted US$3000 bail. Unable to pay, he was detained in New York’s infamous Rikers Island jail for three years awaiting trial, before charges were ultimately dismissed. In 2015, <a href=" https://www.nytimes.com/2019/01/24/nyregion/kalief-browder-settlement-lawsuit.html">Browder committed suicide.</a></p>

	<p>According to Prison Policy Initiative, a leading American criminal justice non-profit, nearly half of Americans granted money bail are forced into jail in the lead-up to their trial because <a href=" https://www.prisonpolicy.org/reports/incomejails.html">they can’t afford the cost.</a> To give this figure a numerical value, New York City alone saw <a href=" https://www.nytimes.com/2019/01/11/nyregion/how-does-bail-work-and-why-do-people-want-to-get-rid-of-it.html?fbclid=IwAR1kZCbf3Ka2sntzt9SJQChNbRAM6sw8FddnLONQqW08KKjndTC1_cQAhSk">33,000 defendants unable to post bail in 2017</a>.</p>

	<p id="space">Bail is a feature in the criminal justice system of almost every Western democracy. Its meaning varies depending on who is asked, and it operates slightly differently in every jurisdiction. In the interests of clarity and understanding, it’s worth briefly summarizing some important terms as well as the scope of the article before further delving into the issue.</p>
  <div id="cite"><p id="mark"><b><i>.</i></b></p><p id="quote"><b>New York City saw 33,000 defendants unable to post bail in 2017</b></p></div>


<p><b>What Is Bail?</b></p>
<blockquote id="split">
  <blockquote id="kalief"></blockquote>
  <p id="split2">	In most jurisdictions, when an individual is arrested and charged with a crime, he or she will have to wait anywhere from several days to several months for a trial. Within the first day, a judge will decide whether during this waiting period, the accused will be placed in jail or granted bail; this decision is made with regard to the seriousness of the alleged crime, the flight risk posed by the defendant, and the danger to the community presented by the defendant. The granting of bail allows the individual to return home while awaiting trial and signifies that the judge has deemed them low-risk, both in terms of likelihood to skip their hearing and threat to the public.</p>
</blockquote>


	<p id="space">The term ‘bail’ implies conditions on the release. Money bail (or cash bail), where the accused pays a security to the court upfront then receives this money back once they attend trial, is just one form. In the US, money bail has proliferated in use to the extent that many now equate the general idea of bail with money bail.</p>
  <div id="cite"><p id="mark"><b><i>.</i></b></p><p id="quote"><b>Cash bail is the oft-referenced villain in calls for law reform, with critics contending it perpetuates an existing financial and racial divide</b></p></div>
  <p>By contrast, UK judges favour other conditions, such as electronic tagging, imposition of a curfew, driving prohibitions, or regular police station visits.</p>

	<p>Money bail is the oft-referenced villain in calls for law reform, with critics contending it perpetuates an existing financial and racial divide. Our focus will therefore be money bail; specifically in the US, given its prevalence. We’ll also consider the operation of bail in other jurisdictions, although this will generally be limited to proposals for US reform.</p>

  <p><b>Money Bail In Practice: Why Is Tt Considered Problematic?</b></p>
  <p>In its pure form, bail is an essential aspect of fair criminal justice systems: it acts as a tangible embodiment of the principle that a defendant is innocent until proven guilty. Provided there is a safe system for deciding who is granted bail, allowing accused individuals back home in anticipation of their trials also takes pressure off of jails, helps the families of defendants, and speeds up the societal reintegration of potential criminals (potential, of course, as these individuals have only been accused of crimes, rather than convicted). By attaching a monetary price to a defendant’s ability to enjoy what in the US is a Constitutional right, money bail strays from its fundamental aim—in effect, it privatizes an otherwise universal entitlement.</p>


	<p>Yet, money bail is not only flawed in principle: statistics show that its operation disproportionately hurts low-income and coloured communities. While 2015 US Bureau of Justice data exhibits that the median annual income of people incarcerated pretrial sat at just US$15,109, the median money bail in the United States is US$10,000, or roughly eight months of pure income. When you take into account the fact that four in ten Americans can’t cover an unforeseen $400 expense, it’s unsurprising that nearly half of Americans offered money bail are <a href=" https://www.federalreserve.gov/publications/files/2017-report-economic-well-being-us-households-201805.pdf">forced into pre-trial detention</a>.</p>


	<p><a href=" https://www.ncjrs.gov/App/publications/Abstract.aspx?id=204620">Reports</a> also show that Black and Hispanic people are twice as likely as white people to be unable to post bail and as a result outnumber whites by 2:1 in jails. This is despite these two minorities making up just 13% and 18% of the American population, respectively, compared to 60% for whites. Although national data on the overrepresentation of ethnic minorities in jails is sorely lacking, academics and NGOs alike generally agree that this inequality is due to lower median annual incomes pre-incarceration as well as more frequent recourse to money bail and stiffer bail calculations in cases concerning people of colour.</p>

	<p>Equally concerning are the indirect effects that an inability to post bail can have on the families of the defendants. Of men who can’t afford their set money bail, <a href=" https://www.prisonpolicy.org/blog/2018/08/15/pretrial/">53% are parents of children under 18, while for women, the figure stands at 66%</a>. Being forced to remain in jail pre-trial, even for just several days, can result in losing a job, housing, or custody of children—all of which can have detrimental repercussions for the defendant’s innocent family and children.</p>

	<p id="space">All this said, there is one out for Americans financially unable to post bail. Bail bondspeople operate as a type of private lender, paying bail on the behalf of cash-strapped defendants. </p>
<div id="cite"><p id="mark">.</p><p id="quote"><b>People of colour are twice as likely as white people to be unable to post bail</b></p></div>
  <p>The catch: bondspeople charge non-refundable fees—up to 10% of the total bail price—and can increase these earnings through exorbitant interest rates should any of the fee instalments be late. Even if charges are dropped or the defendant is acquitted, fees cannot be recouped. Given defendants of colour are most likely to be unable to post their own bail, it comes as no surprise that the bail bond industry predominantly takes advantage of exactly those people: between 2012–2016 in Los Angeles, people of colour accounted for roughly <a href=" https://www.theguardian.com/commentisfree/2018/aug/30/abolish-bail-bonds-cash-bail">78% of gross bail bond payments</a>; in 2015 in New Orleans, <a href=" https://www.theguardian.com/commentisfree/2018/aug/30/abolish-bail-bonds-cash-bail">more than 85%</a>.</p>

	<p>Like the alarming majority of predatory industries in the US, bail bond companies use their immense wealth to sway public policy. The bail bond industry alone is worth an estimated US$2 billion per year, and with many of the major players associated with top American insurance companies, they have no shortage of funds to sponsor anti-reform campaigns.</p>
<blockquote id="bond"></blockquote>
<p><b>Suggestions For Reform</b></p>
	<p>Money bail is a difficult sell: if poor, individuals awaiting trial either enter into contracts with extortionate lenders, or stay locked in jail, jeopardizing their personal life. The latter option also puts added strain on jails, costing the US government an estimated $15 billion each year.</p>

	<p>So what action can be taken? To date, eight states have banned the for-profit bail bond business. Technology companies, such as Facebook and Google, have also prohibited all advertizing by bail bondspeople on their platforms. Google’s Senior Director of Global Product Policy, David Graff, said that in contemplation of research showing the industry exploits low-income communities of colour, <a href=" https://www.nbcnews.com/news/us-news/google-facebook-say-they-re-banning-profit-bail-bond-ads-n872386">such ads breached their terms of service</a>.</p>

	<p>Although a positive step, this addresses only a symptom of a much larger systemic issue: US judges need to stop having such frequent recourse to money bail. In the UK, the Bail Act 1976 provides for the numerous conditions a judge can impose on a defendant’s bail—it is the discretion of judges which has led to such a small proportion of individuals being given money bail. In the US, although it is largely state law which regulates judicial discretion in this matter, judges are still given roughly the same spread of options. Although several judiciaries, such as the California Supreme Court, have taken an active role in reducing the frequency of money bail, several state legislatures have recognized that judges alone cannot resolve the issue. New Jersey and Alaska have passed legislation banning money bail in the majority of cases, while New York and California are working on similar laws, held up in part by pro-bail-bond campaigning. New laws would see judges more readily impose bail conditions more similar to parole, such as regular social worker appointments, curfews, and police station check-ins.</p>

	<p id="space">Instead of personal payment or payment by a bondsperson, more states may also look to implement the UK’s system of sureties, which allows a third party (generally a relative or friend) to post bail on the defendant’s behalf. Wisconsin has already instituted a policy along these lines.</p>
<div id="cite"><p id="mark"><b><i>.</i></b></p><p id="quote"><b>We must recall the American Constitutional principle that brought us bail in the first place: innocent until proven guilty</b></p></div>
	<p>Interestingly, this brings up the question of whether bail should be prohibited altogether. While proponents of this idea argue that bail in all its forms puts public safety at risk, it is actually the case that those found guilty for violent crimes, such as homicide or sexual offences, are among the least likely to commit a similar offence within three years of release—30–50% less likely to commit a second infraction than those convicted of larceny or drug offences.</p>

<p>	And, of course, we must recall the American Constitutional principle that brought us bail in the first place: innocent until proven guilty. The argument that defendants should be detained before proof of guilt disfigures this concept almost beyond recognition. Bail is a feature in almost every Western democracy for good reason.</p>

	<p id="last">Simply put, money bail in the US needs to be thoroughly reformed. Its operation is financially and racially discriminatory, with consequences reaching from family detriment, to the effective privatization of Constitutional rights, to, in some scenarios, suicide. Already, in a neoliberalist country, wealth and race dictate one’s privileges within so many arenas—the criminal justice system cannot be one of them.</p></blockquote>
  <footer>
  <span id="contact">GET IN TOUCH</span>

      <div id="phone-and-email">

              <a href="mailto:dbi.evans@gmail.com" id ="email"><MdEmail/></a>
              <a href="tel:+1-778-223-8647" id ="phone"><AiTwotonePhone/></a>

              <a href="https://www.facebook.com/lisa.t.degraaf" id ="fb">
                  <span class="sr-only"><FaFacebookF/></span>
              </a>


              <a href="https://twitter.com/queenscomputing" id ="insta">
                  <span class="sr-only"><GrInstagram/></span>
              </a>
      </div>
        <div id="copyright">&copy; 2020 LISA BRYN. All Rights Reserved.</div>
  </footer>

  </div>

  );
}


function Articles() {
  return( <div> <header>
          <div id="hero-container" class="bee">
              <div class="overlay"></div>
              <div id="site-title">
                  <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                  <i id="fist"> <GiFist/></i>
              </div>
              <nav>
                  <ul>
                  <li><Link to="/articles">ARTICLES</Link></li>
                  <li><Link to="/resources">RESOURCES</Link></li>
                  <li><Link to="/articles">PETITIONS</Link></li>
                  </ul>
              </nav>
          </div>
    </header>
    <div id="flex">
    <blockquote id ="b"></blockquote>
    <blockquote id="right"><h2><i>Revisiting Anti-Black Racism</i></h2> <p id="byB"> <i>By Bryn Evans</i></p>
    Amid the public outrage following the recent murders of George Floyd, Breonna Taylor,
    and Ahmaud Arbery in the United States, there seems to be the implicit but dangerously
    pervasive notion that the current white supremacy, police brutality, and selective denial
    of Constitutional rights represents a crisis—an exceptional and unprecedented travesty.
    “This is only happening because of Trump” and “If only we had Obama again” are common sentiments
    thrown around by those too privileged to acknowledge the constancy and the universality of racial
    injustice in today’s world.
    <p id="reading"><b><Link to="/Revisiting anti-Black racism"> CONTINUE READING</Link></b></p></blockquote></div>

    <div id="flex">
    <blockquote id ="b2"></blockquote>
    <blockquote id="right"> <h2><i>Why The United States Needs To Bail On Cash Bail</i></h2><p id="byB2"><i>By Bryn Evans</i></p>
    In 2010, Kalief Browder, then sixteen years old, was accused of stealing a backpack and granted
    US$3000 bail. Unable to pay, he was detained in New York’s infamous Rikers Island jail for three years
    awaiting trial, before charges were ultimately dismissed. In 2015, Browder committed suicide.
    <p id="continue"><b><Link to="/bail">CONTINUE READING</Link></b></p></blockquote>
    </div>

    <div id="flex">
    <blockquote id ="b3"></blockquote>
    <blockquote id="right"> <h2><i>Creating Tiers Of Nationality? Jamaica Deportations Exemplify Gentrification And Racialization Of UK Citizenship</i></h2><p id="byB2"><i>By Bryn Evans</i></p>
    On February 11th, 2020, the UK Home Office forewent a Court of Appeal judgment to deport 17 foreign nationals to Jamaica on the grounds of public safety. Since February, the government has been fighting for the deportation of roughly 50 more Jamaicans, who were removed from the initial flight due to a separate last minute court ruling. The deportees were deemed a threat to the public on the basis of their criminal records, which range from offences against the person, to drug-related crimes, to manslaughter.
    <p id="continue"><b><Link to="/Jamaica deportations exemplify gentrification and racialization of UK citizenship">CONTINUE READING</Link></b></p></blockquote>
    </div>

  </div>
  );
}













function Anti (){
  return(
    <div id="full">
    <header>
          <div id="hero-container" class="bee">
              <div class="overlay"></div>
              <div id="site-title">
                  <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                  <i id="fist"> <GiFist/></i>
              </div>
              <nav>
                  <ul>
                  <li><Link to="/articles">ARTICLES</Link></li>
                  <li><Link to="/resources">RESOURCES</Link></li>
                  <li><Link to="/articles">PETITIONS</Link></li>
                  </ul>
              </nav>
          </div>
    </header>

    <blockquote id="anti">
    <blockquote id="anti2"></blockquote>
    <h1 id="jail2"><i>Revisiting anti-Black racism</i></h1>
    <h2 id="date">Dec 6, 2019</h2>
    <h2 id ="by"><i>By Bryn Evans</i></h2>
    <p id="top">Amid the public outrage following the recent murders of George Floyd, Breonna Taylor, and Ahmaud Arbery in the United States, there seems to be the implicit but dangerously pervasive notion that the current white supremacy, police brutality, and selective denial of Constitutional rights represents a crisis—an exceptional and unprecedented travesty. “This is only happening because of Trump” and “If only we had Obama again” are common sentiments thrown around by those too privileged to acknowledge the constancy and the universality of racial injustice in today’s world.
    </p>
    <p>Apart from society’s reaction, these circumstances are not simply an exception to which new leadership will bring a swift and commendable end. To believe they are is to deny the problematic history of racial injustice mainly perpetuated by Western states.</p>
    <p>The truth is that anti-Black and anti-minority politics have been normalized in predominantly white countries since the age of colonization. This is the era in which white Europeans devised the rhetoric that all non-white humans are biologically inferior, deserving of modernization in the best case and oppression in the worst case.</p>
    <p>In 1525, African slaves were popularized among the English, French, Portuguese, and Spanish colonies of North America, complementing the existing Indigenous and Caribbean slave trade.<a href="https://www.sciway.net/afam/slavery/indexs.html"> 12.5 million Africans would eventually be kidnapped through 1866.</a></p>
    <p>In 1880, King Leopold II of Belgium launched his operation to colonize what is today the Democratic Republic of the Congo, ultimately <a href =" https://www.theguardian.com/theguardian/1999/may/13/features11.g22">killing, mutilating, and raping 10 million Congolese</a> in one of the largest genocides in history.</p>
    <p>In 1890, Englishman Cecil Rhodes took the helm of modern-day South Africa, instituting a number of anti-Black policies with the aim of uniting all of Africa under Anglo-Saxon rule. <a href ="https://www.independent.co.uk/voices/apartheid-made-in-britain-richard-dowden-explains-how-churchill-rhodes-and-smuts-caused-black-south-1370856.html">His policies led directly to the Second Boer War and Apartheid.</a></p>

    <p>In 1916, despite the Emancipation Proclamation having been enacted 53 years prior,<a href =" https://www.smithsonianmag.com/history/158-resources-understanding-systemic-racism-america-180975029/"> 90% of African Americans remained in the country’s South, trapped by a system of sharecropping designed to keep Black people subordinate and dependent.</a> Jim Crow laws, which enforced racial segregation in various American public forums, were legally enforced in the United States until the Supreme Court’s 1954 decision, Brown v Board of Education. Even then, segregation persisted for up to a decade.</p>
    <blockquote id="antiImage"></blockquote>
    <p>This is a history which is too often venerated by modern society, with the unpalatable details subtly manipulated or swept under the rug. When asked about the United Kingdom’s history of colonialism and imperialism, former Prime Minister David Cameron said that<a href=" https://www.independent.co.uk/news/uk/politics/british-people-are-proud-of-colonialism-and-the-british-empire-poll-finds-a6821206.html"> despite wrongdoings, the Empire should be “celebrated.”</a> Numerous statues of Leopold II remain standing in Belgium, dedicated to the so-called good he brought domestically. Cecil Rhodes is now most often remembered through the Oxford University scholarship, funded by Rhodes’ exploitative involvement in African gold and diamond mining. And American primary and secondary education consistently prefers to focus on teaching the feel-good stories of Black outliers—Rosa Parks, Harriet Tubman, Martin Luther King Jr. (who are, of course, essential figures in their own right)—as opposed to delving into the crux of race-based mistreatment.</p>
    <p>Not to mention these are only the examples of anti-Black racism in the Western world. Genocide against North American First Nations, the colonization of South-East Asia, and illegal racially- and religiously-motivated involvement in Iraq, Korea, and Vietnam have also typified Western history.</p>
    <p>So, when people suggest that current events in the United States are unexpected or astounding, they are sorely mistaken. These current events are the 500-year norm. </p>
    <p>	It is not a coincidence that <a href https="//www.theguardian.com/world/2020/may/20/black-americans-death-rate-covid-19-coronavirus">Black Americans are three times more likely than white Americans to die from the novel coronavirus.</a> It is a result of a centuries-old system of discrimination and underfunding designed to push Black people toward poverty and crowded public housing. </p>
    <p>And it is not a coincidence that<a href=" https://www.statista.com/statistics/1123070/police-shootings-rate-ethnicity-us/"> Black Americans are two and a half times more likely than white Americans to be killed by police.</a> It is a result of the same system, which provides inadequate resources to Black people, overpolices Black neighbourhoods, and propagates a link between Black skin and criminality.</p>
    <p>Eight years of a Black President did not markedly improve American race relations, just like four years of an openly racist President did not markedly undermine them. Perhaps white supremacists are now more likely to openly display hatred, egged on by a leader who they feel will not condemn their actions; however, public systems and a societal psyche silently permeated by anti-Black attitudes for a half-millennium take more than a few Presidential terms to replace. </p>
    <p id="last">The dismantling of anti-Black racism in the United States, and the Western world more generally, will take unqualified recognition, thorough education, and assertive action on the part of every member of society—especially the white people in power. It’s an undeniably monumental task, but if any generation is ready to take it on, it seems to be ours.</p>


</blockquote>

<footer>
<span id="contact">GET IN TOUCH</span>

<div id="phone-and-email">

        <a href="mailto:dbi.evans@gmail.com" id ="email"><MdEmail/></a>
        <a href="tel:+1-778-223-8647" id ="phone"><AiTwotonePhone/></a>

        <a href="https://www.facebook.com/lisa.t.degraaf" id ="fb">
            <span class="sr-only"><FaFacebookF/></span>
        </a>


        <a href="https://twitter.com/queenscomputing" id ="insta">
            <span class="sr-only"><GrInstagram/></span>
        </a>
</div>
  <div id="copyright">&copy; 2020 LISA BRYN. All Rights Reserved.</div>
</footer>
</div>
  );
}




function Jamaica(){
  return(
    <div id="full">
    <header>
          <div id="hero-container" class="bee">
              <div class="overlay"></div>
              <div id="site-title">
                  <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                  <i id="fist"> <GiFist/></i>
              </div>
              <nav>
                  <ul>
                  <li><Link to="/articles">ARTICLES</Link></li>
                  <li><Link to="/resources">RESOURCES</Link></li>
                  <li><Link to="/articles">PETITIONS</Link></li>
                  </ul>
              </nav>
          </div>
    </header>

    <blockquote id="jamaica">
    <blockquote id="jamaica2"></blockquote>
    <h1 id="jail2"><i>Creating tiers of nationality? Jamaica deportations exemplify gentrification and racialization of UK citizenship</i></h1>
    <h2 id="date">Dec 6, 2019</h2>
    <h2 id ="by"><i>By Bryn Evans</i></h2>
    <p id="top">On February 11th, 2020, the UK Home Office forewent a Court of Appeal judgment to deport 17 foreign nationals to Jamaica on the grounds of public safety. Since February, the government has been fighting for the deportation of roughly 50 more Jamaicans, who were removed from the initial flight due to a separate last minute court ruling. The deportees were deemed a threat to the public on the basis of their criminal records, which range from offences against the person, to drug-related crimes, to manslaughter.
    </p>
    <p>In an opinion piece for the Guardian, Michael McDonald, one of the Jamaicans who was removed from the February 11th flight, is candid with his opinions. He begins by talking of his arrival in the UK at age nine and how his entire family now lives in the country. On his crimes, he explains: <a href =" https://www.theguardian.com/commentisfree/2020/feb/10/served-time-prison-deported-britain-children-jamaica-family">“It’s true, I committed a drug-related crime for which I was sentenced to 20 months in prison. But although I made a mistake, I’ve served my time in prison. I shouldn’t be punished for ever.”</a></p>
    <p>Like McDonald, almost all deportees and fellow detainees call the UK home and have lived in the country since childhood. Whereas the Home Office labels them foreigners in the UK, Jamaica is the foreign country to them—especially for those who, like McDonald, no longer have family there. A number of the people on board the February 11th flight also have young children in the UK, and most were not even given a chance to explain to their families what was happening.</p>
    <blockquote id="flight"></blockquote>
    <p>Having served their sentences, it is only logical to wonder why the government is choosing now to revoke their settlement rights and deport them as aliens. When asked, the Home Office was adamant that it was absolutely the right choice to deport them, given they are <a href=" https://www.bbc.com/news/uk-51456387">“not British nationals,” but rather “foreign national offenders.”</a> In reality, these so-called foreigners served in various public forums: Birmingham MP Shabana Mahmood pointed out that one of the deportees, her constituent, had done two tours of Afghanistan with the British Armed Forces.</p>
    <p>Unfortunately, the use of divisive ‘British’ and ‘un-British’ labels by the government is not new, especially in recent times. One year ago, then-Home Secretary Sajid Javid stripped Shamima Begum of her British citizenship for having left the country at age 15 to join ISIS, saying she demonstrated she <a href=" https://www.theguardian.com/uk-news/2020/feb/07/begum-verdict-emerges-from-thin-arguments-of-security-v-humanity">“hate[s] the values that we [British people] stand for.”</a> In 2018, the Windrush Scandal took place: <a href="https://www.aljazeera.com/news/2018/04/uk-windrush-generation-scandal-180418074648878.html">hundreds of Caribbean-born British subjects who had arrived in the country as children were denied state benefits, detained, and in 83 cases deported due to the Home Office’s mismanagement of their landing cards.</a> Although invited to the UK to supplement the workforce following World War II, when it came to evaluating belonging after 65 years of living in the country, British authorities chose again to label the Windrush generation foreigners.</p>
    <p>Government rhetoric is littered with the notion of being ‘tough’ on immigration. In practice, what ‘tough’ seems to mean is systematically elitist, and often racist. The attempted prioritization of ‘highly skilled’ and ‘high value’ migrants effectively reduces people to economic commodities, and citizenship to a privilege granted on the basis of monetary worth. <a href=" https://www.gov.uk/government/publications/visa-regulations-revised-table/2020">The Home Office charges a fee of £1206 to merely apply for citizenship as an adult, which is not refunded if the application fails.</a> It is not a coincidence that this disincentivizes low-income individuals, who are predominantly people of colour, from naturalizing—the situation which resulted to Windrush is a perfect example. Kept on the periphery of British integration, the government is then at liberty to label these people ‘dangerous foreign criminals’ worthy of deportation if they commit crimes, when they might have otherwise been seen as ‘British enough’ to go through the usual criminal justice process.</p>
    <p>Where the so-called offender does have a UK passport, the Home Secretary may use his or her essentially discretionary power to strip citizenship, as was done to Shamima Begum and over 150 others since 2010. For perspective, more Britons had their citizenship revoked on the grounds of the public good in 2017 than in both world wars combined, exemplifying the increasingly prevalent and arbitrary use of the government power. <a href=" https://www.independent.co.uk/news/uk/home-news/shamima-begum-uk-citizenship-stripped-home-office-sajid-javid-a8788301.html">It would seem that disposal of the problem is now favoured to resolving it.</a></p>
    <p>It might seem that measures which deny residence or citizenship to extremists and criminals are sensible. In truth, the Jamaica deportations, the Begum case, and the Windrush Scandal set a dangerous precedent. Compared to the frequency of people of colour being implicated in such cases, it is extremely difficult to recall the last time news broke of a white Canadian or American being deported or denaturalized for having acted contrary to British values. It would be naïve to suggest that white people don’t commit serious crimes in Britain. So the question then becomes: why are whites treated as deserving enough to go through the normal criminal justice system when they do?</p>
    <p id="last">The fact is, the Home Office’s approach to nationality is tiered: white and coloured, rich and poor, valued and unvalued. Race and financial status should have no bearing on how ‘British’ someone is, and yet in practice, the Home Office has proven that they unequivocally do. The government preaches adherence to national values—which undeniably include justice, tolerance, and mutual respect—as a requisite for the privilege of citizenship. Maybe it’s time it takes a page out of its own book.</p>

    </blockquote>

    <footer>
    <span id="contact">GET IN TOUCH</span>

    <div id="phone-and-email">

            <a href="mailto:dbi.evans@gmail.com" id ="email"><MdEmail/></a>
            <a href="tel:+1-778-223-8647" id ="phone"><AiTwotonePhone/></a>

            <a href="https://www.facebook.com/lisa.t.degraaf" id ="fb">
                <span class="sr-only"><FaFacebookF/></span>
            </a>


            <a href="https://twitter.com/queenscomputing" id ="insta">
                <span class="sr-only"><GrInstagram/></span>
            </a>
    </div>
      <div id="copyright">&copy; 2020 LISA BRYN. All Rights Reserved.</div>
    </footer>
</div>
  );
}



function Resources() {
  return(
    <div id="resource"> <header>
          <div id="hero-container" class="bee">
              <div class="overlay"></div>
              <div id="site-title">
                  <Link to="/Home"><i>IF<b>NOT</b>US </i></Link>
                  <i id="fist"> <GiFist/></i>
              </div>
              <nav>
                  <ul>
                  <li><Link to="/articles">ARTICLES</Link></li>
                  <li><Link to="/resources">RESOURCES</Link></li>
                  <li><Link to="/articles">PETITIONS</Link></li>
                  </ul>
              </nav>
          </div>
    </header>

    <div id="emergency">
    <h1 id="eTitle"> IF THIS IS AN EMERGENCY CALL 9-1-1 </h1>
    <blockquote id="sources">
    <h2 id="emergency2">Vancouver-Based Resources for Mental Health and People in Need</h2>
    <h2 id="help"><a href="https://www.healthlinkbc.ca" id="simple">HealthLink BC:</a> Provides reliable non-emergency health information and advice on more than 5000 different topics.</h2>
      <ul>
        <li>	Call 8-1-1 toll free in B.C. (or for deaf and hard of hearing call 7-1-1)</li>
        <li>	Suicide Hotline: 1-800-SUICIDE (1-800-784-2433)</li>
        <li> 	Mental Health Support: 310-6789 (no area code needed)</li>
        <li>	Kid’s Help Phone: 1-800-668-6868</li>
        <li>	Alcohol, Substance Use and Addiction: 1-800-663-1441</li>
      </ul>

      <h2 id="help"><a href="https://www.heretohelp.bc.ca/infosheet/supporting-a-friend-or-family-member-with-a-mental-illness" id="simple">Here to Help BC:</a> Supporting a family member or friend with mental illness.</h2>
      <ul>
        <li>Visit <a href="https://www.heretohelp.bc.ca/infosheet/supporting-a-friend-or-family-member-with-a-mental-illness">https://www.heretohelp.bc.ca/infosheet/supporting-a-friend-or-family-member-with-a-mental-illness</a></li>
      </ul>
      <h2 id="help"><a href="http://www.vch.ca" id="simple">Vancouver Coastal Health:</a> Provides health care services through hospitals, clinics and educational material online.</h2>
        <ul>
          <li> Visit<a href="http://www.vch.ca"> http://www.vch.ca</a></li>
          <li>	Health concerns, call 8-1-1, for general inquires call 604-736-2033</li>
        </ul>

      <h2 id="help"><a href="https://www.mpa-society.org" id="simple">MPA Society:</a> Non-profit organization supporting recovery for people with mental illness with social, vocational, recreation, advocacy and housing programs.</h2>
      <ul>
        <li>Call 604-482-3700</li>
      </ul>
      <h2 id="help"><a href="https://lookoutsociety.ca" id="simple">Lookout Society:</a> Provide housing and a range of support services to adults with low or no income who have few, if any, housing or support options.</h2>

      <ul>
        <li>	Call 604-255-0340</li>
      </ul>



      <blockquote id= "videos">
      <blockquote id="ted">
      <h2 id="amy">TED Talk - Amy Morin – “The secret of becoming mentally strong”</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=TFbv757kup4"/>
      </blockquote>

      <blockquote id="ted">
      <h2>National Institute of Mental Health:</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=lQhpetkwWnM"/>
      </blockquote>

      <blockquote id="ted">
      <h2>TEDEd – Helen Farrell - “What is Depression?”</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=z-IR48Mb3W0 "/>
      </blockquote>

      <blockquote id="ted">
      <h2>World Health Organization:</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=Le7n6i0dpTI&feature=emb_title"/>
      </blockquote>
      </blockquote>

      </blockquote>



    </div>
  </div>
  );
}
