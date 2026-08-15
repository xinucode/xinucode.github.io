const stories = [

    {
        title: "Hell is Open for Business",
        description:
            "Comedic thriller set in an alternate universe about a 2000s-era corporate accountant desperate to cover up her Crimes™.",
			
		magasine: "Hell Itself",

		date: "August 14, 2026",

        publishedUrl: "https://hellitself.com/hell-is-open-for-business/",

        pdfs: [
            // {
                // name: "PDF",
                // url: "pdfs/the-second-story.pdf"
            // }
        ]
    },
	
    {
        title: "Death Date: N/A",
        description:
            "Lori struggles with life as a Necroignorancer.",
			
		magasine: "Roi Fainéant Press",

        publishedUrl: "https://roifaineantarchive.wixsite.com/rf-arc-hive/post/death-date-n-a-by-sarah-skinner",
		
		date: "July 21, 2024",

        pdfs: [
            {
                name: "PDF",
                url: "pdfs/death_date_na_v2.5.pdf"
            },
            {
                name: "Booklet",
                url: "pdfs/Death Date NA - Booklet.pdf"
            }
        ]
    }

    // Add additional stories here
];


function displayStories() {
    const storiesList = document.getElementById("stories-list");

    stories.forEach(story => {

        // Create the story container
        const storyElement = document.createElement("article");
        storyElement.classList.add("story");

        // Title
        const title = document.createElement("h2");
        title.textContent = story.title;
		
		//Published site
        const magasine = document.createElement("h3");
        magasine.textContent = story.magasine + " · ";
		
		const date = document.createElement("i");
		date.textContent = story.date;
		magasine.appendChild(date);

        // Description
        const description = document.createElement("p");
        description.textContent = story.description;

        // Links container
        const links = document.createElement("div");
        links.classList.add("story-links");

        // Published story link
        const publishedLink = document.createElement("a");
        publishedLink.href = story.publishedUrl;
        publishedLink.textContent = "Read Online";
        publishedLink.target = "_blank";
        publishedLink.rel = "noopener noreferrer";

        links.appendChild(publishedLink);

        // PDF links
        story.pdfs.forEach(pdf => {
            const pdfLink = document.createElement("a");

            pdfLink.href = pdf.url;
            pdfLink.textContent = pdf.name;
            pdfLink.target = "_blank";
            pdfLink.rel = "noopener noreferrer";

            links.appendChild(pdfLink);
        });

        // Assemble story
        storyElement.appendChild(title);
        storyElement.appendChild(magasine);
        storyElement.appendChild(description);
        storyElement.appendChild(links);

        // Add story to page
        storiesList.appendChild(storyElement);
    });
}


// Display the stories when the page loads
displayStories();