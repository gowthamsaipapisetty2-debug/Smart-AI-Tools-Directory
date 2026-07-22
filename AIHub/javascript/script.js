// Master AI Tools Database Array - Full Scale Curated List
const aiTools = [
    // --- AI CHATBOTS & AGENTS ---
    { name: "ChatGPT", category: "AI Chatbots", status: "Premium", desc: "Advanced conversational AI capable of answering questions, writing essays, and debugging code.", url: "https://chatgpt.com", badge: "premium", audience: "Everyone", useCase: "General Knowledge & Coding", rating: "⭐⭐⭐⭐⭐" },
    { name: "Claude AI", category: "AI Chatbots", status: "Free", desc: "Anthropic's premier language model tailored for deep analytical writing and precise coding logic.", url: "https://claude.ai", badge: "free", audience: "Writers & Devs", useCase: "Complex Coding & Analysis", rating: "⭐⭐⭐⭐⭐" },
    { name: "DeepSeek", category: "AI Chatbots", status: "Free", desc: "A powerful, efficient conversational AI specializing in deep reasoning and technical tasks.", url: "https://deepseek.com", badge: "free", audience: "Researchers", useCase: "Math & Logic Problems", rating: "⭐⭐⭐⭐★" },
    { name: "Gemini", category: "AI Chatbots", status: "Free", desc: "Google's native multimodal intelligence assistant tightly integrated across workspace apps.", url: "https://gemini.google.com", badge: "free", audience: "Google Users", useCase: "Research & Eco Integration", rating: "⭐⭐⭐⭐★" },
    { name: "Grok", category: "AI Chatbots", status: "Premium", desc: "X's conversational model utilizing real-time global feed insights for witty answers.", url: "https://x.com", badge: "premium", audience: "X Premium Users", useCase: "Real-time News & Trends", rating: "⭐⭐⭐⭐★" },
    { name: "Meta AI", category: "AI Chatbots", status: "Free", desc: "Meta's open-access smart assistant integrated into social messaging frameworks.", url: "https://meta.ai", badge: "free", audience: "Social Users", useCase: "Quick Queries & Prompts", rating: "⭐⭐⭐★★" },
    { name: "MS Copilot", category: "AI Chatbots", status: "Free", desc: "Microsoft's productivity search engine companion powered by high-tier OpenAI models.", url: "https://copilot.microsoft.com", badge: "free", audience: "Office Workers", useCase: "Document & Web Search", rating: "⭐⭐⭐⭐★" },
    { name: "Pi AI", category: "AI Chatbots", status: "Free", desc: "A supportive, deeply conversational personal AI designed to be highly empathetic.", url: "https://pi.ai", badge: "free", audience: "Casual Users", useCase: "Personal Conversation", rating: "⭐⭐⭐⭐★" },
    { name: "AutoGPT", category: "AI Agents", status: "Free", desc: "An open-source autonomous agent framework that chains actions together to achieve goals.", url: "https://github.com", badge: "free", audience: "Developers", useCase: "Task Automation Blocks", rating: "⭐⭐⭐⭐★" },
    { name: "AgentGPT", category: "AI Agents", status: "Premium", desc: "Configure, build, and deploy autonomous AI agents directly inside your web browser.", url: "https://agentgpt.rework.ai", badge: "premium", audience: "Tech Enthusiasts", useCase: "Browser-based Automation", rating: "⭐⭐⭐⭐★" },
    { name: "Drift", category: "AI Chatbots", status: "Premium", desc: "Conversational software designed to automate customer interactions for businesses.", url: "https://drift.com", badge: "premium", audience: "Businesses", useCase: "Sales & Lead Generation", rating: "⭐⭐⭐⭐★" },
    { name: "Botsify", category: "AI Chatbots", status: "Premium", desc: "A comprehensive platform to build automated chatbots for websites and social media channels.", url: "https://botsify.com", badge: "premium", audience: "Store Owners", useCase: "Customer Support Automation", rating: "⭐⭐⭐★★" },

    // --- AI PRESENTATION & SLIDES ---
    { name: "Gamma App", category: "AI Presentation", status: "Free", desc: "Generates fully stylized pitch decks, documents, and web pages from simple prompts.", url: "https://gamma.app", badge: "free", audience: "Students & Speakers", useCase: "Rapid Slide Generation", rating: "⭐⭐⭐⭐⭐" },
    { name: "Beautiful.ai", category: "AI Presentation", status: "Premium", desc: "Smart presentation software applying structural design layout rules to user bullet points.", url: "https://beautiful.ai", badge: "premium", audience: "Professionals", useCase: "Polished Corporate Decks", rating: "⭐⭐⭐⭐★" },
    { name: "Pitch", category: "AI Presentation", status: "Premium", desc: "Collaborative presentation platform blending template sets with fast AI slide generation.", url: "https://pitch.com", badge: "premium", audience: "Teams", useCase: "Collaborative Designing", rating: "⭐⭐⭐⭐★" },
    { name: "Plus AI", category: "AI Presentation", status: "Premium", desc: "A smart extension that builds and edits presentation slides inside Google Slides.", url: "https://plusdocs.com", badge: "premium", audience: "Google Workspace", useCase: "Google Slides Extension", rating: "⭐⭐⭐⭐★" },
    { name: "PopAI", category: "AI Presentation", status: "Premium", desc: "An AI workspace that instantly builds presentation outlines and slides from document files.", url: "https://popai.pro", badge: "premium", audience: "Researchers", useCase: "PDF to Slide Conversion", rating: "⭐⭐⭐⭐★" },
    { name: "Presentation.AI", category: "AI Presentation", status: "Premium", desc: "An enterprise tool designed to build gorgeous, on-brand decks from mere text inputs.", url: "https://presentation.ai", badge: "premium", audience: "Enterprises", useCase: "On-brand Pitch Formats", rating: "⭐⭐⭐★★" },
    { name: "Slidesgo", category: "AI Presentation", status: "Premium", desc: "A massive theme catalog featuring a built-in AI presentation generator for slides.", url: "https://slidesgo.com", badge: "premium", audience: "Educators", useCase: "Template-driven Slides", rating: "⭐⭐⭐⭐★" },
    { name: "Tome", category: "AI Presentation", status: "Premium", desc: "A fluid storytelling canvas that generates multimedia narrative presentations rapidly.", url: "https://tome.app", badge: "premium", audience: "Storytellers", useCase: "Interactive Visual Layouts", rating: "⭐⭐⭐⭐★" },
    { name: "Decktopus", category: "AI Presentation", status: "Premium", desc: "An online presentation maker that matches slide styles perfectly to target audiences.", url: "https://decktopus.com", badge: "premium", audience: "Marketers", useCase: "Targeted Pitch Layouts", rating: "⭐⭐⭐⭐★" },

    // --- AI CODING & APP BUILDING ---
    { name: "Cursor AI", category: "AI Coding Assistance", status: "Premium", desc: "Advanced VS Code fork featuring deeply conversational inline codebase editing.", url: "https://cursor.sh", badge: "premium", audience: "Software Engineers", useCase: "Full-stack Coding Help", rating: "⭐⭐⭐⭐⭐" },
    { name: "GitHub Copilot", category: "AI Coding Assistance", status: "Premium", desc: "Ubiquitous cloud autocomplete plugin suggesting clean code lines natively inside your IDE.", url: "https://github.com", badge: "premium", audience: "Developers", useCase: "Contextual Autocomplete", rating: "⭐⭐⭐⭐⭐" },
    { name: "Replit Agent", category: "AI Coding Assistance", status: "Premium", desc: "Interactive development environment that structures full software stacks from text inputs.", url: "https://replit.com", badge: "premium", audience: "Beginner Devs", useCase: "Rapid Deployment Prompts", rating: "⭐⭐⭐⭐★" },
    { name: "Lovable", category: "AI App Building", status: "Premium", desc: "Full-stack application development tool compiling live operational programs using text inputs.", url: "https://lovable.dev", badge: "premium", audience: "No-Code Founders", useCase: "Building Web MVPs", rating: "⭐⭐⭐⭐⭐" },
    { name: "Bolt.new", category: "AI App Building", status: "Premium", desc: "In-browser sandboxed runtime yielding full-stack web builds without configuration pains.", url: "https://bolt.new", badge: "premium", audience: "Front-end Devs", useCase: "Full-stack Web Runs", rating: "⭐⭐⭐⭐⭐" },
    { name: "AskCodi", category: "AI Coding Assistance", status: "Premium", desc: "A complete developer assistant built to aid with syntax generation, testing, and documentation.", url: "https://askcodi.com", badge: "premium", audience: "Students", useCase: "Code Syntax Explanations", rating: "⭐⭐⭐⭐★" },
    { name: "Codiga", category: "AI Coding Assistance", status: "Free", desc: "A smart code analysis engine offering customizable real-time static code reviews.", url: "https://codiga.io", badge: "free", audience: "Code Reviewers", useCase: "Static Code Inspection", rating: "⭐⭐⭐★★" },
    { name: "Tabnine", category: "AI Coding Assistance", status: "Premium", desc: "A secure, private local AI assistant focused on contextual code completion.", url: "https://tabnine.com", badge: "premium", audience: "Enterprise Teams", useCase: "Local & Private Autocomplete", rating: "⭐⭐⭐⭐★" },
    { name: "CodiumAI", category: "AI Coding Assistance", status: "Premium", desc: "Generates smart test suites, code analysis, and code explanation blocks for developers.", url: "https://codium.ai", badge: "premium", audience: "QA & Developers", useCase: "Automated Unit Testing", rating: "⭐⭐⭐⭐★" },
    { name: "Million.dev", category: "AI App Building", status: "Free", desc: "Optimizes front-end React codebases to run significantly faster automatically.", url: "https://million.dev", badge: "free", audience: "React Developers", useCase: "Speed Optimization", rating: "⭐⭐⭐⭐★" },

    // --- AI IMAGE GENERATION & DESIGN ---
    { name: "Midjourney", category: "AI Image Generation", status: "Premium", desc: "State-of-the-art cinematic image generation framework operated natively inside Discord servers.", url: "https://midjourney.com", badge: "premium", audience: "Digital Artists", useCase: "High-end Concept Art", rating: "⭐⭐⭐⭐⭐" },
    { name: "DALL-E 3", category: "AI Image Generation", status: "Premium", desc: "OpenAI's precise text-to-image pipeline converting descriptive prompts inside ChatGPT.", url: "https://openai.com", badge: "premium", audience: "Content Creators", useCase: "Detailed Vector Prompts", rating: "⭐⭐⭐⭐⭐" },
    { name: "Leonardo AI", category: "AI Image Generation", status: "Premium", desc: "High-grade artistic production canvas loaded with style tuning models.", url: "https://leonardo.ai", badge: "premium", audience: "Game Designers", useCase: "Asset Style Generation", rating: "⭐⭐⭐⭐★" },
    { name: "Krea AI", category: "AI Image Generation", status: "Premium", desc: "A specialized canvas tool providing real-time image generation and upscaling features.", url: "https://krea.ai", badge: "premium", audience: "Designers", useCase: "Real-time Sketch Rendering", rating: "⭐⭐⭐⭐★" },
    { name: "Adobe Firefly", category: "AI Image Generation", status: "Premium", desc: "Adobe's commercial-safe image generation model integrated into standard creative platforms.", url: "https://firefly.adobe.com", badge: "premium", audience: "Businesses", useCase: "Commercial-safe Graphics", rating: "⭐⭐⭐⭐★" },
    { name: "FLUX.1", category: "AI Image Generation", status: "Free", desc: "An open-weights image model creating highly accurate text rendering within visuals.", url: "https://blackforestlabs.ai", badge: "free", audience: "Pro Prompters", useCase: "Flawless Image Text", rating: "⭐⭐⭐⭐⭐" },
    { name: "Ideogram", category: "AI Image Generation", status: "Premium", desc: "Excellent typography image generator designed to overlay highly realistic text on images.", url: "https://ideogram.ai", badge: "premium", audience: "Typographers", useCase: "Logo & Sign Layouts", rating: "⭐⭐⭐⭐★" },
    { name: "Stable Diffusion", category: "AI Image Generation", status: "Free", desc: "An open-source foundational image generation engine built for local machine customization.", url: "https://stability.ai", badge: "free", audience: "Power Users", useCase: "Local Model Training", rating: "⭐⭐⭐⭐⭐" },
    { name: "Canva AI", category: "AI Graphic Design", status: "Premium", desc: "Integrated smart tools enabling magical layouts, image extensions, and canvas edits.", url: "https://canva.com", badge: "premium", audience: "Marketers", useCase: "Social Templates Fast", rating: "⭐⭐⭐⭐★" },
    { name: "AutoDraw", category: "AI Graphic Design", status: "Free", desc: "Google canvas pairing machine learning with custom artist icons to fix messy doodles.", url: "https://autodraw.com", badge: "free", audience: "Casual Sketchers", useCase: "Doodle Transformation", rating: "⭐⭐⭐★★" },
    { name: "Microsoft Designer", category: "AI Graphic Design", status: "Free", desc: "Cloud design studio using prompts to spin up customized social media graphics.", url: "https://designer.microsoft.com", badge: "free", audience: "Social Managers", useCase: "Quick Ad Templates", rating: "⭐⭐⭐⭐★" },
    { name: "Fotor", category: "AI Graphic Design", status: "Premium", desc: "An online image editing tool loaded with AI portrait, enhancer, and art filters.", url: "https://fotor.com", badge: "premium", audience: "Photo Editors", useCase: "One-click Retouching", rating: "⭐⭐⭐⭐★" },
    { name: "PhotoRoom", category: "AI Graphic Design", status: "Premium", desc: "A high-precision mobile and web tool designed to swap e-commerce backgrounds.", url: "https://photoroom.com", badge: "premium", audience: "E-com Sellers", useCase: "Product Background Swaps", rating: "⭐⭐⭐⭐⭐" },
    { name: "Remove.bg", category: "AI Graphic Design", status: "Free", desc: "A single-purpose automated tool that clears image backgrounds in exactly one click.", url: "https://remove.bg", badge: "free", audience: "Everyone", useCase: "Background Stripping", rating: "⭐⭐⭐⭐★" },

    // --- AI VIDEO GENERATION ---
    { name: "CapCut AI", category: "AI Video Generation", status: "Free", desc: "An intuitive video editing tool featuring auto-captions, smart transitions, and templates.", url: "https://capcut.com", badge: "free", audience: "TikTok Creators", useCase: "Quick Mobile Edits", rating: "⭐⭐⭐⭐⭐" },
    { name: "Runway Gen-3", category: "AI Video Generation", status: "Premium", desc: "Hyper-realistic cinematic animation generator scaling clips from prompt strings.", url: "https://runwayml.com", badge: "premium", audience: "Filmmakers", useCase: "Cinematic B-Roll", rating: "⭐⭐⭐⭐⭐" },
    { name: "HeyGen", category: "AI Video Generation", status: "Premium", desc: "Creates talking human avatars with pristine voice matching for presentations.", url: "https://heygen.com", badge: "premium", audience: "Sales Teams", useCase: "Avatar Presentation Clips", rating: "⭐⭐⭐⭐⭐" },
    { name: "Veed.io", category: "AI Video Generation", status: "Premium", desc: "Complete visual creation platform rendering automatic subtitles and custom audio fixes.", url: "https://veed.io", badge: "premium", audience: "YouTubers", useCase: "Browser-based Editing", rating: "⭐⭐⭐⭐★" },
    { name: "Descript", category: "AI Video Generation", status: "Premium", desc: "Edits speech waveforms directly by altering your typed text transcript.", url: "https://descript.com", badge: "premium", audience: "Podcasters", useCase: "Text-based Audio Editing", rating: "⭐⭐⭐⭐⭐" },
    { name: "InVideo", category: "AI Video Generation", status: "Premium", desc: "Turns detailed text outlines into complete narrated videos loaded with stock footage.", url: "https://invideo.io", badge: "premium", audience: "Marketers", useCase: "Script-to-Video Outlines", rating: "⭐⭐⭐⭐★" },
    { name: "Pictory AI", category: "AI Video Generation", status: "Premium", desc: "Extracts short, highly shareable social media video clips directly from long blog posts.", url: "https://pictory.ai", badge: "premium", audience: "Bloggers", useCase: "Blog-to-Shorts Content", rating: "⭐⭐⭐⭐★" },
    { name: "Synthesys", category: "AI Video Generation", status: "Premium", desc: "A corporate AI voiceover and virtual avatar generation system built for training videos.", url: "https://synthesys.io", badge: "premium", audience: "HR Managers", useCase: "Internal Training Clips", rating: "⭐⭐⭐★★" },
    { name: "Submagic", category: "AI Video Generation", status: "Premium", desc: "Generates highly engaging, colorful dynamic captions with automated emojis for short videos.", url: "https://submagic.co", badge: "premium", audience: "Shorts Editors", useCase: "Viral Dynamic Captions", rating: "⭐⭐⭐⭐⭐" },

    // --- AI WORKFLOW AUTOMATION & SPREADSHEETS ---
    { name: "Zapier AI", category: "AI Workflow Automation", status: "Premium", desc: "Links third-party applications securely via plain-text automated workflow requests.", url: "https://zapier.com", badge: "premium", audience: "Ops Managers", useCase: "App Integration Loops", rating: "⭐⭐⭐⭐⭐" },
    { name: "n8n", category: "AI Workflow Automation", status: "Free", desc: "Fair-code structural logic node layout matching systems together without strict data limits.", url: "https://n8n.io", badge: "free", audience: "Backend Devs", useCase: "Self-hosted Automations", rating: "⭐⭐⭐⭐★" },
    { name: "Make", category: "AI Workflow Automation", status: "Premium", desc: "Visual automation mapper that links software together using simple dragging systems.", url: "https://make.com", badge: "premium", audience: "Growth Hackers", useCase: "Visual API Workflows", rating: "⭐⭐⭐⭐★" },
    { name: "Formula Bot", category: "AI Workflow Automation", status: "Premium", desc: "Converts text formatting requirements into operational Excel and Sheets formulas.", url: "https://formulabot.com", badge: "premium", audience: "Data Analysts", useCase: "Text-to-Excel Formulas", rating: "⭐⭐⭐⭐★" },
    { name: "Gigasheet", category: "AI Workflow Automation", status: "Premium", desc: "A big-data spreadsheet tool capable of parsing millions of data rows without code.", url: "https://gigasheet.com", badge: "premium", audience: "Data Scientists", useCase: "Massive CSV Analysis", rating: "⭐⭐⭐⭐★" },
    { name: "Rows AI", category: "AI Workflow Automation", status: "Premium", desc: "A modern spreadsheet built to instantly connect to data sources and automate analysis.", url: "https://rows.com", badge: "premium", audience: "Finance Teams", useCase: "Live API Data Sheets", rating: "⭐⭐⭐⭐★" },

    // --- AI TOOLS FOR STUDENTS & KNOWLEDGE MANAGEMENT ---
    { name: "NotebookLM", category: "AI Tools for Students", status: "Free", desc: "Interactive study companion creating conversational audio out of custom data files.", url: "https://notebooklm.google", badge: "free", audience: "Students", useCase: "Turning PDFs into Podcasts", rating: "⭐⭐⭐⭐⭐" },
    { name: "Perplexity AI", category: "AI Tools for Students", status: "Free", desc: "Direct response crawler sourcing research articles to summarize search definitions.", url: "https://perplexity.ai", badge: "free", audience: "Students", useCase: "Cited Academic Research", rating: "⭐⭐⭐⭐⭐" },
    { name: "Grammarly AI", category: "AI Tools for Students", status: "Premium", desc: "An essential writing assistant that corrects grammar, detects tone, and rewrites text.", url: "https://grammarly.com", badge: "premium", audience: "Students & Writers", useCase: "Tone & Grammar Fixing", rating: "⭐⭐⭐⭐⭐" },
    { name: "Quillbot", category: "AI Tools for Students", status: "Premium", desc: "An advanced context-aware paraphrasing and sentence restructuring toolkit.", url: "https://quillbot.com", badge: "premium", audience: "Students", useCase: "Sentence Paraphrasing", rating: "⭐⭐⭐⭐⭐" },
    { name: "Obsidian AI", category: "AI Tools for Students", status: "Free", desc: "Local markdown note mapper linking connected thoughts into personal knowledge webs.", url: "https://obsidian.md", badge: "free", audience: "Researchers", useCase: "Second Brain Node Maps", rating: "⭐⭐⭐⭐★" },
    { name: "Fireflies.ai", category: "AI Tools for Students", status: "Premium", desc: "Auto-joining assistant transcribing video calls across standard workspace channels.", url: "https://fireflies.ai", badge: "premium", audience: "Project Managers", useCase: "Automated Meeting Minutes", rating: "⭐⭐⭐⭐⭐" }
];
// Pagination Controls
let currentPage = 1;
const itemsPerPage = 12; // Adjust this number to show more or fewer tools per page
// Core tracking filter runtime state variables
let currentCategory = 'All';
let currentPriceFilter = 'All';
let favoritesList = JSON.parse(localStorage.getItem('savedFavTools')) || [];

