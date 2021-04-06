import { CLEAR_CURRENT_PUBLICATION, CURRENT_PUBLICATION } from "../constants/action-types"

export const setCurrentPublication = (currentPublication) => {
    return {
        type: CURRENT_PUBLICATION,
        currentPublication: currentPublication
        // id: id,
        // authorName: authorName,
        // authorImg: authorImg,
        // authorHref: authorHref,
        // time: time,
        // fullImg: fullImg,
        // src: src,
        // placeholder: placeholder,
        // imgHref: imgHref,
        // alt: alt,
        // likes: totalLikes,
        // likedByUser: likeState
    }
}

export const clearCcurrentPublication = () => {
    return { type: CLEAR_CURRENT_PUBLICATION }
}