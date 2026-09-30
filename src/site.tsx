import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Building2, Check, ChevronDown, CircleHelp, Facebook, Instagram, Laptop, Menu, Mic2, Music2, Podcast, Radio, RadioTower, Send, Settings2, Smartphone, Sparkles, Volume2, Waves, Wrench, X, Youtube } from 'lucide-react';
import studioImage from '../assets/hero-studio-night.png';

const services = [
  { icon: RadioTower, title: 'Online Radio Setup', text: 'Streaming server, live audio, Auto DJ, scheduled playlists and radio management support.', points: ['Live & recorded streaming', 'Automation and playlists'] },
  { icon: Laptop, title: 'Radio Website', text: 'A professional digital home for your station, programs and listeners.', points: ['Online player & now playing', 'Schedule, presenters & updates'] },
  { icon: Smartphone, title: 'Radio Mobile App', text: 'Bring your station to listeners on Android with a branded radio app.', points: ['Live listening & background audio', 'Station details and social links'] },
  { icon: Sparkles, title: 'Radio Branding', text: 'Build a distinctive visual identity that feels like your station.', points: ['Logo and station identity', 'Social creatives and promotions'] },
  { icon: Settings2, title: 'Studio Technical Support', text: 'Get guidance for the equipment and software behind your broadcast.', points: ['Microphone, mixer & audio setup', 'Recording and studio workflow'] },
  { icon: Music2, title: 'Radio Automation', text: 'Schedule songs, shows, promos and station IDs to keep your radio running.', points: ['Auto DJ configuration', 'Scheduled broadcasts'] },
  { icon: Mic2, title: 'Live Broadcasting', text: 'Set up live streams for interviews, talk shows, events and special programs.', points: ['RJ shows and interviews', 'Community and event broadcasts'] },
  { icon: Podcast, title: 'Podcasts & Recorded Shows', text: 'Make your radio content available as podcasts and on-demand programs.', points: ['Interviews and talk shows', 'Repurpose across platforms'] },
  { icon: Volume2, title: 'Radio Advertising', text: 'Create ways for local businesses and partners to reach your listeners.', points: ['Audio and RJ voice ads', 'Sponsored and promotional shows'] },
  { icon: AudioLines, title: 'Audio Ad Production', text: 'Shape a clear, memorable audio ad from script to final mix.', points: ['Script, voice and music', 'Sound design and editing'] },
  { icon: Waves, title: 'Social Media Promotion', text: 'Turn station updates and audio moments into shareable digital content.', points: ['Facebook, Instagram & YouTube', 'WhatsApp-ready creatives'] },
  { icon: Wrench, title: 'Radio Technical Support', text: 'Keep the important parts connected with ongoing troubleshooting and updates.', points: ['Streaming, player & server help', 'Website and app integration'] },
];

const audiences = [
  ['Individual creators', 'உங்கள் சொந்த Radio Channel-ஐ உருவாக்க விரும்புகிறீர்களா?', Mic2],
  ['Content creators', 'உங்கள் Audio Content-க்கு தனி Platform வேண்டுமா?', Podcast],
  ['Schools & colleges', 'Educational Radio அல்லது Campus Radio உருவாக்குங்கள்.', Building2],
  ['Spiritual organisations', 'நிகழ்ச்சிகள், சொற்பொழிவுகள் மற்றும் பாடல்களை ஒலிபரப்புங்கள்.', AudioLines],
  ['Communities & local groups', 'உங்கள் ஊர் அல்லது சமூகத்தின் குரலை உலகம் கேட்கச் செய்யுங்கள்.', Radio],
  ['Businesses & brands', 'உங்கள் Brand-க்கான Branded Online Radio உருவாக்குங்கள்.', Sparkles],
];

