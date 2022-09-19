import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs'



export default class ScrollService{
    static scrollHandler = new ScrollService();
    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()


    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);

    }
    scrollToHireMe = () => {
        let contactMeSCreen = document.getElementById("Contact Me")
        if (!contactMeSCreen) return;
        contactMeSCreen.scrollIntoView({behavior: "smooth"})

    }
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if (!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})

    }
    isElementInView = (elem, type) =>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible =  elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type){
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible

            default:
                return false


        }
    }
    
}






