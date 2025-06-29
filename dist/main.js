"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// Add a random person to each placeholder image
function updateImagesWithDelay() {
    return __awaiter(this, void 0, void 0, function* () {
        const images = document.querySelectorAll('.place-img');
        for (let i = 0; i < images.length; i++) {
            // Add a unique query string to bust the cache
            const uniqueUrl = `https://thispersondoesnotexist.com/?rand=${Date.now()}-${i}`;
            images[i].src = uniqueUrl;
            yield delay(200); // 200ms delay
        }
    });
}
window.scroll100 = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
    });
};
updateImagesWithDelay();