// Render the grid with heart icons and cascading entry animation styles
function displayTools(toolsList) {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    grid.innerHTML = ""; 

    if (toolsList.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No tools found matching that criteria.</p>`;
        return;
    }

    toolsList.forEach((tool, index) => {
        let logoUrl = "";
        try {
            logoUrl = `https://icons.duckduckgo.com/ip3/${new URL(tool.url).hostname}.ico`;
        } catch(e) {
            logoUrl = "";
        }
        
        const safeName = tool.name.replace(/'/g, "\\'");
        const animationDelay = (index * 0.04).toFixed(2);
        const isFav = favoritesList.includes(tool.name) ? 'active' : '';

        const cardHtml = `
            <div class="tool-card" onclick="setToolHash('${safeName}')" style="cursor: pointer; animation-delay: ${animationDelay}s; animation-fill-mode: forwards;">
                <button class="fav-btn ${isFav}" onclick="event.stopPropagation(); toggleFavorite('${safeName}')">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
                
                <span class="badge ${tool.status.toLowerCase()}">${tool.status}</span>

                <div class="title-container">
                    ${logoUrl ? `<img src="${logoUrl}" class="tool-logo" alt="${tool.name} logo" onerror="this.style.display='none'">` : ''}
                    <h3>${tool.name}</h3>
                </div>
                
                <p class="category">${tool.category}</p>
                <p class="description">${tool.desc}</p>
                
                <div style="border-top: 1px solid var(--border-color); padding-top: 10px; margin-bottom: 15px; font-size: 0.85rem;">
                    <p style="margin-bottom: 4px; color: var(--text-muted);"><strong style="color: var(--text-main);">Target User:</strong> ${tool.audience}</p>
                    <p style="margin-bottom: 4px; color: var(--text-muted);"><strong style="color: var(--text-main);">Best For:</strong> ${tool.useCase}</p>
                    <p style="color: var(--text-muted);"><strong style="color: var(--text-main);">Rating:</strong> <span style="color: #ffb703;">${tool.rating}</span></p>
                </div>

                <span class="visit-btn">View Full Details</span>
                <button class="share-btn" onclick="event.stopPropagation(); copyToolLink('${tool.url}', this)" title="Copy Link">
    🔗 Share
</button>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}
// Function to copy tool URL to clipboard with visual feedback
function copyToolLink(url, buttonElement) {
    navigator.clipboard.writeText(url).then(() => {
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = "✅ Copied!";
        buttonElement.style.background = "#28a745";
        buttonElement.style.color = "#fff";

        setTimeout(() => {
            buttonElement.innerHTML = originalText;
            buttonElement.style.background = "";
            buttonElement.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
}
// Scroll smoothly back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Back to Top button on scroll
window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (btn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
};

// Toggling items inside LocalStorage cache lists
function toggleFavorite(toolName) {
    const idx = favoritesList.indexOf(toolName);
    if (idx > -1) {
        favoritesList.splice(idx, 1);
    } else {
        favoritesList.push(toolName);
    }
    localStorage.setItem('savedFavTools', JSON.stringify(favoritesList));
    applyFiltersAndSorting();
}

// Favorite filter layout switch controller
function toggleFavoritesFilter() {
    if (currentPriceFilter === 'Favorites') {
        currentPriceFilter = 'All';
    } else {
        currentPriceFilter = 'Favorites';
    }

    document.querySelectorAll('.price-btn').forEach(btn => btn.classList.remove('active'));
    if (currentPriceFilter === 'All') document.getElementById('price-all').classList.add('active');
    if (currentPriceFilter === 'Favorites') document.getElementById('price-fav').classList.add('active');

    applyFiltersAndSorting();
}

function filterByPrice(priceTier) {
    currentPriceFilter = priceTier;
    document.querySelectorAll('.price-btn').forEach(btn => btn.classList.remove('active'));
    if (priceTier === 'All') document.getElementById('price-all').classList.add('active');
    if (priceTier === 'Free') document.getElementById('price-free').classList.add('active');
    if (priceTier === 'Premium') document.getElementById('price-premium').classList.add('active');

    applyFiltersAndSorting();
}

function filterByCategory(categoryName) {
    currentPage = 1;
    currentCategory = categoryName;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if(btn.innerText.toLowerCase().includes(categoryName.toLowerCase().replace('ai ', '')) || (categoryName === 'All' && btn.innerText === 'All Tools')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    applyFiltersAndSorting();
}

function filterTools() { 
    currentPage = 1; 
    applyFiltersAndSorting(); 
}
function filterTools() { applyFiltersAndSorting(); }
function handleSorting() { applyFiltersAndSorting(); }

// Integrated evaluation pipeline
function applyFiltersAndSorting() {
    const searchInput = document.getElementById('searchBar');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let filtered = aiTools.filter(tool => {
        const matchesSearch = !query || 
            tool.name.toLowerCase().includes(query) || 
            tool.category.toLowerCase().includes(query) || 
            tool.desc.toLowerCase().includes(query) || 
            tool.useCase.toLowerCase().includes(query);

        const matchesCategory = (currentCategory === 'All') || tool.category === currentCategory;

        let matchesPrice = true;
        if (currentPriceFilter === 'Free') {
            matchesPrice = (tool.status === 'Free');
        } else if (currentPriceFilter === 'Premium') {
            matchesPrice = (tool.status === 'Premium');
        } else if (currentPriceFilter === 'Favorites') {
            matchesPrice = favoritesList.includes(tool.name);
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    
    if (sortValue === 'alpha') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'rating') {
        filtered.sort((a, b) => {
            const ratingA = a.rating ? a.rating.toString().split('⭐').length : 0;
            const ratingB = b.rating ? b.rating.toString().split('⭐').length : 0;
            return ratingB - ratingA;
        });
    }

    // Pagination Slice
    const visibleTools = filtered.slice(0, currentPage * itemsPerPage);
    displayTools(visibleTools);

    // Toggle "Load More" button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (visibleTools.length < filtered.length) {
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    updateResultsCounter(visibleTools.length, filtered.length);
}

// Function to load the next page of tools
function loadNextPage() {
    currentPage++;
    applyFiltersAndSorting();
}

// Routing Management Window Layer
function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const toolName = decodeURIComponent(hash);
        openDetailPage(toolName);
    } else {
        const overlay = document.getElementById('toolDetailPage');
        if (overlay) {
            overlay.classList.remove('open');
            document.body.style.overflow = "auto";
        }
    }
}

function setToolHash(toolName) { window.location.hash = encodeURIComponent(toolName); }
function closeDetailPage() { window.location.hash = ""; }

function openDetailPage(toolName) {
    const tool = aiTools.find(t => t.name === toolName);
    if (!tool) return;

    const overlay = document.getElementById('toolDetailPage');
    if (!overlay) return;

    let logoUrl = "";
    try {
        logoUrl = `https://icons.duckduckgo.com/ip3/${new URL(tool.url).hostname}.ico`;
    } catch(e) {
        logoUrl = "";
    }

    const headerEl = overlay.querySelector('.detail-header');
    if (headerEl) {
        headerEl.innerHTML = `
            ${logoUrl ? `<img src="${logoUrl}" alt="${tool.name} logo">` : ''}
            <div>
                <h2>${tool.name}</h2>
                <span style="color: var(--brand-accent); font-weight: 700;">${tool.category} &bull; ${tool.status}</span>
            </div>
        `;
    }

    const descEl = document.getElementById('detailLongDesc');
    if (descEl) descEl.innerText = tool.desc;

    const linkEl = document.getElementById('detailVisitLink');
    if (linkEl) linkEl.href = tool.url;

    const guideEl = document.getElementById('detailGuide');
    if (guideEl) {
        guideEl.innerHTML = `
            <li>Navigate to the official operational dashboard portal at <a href="${tool.url}" target="_blank" style="color: var(--brand-accent); font-weight: bold;">${tool.name} Website &rarr;</a></li>
            <li>Review targeted infrastructure systems mapped directly matching your current active ${tool.useCase} production specifications.</li>
            <li>Input strings or drop production files to complete configuration processing steps.</li>
        `;
    }

    overlay.classList.add('open');
    document.body.style.overflow = "hidden";
}