const workflow = [
  ['01', 'உங்கள் Radio Idea', 'நோக்கம், நிகழ்ச்சிகள், கேட்போர் யார் என்பதைப் புரிந்துகொள்வோம்.'],
  ['02', 'Radio Planning', 'பெயர், Content, Target Audience மற்றும் தேவைகளைத் திட்டமிடுவோம்.'],
  ['03', 'Branding', 'உங்கள் Radio-விற்கான Logo, Visual Identity உருவாக்குவோம்.'],
  ['04', 'Technical Setup', 'Streaming Server, Auto DJ மற்றும் Broadcasting அமைப்போம்.'],
  ['05', 'Website', 'Player மற்றும் Station தகவலுடன் Digital Home உருவாக்குவோம்.'],
  ['06', 'Mobile App', 'தேவைக்கேற்ப Android Radio App உருவாக்கலாம்.'],
  ['07', 'Content & Ads', 'Programs, Promos மற்றும் Audio Advertisements உருவாக்குவோம்.'],
  ['08', 'Radio Launch', 'உங்கள் Radio-வை Online-ல் Launch செய்து அறிமுகப்படுத்துவோம்.'],
  ['09', 'Ongoing Support', 'Radio தொடர்ந்து இயங்கத் தேவையான Technical உதவி.'],
];

const faqs = [
  ['Online Radio என்றால் என்ன?', 'Internet மூலம் உலகின் எந்த இடத்திலிருந்தும் கேட்கக்கூடிய Digital Radio Station-ஐ Online Radio எனலாம்.'],
  ['Online Radio தொடங்க FM Licence தேவையா?', 'Online Radio மற்றும் FM Broadcasting இரண்டும் வேறுபட்டவை. உங்கள் திட்டத்திற்குப் பொருந்தும் சட்ட மற்றும் regulatory requirements-ஐ தனியாக சரிபார்க்கவும்.'],
  ['24×7 Radio நடத்த முடியுமா?', 'ஆம். Automation / Auto DJ மற்றும் Streaming Server மூலம் Scheduled Content கொண்டு 24×7 Online Streaming அமைக்கலாம்.'],
  ['Live Program நடத்த முடியுமா?', 'ஆம். RJ Programs, Interviews, Talk Shows மற்றும் Special Events-ஐ Live-ஆக ஒலிபரப்ப Live Broadcasting Setup செய்யலாம்.'],
  ['Website இல்லாமல் Online Radio நடத்த முடியுமா?', 'தொழில்நுட்ப ரீதியாக முடியும். ஆனால் Professional Radio Brand உருவாக்க Website, Player மற்றும் Digital Presence பயனுள்ளதாக இருக்கும்.'],
  ['Mobile App உருவாக்க முடியுமா?', 'ஆம். உங்கள் Radio-விற்கான Android App-ஐ தேவைக்கேற்ப உருவாக்கலாம்.'],
  ['Technical Knowledge இல்லாமல் Radio தொடங்க முடியுமா?', 'முடியும். ஆரம்ப Planning முதல் Technical Setup வரை தேவையான வழிகாட்டுதலைப் பெறலாம்.'],
  ['Radio தொடங்கிய பிறகு Technical Support கிடைக்குமா?', 'தேவைக்கேற்ப Streaming, Website, Player, Automation மற்றும் பிற Technical பகுதிகளுக்கான Support வழங்கலாம்.'],
];

