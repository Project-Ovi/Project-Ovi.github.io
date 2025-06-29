const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Add a random person to each placeholder image
async function updateImagesWithDelay() {
  const images = document.querySelectorAll<HTMLImageElement>('.place-img');
  for (let i = 0; i < images.length; i++) {
    // Add a unique query string to bust the cache
    const uniqueUrl = `https://thispersondoesnotexist.com/?rand=${Date.now()}-${i}`;
    images[i].src = uniqueUrl;
    await delay(200); // 200ms delay
  }
}

(window as any).scroll100 = () => {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth',
  });
};

updateImagesWithDelay();