function toggleMobileMenu() { document.getElementById('navMenu').classList.toggle('open'); }

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('themeState', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('themeState', 'dark');
    }
}

// Submission Modal Controls
function openSubmitModal() {
    document.getElementById('submitModal').classList.add('open');
    document.body.style.overflow = "hidden";
}

function closeSubmitModal() {
    document.getElementById('submitModal').classList.remove('open');
    if (!document.getElementById('toolDetailPage').classList.contains('open')) {
        document.body.style.overflow = "auto";
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('modalToolName').value;
    alert(`Success! "${name}" has been submitted to our curation queue. Thank you for your contribution!`);
    document.getElementById('toolSubmissionForm').reset();
    closeSubmitModal();
}

// Analytics Metrics Calculator Updates
function calculateDatabaseStats() {
    const total = aiTools.length;
    const freeCount = aiTools.filter(t => t.status === 'Free').length;
    const premiumCount = aiTools.filter(t => t.status === 'Premium').length;
    
    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-free').innerText = freeCount;
    document.getElementById('stat-premium').innerText = premiumCount;
}

// Live Counter Indicators Text
function updateResultsCounter(visibleCount, totalCount) {
    const counterEl = document.getElementById('resultsCounter');
    if (!counterEl) return;
    if (visibleCount === totalCount) {
        counterEl.innerHTML = `Showing all <strong>${totalCount}</strong> curated AI tools inside the catalog system database stack.`;
    } else {
        counterEl.innerHTML = `Filter Match Active: Displaying <strong>${visibleCount}</strong> out of <strong>${totalCount}</strong> total systems matching selection metrics.`;
    }
}

// App Initialization Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
    displayTools(aiTools);
    calculateDatabaseStats();
    applyFiltersAndSorting();
    
    handleRouting();
    window.addEventListener('hashchange', handleRouting);

    if (localStorage.getItem('themeState') === 'light') {
        document.body.classList.replace('dark-theme', 'light-theme');
    }
});
// Open/Close Footer Modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
// Filter tools by specific category directly from footer links
function filterByCategory(categoryName) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = categoryName;
        // Trigger input event to update results grid
        searchInput.dispatchEvent(new Event('input'));
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Filter top rated tools from footer link
function filterByTopRated() {
    if (typeof currentPriceFilter !== 'undefined') {
        currentPriceFilter = 'All';
    }
    applyFiltersAndSorting();
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Notification for upcoming resources
function handleFooterAction(actionType) {
    alert("🚀 This feature/resource is coming soon in the next SmartAI update!");
}