function Brand() {
  return <a className="brand" href="#home" aria-label="Nesam Media Works home"><span className="brand-mark"><AudioLines size={20}/></span><span className="brand-type">NESAM <b>MEDIA WORKS</b><small>YOUR DIGITAL MEDIA PARTNER</small></span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Why Online Radio', '#why-radio'], ['Services', '#services'], ['Workflow', '#workflow'], ['FAQ', '#faq']];
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation"><Brand/><div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([name, href]) => <a key={name} href={href} onClick={close}>{name}</a>)}<a className="nav-mobile-cta" href="#contact" onClick={close}>Let’s talk <ArrowRight size={15}/></a></div><a className="nav-cta" href="#contact">Start your radio <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></nav></header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="shell hero-grid"><div className="hero-copy"><span className="eyebrow"><i/> ONLINE RADIO · WEB · DIGITAL MEDIA</span><h1>உங்கள் குரலுக்கு…<br/><span>உலகளாவிய</span><br/>இணைய வானொலி.</h1><p className="hero-lede">உங்கள் சொந்த Online Radio-வை தொடங்க நினைக்கிறீர்களா? Planning முதல் Radio Launch வரை, உங்கள் Radio Project-க்குத் தேவையான Digital & Technical Solutions ஒரே இடத்தில்.</p><div className="hero-actions"><a className="button button-primary" href="https://wa.me/918668103301?text=வணக்கம்%20Nesam%20Media%20Works%2C%20Online%20Radio%20தொடங்குவது%20பற்றி%20பேச%20விரும்புகிறேன்." target="_blank" rel="noreferrer">உங்கள் Radio-வை தொடங்குங்கள் <ArrowRight size={17}/></a><a className="text-link" href="#services"><span className="play-button"><ArrowDown size={15}/></span> எங்கள் சேவைகளைப் பாருங்கள்</a></div><div className="hero-meta"><span><span className="meta-icon"><Radio size={15}/></span> YOUR STATION, YOUR VOICE</span><span className="meta-line"/><span>ஒரு Idea-வில் தொடங்கலாம்.</span></div></div><div className="hero-visual"><div className="hero-photo"><img src={studioImage} alt="Microphone and mixing console in a recording studio"/><div className="photo-wash"/><span className="photo-label"><i/> ON AIR, YOUR WAY</span><div className="photo-caption"><small>FROM YOUR IDEA</small><strong>TO THE WORLD.</strong></div></div><div className="floating-wave"><span className="wave-icon"><Waves size={17}/></span><span><b>உங்கள் குரல்</b><small>உலகம் கேட்கட்டும்!</small></span><span className="wave-bars"><i/><i/><i/><i/><i/><i/><i/></span></div><span className="hero-index">NMW / 01</span></div></div><a className="scroll-hint" href="#why-radio"><span><ArrowDown size={14}/></span> DISCOVER WHAT’S POSSIBLE</a></section>;
}

function RadioBenefits() {
  const benefits = ['உலகம் முழுவதும் உங்கள் நிகழ்ச்சிகளைக் கொண்டு செல்லலாம்', 'உங்கள் தனிப்பட்ட Radio Brand உருவாக்கலாம்', 'Live & Recorded Programs ஒலிபரப்பலாம்', 'Website மற்றும் Mobile App மூலம் Listeners-ஐ அடையலாம்'];
  return <section className="section why-radio" id="why-radio"><div className="shell why-grid"><div className="why-heading"><span className="eyebrow"><i/> THE OPPORTUNITY</span><h2>Radio என்பது FM-ல் மட்டும் இல்லை.</h2><p>Internet மூலம் உங்கள் Radio-வை உலகின் எந்த மூலையிலிருந்தும் கேட்கலாம். உங்கள் நிகழ்ச்சிகள், கருத்துகள், இசை—உங்கள் சொந்த platform-ல்.</p><a href="#contact" className="text-link">உங்கள் Radio idea-வைப் பகிருங்கள் <ArrowRight size={16}/></a></div><div className="benefits-list">{benefits.map((benefit, i)=><div className="benefit" key={benefit}><span>0{i+1}</span><p>{benefit}</p><ArrowUpRight size={16}/></div>)}</div></div><div className="shell audience-shell"><div className="audience-head"><div><span className="eyebrow"><i/> WHO IS IT FOR?</span><h2>யாருக்காக இந்த Online Radio?</h2></div><p>ஒரு தனிநபர் முதல் ஒரு ஊர், நிறுவனம் அல்லது சமூகம்வரை—ஒவ்வொருவருக்கும் ஒரு குரல் இருக்கிறது.</p></div><div className="audience-grid">{audiences.map(([title, text, Icon])=>{const I=Icon as typeof Radio;return <article className="audience-card" key={title as string}><span className="audience-icon"><I size={19}/></span><h3>{title as string}</h3><p>{text as string}</p><span className="audience-arrow"><ArrowUpRight size={15}/></span></article>})}</div></div></section>;
}

