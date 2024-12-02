const videos = [
    {
        title: "MrBeast and Cristiano Ronaldo",
        thumbnail: "https://www.tubefilter.com/wp-content/uploads/2024/11/mrbeast-cristiano-ronaldo.jpg",
        url: "https://www.youtube.com/watch?v=aDF_ESN80r8"
    },
    {
        title: "Pokémon Ultimate Journeys | एपिसोड 13",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRow6hO_BwKZG2A5i8n2vsCaN-Ebaljw2BQ&s",
        url: "https://www.youtube.com/watch?v=xMoobqGczN4"
    },
    {
        title: "Nitish Rajput Unfiltered - Pyaar, Hate, Travel Aur Mature Zindagi ",
        thumbnail: "https://i.ytimg.com/vi/AXRLg-Ow3cw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDs4-ZU-XnmYqwkRz9TMDL8er4Tig",
        url: "https://www.youtube.com/watch?v=AXRLg-Ow3cw"
    },
    {
        title: "Python Tutorial for Beginners - Full Course (with Notes & Practice Questions)",
        thumbnail: "https://i.ytimg.com/vi/KrBnRcpWGEI/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=ERCMXc8x7mc"
    },
    {
        title: "Pushpa 2 - The Rule Trailer (Hindi) | Allu Arjun | Sukumar | Rashmika Mandanna | Fahadh Faasil | DSP",
        thumbnail: "data:image/jpeg;base64,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",
        url: "https://www.youtube.com/watch?v=1kVK0MZlbI4"
    },
    {
        title: "Bhide Ki Nayi Car! I FULL MOVIE | Part 3 | Taarak Mehta Ka Ooltah Chashmah Ep 3535 to 3537",
        thumbnail: "https://i.ytimg.com/vi/7Vhc9PlVq1g/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=7Vhc9PlVq1g"
    },
    {
        title: "DAARU PARTY | Jaspreet Singh Standup Comedy",
        thumbnail: "https://i.ytimg.com/vi/lDtJtkBOBj0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=lDtJtkBOBj0"
    },
    {
        title: "Hostel - Stand Up Comedy ft. Anubhav Singh Bassi",
        thumbnail: "https://i.ytimg.com/vi/Tqsz6fjvhZM/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Tqsz6fjvhZM"
    },
    {
        title: "Harsh & Bassi Unleashed | Crowd Work | Standup Comedy",
        thumbnail: "https://i.ytimg.com/an_webp/dytUxaBbrRA/mqdefault_6s.webp?du=3000&sqp=CKDet7oG&rs=AOn4CLC9KMM_MT65nIlVMxuKluTjbIrGLw",
        url: "https://www.youtube.com/watch?v=dytUxaBbrRA"
    },
    {
        title: "Baney Desi Heart Ke Agents? | Heart of Stone |",
        thumbnail: "https://i.ytimg.com/vi/YIECFZb1IxQ/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=YIECFZb1IxQ"
    },
    {
        title: "INDIA'S GOT LATENT | EP 09",
        thumbnail: "https://i.ytimg.com/vi/ILu4LcipWI0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=ILu4LcipWI0"
    },
    {
        title: "Daaru With Dad | Harsh Beniwal",
        thumbnail: "https://i.ytimg.com/vi/o6QbyunET80/sddefault.jpg",
        url: "https://www.youtube.com/watch?v=o6QbyunET80"
    },
];

function displayVideos(videoArray) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    videoArray.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <a href="${video.url}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-title">${video.title}</div>
            </a>
        `;
        videoContainer.appendChild(videoElement);
    });
}

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    displayVideos(filteredVideos);
});

// Initial display of videos
displayVideos(videos);