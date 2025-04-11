let newsItems = document.querySelectorAll(".news-title.newsentry.unread");
newsItems.forEach((item) => {
    let link = item.querySelector("a");
    window.open(link.href, "_blank");
});