function Services() {
  return <section className="section services-section" id="services"><div className="shell"><div className="section-intro"><div><span className="eyebrow"><i/> ONE CREATIVE & TECHNICAL PARTNER</span><h2>உங்கள் Online Radio-க்கு<br/><span>முழுமையான தீர்வு.</span></h2></div><p>ஒரு Streaming Server மட்டும் போதாது. Branding, Website, Player, Streaming, Studio Setup, Mobile App, Content மற்றும் Support—தேவைக்கேற்ப அனைத்தையும் ஒருங்கிணைக்கிறோம்.</p></div><div className="services-grid">{services.map(({icon:Icon,title,text,points},i)=><article className="service-card" key={title}><div className="service-card-top"><span className="service-icon"><Icon size={20}/></span><span className="service-number">{String(i+1).padStart(2,'0')}</span></div><h3>{title}</h3><p className="service-text">{text}</p><ul>{points.map(point=><li key={point}><Check size={13}/>{point}</li>)}</ul><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={17}/></a></article>)}</div><div className="service-note"><span><CircleHelp size={17}/></span><p>எல்லா Radio Project-களும் தனித்துவமானவை. உங்களுக்குத் தேவையான சேவைகளைத் தனியாகத் திட்டமிடலாம்.</p><a href="#contact">பேசலாம் <ArrowRight size={15}/></a></div></div></section>;
}

function Workflow() {
  return <section className="section workflow-section" id="workflow"><div className="shell"><div className="workflow-intro"><span className="eyebrow"><i/> FROM FIRST IDEA TO LAUNCH</span><h2>ஒரு படியாக.<br/><span>உலகளாவிய குரலாக.</span></h2><p>ஒவ்வொரு கட்டத்திலும் தெளிவான திட்டமும் தேவையான வழிகாட்டுதலும்.</p></div><div className="workflow-grid">{workflow.map(([num,title,text],i)=><article className="workflow-step" key={num}><div className="workflow-top"><span>{num}</span>{i < workflow.length-1 && <i/>}</div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="workflow-band"><span className="band-icon"><RadioTower size={21}/></span><span><small>ONE PLACE FOR RADIO SOLUTIONS</small><strong>IDEA · BRAND · TECH · WEB · APP · CONTENT · SUPPORT</strong></span><a href="#contact">தொடங்கலாம் <ArrowRight size={16}/></a></div></div></section>;
}

function About() {
  return <section className="section about-section"><div className="shell about-grid"><div className="about-visual"><div className="about-image"><img src={studioImage} alt="Professional audio recording setup"/></div><span className="about-seal"><AudioLines size={22}/><small>MEDIA<br/>IN MOTION</small></span><span className="about-image-caption">A DIGITAL PLATFORM FOR YOUR VOICE</span></div><div className="about-copy"><span className="eyebrow"><i/> ABOUT NESAM MEDIA WORKS</span><h2>உங்கள் யோசனைக்கு<br/><span>தொழில்நுட்ப வடிவம்.</span></h2><p>Digital Media, Web, Audio, Online Radio மற்றும் Content Creation துறைகளில் அனுபவத்துடன், உங்கள் Radio Project-ஐ ஆரம்ப நிலையிலிருந்து Digital Platform வரை கொண்டு செல்ல வழிகாட்டுதலையும் தொழில்நுட்ப சேவைகளையும் வழங்குகிறோம்.</p><div className="about-specialties"><span>Online Radio</span><span>Web Design</span><span>Mobile App</span><span>Audio Production</span><span>Digital Branding</span><span>Technical Support</span></div><a className="text-link" href="#contact">உங்கள் தேவையைப் பற்றிப் பேசுங்கள் <ArrowRight size={16}/></a></div></div></section>;
}

function QuoteCTA() {
  return <section className="section quote-section" id="contact"><div className="shell quote-card"><div className="quote-copy"><span className="eyebrow"><i/> RADIO STARTER CONSULTATION</span><h2>உங்கள் Radio Idea-வை<br/><span>எங்களுடன் பகிருங்கள்.</span></h2><p>பெயர், நோக்கம், Target Audience, Content Type, Website அல்லது App தேவை—எங்கிருந்து தொடங்குவது என்று தெரியாவிட்டாலும் பரவாயில்லை. உங்கள் தேவையைச் சொல்லுங்கள்; பொருத்தமான Radio Solution-ஐ திட்டமிட உதவுகிறோம்.</p><div className="quote-actions"><a className="button button-white" href="https://wa.me/918668103301?text=வணக்கம்%20Nesam%20Media%20Works%2C%20என்%20Radio%20Idea-வை%20பற்றி%20பேச%20விரும்புகிறேன்." target="_blank" rel="noreferrer"><Send size={16}/> WhatsApp-ல் பேசுங்கள்</a><a href="tel:+918668103301" className="quote-phone">அல்லது அழைக்கவும் <b>+91 86681 03301</b></a></div></div><div className="quote-art"><div className="quote-ring ring-a"/><div className="quote-ring ring-b"/><div className="quote-disc"><AudioLines size={41}/></div><span className="quote-word word-a">YOUR</span><span className="quote-word word-b">VOICE</span><span className="quote-mini">A SOUND IDEA<br/>CAN TRAVEL FAR</span></div></div></section>;
}

function FAQ() {
  return <section className="section faq-section" id="faq"><div className="shell faq-grid"><div className="faq-heading"><span className="eyebrow"><i/> QUESTIONS, ANSWERED</span><h2>தெரிந்துகொள்ள<br/><span>விரும்புகிறீர்களா?</span></h2><p>Online Radio தொடங்குவது பற்றி பொதுவாகக் கேட்கப்படும் கேள்விகள்.</p><a className="text-link" href="https://wa.me/918668103301" target="_blank" rel="noreferrer">வேறு கேள்வி இருக்கிறதா? <ArrowRight size={15}/></a></div><div className="faq-list">{faqs.map(([question,answer],i)=><details key={question} open={i===0}><summary>{question}<ChevronDown size={17}/></summary><p>{answer}</p></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="shell final-inner"><div><span className="eyebrow"><i/> NESAM MEDIA WORKS · YOUR DIGITAL MEDIA PARTNER</span><h2>உங்கள் குரல்…<br/><span>உலகம் கேட்கட்டும்!</span></h2><p>உங்கள் Radio Project-ஐ இன்று தொடங்குங்கள்.</p></div><a className="button button-white" href="https://wa.me/918668103301?text=வணக்கம்%20Nesam%20Media%20Works" target="_blank" rel="noreferrer">START YOUR RADIO <ArrowUpRight size={16}/></a><span className="final-decoration"><AudioLines size={150}/></span></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="shell"><div className="footer-main"><div className="footer-brand"><Brand/><p>உங்கள் யோசனைக்கு தொழில்நுட்ப வடிவம்.<br/>உங்கள் குரலுக்கு Digital Platform.</p></div><div className="footer-col"><b>EXPLORE</b><a href="#why-radio">Why Online Radio</a><a href="#services">Our Services</a><a href="#workflow">How We Work</a><a href="#faq">FAQ</a></div><div className="footer-col"><b>RADIO SOLUTIONS</b><a href="#services">Online Radio Setup</a><a href="#services">Radio Website & App</a><a href="#services">Audio Production</a><a href="#services">Technical Support</a></div><div className="footer-col footer-contact"><b>LET’S TALK RADIO</b><a href="tel:+918668103301">+91 86681 03301</a><a href="mailto:prabak78@gmail.com">prabak78@gmail.com</a><a href="https://wa.me/918668103301" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13}/></a><div className="socials"><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={16}/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16}/></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube size={16}/></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nesam Media Works. All rights reserved.</span><span>Web Design · Online Radio · Mobile App · Audio & Digital Media Solutions</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>;
}

export default function App() {
  return <><Navbar/><main><Hero/><RadioBenefits/><Services/><Workflow/><About/><QuoteCTA/><FAQ/><FinalCTA/></main><Footer/></>;
}
